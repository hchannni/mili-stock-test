import React from "react";
import Card from "Card";
import "./List.scss";

class List extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <ul className="List">
        {productList?.map((product) => {
          return (
            <Card
              key={product.product_id}
              id={product.product_id}
              img={product.main_image}
              name={product.name}
              price={product.price}
              dcprice={product.discout_price}
              dcpercent={product.discout_rate}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
