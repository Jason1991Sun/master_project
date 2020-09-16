import React, { Fragment, useEffect } from "react";
import {
  NavWrapper,
  ItemDetailsWrapper,
  ItemImgWrapper,
  ItemImg1,
  ItemImg2,
  ItemImg3,
  ItemImg4,
  ItemImg5,
  ItemImg6,
  ItemName,
  ItemPrice,
  ItemDetails,
  DescrHeading,
  ItemDescription,
  QuantityWrapper,
  Cart,
  SmallImg,
} from "./style";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { detailsItem } from "../../actions/itemActions";

function Item(props) {
  const itemDetails = useSelector((state) => state.itemDetails);
  const { item, loading, error } = itemDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsItem(props.match.params.id));
    return () => {
      //
    };
  }, []);
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    formControl: {
      maxWidth: 120,
    },
    menuItem: {
      padding: 15,
    },
  }));

  const classes = useStyles();

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <Fragment>
      <Container maxWidth="xl">
        <NavWrapper>
          <div className={classes.root}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link color="inherit" href="/shop">
                Shop All
              </Link>
              <Link color="inherit" href="/getting-started/installation/">
                {item.Item_Category}
              </Link>
              <Typography color="textPrimary">{item.short_name}</Typography>
            </Breadcrumbs>
          </div>
        </NavWrapper>
        <ItemDetailsWrapper>
          <ItemImgWrapper>
            <SmallImg>
              <ItemImg1
                src={
                  process.env.PUBLIC_URL +
                  "/images/product_images/" +
                  item.Item_Category +
                  "/" +
                  item.Item_Code +
                  "/1.jpg"
                }
              ></ItemImg1>
              <ItemImg2
                src={
                  process.env.PUBLIC_URL +
                  "/images/product_images/" +
                  item.Item_Category +
                  "/" +
                  item.Item_Code +
                  "/2.jpg"
                }
              ></ItemImg2>
              <ItemImg3
                src={
                  process.env.PUBLIC_URL +
                  "/images/product_images/" +
                  item.Item_Category +
                  "/" +
                  item.Item_Code +
                  "/3.jpg"
                }
              ></ItemImg3>
              <ItemImg4
                src={
                  process.env.PUBLIC_URL +
                  "/images/product_images/" +
                  item.Item_Category +
                  "/" +
                  item.Item_Code +
                  "/4.jpg"
                }
              ></ItemImg4>
              <ItemImg5
                src={
                  process.env.PUBLIC_URL +
                  "/images/product_images/" +
                  item.Item_Category +
                  "/" +
                  item.Item_Code +
                  "/5.jpg"
                }
              ></ItemImg5>
              <ItemImg6
                src={
                  process.env.PUBLIC_URL +
                  "/images/product_images/" +
                  item.Item_Category +
                  "/" +
                  item.Item_Code +
                  "/1.jpg"
                }
              ></ItemImg6>
            </SmallImg>
          </ItemImgWrapper>
          <ItemDetails>
            <ItemName>{item.short_name}</ItemName>
            <ItemPrice>$ {item.Item_Price}</ItemPrice>

            <QuantityWrapper></QuantityWrapper>
            <Cart></Cart>
          </ItemDetails>
          <ItemDescription>
            <DescrHeading>Description</DescrHeading>
            {item.Description}
          </ItemDescription>
        </ItemDetailsWrapper>
      </Container>
    </Fragment>
  );
}

export default Item;
