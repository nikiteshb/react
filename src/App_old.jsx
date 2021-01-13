import React from "react";
import Heading from "./Heading";
import ListComponent from "./ListComponent";
import Midcontent from "./Midcontent";
import Greetings from "./Greetings";
import name, {profession,skills,hobby} from "./List";

import add,{sub,mul,divide} from "./Calculate";
function App(){
    return(
        <React.Fragment>
            {/* <Heading />
            <Midcontent />
            <ListComponent />
            hello my frist react proj
            <Greetings />
            <ol>
            <li>Nikitesh </li>
            <li>{name}</li>
            <li>{skills()}</li>
            <li>{hobby()}</li>
            </ol> */}
            <div className="container">
                <ul class="list-group">
                    <li class="list-group-item">sum of two no is {add(40,4)}</li>
                    <li class="list-group-item">sub of two no is {sub(40,4)}</li>
                    <li class="list-group-item">mul of two no is {mul(40,4)}</li>
                    <li class="list-group-item">division of two no is {divide(40,4)}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default App;