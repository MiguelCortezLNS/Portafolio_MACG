function Experiencia() {
  return (
    <section id="experiencia" className="py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experiencia
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-2 md:gap-10">
          <div className="relative md:pl-0 pl-6">
            <div className="absolute -left-3 top-2 w-4 h-4 bg-indigo-400 rounded-full md:hidden"></div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-500">
                Recepcionista – Xtreme Gym
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Mayo 2025 – Diciembre 2025
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 leading-relaxed list-disc list-inside">
                <li>Atención al cliente y gestión de membresías.</li>
                <li>Soporte informativo sobre servicios y promociones.</li>
              </ul>
            </div>
          </div>

          <div className="mb-12 md:mb-0 relative md:pl-0 pl-6">
            <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-600 rounded-full md:hidden"></div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">
                Desarrollador de Aplicación Móvil – UASLP
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                UniVentas · Octubre 2024 – Abril 2025
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 leading-relaxed list-disc list-inside">
                <li>Diseño UI/UX en Figma y desarrollo en React Native.</li>
                <li>Implementación de frontend y backend de la aplicación.</li>
                <li>Plataforma para impulsar ventas entre estudiantes.</li>
              </ul>
            </div>
          </div>

          <div className="mb-12 md:mb-0 relative md:pl-0 pl-6">
            <div className="absolute -left-3 top-2 w-4 h-4 bg-purple-600 rounded-full md:hidden"></div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-purple-600">
                Staff de Soporte Técnico – Congreso de Enfermería
              </h3>
              <p className="text-sm text-gray-500 mt-1">Marzo 2024</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 leading-relaxed list-disc list-inside">
                <li>Soporte técnico en tiempo real durante conferencias.</li>
                <li>Resolución rápida de incidencias bajo presión.</li>
              </ul>
            </div>
          </div>

          <div className="mb-12 md:mb-0 relative md:pl-0 pl-6">
            <div className="absolute -left-3 top-2 w-4 h-4 bg-indigo-600 rounded-full md:hidden"></div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">
                Asistente de Biblioteca – CICTD
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Servicio Social · Agosto 2019 – Febrero 2020
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 leading-relaxed list-disc list-inside">
                <li>Apoyo a estudiantes y gestión del sistema de préstamo.</li>
                <li>Mantenimiento y soporte básico a equipos de cómputo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
