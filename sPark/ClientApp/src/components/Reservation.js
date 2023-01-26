import React, { useState } from "react";

const Reservation = ({r}) => {
    return (
        <div className="parkingContainer">
            <h2 className="parkingName">{r.parking.name}</h2>
            <p className="parkingText">{r.parking.neighbourhood}</p>
            <p className="parkingText">{r.parking.location}</p>
            <p className="parkingText">{r.parking.price}kn/h</p>
            <p className="parkingText">26.1.2023.</p>
            <p className="parkingText">Od: {r.odTime}</p>
            <p className="parkingText">Do: {r.doTime}</p>
            <p className="parkingText">Ukupna cijena: {r.price}kn</p>
        </div>
    );
};

export default Reservation;