import { useState } from "react"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
    }
    return (
        <>
            <nav>
                <div className="view-width">
                    <div style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <HiMiniMagnifyingGlass style={{
                            position: "absolute",
                            color: "black",
                            fontSize: "1.5em",
                            left: "5px"
                        }} />
                        <input type="text" />
                    </div>
                    <button><a href="#">Categories</a></button>
                    <button><a href="#">Website Builders</a></button>
                    <button><a href="#">Today's deals</a></button>
                </div>
            </nav>
            <div className="nav-sidebar">
                <FaBars style={{ fontSize: "1.5em" }}  onClick={toggleSidebar} />
                <input type="text" placeholder="search.." />
                <div className={`side-bar ${open ? "open" : 'close'}`}>
                    <div onClick={toggleSidebar}><MdClose /></div>
                    <div className="nav-links">                       
                        <button><a href="#" tabIndex={"1"}>Categories</a></button>
                        <button><a href="#" tabIndex={"2"}>Website Builders</a></button>
                        <button><a href="#" tabIndex={"3"}>Today's deals</a></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;