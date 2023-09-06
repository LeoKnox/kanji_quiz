import { findKanji, allMap, everyKanji } from './twoKanjis';

function AddKanji({myKanji}) {
    let x = everyKanji();
    console.log(x)
    return (
        <>
        <h3>Add Kanji</h3>
        {/*
        {myKanji.map(k => (
            <p>{findKanji(k).japanese}</p>
        ))}
        */}
        {x.allKanji.map(l => (
            <p>tt {findKanji(l)}</p>
        ))}
        </>
    )
}

export default AddKanji;