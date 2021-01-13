import React from "react";

function Greetings() {
    var currentTime = new Date().getHours();

    var greeting = "";

    const cssStyle = {};

    if(currentTime >=1 && currentTime <= 12){
    greeting = "Good Morning";
    cssStyle.color = "Green";
    }
    else if(currentTime > 12 && currentTime <= 18 ){
    greeting = "Good Afternoon";
    cssStyle.color = "Orange";
    }
    else if(currentTime > 18 && currentTime <= 20 ){
    greeting = "Good Evening";
    cssStyle.color = "Gray";
    }
    else{
    greeting = "Good Night";
    cssStyle.color = "Black";
    }

    return(
        <>
        <h1>Hello Sir <span style={cssStyle}>{greeting}</span></h1>
        </>
    )
}

export default Greetings;