const apiKey = 'dfd79ba3d3895ebf2bbb44be85948c0f';
var cityName = "Hyderabad";

const weatherIcon = document.querySelector('.weather-icon');
const weatherType = document.querySelector('.weatherType');

async function getWeatherData() {
    let inputCityName = document.getElementById('myCityName');
    cityName = inputCityName.value;
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);

    if(data['cod']=="404"){
        document.querySelector('.error').style.display = "block";  
        document.querySelector('.weather').style.display = "none";
    }else{
        document.querySelector('.error').style.display = "none"; 
       
    }

    document.querySelector(".city").innerHTML = data['name'];
    document.querySelector(".temp").innerHTML = Math.round(data['main']['temp']) + '°C';
    document.querySelector(".humidity").innerHTML = data['main']['humidity'] + ' %';
    document.querySelector(".wind").innerHTML = Math.round(data['wind']['speed']) + ' km/h';
    weatherType.innerHTML = data['weather'][0]['main'];


    if (data['weather'][0]['main'] == "Clear") {

        weatherIcon.src = 'images/clear.png';

    } else if (data['weather'][0]['main'] == "Rain") {

        weatherIcon.src = 'images/rain.png';

    } else if (data['weather'][0]['main'] == "Drizzle") {

        weatherIcon.src = 'images/drizzle.png';

    } else if (data['weather'][0]['main'] == "Clouds") {

        weatherIcon.src = 'images/clouds.png';

    } else if (data['weather'][0]['main'] == "Mist") {

        weatherIcon.src = 'images/mist.png';

    } else if (data['weather'][0]['main'] == "Snow") {

        weatherIcon.src = 'images/snow.png';

    }else if (data['weather'][0]['main'] == "Thunderstorm") {

        weatherIcon.src = 'images/thunderstorm.png';

    }else if (data['weather'][0]['main'] == "Smoke") {

        weatherIcon.src = 'images/Smoke.png';

    }else if (data['weather'][0]['main'] == "Haze") {

        weatherIcon.src = 'images/haze.png';

    }else if (data['weather'][0]['main'] == "Dust") {

        weatherIcon.src = 'images/dust.png';

    }else if (data['weather'][0]['main'] == "Fog") {

        weatherIcon.src = 'images/fog.png';

    }else if (data['weather'][0]['main'] == "Sand") {

        weatherIcon.src = 'images/sand.png';

    }else if (data['weather'][0]['main'] == "Ash") {

        weatherIcon.src = 'images/ashes.png';

    }else if (data['weather'][0]['main'] == "Squall") {

        weatherIcon.src = 'images/squall.png';

    }else if (data['weather'][0]['main'] == "Tornado") {

        weatherIcon.src = 'images/tornodo.png';

    }


    document.querySelector('.weather').style.display = "block";

   

}



