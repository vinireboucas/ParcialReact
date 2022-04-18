import React from "react";
import reactDom from "react-dom";
import "./style.css"
import batmanBG from "../src/img/bg.png"
import profilePic from "../src/img/profilePic.png"
let site = (
  <>
    
    <header>

        <div>
            <p>Descuentos 20%</p>
        </div>

        <div className="heroes">
            <h2>Heroes</h2>
        </div>

    </header>

    <main>
    <div className="card"> 
            <img src={batmanBG} alt="bkg batman" />
            
            <div className="card-content">
                <img src={profilePic} alt="profilePicBatman" />
                <h3>BATMAN</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam deserunt numquam, ex consectetur beatae molestiae magnam pariatur dolore soluta?</p>
                <button> Ver más</button>
            </div>
            
        </div>
        <div className="card"> 
            <img src={batmanBG} alt="bkg batman" />
            
            <div className="card-content">
                <img src={profilePic} alt="profilePicBatman" />
                <h3>BATMAN</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam deserunt numquam, ex consectetur beatae molestiae magnam pariatur dolore soluta?</p>
                <button> Ver más</button>
            </div>
            
        </div>
        <div className="card"> 
            <img src={batmanBG} alt="bkg batman" />
            
            <div className="card-content">
                <img src={profilePic} alt="profilePicBatman" />
                <h3>BATMAN</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam deserunt numquam, ex consectetur beatae molestiae magnam pariatur dolore soluta?</p>
                <button> Ver más</button>
            </div>
            
        </div>

       
    </main>

    <footer>
            <p>Todos los derechos reservados a FRONT END 1</p>
    </footer>

  </>
);
reactDom.render(site, document.getElementById("root"));
