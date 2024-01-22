import React from "react";
import List from "../../../components/List/List";
import Sorting from "../../../components/Sorting/Sorting";
import { withInfiniteScroll } from "../hoc";
import "./Allitem.scss";

class Allitem extends React.Component {
  render() {
    const { productList, totalCount, changeOrder } = this.props;
    return (
      <article className="Allitem">
        <div className="topInfo">
          <div className="totalItems">
            <p className="totalNum">
              총 <span className="pointSpan">{totalCount}</span> 개의 상품이
              조회되었습니다.
            </p>
          </div>
          <Sorting changeOrder={changeOrder} />
        </div>
        <List productList={productList} />
      </article>
    );
  }
}

export default withInfiniteScroll(Allitem, "products");
