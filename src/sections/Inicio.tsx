function Inicio(){
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">¡Hola, soy Mike!</h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">Desarrollador Full Stack</p>
                <a href="#sobre-mi" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Conoce más sobre mí</a>
            </div>
        </section>
    );
}

export default Inicio;