import StartQuiz from './startQuiz.js';
//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';

function QuizKanji({practiceKanji, cn}) {
    practiceKanji = practiceKanji
        .map(x => ({ x, sort: Math.random() }))
        .sort((i, j) => i.sort - j.sort)
        .map(({x}) => x);
    console.log("quizKanji " + practiceKanji);
    //console.log(findKanji(practiceKanji[0]));
    return (
        <>
        <h3>Quiz Kanji</h3>
        <StartQuiz practiceKanji={practiceKanji} cn={cn()} />
        </>
    )
}

export default QuizKanji;