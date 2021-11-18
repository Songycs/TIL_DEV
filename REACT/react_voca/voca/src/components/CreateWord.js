import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch"
import {useNavigate} from "react-router";


export default function CreateWord(){

    const days = useFetch("http://localhost:3001/days")
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(false);

    function onSubmit(e){
        e.preventDefault();
        if(!isLoading){
            setIsLoading(true);
            fetch(`http://localhost:3001/words/`,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone: false,
                }),
            })
            .then( res => {
                if(res.ok){
                    alert("Word added");
                    navigate(`/day/${dayRef.current.value}`);
                    setIsLoading(false);
                }
            })
        }
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        
        <form onSubmit={onSubmit}>
            <div className = "input_area">
                <label>Eng</label>
                <input type="text" placeholder="..." ref={engRef}/>
            </div>
            <div className = "input_area">
                <label>Kor</label>
                <input type="text" placeholder="..." ref={korRef}/>
            </div>
            <div className = "input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button style={{
                opacity: isLoading ? 0.3 :1,
            }}>save</button>
        </form>
    )
}