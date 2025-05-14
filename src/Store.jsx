import React from "react";
import { createStore } from "redux";

const abc = {
    message : "Ridham"
}

function reducer (state = abc,action){
    switch (action.type) {
        case "msg":
            return{
                message:"Makwana"
            }
            break;
    
        default:
            return state
            break;
    }
}

const Store = createStore(reducer)

export default Store;