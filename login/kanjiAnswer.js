function KanjiAnswer({answer, question}) {
    let newAnswer = answer[Math.floor(Math.random()*3)];
    if (answer === 0) {
        alert("correct");
    }

    function alertFun() {
        alert("fun!");
    }
    return (
        <>
        <p>Kanji Answer:</p>
        <p>{question}</p>
        </>
    )
}

export default KanjiAnswer;