import styled from "styled-components";
import { SmallButton } from "./Miscellaneous";

const PopupContainer = styled.div`
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

const PopupWindow = styled.div`
  position: relative;
  width: 400px;
  min-height: 560px;
  padding: 80px 40px 40px 40px;
  display: grid;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0 20px;
    min-height: 500px;
    padding: 80px 20px 40px 20px;
  }
`;

export const Popup = ({ handleCloseClick, children }) => {
  return (
    <PopupContainer>
      <PopupWindow>
        <SmallButton
          image="close"
          onClick={handleCloseClick}
          aria-label="Close Popup Window"
        />
        {children}
      </PopupWindow>
    </PopupContainer>
  );
};
