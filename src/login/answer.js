import { useSate } from 'react';

let answer = null;

export function setAnswer(newAns) {
    answer = newAns;
}

export function getAnswer() {
    return(answer);
}

export function confirmAnswer(checkAns="blue") {
    return(checkAns === "red" ? "Icorrect" : "Iwrong");
}