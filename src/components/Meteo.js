import React ,  { useState , useEffect}  from 'react'
import MeteoDetail from './MeteoDetail'
import axios from 'axios';
const API_KEY = "28338e577651f19f8ea75cfe7548c872" ;
// const API_KEY = process.env.REACT_APP_API_KEY ;


const Meteo = () => {

  const [value, setValue] = useState('')
  const city = "Paris"

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`).then((response) => {
        console.log(response.data.main)
        setValue(response.data.main)
      })    
      }, []);

  return(
      <section className="container cut">
        <div className="left">
        <h1 className="title">QWIZ</h1>
        <p>QWIZ l'application de quiz qu'il vous faut</p>
        </div>
        <div className="right">
            <h1 className='title'>API WEATHER</h1>
            <MeteoDetail temp={value.temp} city={city}/> 
        </div>
      </section>
  )
}

export default Meteo

