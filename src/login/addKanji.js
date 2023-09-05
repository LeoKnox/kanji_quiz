import { findKanji } from './twoKanjis';

function AddKanji({myKanji}) {
    return (
        <>
        <h3>Add Kanji</h3>
        {myKanji.map(k => (
            <p>{findKanji(k)}</p>
        ))}
        </>
    )
}

export default AddKanji;