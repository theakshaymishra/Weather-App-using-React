import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

const SearchBox = ({ updateInfo }) => {
    let [ city , setcity ] = useState('');
    let [ error , seterror ] = useState(false);

    let url = "https://api.openweathermap.org/data/2.5/weather"
    let api_key = "3192c6849e008d33596734515f861e84";


    let getWeather = async() => {
      try{
        let  response =  await fetch(`${url}?q=${city}&appid=${api_key}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
         city: city,
         humidity : jsonResponse.main.humidity,
         feels : jsonResponse.main.feels_like,
         temp:   jsonResponse.main.temp,
         temp_max: jsonResponse.main.temp_max,
         temp_min:  jsonResponse.main.temp_min,
         weather : jsonResponse.weather[0].description
         };
         console.log(result);
         return result;
        }catch(err){
          throw err;
        }

    }


    let handleChange =(Event) => {
    setcity(Event.target.value);       
    }

    let handleSubmit = async (Event) => {
     try{
      Event.preventDefault();
      setcity('');
      let newinfo = await getWeather();
      updateInfo(newinfo);
     }catch(err){
        seterror(true);
     }


    }

  return (
    <div className='SearchDiv'>
      
      <form action="" onSubmit={handleSubmit}> 
      <TextField id="outlined-basic" label="City Name" variant="outlined" value={city}  onChange={handleChange}/>
      <br></br>
      <br></br>
      <Button variant="contained" type='submit' >Search</Button>
      {error && " Sorry! No such place is exists in our Api"}
      </form>
    </div>
  )
}

export default SearchBox
