import StartQuiz from './startQuiz.js';

function QuizKanji({practiceKanji}) {
    console.log("quizKanji " + practiceKanji);
    return (
        <>
        <h3>Quiz Kanji</h3>
        <StartQuiz />
        </>
    )
}

export default QuizKanji;