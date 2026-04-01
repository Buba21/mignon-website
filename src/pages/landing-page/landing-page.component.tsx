import { useTranslation } from "react-i18next";
import CarouselImagesComponent from "./components/carousel-images/carousel-images.component";

export default function LandingPageComponent() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section className="w-full px-8 py-16 text-center">
        <p className="text-white">{t('LANDING.INTRO_PLACEHOLDER')}</p>
      </section>

      <section className="w-full px-8 pb-20">
        <h2 className="text-3xl text-white font-medium mb-2">{t('LANDING.ESPACO')}</h2>
        <div className="w-10 h-[2px] bg-(--mignon-color-secondary) mb-6" />
        <CarouselImagesComponent />
      </section>
    </div>
  )
}
