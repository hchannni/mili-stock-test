import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Main.scss";
import Hotitem from "./Hotitem/Hotitem";
import HotCard from "./Hotitem/HotCard";
import Newitem from "./Newitem/Newitem";
import Saleitem from "./Saleitem/Saleitem";
import CategorySection from "../Category/Category";
import HomeTab from "../HomeTab/HomeTab";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreExpanded: false,
    };
  }

  handleToggleHeight = () => {
    this.setState((prevState) => ({
      showMoreExpanded: !prevState.showMoreExpanded,
    }));
  };

  render() {
    return (
      <>
        <div className = "ScreenContainer">
          <Nav />
          <div className={`Main ${this.state.showMoreExpanded ? "expanded" : ""}`}>
            <main>
              <CategorySection showMoreExpanded={this.state.showMoreExpanded} />

              <div className="SectionHeader">
                <a className="SectionTitle">인기상품</a>
                <a href="/allitems/hotitems" className="SectionPageLink">
                  전체보기
                </a>
              </div>
              <div className="HotItem">
                <HotCard />
                <HotCard />
                <HotCard />
                <HotCard />
              </div>
              <div className="SectionHeader">
                <a className="SectionTitle">신상품</a>
                <a href="/allitems/newitems" className="SectionPageLink">
                  전체보기
                </a>
              </div>
              <div className="NewItem">
                <Newitem />
              </div>
              <div className="SectionHeader">
                <a className="SectionTitle">할인상품</a>
                <a href="/allitems/saleitems" className="SectionPageLink">
                  전체보기
                </a>
              </div>
              <div className="SalseItem">
                <Saleitem />
                <Saleitem />
                <Saleitem />
                <Saleitem />
              </div>
            </main>
          </div>
        </div>
          <div className="BottomMenu">
            <HomeTab />
          </div>
      </>
    );
  }
}