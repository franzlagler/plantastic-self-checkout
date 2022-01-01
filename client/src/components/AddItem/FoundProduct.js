import styled from "styled-components";
import {
  BoldText,
  Label,
  Paragraph,
  RegularButton,
  TextField,
  Icon,
} from "../Miscellaneous";

const ProductContainer = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const ProductImage = styled.img`
  width: 150px;
  height: auto;
  margin: 10px auto;
`;

const Price = styled.p`
  font-size: 28px;
  font-weight: 600;
`;

export const FoundProduct = ({
  givenProductName,
  handleNameInput,
  foundProduct,
  handleAddClick,
}) => {
  const { barcode, price, genus, keyword } = foundProduct;
  return (
    <ProductContainer>
      <ProductImage src={`${process.env.PUBLIC_URL}/${keyword}.svg`} />

      <div>
        <Label htmlFor="name">Name</Label>
        <TextField
          id="name"
          placeholder="Give it a name..."
          value={givenProductName}
          onChange={handleNameInput}
        />
      </div>
      <div>
        <Paragraph>
          <BoldText>Genus: </BoldText>
          {genus}
        </Paragraph>
        <Paragraph>
          <BoldText>EAN: </BoldText>
          {barcode}
        </Paragraph>
      </div>

      <Price>Price: {price.toFixed(2)}€</Price>
      <RegularButton onClick={handleAddClick}>
        <Icon src={`${process.env.PUBLIC_URL}/add.svg`} />
        Add
      </RegularButton>
    </ProductContainer>
  );
};
