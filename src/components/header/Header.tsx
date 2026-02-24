import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Educación", href: "#educacion" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="relative group">
          <p className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 transition-all duration-500 cursor-default">
            Miguel Cortez
          </p>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
        </div>

        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-gray-700 font-medium text-sm tracking-wide transition-all duration-300 hover:text-indigo-600 group"
            >
              <span className="relative z-10">{item.label}</span>
              {/* Efecto hover de fondo */}
              <div className="absolute inset-0 bg-linear-to-r from-indigo-50 to-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              {/* Línea inferior animada */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></div>
            </a>
          ))}
        </nav>

        {/* Botón de menú móvil moderno y animado */}
        <button
          className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 ${
            isOpen ? "bg-indigo-100" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative flex flex-col items-center justify-center">
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200/50">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-6 py-4 text-gray-700 font-medium hover:text-indigo-600 hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border-b border-gray-100/50 last:border-b-0 transform ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                <span>{item.label}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
