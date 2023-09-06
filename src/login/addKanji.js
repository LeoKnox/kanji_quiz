import { findKanji, allMap, allKanji } from './twoKanjis';

function AddKanji({myKanji}) {
    return (
        <>
        <h3>Add Kanji</h3>
        {/*
        {myKanji.map(k => (
            <p>{findKanji(k).japanese}</p>
        ))}
        */}
        {allKanji.map(l => (
            <p>{findKanji(l).japanese}</p>
        ))}
        </>
    )
}

export default AddKanji;