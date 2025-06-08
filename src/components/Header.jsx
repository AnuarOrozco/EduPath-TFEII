import React from "react";
import {
  HomeIcon,
  BookOpenIcon,
  MapIcon,
  CpuIcon,
  UserIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navItems = [
    { name: "Inicio", path: "/", icon: HomeIcon },
    { name: "Contenidos", path: "/contenidos", icon: BookOpenIcon },
    { name: "Roadmap", path: "/roadmap", icon: MapIcon },
    { name: "Simuladores", path: "/simuladores", icon: CpuIcon },
    { name: "Perfil", path: "/perfil", icon: UserIcon },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center items-center py-3">
          <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
            {navItems.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) => 
                  `flex flex-col items-center px-5 py-2 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-white shadow-sm text-blue-600' 
                      : 'hover:bg-white hover:shadow-sm text-gray-700'
                  }`
                }
                aria-label={name}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}