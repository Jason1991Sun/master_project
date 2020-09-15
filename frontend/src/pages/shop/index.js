import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  CatListWrapper,
  ItemsWrapper,
  ItemWrapper,
  Item,
  ItemImg,
  ItemName,
  ItemPrice,
  CatTitle,
  ItemTitle,
  CatWrapper,
  Cat,
  CatName,
} from "./style";

function Shop(props) {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const getItems = axios.get("/api/items");
      const getCat = axios.get("/api/categories");

      axios.all([getItems, getCat]).then(
        axios.spread((...allData) => {
          const itemList = allData[0].data;
          const catList = allData[1].data;

          setItems(itemList);
          setCategories(catList);
        })
      );
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  const CatList = () => {
    return (
      <CatListWrapper>
        <CatTitle>Shop All</CatTitle>
        <CatWrapper>
          {categories.map((cat) => (
            <Cat key={cat.cat_Name}>
              <CatName>{cat.cat_Name}</CatName>
            </Cat>
          ))}
        </CatWrapper>
      </CatListWrapper>
    );
  };

  const Items = () => {
    return (
      <ItemsWrapper>
        <ItemTitle>Shop All</ItemTitle>
        <ItemWrapper>
          {items.map((item) => (
            <Item key={item.Item_Code}>
              <Link to={"/items/" + item.Item_ID}>
                <ItemImg
                  src={
                    process.env.PUBLIC_URL +
                    "/images/product_images/" +
                    item.Item_Category +
                    "/" +
                    item.Item_Code +
                    "/1.jpg"
                  }
                ></ItemImg>
                <ItemName>{item.Item_Name}</ItemName>
                <ItemPrice>${item.Item_Price}</ItemPrice>
              </Link>
            </Item>
          ))}
        </ItemWrapper>
      </ItemsWrapper>
    );
  };

  return (
    <div>
      <CatList />

      <Items />
    </div>
  );
}

export default Shop;
