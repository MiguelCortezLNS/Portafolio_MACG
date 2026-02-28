function Educacion() {
  return (
    <section
      id="educacion"
      className="py-20 bg-linear-to-b from-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14 text-center relative">
          Educación
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="relative border-l-4 border-blue-600 ml-4">

          <div className="mb-12 ml-8 group">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white"></span>

            <div className="bg-white p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-blue-500">
              
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Ingeniería en Computación
              </h3>

              <p className="text-blue-600 font-medium mb-2">
                Universidad Autónoma de San Luis Potosí
              </p>

              <p className="text-gray-500">
                2020 - Presente
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Formación enfocada en desarrollo de software, estructuras de datos,
                programación orientada a objetos, bases de datos y tecnologías web.
              </p>
            </div>
          </div>

          <div className="mb-12 ml-8 group">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white"></span>

            <div className="bg-white p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-blue-500">
              
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Bachillerato Tecnológico en Computación
              </h3>

              <p className="text-blue-600 font-medium mb-2">
                Instituto Salesiano Carlos Gómez
              </p>

              <p className="text-gray-500">
                2017 - 2020
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Formación técnica en fundamentos de programación,
                lógica computacional, mantenimiento de equipos y bases
                del desarrollo de software.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Educacion;