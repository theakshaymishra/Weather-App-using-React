import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


const InfoBox = ({info}) => {
 let img_url = "https://plus.unsplash.com/premium_photo-1681338144515-5a46https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=6003252a0ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVsaGklMjB3ZWF0aGVyfGVufDB8fDB8fHww"; 
 let hot_img ="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=600";
 let cold_img = "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600";
 let rain_img ="https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=600";
 
  return (  
    <div className='InfoBox'>
      <h3>Weather Information = {info.weather}</h3>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? rain_img : info.temp>15 ? hot_img : cold_img}
        title="green iguana"
      />
      <div className='CardContainer'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? < WbSunnyIcon/> :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humiduty = {info.humidity}</div>
          <div>Min Temp = {info.temp_min}&deg;C</div>
          <div>Max Temp = {info.temp_max}&deg;C</div>
          <div>Weather is {info.weather} and Feels like {info.feels}&deg;C</div>

        </Typography>   
      </CardContent>

      </div>
      

    </Card>
    </div>
  )
}

export default InfoBox
