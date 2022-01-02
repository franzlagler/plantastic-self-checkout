import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Heading1,
  Heading2,
  Icon,
  Logo,
  PageLink,
  Paragraph,
  ParagraphContainer,
} from "../components/Miscellaneous";

const SuccessContainer = styled.div`
  height: 100%;
  display: grid;
  align-content: space-between;
`;

const TopContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
`;

export const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 30000);
  }, [navigate]);
  return (
    <SuccessContainer>
      <TopContainer>
        <Logo src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" />
        <Heading2>Your purchase was successful!</Heading2>
        <ParagraphContainer>
          <Paragraph>
            Thank you for buying at Plantastic. We hope you will have a lot of
            joy with your new plants. Don't forget to water them!
          </Paragraph>
        </ParagraphContainer>
      </TopContainer>
      <PageLink to="/">
        <Icon src={`${process.env.PUBLIC_URL}/bag.svg`} alt="Restart" />
        Restart
      </PageLink>
    </SuccessContainer>
  );
};
