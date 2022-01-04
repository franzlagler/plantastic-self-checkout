import styled from "styled-components";
import { useEffect } from "react";
import { Paragraph } from "../Miscellaneous";
import { scanBarcode } from "../../utils/scan";

const ScannerContainer = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const LiveStreamContainer = styled.div`
  border: 3px solid #212529;
  width: auto;
  height: 240px;
  border-radius: 15px;
  overflow: hidden;
  &::ng-deep video {
    width: 100%;
  }
  ::ng-deep canvas {
    position: absolute;
    z-index: 1000;
    right: 0;
    width: 100%;
  }
`;

export const Scanner = ({ setFoundProduct, setContent }) => {
  useEffect(() => {
    scanBarcode(setFoundProduct, setContent);
  }, [setFoundProduct, setContent]);
  return (
    <ScannerContainer>
      <LiveStreamContainer id="livestream" />
      <Paragraph bold>Place your barcode in front of your camera.</Paragraph>
    </ScannerContainer>
  );
};
