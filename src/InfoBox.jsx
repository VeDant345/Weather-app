import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}) {

    const rain_url = "https://media.istockphoto.com/id/2151002398/photo/rain-drops-falling-down-from-the-roof-at-night.jpg?s=612x612&w=0&k=20&c=tpqP2lxey29LvzoXYo_Qbcq-fbi0FP-fbNOmJsMc-vQ=";
    const hot_url = "https://media.istockphoto.com/id/154208318/photo/pastel-sunset-over-the-ocean-in-a-cloudy-sky.jpg?s=612x612&w=0&k=20&c=TRU1mdgVRqTIuHgAy2BGNgPYnOPV6KuVbfvWEeY1ijs=";
    const cold_url = "https://media.istockphoto.com/id/1171962535/photo/srinagar-kashmir.jpg?s=612x612&w=0&k=20&c=5y9sU7boA-TFyr7LBVyfpmoKT9A2Y7WxA2tqdIE0zBw=";
    return(
        <div className="InfoBox">
            <h2>Whether Report</h2>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.humidity > 80 ?  <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
                <div>Temperature : {info.temp}&deg;C</div>
                <div>Humidity : {info.humidity}&deg;C</div>
                <div>Minimum Temperature : {info.minTemp}&deg;C</div>
                <div>Maximum Temperature : {info.maxTemp}&deg;C</div>
                <div>The weather can be described as {info.weather} feels like {info.feelsLike}&deg;C</div>
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}