import {useState} from 'react';
import NewKanji from './newKanji.js';
import QuizKanji from './quizKanji.js';

export function SetNav({setCurrComponent, paramOne}) {
    return (
        <div>
            <button onClick={() => setCurrComponent(<NewKanji />)} value="NewKanji">Pick Me!</button>
            <button onClick={() => setCurrComponent(<QuizKanji  changeNewKanji={() => setCurrComponent("NewKanji")} practiceKanji={paramOne} />)} value="QuizKanji">Me Too!</button>
        </div>
    )
}

export default SetNav;