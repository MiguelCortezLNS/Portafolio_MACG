function Experiencia() {
  return (
    <section
      id="experiencia"
      className="py-20 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14 text-center relative">
          Experiencia
          <span className="block w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="relative border-l-4 border-indigo-600 ml-4">

          {[
            {
              title: "Recepcionista – Xtreme Gym",
              date: "Mayo 2025 – Diciembre 2025",
              points: [
                "Atención al cliente y gestión de membresías.",
                "Soporte informativo sobre servicios y promociones."
              ]
            },
            {
              title: "Desarrollador de Aplicación Móvil – UASLP",
              date: "UniVentas · Octubre 2024 – Abril 2025",
              points: [
                "Diseño UI/UX en Figma y desarrollo en React Native.",
                "Implementación de frontend y backend.",
                "Plataforma para impulsar ventas entre estudiantes."
              ]
            },
            {
              title: "Staff de Soporte Técnico – Congreso de Enfermería",
              date: "Marzo 2024",
              points: [
                "Soporte técnico en tiempo real durante conferencias.",
                "Resolución rápida de incidencias bajo presión."
              ]
            },
            {
              title: "Asistente de Biblioteca – CICTD",
              date: "Servicio Social · Agosto 2019 – Febrero 2020",
              points: [
                "Apoyo a estudiantes y gestión del sistema de préstamo.",
                "Mantenimiento y soporte básico a equipos."
              ]
            }
          ].map((job, index) => (
            <div key={index} className="mb-14 ml-8 group">

              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-4 ring-white"></span>

              <div className="bg-white p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-indigo-500">

                <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-2">
                  {job.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {job.date}
                </p>

                <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc list-inside">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experiencia;