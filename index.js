const apikey="1995f765d9cf942fa7fb54ba49bd5884";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.getElementById("inp");
const searchbtn=document.getElementById("btnn");
const weathericon=document.querySelector(".weather-icon");


async function checkweather(city){
    const reponse=await fetch(apiurl+city+`&appid=${apikey}`);
    if(reponse.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await reponse.json();

    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
        if(data.weather[0].main=="Clouds"){
            weathericon.src= "images/clouds.png";
    
        }else if(data.weather[0].main=="Clear"){
            weathericon.src= "images/clear.png"
        }
        else if(data.weather[0].main=="drizzle.png"){
            weathericon.src= "images/drizzle.png"
        }
        else if(data.weather[0].main=="humidity"){
            weathericon.src= "images/humidity.png"
        }
        else if(data.weather[0].main=="mist"){
            weathericon.src= "images/mist.png"
        }
        else if(data.weather[0].main=="rain"){
            weathericon.src= "images/rain.png"
        }
        else if(data.weather[0].main=="snow"){
            weathericon.src= "images/snow.png"
        }
        else if(data.weather[0].main=="wind"){
            weathericon.src= "images/wind.png"
        }
        else if(data.weather[0].main=="rain"){
            weathericon.src= "images/rain.png"
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
    }
    
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});