import styled from "styled-components";
import { Icon, Paragraph, RegularButton } from "../Miscellaneous";

const ErrorContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const ErrorImage = styled.img`
  width: 80px;
  height: auto;
  margin: 0 auto;
`;

const ErrorMessage = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const Error = ({ handleScanClick }) => {
  return (
    <ErrorContainer>
      <ErrorImage src={`${process.env.PUBLIC_URL}/error.svg`} alt="Error" />
      <ErrorMessage>
        The used barcode does not exist in our database.
      </ErrorMessage>
      <Paragraph>
        Please make sure to only use the official barcodes of our products.
      </Paragraph>

      <RegularButton onClick={handleScanClick}>
        <Icon src={`${process.env.PUBLIC_URL}/scan.svg`} alt="Scan Item" />
        Scan
      </RegularButton>
    </ErrorContainer>
  );
};
