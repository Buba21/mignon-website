import React from 'react'

interface LandingPageComponentProps {
  title: string
  description: string
  image: string
  link: string
}

export default function LandingPageComponent = ({ title, description, image, link }: LandingPageComponentProps) => {
  return (
    <div>
    <div>Nav</div>
    <div>Carrousel images</div>
    <div>Espacos</div>
    <div>Contactos</div>
    </div>
  )
}