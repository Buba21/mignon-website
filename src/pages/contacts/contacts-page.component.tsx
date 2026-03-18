import { APIProvider, Map, Marker, useMap } from "@vis.gl/react-google-maps";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useEffect } from "react";
import mapStyle from '@/utils/maps.json'

function MapStyle() {
  const map = useMap();

  useEffect(() => {
    if (!map) return
    map.setOptions({ styles: mapStyle})
  }, [map])
  
  return null;
}

export default function ContactsPageComponent() {
  const position = { lat: 38.718522, lng: -9.1650158 };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto px-8 py-20">
        <div className="flex-1">
           <h1 className="text-5xl border-b-[3px] border-(--mignon-color-secondary) pb-1 inline-block">Mignon Sports Bar</h1>
           <div className="flex gap-2 items-center pt-4">
            <MapPin size={16}/>
            <p className="font-normal">Rua Silva Carvalho N. 137B | 1250-151 Lisboa</p>
            </div>
           <div className="flex gap-2 items-center">
            <Phone size={16}/>
            <p className="font-normal">+351 213 880 098</p>
            </div>
           <div className="flex gap-2 items-center">
            <Mail size={16}/>
            <p className="font-normal">info@barmignon.com</p>
            </div>
           <div className="flex gap-2 items-center">
            <Clock size={16}/> 
            <p className="font-normal">Terça a Sexta - 17:00 - 02:00 Sexta, 
                Sábado e Vésperas de Feriado - 17:00 - 03:00</p>
        
           </div>
        </div>
        <div className="flex-1 rounded-xl overflow-hidden shadow-2xl">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={position}
          defaultZoom={15}
          mapTypeControl={false}
          className="w-full h-96"
        >
          <MapStyle />
          <Marker position={position} />
        </Map>
      </APIProvider>
        </div>
      
    </div>
  );
}
