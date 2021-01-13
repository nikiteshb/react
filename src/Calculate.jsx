import React from "react";

var a,b,c;
function add(a,b) {
    c = a+b;
    return c;
}

function  sub(a,b) {
    c = a-b;
    return c;
}
function  mul(a,b) {
    c = a*b;
    return c;
}

function  divide(a,b) {
    c = a/b;
    return c;
}


export default add;

export {sub,mul,divide};