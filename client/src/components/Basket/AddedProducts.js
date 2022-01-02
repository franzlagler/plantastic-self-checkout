import styled from "styled-components";
import { BoldText, Paragraph, DeleteButton } from "../Miscellaneous";

const AddedProductsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const SingleProductContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 80px 1fr 50px;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  max-width: 800px;
  height: 180px;
  margin: 0 auto;
  padding: 5px 0;
  background-color: #fff;
  border-bottom: 2px solid #212529;
  &:last-of-type {
    border-bottom: none;
  }
`;

const SingleProductImage = styled.img`
  width: 80px;
  height: auto;
`;
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

export const AddedProducts = ({ productDetails, handleDeleteProduct }) => {
  return (
    <AddedProductsContainer>
      {productDetails.length !== 0 &&
        productDetails.map((product) => {
          return (
            <SingleProductContainer key={product.keyword}>
              <SingleProductImage
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
            </SingleProductContainer>
          );
        })}
    </AddedProductsContainer>
  );
};
