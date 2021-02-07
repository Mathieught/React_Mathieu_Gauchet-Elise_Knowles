import React ,  { useState , useEffect}  from 'react'
// import axios from 'axios';
// const API_KEY = "77aad5296df589310936bdd6cffdfa61" ;

function Home(){
//   useEffect(() => {
//   // Your code here
// }, []);
  
//   const [value, setValue] = useState('')
//   const Meteo = () => { 
//       const city = "Paris";
//       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`).then((response) => {
//         setValue(response.data.main)
//       })
//       return(
//         <div>
//         {city}
//         { Math.round(value.temp - 273.15)}
//       </div>
//     )
//   }

  return(
      <section className="container">
        <h1 className="title">Présentation</h1>
        <p>l'application react comporte 4 quizz divers et</p>
        {/* <Meteo /> */}
      </section>
  )
}

export default Home

