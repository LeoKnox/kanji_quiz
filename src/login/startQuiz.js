function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    let answer = practiceKanji.length -1;
    console.log(answer);
    function buttonClick() {
        answer--;
        console.log(answer);
        console.log("on click function");
    }
    return (
        <>
        <p>Start new quiz</p>
    <h4>{practiceKanji[answer]}</h4>
    <h4>{answer}</h4>
        {practiceKanji.map(k => 
            (<p onClick={buttonClick}>{k}</p>)
        )}
        </>
    )
}

export default StartQuiz;