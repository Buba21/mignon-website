import { useEffect, useState } from "react"
import { Card, CardContent } from "../../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel"

const imagesModules = import.meta.glob('../../../../assets/images/*.{jpg,png,jpeg,gif,svg}', { eager: false, query: '?url', import: 'default' })


export default function CarouselImagesComponent() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const loadImages = async () => {
      const urls = await Promise.all(Object.values(imagesModules).map((fn) => (fn as () => Promise<string>)()))
      setImages(urls)
    }
    loadImages()
  }, [])


  return (
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
      <CarouselContent>
        {images.map((src, i) => (
           <CarouselItem key={i} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3">
          <Card className="p-0">
            <CardContent className="p-0">
              <img src={src} alt={`Image ${i + 1}`} className="w-full h-full object-cover rounded-xl aspect-square" />
            </CardContent>
          </Card>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}