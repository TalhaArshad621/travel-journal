import React from "react";

export default function TravelContent(props){
    return (
        <div>
            <section className="travel--section">
            <img className="location--img" src= {props.imageUrl} />
            <div className="section--content">
                <div className="section--location">
                    <img className="pointer" src="/images/pointer.svg" />
                    <span className="location">{props.location}</span>
                    <a href= {props.googleMapsUrl} className="location-link" > View on Google Maps</a>
                </div>
                <h1 className="section--title"> {props.title} </h1>
                <p className="section--date" > {props.startDate} - {props.endDate} </p>
                <p className="section--text"> {props.description} </p>
            </div>
        </section>
        <hr className="end--line" />
        </div>
        
    )
}