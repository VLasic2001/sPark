import React, { useState } from "react";
import { parkings } from "../data/parkings";
import x from "../images/x.svg"
import heart from "../images/heart.svg"
import heartFull from "../images/heartFull.svg"
import heartBlue from "../images/heartBlue.svg"

const Parking = ({name}) => {
    const parking = parkings.find(p => p.name == name);

    const [liked, setLiked] = useState(JSON.parse(localStorage.getItem(parking.name)));

    const [odTime, setOd] = useState("10:00");
    const [doTime, setDo] = useState("12:00");

    let history = JSON.parse(localStorage.getItem("history"));

    const [showReservation, setShowReservation] = useState(false);

    function handleLikeClick() {
        localStorage.setItem(parking.name, JSON.stringify(!liked));
        setLiked(!liked);
    }

    function handleReservationClick() {
        setShowReservation(!showReservation);
    }

    function handleReservationModalClick() {
        localStorage.setItem(parking.location, JSON.stringify(JSON.parse(localStorage.getItem(parking.location))-1));
        history.push({parking, odTime, doTime, price: parking.price*(parseInt(document.getElementById("do").value.slice(0, 2))-parseInt(document.getElementById("od").value.slice(0, 2)))})
        localStorage.setItem("history", JSON.stringify(history));
        handleReservationClick();
    }

    return (
    <div className="parkingContainer">
        <img className="heartIcon" onClick={handleLikeClick} src={liked ? heartFull : heart} />
        <h2 className="parkingName">{parking.name}</h2>
        <p className="parkingText">{parking.neighbourhood}</p>
        <p className="parkingText">{parking.location}</p>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <p className="parkingText">{parking.price}kn/h</p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "250px"}}>
                <p className="parkingText">{localStorage.getItem(parking.location)}/{parking.totalSpots}</p>
                <span onClick={handleReservationClick} className="reserveButton">Rezerviraj</span>
            </div>
        </div>
        {showReservation && <div className="reservationContainer">
            <div className="reservationModal">
                <img className="xIcon" onClick={handleReservationClick} src={x} />
                <h2 className="parkingNameModal">{parking.name}</h2>
                <p className="parkingTextModal">{parking.location}</p>
                <p className="parkingTextModal">Dostupno mjesta: {parking.availableSpots}/{parking.totalSpots}</p>
                <p className="parkingTextModal">Od: 
                    <input id="od" className="timePicker" onChange={e => setOd(e.target.value)} value={odTime} type="time"></input>
                </p>
                <p className="parkingTextModal">Do:
                    <input id="do" className="timePicker" onChange={e => setDo(e.target.value)} value={doTime} type="time"></input>
                </p>
                <p>Cijena po satu: {parking.price}kn/h</p>
                <p>Ukupna cijena: {document.getElementById("do") == undefined ? 2*parking.price : parking.price*(parseInt(document.getElementById("do").value.slice(0, 2))-parseInt(document.getElementById("od").value.slice(0, 2)))}kn</p>    
                <img className="heartIconModal" onClick={handleLikeClick} src={liked ? heartBlue : heart} />
                <span onClick={handleReservationModalClick} className="reserveButtonModal">Rezerviraj</span>
            </div>
        </div>
        }
    </div>
);
};

export default Parking;