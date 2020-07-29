import React, {useState, useEffect} from "react";
import axios from "axios";
import Photo from "./Photo";
import Dropdown from "./Dropdown"
const PhotoCard = (props) => {
    const [photo, setPhoto] = useState()
    const [date, setDate] =useState("2020-07-28")
    console.log(props);
    useEffect((date) => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
        .then(response => {console.log(response)
            setPhoto(response.data)})
        .catch(error => console.log(error))
    }, [date]);
    console.log(photo);
    return (
        <div className="container"> 
            <Dropdown dates={props.props} setDate={setDate}/>
            <Photo photo = {photo} />
        </div>
    );
}

export default PhotoCard;