import Header from "@components/header/Header.tsx";
import Inicio from "@sections/Inicio.tsx";
import SobreMi from "@sections/SobreMi.tsx";
import Experiencia from "@sections/Experiencia.tsx";
import Habilidades from "@sections/Habilidades.tsx";
import Educacion from "@sections/Educacion.tsx";
import {Contacto} from "@sections/Contacto.tsx"; // Exportamos Contacto como un componente nombrado por el export function que tiene en el archivo Contacto.tsx
import Footer from "@components/footer/Footer.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
       <main className="pt-12">
        <Inicio />
        <SobreMi />
        <Experiencia />
        <Habilidades />
        <Educacion />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
