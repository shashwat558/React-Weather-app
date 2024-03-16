
import './App.css'
import React, { useEffect, useState } from 'react'



function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Jamnagar");
  const weatherStatus = weather?.weather[0]?.main;

  useEffect(() => {
    ifClicked()

  },[])

  function ifClicked() {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${'184eab55dec728f70d700dcc142423e1'}&units=metric`
    )
      .then((res) => {
        if(res.ok){
          console.log(res.status);
          return res.json();
        } else {
          if(res.status === 400){
            return alert("OOpsm there seems to be a problem(Wrong location)")
          }
          alert("Oops ther seems to be an error");
          throw new Error("You have an error");
        }

      })
        .then((Object) => {
          setWeather(Object)
          console.log(weather);
        })
         .catch((error) => console.log(error));
  }


  return (
    <section>
      <div className='app'>
        <div className='wrapper'>
          <div className='search'>
            <input type="text"
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Enter Location'
            className='Location_input'
            />
            <button className='location_searcher' onClick={ifClicked}>
              Search Location
            </button>

          </div>
          <div className='app_data'>
            <p className='temp'>Current Temprature: {weather?.main?.temp}</p>
            <h1> {weatherStatus}</h1>
            <div className='weatherImage'>
             <WeatherImage />
            </div>
          </div>
        
        </div>
        </div>           
    </section>
  )
  function WeatherImage(weather){
    if(weatherStatus == "Clear"){
      return <img src="src/assets/here/animated/day.svg" alt="" />
    } else if(weatherStatus == "Rainy"){
      return <img src="src/assets/here/animated/rainy-5.svg" alt="" />
    } else if(weatherStatus == "Clouds"){
      return <img src="src/assets/here/animated/cloudy.svg" alt="" />
  
    }  else if(weatherStatus == "fog"){
      return <img src="src/assets/here/animated/snowy-4.svg" alt="" />
    }  else if(weatherStatus == "Haze"){
      return <img src="src/assets/here/animated/cloud-svgrepo-com.svg" alt="" />
       
    } else if(weatherStatus == "Smoke"){
      return <img src="src/assets/here/animated/icons8-smoke-50.png" alt="" />
       
  }
  
  }

  
}


export default App
