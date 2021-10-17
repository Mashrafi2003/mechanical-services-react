import React from 'react';
import './Notfound.css'
import notfound from '../../images/404.jpg';

const Notfound = () => {
    return (
        <div>
            <img className='notfound-img' src={notfound} alt="" />
        </div>
    );
};

export default Notfound;