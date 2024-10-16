import Footer from "./component/Footer";
import Header from "./component/Header";
import {Outlet} from "react-router-dom"
const Layout=()=>{
    return(
        <>
        <Header></Header>
        <hr size="4px" color="red"></hr>
        <Outlet></Outlet>
        <hr size="4px" color="green"></hr>
        <Footer></Footer>
        </>
    )
}
export default Layout;