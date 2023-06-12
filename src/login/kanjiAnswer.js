function KanjiAnswer({answer}) {
    if (answer === 0) {
        alert("0")
    }
    return (
        <>
        <p>Kanji Answer:</p>
        <p>{answer}</p>
        </>
    )
}

export default KanjiAnswer;