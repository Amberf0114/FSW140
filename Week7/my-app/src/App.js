import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {

  const [ dataList, setData ] = useState([])

  useEffect(() => {

    axios.get('http://localhost:9000/displayrows')
      .then((response => {
        setData(response.data)
      }))

  }, [])

  console.log(dataList)

  return (
    <div className="App">
      {dataList.map((data) => {
        return(
          <h1>{data.name}</h1>
        )
    })}
    </div>
  );
}

export default App;
