import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Start } from "./pages/Start";
import { Basket } from "./pages/Basket";
import { Success } from "./pages/Success";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0;
}

`;

const GridContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const HeroImage = styled.img`
  position: fixed;
  width: 50%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 1100px) {
    width: 25%;
  }

  @media (max-width: 900px) {
    width: 0%;
  }
`;

const Main = styled.main`
  position: relative;
  width: 50%;
  left: 50%;
  height: 100%;
  padding: 50px;
  @media (max-width: 1100px) {
    left: 25%;
    width: 75%;
  }

  @media (max-width: 900px) {
    left: 0px;

    width: 100%;
  }
`;

const promise = loadStripe(
  String(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
);

function App() {
  return (
    <>
      <GlobalStyle />
      <GridContainer>
        <HeroImage
          src={`${process.env.PUBLIC_URL}/hero.jpg`}
          alt="Hero Image"
        />
        <Elements stripe={promise}>
          <Main>
            <Router>
              <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/success" element={<Success />} />
              </Routes>
            </Router>
          </Main>
        </Elements>
      </GridContainer>
    </>
  );
}

export default App;
