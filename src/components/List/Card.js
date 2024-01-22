import React from "react";
import { useParams, useNavigate } from 'react-router-dom'; // useLocation 제거
import URL from "../../url";
import "./Card.scss";

class Card extends React.Component {
    state = {
        isCartAdd: false,
        productID: this.props.id,
        cartID: 0,
    };

    handleCart = (cartID) => {
        const { isCartAdd, productID } = this.state;
        if (!isCartAdd) {
            fetch(`${URL}cart`, {
                method: "POST",
                headers: {
                    Authorization: localStorage.getItem("token"),
                    "Content-Type": "application/json", // 올바른 Content-Type 설정
                },
                body: JSON.stringify({ // 오타: JSON.stingify -> JSON.stringify
                    product: productID,
                    count: "1",
                    isCartAdd: true,
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.message) {
                        alert("로그인해주세요!"); // 오타: alert("{로그인해주세요!"); -> alert("로그인해주세요!");
                        return;
                    }
                    this.setState({
                        isCartAdd: !isCartAdd,
                        cartID: res.CART_ID, // 오타: ResizeObserver.CART_ID -> res.CART_ID
                    });
                });
        } else {
            fetch(`${URL}cart/${cartID}`, {
                method: "DELETE",
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            this.setState({
                isCartAdd: !isCartAdd,
            });
        }
    };

    render() {
        const { isCartAdd, cartID } = this.state;
        const { id, name, img, price, dcprice, dcpercent } = this.props;

        return (
            <li className="Card">
                <div>
                    <div
                        onClick={() => useNavigate(`/details/${id}`)} // navigate 사용법 수정
                        className="thumnailWrap"
                    >
                        <div className="imgWrap" />
                        <img alt="상품이미지" className="cardImage" src={img} />
                    </div>
                    <p className="productName">{name}</p>
                    {dcprice !== 0 && (
                        <p className="productDiscountPrice bild">
                            {dcpercent}% {dcprice?.toLocaleString()}원
                        </p>
                    )}
                    <p className={`productPrice bold ${dcprice !== 0 && "original"}`}>
                        {price?.toLocaleString()}원 {/* toLocalString -> toLocaleString */}
                    </p>
                </div>
                <div className="cartWrap">
                    <button
                        className={isCartAdd ? "addCart" : ""}
                        onClick={() => this.handleCart(cartID)}
                        type="button"
                    >
                        담기
                    </button>
                </div>
            </li>
        );
    }
}

export default Card;