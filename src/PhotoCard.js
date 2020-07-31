import React, {useState, useEffect} from "react";
import axios from "axios";
import Photo from "./Photo";
import Dropdown from "./Dropdown"
const PhotoCard = (props) => {
    const [photo, setPhoto] = useState()
    const [date, setDate] =useState("2020-07-27");
    const dates = ["2020-07-28", "2020-07-27", "2020-07-26", "2020-07-25", "2020-07-24"];
    console.log(props);
    useEffect((date) => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=95tF10VHI5EfPhC5gOpgdoFIPeQCMqjwGiKznXUD`)
        .then(response => {console.log(response)
            setPhoto(response.data)})
        .catch(error => console.log(error))
    }, [date]);
    console.log(photo);
    return (
        <div className="container"> 
            <Photo photo = {photo} />
            <Dropdown dates={props.props} setDate={setDate}/>
        </div>
    );
}

export default PhotoCard;