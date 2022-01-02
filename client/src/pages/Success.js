import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Heading1,
  Icon,
  PageLink,
  Paragraph,
} from "../components/Miscellaneous";

const SuccessContainer = styled.div`
  height: 100%;
  display: grid;
  align-content: space-between;
`;

const TopContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
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
        <Heading1>Your purchase was successful!</Heading1>
        <Paragraph>
          Thank you for buying at Plantastic. We hope you will have a lot of joy
          with your new plants. Don't forget to water them!
        </Paragraph>
      </TopContainer>
      <PageLink to="/">
        <Icon src={`${process.env.PUBLIC_URL}/bag.svg`} />
        Restart
      </PageLink>
    </SuccessContainer>
  );
};
