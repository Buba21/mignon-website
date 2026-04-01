import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './i18n/locales/pt.json';
import en from './i18n/locales/en.json';
import fr from './i18n/locales/fr.json';
import de from './i18n/locales/de.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'pt',
        fallbackLng: 'pt',
        resources: {
            pt: { translation: pt },
            en: { translation: en },
            fr: { translation: fr },
            de: { translation: de }
        }
    });

export default i18n;