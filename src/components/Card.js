import Button from "../components/Button"

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

  export default Card