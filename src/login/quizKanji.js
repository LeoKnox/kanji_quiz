import StartQuiz from './startQuiz.js';

function QuizKanji({practiceKanji, cn}) {
    practiceKanji = practiceKanji
        .map(x => ({ x, sort: Math.random() }))
        .sort((i, j) => i.sort - j.sort)
        .map(({x}) => x);
    return (
        <>
        <h3>Quiz Kanji</h3>
        <StartQuiz cn={cn} />
        </>
    )
}

export default QuizKanji;