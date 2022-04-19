import "./style.css";
import batmanBG from "../src/img/bg.png";
import profilePic from "../src/img/profilePic.png";
import HQprofile from "../src/img/HQprofilePic.png";
import HQBG from "../src/img/HQBG.png";
import Card from "../src/components/Card"
import Footer from "../src/components/Footer"
import Header from "./components/Header"

let App = ()=> (
    <>
      
      <Header/>
      <main>
        <Card
          name="BATMAN"
          desc="Bruce Wayne es el único personaje que se identifica como Batman y aparece en Batman, Detective Comics, Batman y Robin, y Batman: The Dark Knight. Dick Grayson vuelve al manto de Nightwing"
          img={profilePic}
          bg={batmanBG}
        />
        <Card
          name="HARLEY QUINN"
          desc="La creación de Harley Quinn fue una idea de último minuto propuesta por el escritor estadounidense Paul Dini para modificar una escena del vigésimo-segundo episodio de Batman: la serie animada"
          img={HQprofile}
          bg={HQBG}
        />
        <Card
          name="BATMAN"
          desc="Bruce Wayne es el único personaje que se identifica como Batman y aparece en Batman, Detective Comics, Batman y Robin, y Batman: The Dark Knight. Dick Grayson vuelve al manto de Nightwing"
          img={profilePic}
          bg={batmanBG}
        />
      </main>
      <Footer/>
  
     
    </>
);

export default App