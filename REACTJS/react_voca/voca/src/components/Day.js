import dummy from "../DB/data.json"
import { useParams } from "react-router-dom";

export default function Day(){

    const day = useParams().day;
    const wordList = dummy.words.filter(word=>
        word.day===Number(day)
    );
    console.log(wordList)
    return (
    <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word=>(
                    <tr key={word.id}>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                        <td>
                            <button> 뜻 보기 </button>
                            <button className = "btn_del"> 삭제하기 </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>    
    </>
    );
}