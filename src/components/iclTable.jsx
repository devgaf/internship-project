export const IclTable = ({ iclData }) => {
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {
          iclData && iclData?.results.map((element) => (
            <tr key={element.fecha + element.valor}>
              <td>{element.fecha}</td>
              <td>{element.valor}</td>
            </tr>
          ))
        }
      </tbody>
    </table>  
  )
}
