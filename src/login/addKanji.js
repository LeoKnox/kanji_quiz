import { findKanji, allMap, everyKanji } from './twoKanjis';

function AddKanji({myKanji}) {
    let x = everyKanji().allKanji;
    console.log(x)
    return (
        <>
        <h3>Add Kanji</h3>
        {myKanji.map(k => (
            <p>{findKanji(k).japanese}</p>
        ))}
        <table>
            <tr>
                <th>Add</th>
                <th>Japanese</th>
                <th>English</th>
            </tr>
            {x.map(l => (
                <tr>
                    <td><button>Add</button></td>
                    <td>{l.japanese}</td>
                    <td>{l.english}</td>
                </tr>
            ))}
        </table>
        </>
    )
}

export default AddKanji;