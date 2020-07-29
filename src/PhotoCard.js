import React, {useState, useEffect} from "react";
import axios from "axios";
import Photo from "./Photo";
const PhotoCard = () => {
    const [photo, setPhoto] = useState()
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {console.log(response)
            setPhoto(response.data)})
        .catch(error => console.log(error))
    }, []);
    console.log(photo);
    return (
        <div className="container">
            <Photo photo = {photo} />
        </div>
    );
}

export default PhotoCard;