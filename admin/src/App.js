import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "./redux/actions";

import {
  HomePage,
  SignUp,
  Login,
  Products,
  Orders,
  Category,
  NewPage,
} from "./containers";
import PrivateRoute from "./components/HOC/privateRoute";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    // if (auth.authenticate) {
    //   dispatch(getInitialData());
    // }
  }, [auth.authenticate]);

  return (
    <>
      <ToastContainer />
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/page" component={NewPage} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
