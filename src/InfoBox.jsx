import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export default function InfoBox({ info }) {
  let Mist_url =
    "https://images.unsplash.com/photo-1603794052293-650dbdeef72c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D";
  //   let Hot_url="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  let Clear_url =
    "https://images.unsplash.com/photo-1691848746386-d5de9f5c05a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsZWFyJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let Cold_url =
    "https://media.istockphoto.com/id/960213848/photo/its-cold-out-here-i-have-to-cover-up.webp?b=1&s=170667a&w=0&k=20&c=ZJBN4DFd40K7HhFgbrTpAn23wJo41blz3RaONtvwm3I=";
  let Rain_url =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let Snow_url =
    "https://plus.unsplash.com/premium_photo-1671658221576-8d9a4b04bd8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let Wind_url =
    "https://images.unsplash.com/photo-1505672678657-cc7037095e60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2luZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let Cloud_url =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.temp < -10
                ? Snow_url
                : info.temp < 15
                ? Cold_url
                : info.weather === "Mist"
                ? Mist_url
                : info.weather === "Clouds"
                ? Cloud_url
                : info.weather === "Clear"
                ? Clear_url
                : info.weather === "Rain"
                ? Rain_url
                : Wind_url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} &nbsp;
              {info.humidity > 90 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"div"}
            >
              <div style={{ textAlign: "left" }}>
                <div>Temperature: {info.temp}&deg;C</div>
                <div>Humidity: {info.humidity}</div>
                <div>Max-Temperature: {info.temp_max}&deg;C</div>
                <div>Min-Temperature: {info.temp_min}&deg;C</div>
                <div>Feels Like: {info.feels_like}</div>
                <div>Weather: {info.weather}</div>
                <div>Wind: {info.wind}</div>
                <div>Pressure: {info.pressure}</div>
                <div>Latitude: {info.lat}</div>
                <div>Longitude: {info.lon}</div>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
