import { findKanji, allMap } from './twoKanjis';

function AddKanji({myKanji}) {
    return (
        <>
        <h3>Add Kanji</h3>
        {/*
        {myKanji.map(k => (
            <p>{findKanji(k).japanese}</p>
        ))}
        */}
        {allMap()}
        </>
    )
}

export default AddKanji;