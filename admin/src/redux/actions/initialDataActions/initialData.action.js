import axios from "../../../utils/axios";
import * as orderConstants from '../../constants/orderConstants/orderConstants'
import * as productConstants from '../../constants/productConstants/productConstants'
import * as categoryConstansts from '../../constants/categoryConstants/categoryConstants'

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.post(`/initialData`);
    if (res.status === 200) {
      const { categories, products, orders } = res.data;
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories },
      });
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products },
      });
      dispatch({
        type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
        payload: { orders },
      });
    }
    console.log(res);
  };
};
