import { useEffect, useState } from 'react'
import { FetchData } from './services/fetch-data'
import './App.css'
import { IclTable } from './components/iclTable.jsx'

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
      <IclTable iclData={iclData} />
    </>
  )
}

export default App;
