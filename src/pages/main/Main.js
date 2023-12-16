import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Main.scss";
import Hotitem from "./Hotitem/Hotitem";
import HotCard from "./Hotitem/HotCard";
import Newitem from "./Newitem/Newitem";
import Saleitem from "./Saleitem/Saleitem";
import CategorySection from "../Category/Category";
import ProductCard from "../../components/ProductCard";
import ProductCardLong from "./Saleitem/Saleitem";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreExpanded: false,
      newProducts: [],
      discountProducts: [],
      popularProducts: [],
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
        `${process.env.REACT_APP_DONG10_BASEURL}/products/mainPage`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const pageData = await response.json();
        const { newProducts, discountProducts, popularProducts } = pageData;

        if (
          Array.isArray(newProducts) &&
          Array.isArray(discountProducts) &&
          Array.isArray(popularProducts)
        ) {
          this.setState({
            newProducts,
            discountProducts,
            popularProducts,
          });
        } else {
          console.error("Data is not in the expected format:", pageData);
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

  handleHeartClick = async (item, productType) => {
    const { newProducts, discountProducts, popularProducts } = this.state;

    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `${process.env.REACT_APP_DONG10_BASEURL}/hearts/product/${item.productNumber}`,
        {
          method: item.isHeart ? "DELETE" : "POST", // Use DELETE for unliking
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // Update the state based on the product type
        switch (productType) {
          case 'new':
            this.setState({
              newProducts: newProducts.map((prevItem) =>
                prevItem.productNumber === item.productNumber
                  ? { ...prevItem, isHeart: !item.isHeart }
                  : prevItem
              ),
            });
            break;
          case 'discount':
            this.setState({
              discountProducts: discountProducts.map((prevItem) =>
                prevItem.productNumber === item.productNumber
                  ? { ...prevItem, isHeart: !item.isHeart }
                  : prevItem
              ),
            });
            break;
          case 'popular':
            this.setState({
              popularProducts: popularProducts.map((prevItem) =>
                prevItem.productNumber === item.productNumber
                  ? { ...prevItem, isHeart: !item.isHeart }
                  : prevItem
              ),
            });
            break;
          default:
            break;
        }
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    const { newProducts, discountProducts, popularProducts } = this.state;

    return (
      <>
        <Nav />
        <div
          className={`Main ${this.state.showMoreExpanded ? "expanded" : ""}`}
        >
          <main>
            <CategorySection showMoreExpanded={this.state.showMoreExpanded} />

            <div className="SectionHeader">
              <a className="SectionTitle">인기상품</a>
              <a href="/hotitems" className="SectionPageLink">
                전체보기
              </a>
            </div>
            <div className="HotItem">
              {popularProducts.map((item) => (
                // Use the properties of the heart.product object in the ProductCardSmall component
                <ProductCard
                  key={item.productNumber}
                  name={item.productTitle}
                  price={item.productPrice - item.productDiscountPrice}
                  stocks={item.productStock}
                  imageUrl={item.productImageUrl}
                  isHeart={item.isHeart}
                  onCartClick={() => this.handleCartClick(item)}
                  onHeartClick={() => this.handleHeartClick(item, 'popular')}
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
              <Newitem newProducts={newProducts} handleHeartClick={this.handleHeartClick} />
            </div>
            <div className="SectionHeader" style={{ marginTop: "40px" }}>
              <a className="SectionTitle">할인상품</a>
              <a href="/saleitems" className="SectionPageLink">
                전체보기
              </a>
            </div>
            <div className="SalesItem">
              {discountProducts.map((item) => (
                // Use the properties of the heart.product object in the ProductCardSmall component
                <ProductCardLong
                  key={item.productNumber}
                  name={item.productTitle}
                  saledPrice={item.productPrice - item.productDiscountPrice}
                  price={item.productPrice}
                  stocks={item.productStock}
                  imageUrl={item.productImageUrl}
                  isHeart={item.isHeart}
                  onCartClick={() => this.handleCartClick(item)}
                  onHeartClick={() => this.handleHeartClick(item, 'discount')}
                />
              ))}
            </div>
          </main>
        </div>
      </>
    );
  }
}
