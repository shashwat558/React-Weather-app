
import './App.css'
import React, { useEffect, useState } from 'react'

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("Jamnagar");
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    ifClicked();
  }, []);
  function ifClicked() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID={184eab55dec728f70d700dcc142423e1}&units=metric`
    )
      .then((res) => {
        if(res.ok){
          console.log(res.status);
          return res.json();
        } else {
          if(res.status === 4000) {
            return alert("Oops, there seems to be an error!(wrong location)")
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
        
      })
      .then((object) => {
        setWeather(object);
        console.log(weather);
      })
      .catch((error) => console.log(error));

    fetch(
      `https://api.unsplash.com/search/photos?query=${location}&client_id={'k9NTLjDTigkJgSKZPX6-d6XS_PP7DrK1049wf_9-myU'}`
    )
      .then((res) => {
        if(res.ok){
          return res.json();
        } else {
          throw new Error("You madea a mistake")
        }
      }
      )
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
          </div>
          <img className='app__image' src={photos} alt="" />
        </div>
        </div>           
    </section>
  )
}

export default App
