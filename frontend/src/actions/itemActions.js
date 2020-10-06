import axios from "axios";
import {
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_FAIL,
  ITEM_SAVE_REQUEST,
  ITEM_SAVE_SUCCESS,
  ITEM_SAVE_FAIL,
  ITEM_DELETE_SUCCESS,
  ITEM_DELETE_FAIL,
  ITEM_DELETE_REQUEST,
} from "../constants/itemConstants";

export const listItems = () => async (dispatch) => {
  try {
    dispatch({ type: ITEM_LIST_REQUEST });
    const { data } = await axios.get("/merchandises");
    dispatch({ type: ITEM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_LIST_FAIL, payload: error.message });
  }
};

export const detailsItem = (Item_ID) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_DETAILS_REQUEST, payload: Item_ID });
    const { data } = await axios.get("/merchandises/" + Item_ID);
    dispatch({ type: ITEM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_DETAILS_FAIL, payload: error.message });
  }
};

export const saveItem = (item) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_SAVE_REQUEST, payload: item });
    if (!item._id) {
      const { data } = await axios.post("/merchandises", item);
      dispatch({ type: ITEM_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put("/merchandises/" + item._id, item);
      dispatch({ type: ITEM_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: ITEM_SAVE_FAIL, payload: error.message });
  }
};

export const deleteItem = (item_ID) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_DELETE_REQUEST, payload: item_ID });
    const { data } = await axios.delete("/merchandises/" + item_ID);
    dispatch({ type: ITEM_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: ITEM_DELETE_FAIL, payload: error.message });
  }
};
