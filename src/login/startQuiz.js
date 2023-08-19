import {getTotal, findKanji, generateQuiz} from './twoKanjis.js';
import {useState, useEffect} from 'react';

function StartQuiz({cn}) {
    let [answer, incAnswer] = useState();
    let [stateArray, setStateArray] = useState([])
    let [goal, setGoal] = useState(1);
    const [error, setError] = useState("");
    useEffect(() => {
        let genQuiz = generateQuiz();
        incAnswer(findKanji(genQuiz.answer).english);
        setStateArray(genQuiz.quiz);
    },[])

    const confirmAnswer = (k) => {
        if ((findKanji(k).english) === answer) {
            let newK = generateQuiz();
            incAnswer(findKanji(newK.answer).english);
            setStateArray(newK.quiz);
            setGoal(goal+1);
            setError("");
        } else {
            setError("Wrong answer");
        }
        if (goal  >= getTotal()-1) {
            cn();
        }
    }

    return (
        <div className="startQuiz">
        <br/>
        <progress value={goal} max={getTotal()}></progress>
        <p>Answer: {answer || "X"}</p>
        <p style={{color: "red"}}><b>{error}</b></p>
        {stateArray.map((k) => (
            <p className="sqButton"><button className="ks_button" value={k} onClick={() => confirmAnswer(k)}>{findKanji(k).japanese}</button></p>
        ))}
        </div>
    )
}

export default StartQuiz;