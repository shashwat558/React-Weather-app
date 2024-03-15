
import './App.css'
import React, { useEffect, useState } from 'react'


function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("Jamnagar");

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
            <p> {weather?.weather[0]?.main}</p>
          </div>
        
        </div>
        </div>           
    </section>
  )
}

export default App
