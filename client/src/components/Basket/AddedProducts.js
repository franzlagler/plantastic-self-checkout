import styled from "styled-components";
import { BoldText, Paragraph, DeleteButton } from "../Miscellaneous";
import { MobileSingleProduct, RegularSingleProduct } from "./SingleProduct";

const AddedProductsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const AddedProducts = ({ productDetails, handleDeleteProduct }) => {
  return (
    <AddedProductsContainer>
      {productDetails.length > 0 && (
        <>
          <RegularSingleProduct
            productDetails={productDetails}
            handleDeleteProduct={handleDeleteProduct}
          />
          <MobileSingleProduct
            productDetails={productDetails}
            handleDeleteProduct={handleDeleteProduct}
          />
        </>
      )}
    </AddedProductsContainer>
  );
};
