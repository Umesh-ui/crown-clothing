import React from "react";
import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Shop from "./routes/shop/shop.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />{" "}
        {/*When you match / when nothing on it render home as a base component  */}
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
