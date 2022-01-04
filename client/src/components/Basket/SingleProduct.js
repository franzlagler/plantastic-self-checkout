import styled from "styled-components";
import {
  Paragraph,
  BoldText,
  DeleteButton,
  SmallButton,
} from "../Miscellaneous";

// General Styles

const SingleProductName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
`;
const SingleProductDescription = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const SingleProductSecondaryInformation = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
// Regular Single Product

const RegularSingleProductContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 80px 1fr 50px;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  max-width: 800px;
  height: 180px;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #212529;
  border-radius: 15px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const RegularSingleProductImage = styled.img`
  width: 80px;
  height: auto;
`;

export const RegularSingleProduct = ({
  productDetails,
  handleDeleteProduct,
}) => {
  return productDetails.map((product) => {
    return (
      <RegularSingleProductContainer key={product.keyword}>
        <RegularSingleProductImage
          src={`${process.env.PUBLIC_URL}/${product.keyword}.svg`}
          alt="Product Image"
        />
        <SingleProductDescription>
          <div>
            <SingleProductName>{product.name}</SingleProductName>
            <SingleProductSecondaryInformation>
              Genus: {product.genus}
            </SingleProductSecondaryInformation>
            <SingleProductSecondaryInformation>
              EAN: {product.barcode}
            </SingleProductSecondaryInformation>
          </div>

          <Paragraph>
            <BoldText>Price: {product.price.toFixed(2)}€</BoldText>
          </Paragraph>
        </SingleProductDescription>
        <DeleteButton
          image="close"
          id={product.barcode}
          onClick={handleDeleteProduct}
          aria-label="Delete Item"
        />
      </RegularSingleProductContainer>
    );
  });
};

// Mobile Single Product

const MobileSingleProductContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-template-rows: 1fr;
  padding: 20px;
  border: 2px solid #212529;
  border-radius: 15px;

  @media (min-width: 501px) {
    display: none;
  }
`;

const MobileSingleProductImage = styled.img`
  width: 80px;
  height: auto;
  margin: 0 auto;
`;

export const MobileSingleProduct = ({
  productDetails,
  handleDeleteProduct,
}) => {
  return productDetails.map((product) => {
    return (
      <MobileSingleProductContainer>
        <div>
          <SingleProductDescription>
            <div>
              <SingleProductName>{product.name}</SingleProductName>
              <SingleProductSecondaryInformation>
                Genus: {product.genus}
              </SingleProductSecondaryInformation>
              <SingleProductSecondaryInformation>
                EAN: {product.barcode}
              </SingleProductSecondaryInformation>
            </div>
          </SingleProductDescription>
          <MobileSingleProductImage
            src={`${process.env.PUBLIC_URL}/${product.keyword}.svg`}
            alt="Product Image"
          />
          <Paragraph bold>Price: {product.price.toFixed(2)}€</Paragraph>
        </div>
        <DeleteButton
          image="close"
          id={product.barcode}
          onClick={handleDeleteProduct}
          aria-label="Delete Item"
        />
      </MobileSingleProductContainer>
    );
  });
};
