function Inicio(){
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="Presentacion">
                <div className="MiNombre">
                    Miguel Alejandro Cortez Gutiérrez
                </div>
                <div className="MiProfesión">
                    Ingeniero en Computación
                </div>
                <div className="Ingeniero_Descripcion">
                    Diseñador UX/UI | Desarrollador Frontend | Desarrollador Backend | React Programmer
                </div>
                <div className="Botones_Inicio">
                    <button>
                        Contactar
                    </button>
                    <button>
                        Conocer más
                    </button>
                    <button>
                        Descargar CV
                    </button>
                </div>
            </div>
            <div className="Card_Presentacion"> 
                <div className="Foto_Perfil">

                </div>
                <div className="Numero_Telefonico">
                    444-299-4145
                </div>
                <div className="Correo_Electronico">
                    mickeycortez2002@gmail.com
                </div>
                <div className="Contacto_Linkedin">
                    Miguel Alejandro Cortez Gutiérrez
                </div>
            </div>
        </section>
    );
}

export default Inicio;