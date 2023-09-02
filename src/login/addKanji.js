import { allMap } from './twoKanjis';

function AddKanji() {
    return (
        <>
        <h3>Add Kanji</h3>
        {allMap().japanese}
        </>
    )
}

export default AddKanji;