import styled from "styled-components";
import { useEffect } from "react";
import { Paragraph } from "../Miscellaneous";
import { scanBarcode } from "../../utils/scan";

const ScannerContainer = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const LiveStreamContainer = styled.div`
  width: 320px;
  height: 240px;
  border: 3px solid #212529;
  border-radius: 15px;
  overflow: hidden;
`;

export const Scanner = ({ setFoundProduct, setContent }) => {
  useEffect(() => {
    const response = scanBarcode(setFoundProduct, setContent);
  }, []);
  return (
    <ScannerContainer>
      <LiveStreamContainer id="livestream" />
      <Paragraph bold>Place your barcode in front of your camera.</Paragraph>
    </ScannerContainer>
  );
};
