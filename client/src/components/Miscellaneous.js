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
`;

export const RoundButton = styled.button`
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

export const Icon = styled.img`
  width: 30px;
  height: auto;
`;

// Field Elements

export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 600;
`;

export const TextField = styled.input.attrs({ type: "text" })`
  width: 300px;
  height: 50px;
  margin-top: 5px;
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

export const PopupContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 37, 41, 0.5);
`;

export const PopupWindow = styled.div`
  position: relative;
  width: 400px;
  min-height: 560px;
  padding: 80px 40px;
  display: grid;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
`;

// Text Elements

export const Heading1 = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
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
