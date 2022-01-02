import styled from "styled-components";
import { Icon, Paragraph, PageLink } from "../components/Miscellaneous";

const StartContainer = styled.div`
  height: inherit;
  display: grid;
  justify-content: center;
  align-content: space-between;
`;

const CheckoutImage = styled.img`
  width: 350px;
  height: auto;
  margin: 0 auto;
`;
const BottomContainer = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-gap: 30px;
`;

export const Start = (props) => {
  return (
    <StartContainer>
      <CheckoutImage src={`${process.env.PUBLIC_URL}/logo.svg`} />
      <BottomContainer>
        <Paragraph>
          Use our self-checkout system to purchase your plants. In order to get
          started, simply press the Start Button below.{" "}
        </Paragraph>
        <PageLink to="/basket">
          <Icon src={`${process.env.PUBLIC_URL}/bag.svg`} />
          Start
        </PageLink>
      </BottomContainer>
    </StartContainer>
  );
};
