import React from "react";
import "./Header.css";

function Header(props) {
    if(props.menu === "não"){
        return (
            <h1> Sem Header </h1>
        )
    }else{
    return (
        <h1 className='header'> Com Header  </h1>
    );
    }
}

export default Header;