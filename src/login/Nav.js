import {useState} from 'react';
import NewKanji from './newKanji.js';

export function SetNav({setCurrComponent}) {
    return (
        <button onClick={() => setCurrComponent(<NewKanji />)} value="NewKanji">Pick Me!</button>
    )
}

export default SetNav;