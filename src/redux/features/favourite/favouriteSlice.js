import axios from "axios";

export const addItemsToFavourite = (product) => async (dispatch, getState) => {
  // const { data } = await axios.get(`/api/v2/book/${id}`);
  console.log("action", product);
  dispatch({
    type: "ADD_TO_FAVOURITE",
    payload: {
      ...product,
    },
  });
};

export const clearItemsToFavourite = () => async (dispatch, getState) => {
  // const { data } = await axios.get(`/api/v2/book/${id}`);

  dispatch({
    type: "CLEAR",
  });
};

let initialState = {
  favouriteItems: [],
};

export default function favouriteSlice(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      const item = action.payload;
      const isItemExist = state.favouriteItems.find((i) => i._id === item._id);
      if (isItemExist) {
        return {
          ...state,
          favouriteItems: state.favouriteItems.map((i) =>
            i._id === isItemExist._id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          favouriteItems: [...state.favouriteItems, item],
        };
      }
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}
