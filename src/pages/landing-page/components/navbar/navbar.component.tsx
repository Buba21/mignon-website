import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
const logo = `${import.meta.env.BASE_URL}icons/LOGO_NOVO_MIGNON.svg`
import { Button } from "@/components/ui/button";
import SidebarNavComponent from "../sidebar-nav/sidebar-nav.component";

export default function NavbarComponent() {
    const { pathname } = useLocation();
    const { t, i18n } = useTranslation();

    const languages = [
        { code: 'pt', flag: '🇵🇹', label: 'Português' },
        { code: 'en', flag: '🇬🇧', label: 'English' },
        { code: 'fr', flag: '🇫🇷', label: 'Français' },
        { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
    ];

    const navItems = [
        { label: t('NAVBAR.HOME'), path: "/" },
        { label: t('NAVBAR.MENU'), path: "/menu" },
        { label: t('NAVBAR.CONTACTS'), path: "/contacts" },
    ];

    return (
             <nav
            className="col-span-12 w-screen sticky top-0 z-50 flex items-center justify-between gap-12 px-8 py-4"
            style={{ backgroundColor: "var(--mignon-color-primary-light)", borderBottom: "1px solid rgba(255,255,255,0.15)" }}
        >
            <div className="flex items-center">
                <SidebarNavComponent />
                <div className="hidden sm:block">
                    <img src={logo} alt="Mignon sports bar logo" style={{ width: "7rem" }} />
                </div>
            </div>

            <div>
                <div className="sm:hidden">
                    <img src={logo} alt="Mignon sports bar logo" style={{ width: "7rem" }} />
                </div>
                <div className="hidden sm:flex gap-12">
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
            </div>

            <div>
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="mignon" className="cursor-pointer" style={{ backgroundColor: "var(--mignon-color-primary-light)", border: "1px solid var(--mignon-color-primary)" }}>
                        <span style={{ fontSize: '1.5rem' }}>{languages.find(l => l.code === i18n.language)?.flag ?? '🇵🇹'}</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {languages.map(({ code, flag, label }) => (
                        <DropdownMenuItem
                            key={code}
                            onClick={() => i18n.changeLanguage(code)}
                            className={i18n.language === code ? 'font-bold' : ''}
                        >
                            <span>{flag}</span>
                            {label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
               </DropdownMenu>
            </div>
            </nav>
    )
}
