function Habilidades() {
  const colorClasses = {
    blue: {
      border: 'hover:border-blue-500',
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      hoverText: 'group-hover:text-blue-600'
    },
    green: {
      border: 'hover:border-green-500',
      bg: 'bg-green-500',
      text: 'text-green-600',
      hoverText: 'group-hover:text-green-600'
    },
    purple: {
      border: 'hover:border-purple-500',
      bg: 'bg-purple-500',
      text: 'text-purple-600',
      hoverText: 'group-hover:text-purple-600'
    },
    orange: {
      border: 'hover:border-orange-500',
      bg: 'bg-orange-500',
      text: 'text-orange-600',
      hoverText: 'group-hover:text-orange-600'
    },
    red: {
      border: 'hover:border-red-500',
      bg: 'bg-red-500',
      text: 'text-red-600',
      hoverText: 'group-hover:text-red-600'
    }
  };

  return (
    <section id="habilidades" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14 text-center relative inline-block w-full">
          Habilidades
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Grid principal */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Card reusable style */}
          {[
            {
              title: "Frontend",
              color: "blue",
              skills: [
                "HTML5","CSS3","Bootstrap","Tailwind CSS",
                "JavaScript","TypeScript","React","React Native",
                "Angular","C#","C","C++","Blazor","R"
              ]
            },
            {
              title: "Backend",
              color: "green",
              skills: ["PHP","Laravel","Node.js","Express"]
            },
            {
              title: "Bases de Datos",
              color: "purple",
              skills: ["MySQL","PostgreSQL","MongoDB","Firebase"]
            },
            {
              title: "Control de Versiones",
              color: "orange",
              skills: ["Git","GitHub","Git Flow","GitHub Actions","Pull Requests"]
            },
            {
              title: "Herramientas",
              color: "red",
              skills: [
                "Visual Studio Code","Visual Studio",
                "Android Studio","IntelliJ IDEA",
                "Figma","Postman"
              ]
            }
          ].map((section, index) => {
            const colors = colorClasses[section.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`
                  group relative bg-white p-8 rounded-2xl shadow-md
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl
                  border border-transparent
                  ${colors.border}
                `}
              >
                
                {/* Línea superior animada */}
                <span className={`
                  absolute top-0 left-0 w-0 h-1 
                  ${colors.bg}
                  transition-all duration-300 
                  group-hover:w-full
                `}></span>

                <h3 className={`text-xl font-semibold mb-6 ${colors.text}`}>
                  {section.title}
                </h3>

                <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                  {section.skills.map((skill, i) => (
                    <li
                      key={i}
                      className={`
                        transition-colors duration-200
                        ${colors.hoverText}
                      `}
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Habilidades;