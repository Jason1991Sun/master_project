import axios from "axios";
import {
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_FAIL,
} from "../constants/itemConstants";

export const listItems = () => async (dispatch) => {
  try {
    dispatch({ type: ITEM_LIST_REQUEST });
    const { data } = await axios.get("/api/items");
    dispatch({ type: ITEM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_LIST_FAIL, payload: error.message });
  }
};

export const detailsItem = (Item_ID) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_DETAILS_REQUEST, payload: Item_ID });
    const { data } = await axios.get("/api/items/" + Item_ID);
    dispatch({ type: ITEM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_DETAILS_FAIL, payload: error.message });
  }
};
