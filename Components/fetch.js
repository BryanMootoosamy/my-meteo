import axios from "axios";
export const fetchWeather = (component ,city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&mode=json&cnt=15&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`).then((response)=>{
            component.setState({report: response.data})
        })
}
