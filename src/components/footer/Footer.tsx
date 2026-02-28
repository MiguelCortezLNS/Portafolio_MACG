function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 text-indigo-800 pt-16 pb-8">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Miguel Cortez
            </h3>
            <p className="mt-4 text-sm text-black-400 leading-relaxed">
              Ingeniero en Computación especializado en desarrollo web moderno,
              creando experiencias digitales funcionales y atractivas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-indigo-400 transition">Inicio</a></li>
              <li><a href="#sobre-mi" className="hover:text-indigo-400 transition">Sobre mí</a></li>
              <li><a href="#experiencia" className="hover:text-indigo-400 transition">Experiencia</a></li>
              <li><a href="#contacto" className="hover:text-indigo-400 transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
              Contacto
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-black-400">📞 444-299-4145</p>
              <p className="text-black-400 break-all">
                ✉️ mickeycortez2002@gmail.com
              </p>
              <a
                href="https://www.linkedin.com/in/miguel-alejandro-cortez-gutierrez-14b30226b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-indigo-500 hover:text-purple-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Miguel Alejandro Cortez Gutiérrez. 
          Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;