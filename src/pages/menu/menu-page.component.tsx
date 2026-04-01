import { useState } from 'react';
import foods from '@/utils/foods.json';
import drinks from '@/utils/drinks.json';
import { useTranslation } from 'react-i18next';

type Tab = 'bebidas' | 'comidas';

export default function MenuPageComponent() {
    const [activeTab, setActiveTab] = useState<Tab>('bebidas');
    const { t } = useTranslation();

    const iconsMap = new Map<string, string>([
        ['TAP_BEER', '006-beer.png'],
        ['BOTTLE_BEER', '005-beer-bottle.png'],
        ['WINES', '013-wine-bottle.png'],
        ['VODKA', '008-vodka.png'],
        ['NEW_WHISKY', '007-whisky.png'],
        ['OLD_WHISKY', '007-whisky.png'],
        ['IRISH_WHISKY', '007-whisky.png'],
        ['GIN', '004-gin-tonic.png'],
        ['LICORS', '003-licor-de-oro.png'],
        ['BEVERAGES', '009-can.png'],
        ['FRENCH_FRIES', '012-french-fries.png'],
        ['HAMBURGERS', '002-burger.png'],
        ['NACHOS', '001-nachos.png'],
        ['PREGOS', '011-cheesesteak.png'],
        ['SANDWICHES', '010-sandwhich.png']
    ])

    const tabClass = (tab: Tab) =>
        `px-6 py-2 text-lg font-medium cursor-pointer border-b-2 transition-colors ${
            activeTab === tab
                ? 'border-(--mignon-color-secondary) text-white'
                : 'border-transparent text-(--mignon-card-muted) hover:text-white'
        }`

    const data = activeTab === 'bebidas' ? drinks : foods;
    const itemSection = activeTab === 'bebidas' ? 'DRINKS' : 'FOODS';

    return (
        <div>
            <div className='flex justify-center gap-8 mb-8 border-b border-(--mignon-card-border) w-full max-w-160 lg:max-w-184 mx-auto'>
                <button className={tabClass('bebidas')} onClick={() => setActiveTab('bebidas')}>{t('MENU.DRINKS')}</button>
                <button className={tabClass('comidas')} onClick={() => setActiveTab('comidas')}>{t('MENU.FOODS')}</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-160 lg:max-w-280 mb-16 mx-auto px-4'>
                {Object.entries(data).map(([key, category]) => (
                    <div key={key} className='bg-(--mignon-card-bg) border border-(--mignon-card-border) rounded-lg overflow-hidden'>
                        <div className='border-b border-(--mignon-card-border) p-4 lg:p-5 text-center'>
                            <p className='text-(--mignon-card-muted) text-[11px] lg:text-[12.5px] tracking-[0.15em] uppercase mb-2'>
                                MIGNON SPORTS BAR
                            </p>
                            <div className='flex items-center justify-center gap-2'>
                                <img src={`${import.meta.env.BASE_URL}icons/${iconsMap.get(key)}`} alt={t(`CATEGORIES.${key}`)} className='w-12 lg:w-[3.45rem]' />
                                <h2 className='text-white font-medium text-2xl lg:text-[1.725rem]'>{t(`CATEGORIES.${key}`)}</h2>
                            </div>
                            <div className='w-[40px] lg:w-[46px] h-[2px] bg-(--mignon-color-secondary) mt-2 mx-auto' />
                        </div>
                        <ul className='py-1 px-4 lg:px-5'>
                            {category.items.map((item) => (
                                <li key={item.name} className='flex justify-between py-1.5 lg:py-2 border-b border-(--mignon-card-separator) last:border-b-0'>
                                    <span className='text-(--mignon-card-text) lg:text-[1.035rem]'>{t(`${itemSection}.${item.name}`)}</span>
                                    <span className='text-(--mignon-color-secondary) font-medium lg:text-[1.035rem]'>{item.price.toFixed(2)} €</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
