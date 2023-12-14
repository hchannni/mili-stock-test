import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Main.scss";
import Hotitem from "./Hotitem/Hotitem";
import HotCard from "./Hotitem/HotCard";
import Newitem from "./Newitem/Newitem";
import Saleitem from "./Saleitem/Saleitem";
import CategorySection from "../Category/Category";
import ProductCard from "../../components/ProductCard";

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMoreExpanded: false,
      items: [],
      count: 0,
    };
  }

  handleToggleHeight = () => {
    this.setState((prevState) => ({
      showMoreExpanded: !prevState.showMoreExpanded,
    }));
  };

  // UseEffect()랑 비슷
  componentDidMount() {
    this.fetchItems();
  }

  async fetchItems() {
    try {
      const token = localStorage.getItem("accessToken");

      const response = await fetch(
        `${process.env.REACT_APP_DONG10_BASEURL}/products/search?size=6&page=0&sortBy=stockLowToHigh`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const pageData = await response.json();
        const items = pageData.content;
        console.log(items)
        if (Array.isArray(items)) {
          this.setState({
            items: items,
            count: pageData.totalElements,
          });
        } else {
          console.error("Data is not an array:", items);
        }
      } else {
        console.error(
          "Failed to fetch items:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  }

  handleCartClick = async (item) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `${process.env.REACT_APP_DONG10_BASEURL}/carts/productNumber/${item.productNumber}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        alert(`${item.productTitle}이 카트에 추가됐습니다!`);
      } else {
        // Handle error response
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error);
    }
  };

  handleHeartClick = async (item) => {
    if (item.isHeart === false) {
      console.log("isHeart==false");
      try {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          `${process.env.REACT_APP_DONG10_BASEURL}/hearts/product/${item.productNumber}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          this.setState((prevState) => ({
            items: prevState.items.map((prevItem) =>
              prevItem.productNumber === item.productNumber
                ? { ...prevItem, isHeart: true }
                : prevItem
            ),
          }));
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      try {
        console.log("isHeart==true");
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          `${process.env.REACT_APP_DONG10_BASEURL}/hearts/product/${item.productNumber}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          this.setState((prevState) => ({
            items: prevState.items.map((prevItem) =>
              prevItem.productNumber === item.productNumber
                ? { ...prevItem, isHeart: false }
                : prevItem
            ),
          }));
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  render() {

    const { items } = this.state;

    return (
      <>
        <Nav />
        <div className={`Main ${this.state.showMoreExpanded ? "expanded" : ""}`}>
          <main>
            <CategorySection showMoreExpanded={this.state.showMoreExpanded} />

            <div className="SectionHeader">
              <a className="SectionTitle">인기상품</a>
              <a href="/hotitems" className="SectionPageLink">
                전체보기
              </a>
            </div>
            <div className="HotItem">
              {items.map((item) => (
                // Use the properties of the heart.product object in the ProductCardSmall component
                <ProductCard
                  key={item.productNumber}
                  name={item.productTitle}
                  price={item.productPrice}
                  stocks={item.productStock}
                  imageUrl={item.productImageUrl}
                  isHeart={item.isHeart}
                  onCartClick={() => this.handleCartClick(item)}
                  onHeartClick={() => this.handleHeartClick(item)}
                />
              ))}
            </div>
            <div className="SectionHeader">
              <a className="SectionTitle">신상품</a>
              <a href="/newitems" className="SectionPageLink">
                전체보기
              </a>
            </div>
            <div className="NewItem">
              <Newitem />
            </div>
            <div className="SectionHeader" style={{ marginTop: "40px" }}>
              <a className="SectionTitle">할인상품</a>
              <a href="/saleitems" className="SectionPageLink">
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
      </>
    );
  }
}