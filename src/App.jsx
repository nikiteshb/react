import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";

function App(props) {
  return (
    <>
    <div className="container">
        <h1 className="text-center py-5">List of top 5 netflix series in 220</h1>
        <Card 
            imgsrc={Sdata[0].imgsrc}
            category={Sdata[0].category}
            stitle={Sdata[0].stitle}
            link={Sdata[0].link}
        />
        <Card 
            imgsrc={Sdata[1].imgsrc}
            category={Sdata[1].category}
            stitle={Sdata[1].stitle}
            link={Sdata[1].link}
        />
        <Card 
            imgsrc={Sdata[2].imgsrc}
            category={Sdata[2].category}
            stitle={Sdata[2].stitle}
            link={Sdata[2].link}
        />
    </div>
    </>
  );
}

export default App;
