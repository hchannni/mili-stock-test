import React from "react";
import HotCard from "./HotCard";


class Hotitem extends React.Component {
  constructor() {
    super();

    this.state = {
      itemList: [],
    };
  }

  componentDidMount() {
    fetch(/*"http://localhost:3000/data/Hotmock.json"*/)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          itemList: res.data,
        });
      });
  }

  render() {
    const { itemList } = this.state;

    return (
      <div className="Hotitem">
        <div className="HotCardList">
          {itemList.map((card, i) => {
            return <HotCard key={i} img={card.img} />;
          })}
        </div>
      </div>
    );
  }
}

export default Hotitem;