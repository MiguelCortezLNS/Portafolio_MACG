function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="py-20 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* TÍTULO */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        {/* CONTENIDO */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg md:text-xl sm:text-lg text-gray-700 leading-relaxed">
            Soy <span className="font-semibold text-indigo-600">Ingeniero en Computación </span> 
            con un enfoque sólido en desarrollo web moderno. Me especializo en 
            <span className="font-semibold"> React</span> y en la creación de interfaces 
            intuitivas, funcionales y visualmente atractivas, combinando principios de 
            <span className="font-semibold"> UX/UI</span> con buenas prácticas de desarrollo.
          </p>

          <p className="text-lg md:text-xl sm:text-lg text-gray-600 leading-relaxed">
            Disfruto transformar ideas en productos digitales reales. Tengo experiencia 
            construyendo aplicaciones Full Stack, integrando frontend dinámico con 
            backend estructurado y bases de datos, priorizando siempre rendimiento, 
            escalabilidad y código limpio.
          </p>

          <p className="text-lg md:text-xl sm:text-lg text-gray-600 leading-relaxed">
            Me considero una persona analítica, creativa y orientada a resultados. 
            Estoy en constante aprendizaje, explorando nuevas tecnologías y metodologías 
            que me permitan crecer profesionalmente y aportar valor en cada proyecto 
            en el que participo.
          </p>
        </div>

        {/* CARDS DE ENFOQUE */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Desarrollo Frontend
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Interfaces modernas, responsivas y optimizadas utilizando React, 
              Tailwind CSS y arquitectura basada en componentes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              Diseño UX/UI
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Enfoque centrado en el usuario, priorizando experiencia, claridad 
              visual y coherencia en cada detalle del diseño.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Backend & Lógica
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Construcción de APIs, manejo de bases de datos y lógica de negocio 
              para aplicaciones completas y funcionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;