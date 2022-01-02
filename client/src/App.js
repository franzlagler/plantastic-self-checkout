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
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  grid-template-areas: "hero main";
`;

const HeroImage = styled.img`
  position: fixed;
  grid-area: hero;
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  grid-area: main;
  padding: 50px;
`;

const promise = loadStripe(
  String(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
);

function App() {
  return (
    <>
      <GlobalStyle />
      <GridContainer>
        <HeroImage src={`${process.env.PUBLIC_URL}/hero.jpg`} />
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
