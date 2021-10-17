import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceID} = useParams()
    return (
        <div>
            <h3>Welcome to the {serviceID}(rd/nd) Option</h3>
        </div>
    );
};

export default Booking;