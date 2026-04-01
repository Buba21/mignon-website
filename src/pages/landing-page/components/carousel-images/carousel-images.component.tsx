import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const imagesModules = import.meta.glob('@/assets/images/*.{jpg,png,jpeg,gif,svg}', { eager: false, query: '?url', import: 'default' })

export default function CarouselImagesComponent() {
  const [images, setImages] = useState<string[]>([])
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    const loadImages = async () => {
      const urls = await Promise.all(Object.values(imagesModules).map((fn) => (fn as () => Promise<string>)()))
      setImages(urls)
    }
    loadImages()
  }, [])

  useEffect(() => {
    if (!api) return
    const timer = setInterval(() => api.scrollNext(), 5000)
    return () => clearInterval(timer)
  }, [api])

  return (
    <Carousel opts={{ loop: true }} setApi={setApi} className="w-full lg:w-[80%] lg:mx-auto">
      <CarouselContent>
        {images.map((src, i) => (
          <CarouselItem key={i}>
            <img src={src} alt={`Espaço ${i + 1}`} className="w-full object-cover aspect-video" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
