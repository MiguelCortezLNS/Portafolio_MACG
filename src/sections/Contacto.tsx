export function Contacto() {
  return (
    <section id="contacto" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Contacto
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            ¿Tienes un proyecto en mente o te interesa trabajar conmigo? Estoy
            disponible para oportunidades laborales y colaboraciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                Información de contacto
              </h3>

              <div className="space-y-4 text-gray-600 text-sm md:text-base">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-indigo-600 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>444-299-4145</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-indigo-600 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="break-all">mickeycortez2002@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-indigo-600 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/miguel-alejandro-cortez-gutierrez-14b30226b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-purple-600 transition font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Actualmente me encuentro abierto a oportunidades como
                desarrollador frontend, diseñador UX/UI o full stack junior,
                donde pueda aportar valor y seguir creciendo profesionalmente.
              </p>
            </div>
          </div>
          <form
            action="https://formsubmit.co/b3753a4b85f72f6483642d017b4b48d6"
            method="POST"
            className="relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 space-y-8 transition-all duration-300 hover:shadow-indigo-200"
          >
            <input
              type="hidden"
              name="_subject"
              value="Nuevo mensaje desde tu portafolio"
            />
            <input type="hidden" name="_captcha" value="false" />

            <div className="absolute -top-1 left-0 w-full h-1 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-t-3xl"></div>

            {/* Nombre */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 
      focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 
      focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="correo@ejemplo.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 
      focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 
      focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 
      focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 
      focus:border-indigo-500 transition-all duration-200 resize-none"
              ></textarea>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 
    text-white font-semibold shadow-lg hover:shadow-xl 
    hover:-translate-y-1 transition-all duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
