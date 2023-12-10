import React from "react";
import Searchbar from "./Components/Searchbar";
import URL from "../../url";
import "./Nav.scss";

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

    getCartInfo = () => {
        fetch(`${URL}cart`, {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                itemInCart: res.carts.length,
            });
        });
    };

    render() {
        return (
            <nav className="Nav">
                <div className="Container">
                    <a className="logoWrap" href="/">
                        <img
                            className="logo"
                            alt="미리스톡로고"
                            src=""
                        />
                    </a>
                    <aside className="icons">
                         <a className="cartLink" href="/cart">
                             <img 
                                className="cart"
                                alt="장바구니"
                                src=""
                            />
                        </a>
                    </aside>
                </div>
                <Searchbar />
            </nav>
        )
    }
}

export default Nav;