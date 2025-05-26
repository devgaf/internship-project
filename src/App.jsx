import { useEffect, useState } from 'react'
import { FetchData } from './services/fetch-data'
import './App.css'

const fetchData = new FetchData();

function App() {
  const [iclData, setIclData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData.getIclData()
      .then(data => setIclData(data))
      .catch(err => setError(err));
  }, []);

  return (
    <>
      <h1>Datos de ICL</h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error.message || 'Error al obtener los datos de ICL'}
        </div>
      )}
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
              <tr key={element.fecha+element.valor}>
                <td>{element.fecha}</td>
                <td>{element.valor}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
