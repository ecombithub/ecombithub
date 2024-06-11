import Layout from "../Store/layout";
import Brandto from "../Store/brandto";
import Product from "../Store/Product";
import Custum from "../Store/custum";
import Cro from "../Store/cro";
import Get from '../Store/get';
import Cursor from "../Cursor";
function Store() {
    return (
        <>
            <Layout />
            <Brandto />
            <Product />
            <Custum />
            <Cro />
            <Cursor />
        </>
    )
}
export default Store;