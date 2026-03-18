import { Link, useLocation } from "react-router-dom"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import logo from '@/assets/icons/LOGO_NOVO_MIGNON.svg'
import { Button } from "@/components/ui/button";

const navItems = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Contactos", path: "/contacts" },
];

export default function NavbarComponent() {
    const { pathname } = useLocation();

    return (
             <nav
            className="col-span-12 w-screen sticky top-0 z-50 flex items-center justify-between gap-12 px-8 py-4"
            style={{ backgroundColor: "var(--mignon-color-primary-light)", borderBottom: "1px solid rgba(255,255,255,0.15)" }}
        >
            <div>
                <img src={logo} alt="Mignon sports bar logo" style={{ width: "7rem" }} />
            </div>
            <div className="flex gap-12">
                {navItems.map(({ label, path }) => (
                <Link
                    key={path}
                    to={path}
                    className={`cursor-pointer pb-1 text-white no-underline ${pathname === path ? "border-b-2" : ""}`}
                    style={{ fontSize: "2.7rem", ...(pathname === path ? { borderColor: "var(--mignon-color-secondary)" } : {}) }}
                >
                    {label}
                </Link>
            ))}
            </div>
            <div>
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="mignon" className="cursor-pointer" style={{ backgroundColor: "var(--mignon-color-primary-light)", border: "1px solid var(--mignon-color-primary)" }}>Select Language</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <span className="fi fi-pt" />
                        Portugal
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span className="fi fi-gb" />
                        English
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span className="fi fi-de" />
                        German
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span className="fi fi-fr" />
                        French
                    </DropdownMenuItem>
                </DropdownMenuContent>
               </DropdownMenu>
            </div>
            </nav> 
    )
}