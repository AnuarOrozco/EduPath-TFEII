import React from "react";
import {
  HomeIcon,
  BookOpenIcon,
  MapIcon,
  CpuIcon,
  UserIcon,
} from "lucide-react";

export default function Header() {
  const navItems = [
    { name: "Inicio", href: "#inicio", icon: HomeIcon },
    { name: "Contenidos", href: "#contenidos", icon: BookOpenIcon },
    { name: "Roadmap", href: "#roadmap", icon: MapIcon },
    { name: "Simuladores", href: "#simuladores", icon: CpuIcon },
    { name: "Perfil", href: "#perfil", icon: UserIcon },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center items-center py-3">
          <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
            {navItems.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                className="flex flex-col items-center px-5 py-2 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200"
                aria-label={name}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">{name}</span>
                </div>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}