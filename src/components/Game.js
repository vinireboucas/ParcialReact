function Game({story, onSelect}) {
  return (
    <>
      <h1 className="historia">{story.historia}</h1>
      <div className="opciones">
        {Object.keys(story.opciones).map(optionKey => (
          <div key={optionKey} className="opcion">
            <button className="botones" onClick={() => onSelect(optionKey)}>
              {optionKey.toUpperCase()}
            </button>
            <h2>{story.opciones[optionKey]}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default Game
