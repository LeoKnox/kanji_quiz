import StartQuiz from './startQuiz.js';
import {findKanji} from './kanjis.js';

function QuizKanji({practiceKanji}) {
    console.log("quizKanji " + practiceKanji);
    return (
        <>
        <h3>Quiz Kanji</h3>
        {findKanji(1)}
        <StartQuiz />
        </>
    )
}

export default QuizKanji;