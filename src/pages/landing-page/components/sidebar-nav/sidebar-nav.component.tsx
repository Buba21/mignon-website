import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SidebarNavComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const { t } = useTranslation();

    const navItems = [
        { label: t('NAVBAR.HOME'), path: "/" },
        { label: t('NAVBAR.MENU'), path: "/menu" },
        { label: t('NAVBAR.CONTACTS'), path: "/contacts" },
    ];

    return (
        <div className="sm:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="text-white p-2 cursor-pointer"
                aria-label="Open menu"
            >
                <Menu size={28} />
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 left-0 h-full w-64 z-50 flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                style={{ backgroundColor: "var(--mignon-color-primary-light)", borderRight: "1px solid rgba(255,255,255,0.15)" }}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white cursor-pointer"
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>
                </div>

                <nav className="flex flex-col gap-2 px-6 pt-4">
                    {navItems.map(({ label, path }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setIsOpen(false)}
                            className={`text-white no-underline py-3 text-xl border-b cursor-pointer ${pathname === path ? "border-(--mignon-color-secondary) text-(--mignon-color-secondary)" : "border-transparent"}`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
