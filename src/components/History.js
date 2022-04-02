function History({data}) {
  const lastIndex = data.length - 1
  const lastChoice = data[lastIndex]

  return (
    <div className="recordatorio">
      <h3>Selección anterior: {lastChoice?.toUpperCase()}</h3>
      <h4>Historial de opciones elegidas: </h4>
      <ul>
        {data.slice(0, lastIndex).map((item, index) => (
          <li key={index}>{item.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  )
}

export default History
