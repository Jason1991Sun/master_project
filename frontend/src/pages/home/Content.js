import React, { useEffect, Fragment } from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { listItems } from "../../actions/itemActions";
import {
  ItemWrapper,
  Item,
  ItemImg,
  ItemName,
  ItemPrice,
  HomeHeading,
  NewArrivalsHeading,
} from "./style";

function Content(props) {
  const itemList = useSelector((state) => state.itemList);
  const { items, loading, error } = itemList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listItems());
    return () => {
      //
    };
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <Fragment>
      <Container maxWidth="xl">
        <HomeHeading>featured items</HomeHeading>
        <ItemWrapper>
          {items.slice(0, 4).map((item) => (
            <Item key={item.Item_ID}>
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
        <NewArrivalsHeading>new arrivals</NewArrivalsHeading>
        <ItemWrapper>
          {items.slice(0, 4).map((item) => (
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
      </Container>
    </Fragment>
  );
}

export default Content;
