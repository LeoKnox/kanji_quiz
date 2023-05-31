import { useSate } from 'react';

let answer = null;

export function setAnswer(newAns) {
    answer = newAns;
}

export function getAnswer() {
    return(answer);
}