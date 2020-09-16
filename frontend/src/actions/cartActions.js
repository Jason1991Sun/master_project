import axios from "axios";
import Cookie from "js-cookie";

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (Item_ID, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/merchandises/" + Item_ID);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.short_name,
        cat: data.Item_Category,
        code: data.Item_Code,
        price: data.Item_Price,
        countInStock: data.Item_Quantity,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
