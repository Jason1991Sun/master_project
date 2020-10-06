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

function itemListReducer(state = { items: [] }, action) {
  switch (action.type) {
    case ITEM_LIST_REQUEST:
      return { loading: true };
    case ITEM_LIST_SUCCESS:
      return { loading: false, items: action.payload };
    case ITEM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function itemDetailsReducer(state = { item: {} }, action) {
  switch (action.type) {
    case ITEM_DETAILS_REQUEST:
      return { loading: true };
    case ITEM_DETAILS_SUCCESS:
      return { loading: false, item: action.payload };
    case ITEM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function itemDeleteReducer(state = { item: {} }, action) {
  switch (action.type) {
    case ITEM_DELETE_REQUEST:
      return { loading: true };
    case ITEM_DELETE_SUCCESS:
      return { loading: false, item: action.payload, success: true };
    case ITEM_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function itemSaveReducer(state = { item: {} }, action) {
  switch (action.type) {
    case ITEM_SAVE_REQUEST:
      return { loading: true };
    case ITEM_SAVE_SUCCESS:
      return { loading: false, success: true, item: action.payload };
    case ITEM_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export {
  itemListReducer,
  itemDetailsReducer,
  itemDeleteReducer,
  itemSaveReducer,
};
