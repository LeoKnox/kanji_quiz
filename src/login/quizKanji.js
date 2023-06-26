import StartQuiz from './startQuiz.js';
import {findKanji} from './kanjis.js';

function QuizKanji({practiceKanji}) {
    let newKanjiList = practiceKanji
        .map(x => ({ x, sort: Math.random() }))
        .sort((i, j) => i.sort - j.sort)
        .map(({x}) => x);
    console.log("quizKanji " + practiceKanji);
    return (
        <>
        <h3>Quiz Kanji</h3>
        {findKanji(newKanjiList[0])}
        <StartQuiz />
        </>
    )
}

export default QuizKanji;