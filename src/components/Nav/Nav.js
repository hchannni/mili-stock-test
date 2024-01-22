import React from "react";
import Searchbar from "./Components/Searchbar";
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

class Nav extends React.Component {

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.setState(
                {
                    isLogin: true,
                },
                () => this.getCartInfo()
            );
        }
    }

    render() {
        return (
            <nav className="Nav">
                <div className="Container">
                    <a className="logoWrap" href="/main">
                        <h4 className="logo">Miri</h4>
                    </a>
                    <aside className="icons">
                         <a className="cartLink" href="/cart">
                            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '24px' }} />
                        </a>
                    </aside>
                </div>
                <Searchbar />
            </nav>
        )
    }
}

export default Nav;