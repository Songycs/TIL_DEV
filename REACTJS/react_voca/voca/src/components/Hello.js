import UserName from "./UserName";
import {useState} from 'react';
export default function Hello({age}){
    const [name, setName] = useState("Song");
    const msg = age > 19 ? "성인" : "미성년자" ;
    return(
        <div>
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name = {name}/>
            <button
                onClick = {()=>{
                    setName(name==="Song" ? "HOON" : "Song");
                }}
            >
                flip
            </button>
        </div>
    );
}