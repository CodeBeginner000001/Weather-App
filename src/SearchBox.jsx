import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ updateInfo }) {
  let [cityname, setCityname] = useState("");
  let [error,setError]=useState(false)
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_Key = "07b15329fb5273208bc0a48a9f105e30";

  let getWeather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${cityname}&appid=${API_Key}&units=metric`
      );
      let JSONresponse = await response.json();
      console.log(JSONresponse);
      let result = {
        country: JSONresponse.sys.country,
        city: cityname,
        lat: JSONresponse.coord.lat,
        lon: JSONresponse.coord.lon,
        humidity: JSONresponse.main.humidity,
        temp: JSONresponse.main.temp,
        temp_max: JSONresponse.main.temp_max,
        temp_min: JSONresponse.main.temp_min,
        feels_like: JSONresponse.main.feels_like,
        weather: JSONresponse.weather[0].main,
        wind: JSONresponse.wind.speed,
        pressure: JSONresponse.main.pressure,
      };
      return result;
      // console.log(result);
    } catch (error) {
      throw error;
    }
  };

  let handlecity = (event) => {
    setCityname(event.target.value);
  };
  let handlesubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(cityname);
      let info = await getWeather(cityname);
      updateInfo(info);
      setCityname("");
      setError(false);
    } catch {
        setError(true);
    }
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <TextField
          required
          id="cityname"
          label="Search city"
          variant="outlined"
          value={cityname}
          onChange={handlecity}
        />
        <br />
        <br />
        <Button
          variant="contained"
          style={{ marginBottom: "15px" }}
          type="submit"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
        {error&&<p style={{color:"red"}}>Place doesn't exist</p>}
      </form>
    </div>
  );
}
