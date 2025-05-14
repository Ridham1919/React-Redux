import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import Employeereducer from "./Store/EmployeeStore";

const rootreducer = combineReducers({
    employee : Employeereducer
})


const Store2 = createStore(rootreducer, applyMiddleware(thunk))

export { Store2 }
