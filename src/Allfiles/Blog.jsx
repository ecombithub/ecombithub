
import Local from "../Blog/local";
import Digital from "../Blog/digital";
import Seo from "../Blog/seo";
import Cont from "../Blog/contant";
import People from "../Blog/people";
import Store from "../Blog/store";
import Tech from "../Blog/tech";
import Get from "../Blog/get";
import Navbar from "../Header";
import Bar from "../Blog/bar";
import Mark from "../Blog/Mark";
import Cursor from "../Cursor";
function Blog() {
    return (
        <>
             <Bar/>
             <Mark/>
            <Local />
            <Digital />
            <Seo />
            <Cont />
            <People />
            <Store />
            <Tech />
            <Cursor/>
        </>
    )
}
export default Blog;