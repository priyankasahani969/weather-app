const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'eb6bdbfabemshfce04ae2e5fa0d7p1105e2jsncd8f1b163777',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const funCall = () => {

}
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response.cloud_pct)
        cloud_pct.innerHTML = response?.cloud_pct
        temp.innerHTML = response.temp ;
        feels_like.innerHTML = response?.feels_like ? response.feels_like :0 ;
        humidity.innerHTML = response?.humidity ? response?.humidity : 0;
        min_temp.innerHTML = response?.min_temp
        max_temp.innerHTML = response?.max_temp
        wind_speed.innerHTML = response?.wind_speed
        wind_degrees.innerHTML = response?.wind_degrees
        sunrise.innerHTML = response?.sunrise
        sunset.innerHTML = response?.sunset
    })
    .catch(err => console.error(err));