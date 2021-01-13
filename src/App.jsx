import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";

function ncard(val) {
    return(
        <Card 
            imgsrc={val.imgsrc}
            category={val.category}
            stitle={val.stitle}
            link={val.link}
        />
    )
}
function App(props) {
  return (
    <>
    <div className="container">
        <h1 className="text-center py-5">List of top 5 netflix series in 220</h1>
        <div className="row">{Sdata.map(ncard)}</div>
    </div>
    </>
  );
}

export default App;
