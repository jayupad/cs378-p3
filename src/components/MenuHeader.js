import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

const MenuHeader = ({title, logo, slogan, desc}) => {
    return ( 
        <div className="row justify-content-center">
            <img className="logo" src={"images/" + logo} /> 
            <p className="slogan"> {slogan} </p>
            <h2> {desc} </h2>
        </div>);
};

export default MenuHeader;