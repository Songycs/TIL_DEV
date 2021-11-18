import { useRef } from "react";
import useFetch from "../hooks/useFetch";
import {useNavigate} from "react-router";


export default function CreateDay(){

    const days = useFetch("http://localhost:3001/days")
    const navigate = useNavigate();

    function addDay(e){
        e.preventDefault();
        fetch(`http://localhost:3001/days/`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                day:days.length+1,
                isDone: false,
            }),
        })
        .then( res => {
            if(res.ok){
                alert("Day added");
                navigate(`/`)
            }
        })
    }

    return (
        <div>
            <h3>현재일수 : {days.length}일</h3>
            <button onClick={addDay}>Add Day</button>
        </div>

    )
}