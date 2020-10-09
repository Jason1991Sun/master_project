import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  OrderWrapper,
  OrderInfo,
  OrderAction,
  OrderHeading,
  CartHeading,
  CartSubHeading,
  OrderSection,
  UserName,
  UserPhone,
  UserAddress,
  CartListContainer,
  CartListContent,
  CartListContentImgWrapper,
  CartListContentImg,
  CartListContentDetails,
  CartListContentName,
  CartListContentSelecterWrapper,
  CartListContentPrice,
  OrderActionWrapper,
  OrderActionContent,
  Strong,
  CartActionButton,
} from "./style";

function TwoDecimal(x) {
  return Number.parseFloat(x).toFixed(2);
}

function Checkout(props) {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.loggedIn);
  const { cartItems } = cart;
  const { userInfo } = user;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  const placeOrderHandler = () => {
    alert(
      "Your order has been placed successfully, you will be redirecting to the PalPay to finish your payment."
    );
    props.history.push("/");
  };
  return (
    <OrderWrapper>
      <OrderInfo>
        <OrderSection>
          <OrderHeading>Order Summery</OrderHeading>
          <UserName>
            <Strong>Name: </Strong> {userInfo.first_name} {userInfo.last_name}
          </UserName>
          <UserPhone>
            <Strong>Phone Number: </Strong> {userInfo.phone_number}
          </UserPhone>
          <UserAddress>
            <Strong>Address: </Strong> {userInfo.street_address}{" "}
            {userInfo.suburb} {userInfo.state} {userInfo.country}{" "}
            {userInfo.post_code}
          </UserAddress>
        </OrderSection>
        <OrderSection>
          <CartListContainer>
            <CartListContent>
              <CartHeading>Shopping Cart</CartHeading>
              <CartSubHeading>Price</CartSubHeading>
            </CartListContent>
            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              cartItems.map((item) => (
                <CartListContent key={item.code}>
                  <CartListContentImgWrapper>
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
                  </CartListContentImgWrapper>
                  <CartListContentDetails>
                    <CartListContentName>
                      <Link to={"/items/" + item.product}>{item.name}</Link>
                    </CartListContentName>
                    <CartListContentSelecterWrapper>
                      Qty: {item.qty}
                    </CartListContentSelecterWrapper>
                  </CartListContentDetails>
                  <CartListContentPrice>
                    ${TwoDecimal(item.price * item.qty)}
                  </CartListContentPrice>
                </CartListContent>
              ))
            )}
          </CartListContainer>
        </OrderSection>
      </OrderInfo>
      <OrderAction>
        <OrderActionWrapper>
          <OrderActionContent>
            <CartActionButton onClick={placeOrderHandler}>
              Place Order
            </CartActionButton>
          </OrderActionContent>
          <OrderActionContent>
            <h3>Order Summary</h3>
          </OrderActionContent>
          <OrderActionContent>
            <div>Items</div>
            <div>${itemsPrice}</div>
          </OrderActionContent>
          <OrderActionContent>
            <div>Shipping</div>
            <div>${shippingPrice}</div>
          </OrderActionContent>
          <OrderActionContent>
            <div>Tax</div>
            <div>${TwoDecimal(taxPrice)}</div>
          </OrderActionContent>
          <OrderActionContent>
            <div>Order Total</div>
            <div>${TwoDecimal(totalPrice)}</div>
          </OrderActionContent>
        </OrderActionWrapper>
      </OrderAction>
    </OrderWrapper>
  );
}

export default Checkout;
