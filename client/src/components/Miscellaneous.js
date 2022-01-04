import styled from "styled-components";
import { Link } from "react-router-dom";

// Button Elements

export const RegularButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  background-color: #9fcf9f;
  border: 2px solid #212529;
  border-radius: 10px;
  color: #212529;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    background-color: #dee2e6;
    opacity: 0.5;
  }
`;

export const SmallButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  background-color: #ff8fa3;
  background-image: ${(props) =>
    "url(" + process.env.PUBLIC_URL + "/" + props.image + ".svg)"};
  background-position: center center;
  background-size: 50%;
  background-repeat: no-repeat;
  border: 2px solid #212529;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`;
export const DeleteButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #ff8fa3;
  background-image: ${(props) =>
    "url(" + process.env.PUBLIC_URL + "/" + props.image + ".svg)"};
  background-position: center center;
  background-size: 50%;
  background-repeat: no-repeat;
  border: 2px solid #212529;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`;

// Links

export const PageLink = styled(Link)`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  background-color: #9fcf9f;
  border: 2px solid #212529;
  border-radius: 10px;
  color: #212529;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;

// Image Elements

export const Logo = styled.img`
  width: 350px;
  height: auto;
  margin: 0 auto 20px auto;
`;

export const Icon = styled.img`
  width: 30px;
  height: auto;
`;

// Field Elements

export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const TextField = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 50px;
  padding: 0 5px;
  border: 3px solid #212529;
  border-radius: 10px;
  font-size: 20px;

  &:placeholder {
    color: #969696;
  }
  &:focus {
    outline: #9fcf9f solid;
  }
`;

// Container Elements

export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

export const ParagraphContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
// Text Elements

export const Heading1 = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;

export const Heading2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: ${(props) => (props.bold ? "600" : "regular")};
`;

export const BoldText = styled.span`
  font-weight: 600;
`;

// Divider Elements

export const HorizontalRuler = styled.hr`
  width: 60%;
  border-top: 3px solid #212529;
  border-radius: 2px;
`;
