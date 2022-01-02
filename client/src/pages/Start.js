import styled from "styled-components";
import {
  Icon,
  Paragraph,
  PageLink,
  ParagraphContainer,
  Logo,
} from "../components/Miscellaneous";

const StartContainer = styled.div`
  height: inherit;
  display: grid;
  justify-content: center;
  align-content: space-between;
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
      <Logo src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" />
      <BottomContainer>
        <ParagraphContainer>
          <Paragraph>
            Use our self-checkout system to purchase your plants. In order to
            get started, simply press the Start Button below.{" "}
          </Paragraph>
        </ParagraphContainer>
        <PageLink to="/basket">
          <Icon src={`${process.env.PUBLIC_URL}/bag.svg`} alt="Start" />
          Start
        </PageLink>
      </BottomContainer>
    </StartContainer>
  );
};
