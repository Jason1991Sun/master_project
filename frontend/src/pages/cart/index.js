import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import {
  CartWrapper,
  CartHeading,
  CartSubHeading,
  CartList,
  CartAction,
  CartListContainer,
  CartListContent,
  CartListContentImgWrapper,
  CartListContentImg,
  CartListContentDetails,
  CartListContentName,
  CartListContentSelecterWrapper,
  CartListContentSelecter,
  CartListContentPrice,
  CartActionHeading,
  CartActionButton,
} from "./style";

function Cart(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const itemID = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    if (itemID) {
      dispatch(addToCart(itemID, qty));
    }
  });

  const checkoutHandler = () => {
    props.history.push("/checkout");
  };

  return (
    <CartWrapper>
      <CartList>
        <CartListContainer>
          <CartListContent>
            <CartHeading>Shopping Cart</CartHeading>
            <CartSubHeading>Price</CartSubHeading>
          </CartListContent>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <CartListContent key={item.product}>
                <CartListContentImgWrapper>
                  <Link to={"/items/" + item.product}>
                    <CartListContentImg
                      src={
                        process.env.PUBLIC_URL +
                        "/images/product_images/" +
                        item.cat +
                        "/" +
                        item.code +
                        "/1.jpg"
                      }
                      alt="product"
                    />
                  </Link>
                </CartListContentImgWrapper>
                <CartListContentDetails>
                  <CartListContentName>
                    <Link to={"/items/" + item.product}>{item.name}</Link>
                  </CartListContentName>
                  <CartListContentSelecterWrapper>
                    Qty:
                    <CartListContentSelecter
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </CartListContentSelecter>
                    <button
                      type="button"
                      className="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </CartListContentSelecterWrapper>
                </CartListContentDetails>
                <CartListContentPrice>${item.price}</CartListContentPrice>
              </CartListContent>
            ))
          )}
        </CartListContainer>
      </CartList>
      <CartAction>
        <CartActionHeading>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) : ${" "}
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}
        </CartActionHeading>
        <CartActionButton
          onClick={checkoutHandler}
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </CartActionButton>
      </CartAction>
    </CartWrapper>
  );
}

export default Cart;
