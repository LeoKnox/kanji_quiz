import { findKanji } from './twoKanjis';

function AddKanji({myKanji}) {
    console.log(`addKanji myKanji ${typeof(myKanji)}`)
    return (
        <>
        <h3>Add Kanji</h3>
        {myKanji.map(k => (
            <p>{findKanji(k).japanese}</p>
        ))}
        </>
    )
}

export default AddKanji;