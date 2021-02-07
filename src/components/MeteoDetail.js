import React from 'react'

const MeteoDetail = ({temp,city}) => {
    return(
      <div>
      {city} { Math.round(temp - 273.15) + "°"}
      </div>
  )
}

export default MeteoDetail