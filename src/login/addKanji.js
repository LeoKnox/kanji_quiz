import { findKanji, allMap, everyKanji } from './twoKanjis';

function AddKanji({myKanji, pushKanji}) {
    let x = everyKanji().allKanji;
    console.log(x)
    function changeKanji() {
        console.log("change kanji");
        myKanji.push(18);
    }

    return (
        <>
        <h3>Add Kanji</h3>
        <button onClick={pushKanji(3)}>push</button>
        {myKanji.map(k => (
            <p>{findKanji(k).japanese}</p>
        ))}
        <table className="addTable">
            <tr>
                <th>Add</th>
                <th>Japanese</th>
                <th>English</th>
            </tr>
            {x.map(l => (
                <tr>
                    <td><input onClick={() => changeKanji()} type="checkbox" /></td>
                    <td>{l.japanese}</td>
                    <td>{l.english}</td>
                </tr>
            ))}
        </table>
        </>
    )
}

export default AddKanji;