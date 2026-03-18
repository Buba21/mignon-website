import { SiInstagram, SiFacebook, SiZomato } from 'react-icons/si'



export default function FooterComponent() {


    return(
        <div
            className="col-span-12 w-screen flex gap-12 px-8 py-4 justify-center fixed bottom-0"
            style={{ backgroundColor: "var(--mignon-color-primary-light)", borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
            <SiFacebook size={24} />
            <a href='https://www.instagram.com/barmignon/' target='_blank'>
                 <SiInstagram  size={24}/>
            </a>
            <a href='https://www.dig-in.pt/r/8209743/bar-mignon-campo-de-ourique' target='_blank'>
                 <SiZomato size={24} />
            </a>
        </div>
    )
}