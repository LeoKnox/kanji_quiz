import StartQuiz from './startQuiz.js';
//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';

function QuizKanji({practiceKanji}) {
    practiceKanji = practiceKanji
        .map(x => ({ x, sort: Math.random() }))
        .sort((i, j) => i.sort - j.sort)
        .map(({x}) => x);
    console.log("quizKanji " + practiceKanji);
    return (
        <>
        <h3>Quiz Kanji</h3>
        {() => findKanji(practiceKanji[0])}
        <StartQuiz practiceKanji={practiceKanji} />
        </>
    )
}

export default QuizKanji;