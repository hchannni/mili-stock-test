import React from "react";
import URL from "../../url";
import { render } from "@testing-library/react";

export const withInfiniteScroll = (InputComponent, path) => {
    return class OutputComponent extends InputComponent {
        state = {
            productList: [],
            items: 10,
            preItems: 0,
            totalCount: 0,
        };

        componentDidMount() {
            this.getData();
            window.addEventListener("scroll", this.InfiniteScroll);
        }

        componentWillUnmount(){
            window.removeEventListener("scroll", this.InfiniteScroll);
        }

        getData = () => {
            const { preItems, items, productList} = this.state;
            fetch(URL + path, {
                method: "GET",
            })
                .then((res) => res.json())
                .then((res) =>{
                    const result = res.data_list.slice(preItems, items);
                    const totalCount = res.data_list[0].total_count;
                    this.setDtate({
                        productList: [...productList, ...result],
                        totalCount: totalCount,
                    });
                });
        };

        changerOrder = (option = "") => {
            this.setState(
                {
                    productList: [],
                    items: 10,
                    preItems: 0,
                    totalCount: 0,
                },
                () => {
                    const { preItems, items, productList} = this.state;
                    fetch(URL + path + option)
                    .then((res) => res.json())
                    .then((res) => {
                        const result = res.data_list.slice(preItems, items)
                        this.setSate({
                            productList: [...productList, ...result],
                            totalCount: result[0].total_count,
                        });
                    });
                }
            );
        };

        InfiniteScroll = () => {
            const { documentElement, body } = document;
            const { items } = this.state;

            const scrollHeight = Math.max(
                documentElement.scrollHeight,
                body.scrollHeight
            );
            const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
            const clientHeight = documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight) {
                this.setState({
                    preItem: items,
                    items: items + 10,
                });
                this.getData();
            }
        };

        render() {
            const { productList, totalCount }= this.state;
            return (
                <InputComponent
                productList={productList}
                totalCOunt={totalCount}
                changOrder={(option) => this.changeOrder(option)}
                />
            );
        }
    };
};