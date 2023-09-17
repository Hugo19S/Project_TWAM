import { BrowserRouter, Route } from "react-router-dom";

import Login from "../pages/LoginPage/LoginPage";
import SignUp from "../pages/SignUp/SignUp";
import { Container } from "reactstrap";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Container>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Container>
    </BrowserRouter>
  );
};

export default MyRoute;
