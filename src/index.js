import React from "react";
import reactDom from "react-dom";
import "./style.css";
import batmanBG from "../src/img/bg.png";
import profilePic from "../src/img/profilePic.png";
import HQprofile from "../src/img/HQprofilePic.png";
import HQBG from "../src/img/HQBG.png";
function Card(props) {
  return (
    <div className="card">
      <img src={props.bg} alt="bkg batman" />

      <div className="card-content">
        <img src={props.img} alt="profilePicBatman" />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <Button> Ver más</Button>
      </div>
    </div>
  );
}

function Header() {
    return   <header>
    <div>
      <p>Descuentos 20%</p>
    </div>

    <div className="heroes">
      <h2>Heroes</h2>
    </div>
  </header>
}

function Footer() {
    return  <footer>
    <p>Todos los derechos reservados a FRONT END 1</p>
  </footer>
}

function Button(props) {
    return  <button>{props.children}</button>
    
}
let site = (
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
reactDom.render(site, document.getElementById("root"));
