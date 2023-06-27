function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    let answer = practiceKanji.length -1;
    console.log(answer);
    return (
        <>
        <p>Start new quiz</p>
        {practiceKanji.map(k => (<p>{k}</p>))}
        </>
    )
}

export default StartQuiz;