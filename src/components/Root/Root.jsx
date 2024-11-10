import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-100px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;