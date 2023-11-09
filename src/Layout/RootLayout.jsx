import { Outlet } from "react-router-dom";
import { Header } from "../Components/Navbar/Navbar";

function Layout() {
return (
    <>
        <Header/>
        <main className="App">
            app
            <Outlet/>
        </main>
    </>
);
}

export default Layout;
