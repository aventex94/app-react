import { SHOW_PRODUCTS } from "../../actions/types";

const initialState = {
  id: 1,
  descrip: "IPA",
  monto: "$20",
};

export default function product(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
}
