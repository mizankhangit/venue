import React from 'react';


const Location = () => {
    return(
        <div className="location_wrapper">

        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.602583276083!2d90.37059391429783!3d23.797162292906776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cd7313eb1d%3A0x1b8b8fc444fa23eb!2sKazipara+Bus+Stop!5e0!3m2!1sen!2sbd!4v1563130785005!5m2!1sen!2sbd" 
            width="1600" 
            height="450" 
            frameBorder="0" 
            allowFullScreen
        >
        </iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>

        </div>
    )
}

export default Location;