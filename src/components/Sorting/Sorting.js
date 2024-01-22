import React from "react";
import "./Sorting.scss";

class Sorting extends React.Component {
    state = {
        whichModalShown: 0,
    };

    chowOption = (e) => {
        const { whichModalShown } = this.state;
        const { name }= e.target;
        const idx = Number(name);
        this.setState({
            whichModalShown: whichModalShown !== idx ? idx : 0,
        });    
    };

    render() {
        const { whichModalShown }= this.state;
        const { changeOrder } = this.props;
        return (
            <div className="Sorting">
                <ul className="sortItems">
                    <li className="listTyle">
                        <button
                        className="sortingType sortBtn"
                        onClick={this.showOption}
                        name={1}
                        >
                            판매량순
                        </button>
                        <div 
                        className={`selectModalWrap selectType
                                        ${whichModalShown === 1 ? "" : "hidden"}`}
                        >
                            <ul className="sortType">
                                <li className="selectModalItem">
                                    <p
                                    className="selectModalOption orderHot"
                                    onClick={() => changeOrder("")}>
                                        판매량순
                                    </p>
                                </li>
                                <li
                                className="selectModalItem"
                                onClick={() => changeOrder("/new")}>
                                    <p className="selectModalOption orderNew">신상품(재입고)순</p>
                                </li>
                                <li
                                className="selectModalItem"
                                onClick={() => changeOrder("?ordering=-price")}>
                                    <p className="selectModalOption orderLowPrice">낮은 가격순</p>
                                </li>
                                <li
                                className="selectModalItem"
                                onClick={() => changeOrder("?ordering=price")}>
                                    <p className="selectModalOption orderHighPrice">높은 가격순</p>
                                </li>
                                <li
                                className="selectModalItem"
                                onClick={() => changeOrder("?ordering=-stock")}>
                                    <p className="selectModalOption orderLowStock">적은 재고순</p>
                                </li>
                                <li
                                className="selectModalItem"
                                onClick={() => changeOrder("?ordering=stock")}>
                                    <p className="selectModalOption orderHighStock">많은 재고순</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sorting;