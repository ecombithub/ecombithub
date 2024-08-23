import Big from "../Migration/big";
import New from "../Migration/new";
import Grow from "../Migration/grow";
import Prest from "../Migration/Prest";
import Word from "../Migration/word";
import Cursor from "../Cursor";

function Migrate() {
    return (
        <>
            <Big />
            <New />
            <Grow />
            <Prest />
            <Word />
            <Cursor />
        </>
    )
}
export default Migrate;