import styled from "styled-components";
import {
  Heading1,
  HorizontalRuler,
  PageLink,
  Paragraph,
  RegularButton,
} from "../components/Miscellaneous";
import { useEffect, useState } from "react";
import { AddItem } from "../components/AddItem/AddItem";
import { deleteItemFromCookie, getCookie, setCookie } from "../utils/cookies";
import { Icon } from "../components/Miscellaneous";
import { fetchProductDetails } from "../utils/fetchRequests";
import { AddedProducts } from "../components/Basket/AddedProducts";
import { getTotalPrice } from "../utils/price";

const BasketContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-content: space-between;
  grid-gap: 40px;
`;

const TopContainer = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const TotalPrice = styled.p`
  font-size: 36px;
  font-weight: 600;
`;

export const Basket = () => {
  const [basketCookie, setBasketCookie] = useState([]);
  const [showPopup, setShowPopup] = useState({ addItem: false, help: false });
  const [productDetails, setProductDetails] = useState([]);

  const handleScanClick = () => {
    setShowPopup((prev) => ({ ...prev, addItem: true }));
  };

  const handleDeleteProduct = ({ currentTarget }) => {
    const barcode = currentTarget.id;
    const updatedCookie = deleteItemFromCookie("basket", barcode);
    setBasketCookie(updatedCookie);
  };

  useEffect(() => {
    if (!getCookie("basket")) {
      setCookie("basket", []);
    }

    setBasketCookie(getCookie("basket"));
  }, []);

  useEffect(() => {
    fetchProductDetails(basketCookie, setProductDetails);
  }, [basketCookie]);
  return (
    <>
      <BasketContainer>
        <TopContainer>
          <Heading1>Basket</Heading1>
          {basketCookie.length === 0 && (
            <Paragraph>Currently no items in basket.</Paragraph>
          )}
          <AddedProducts
            productDetails={productDetails}
            handleDeleteProduct={handleDeleteProduct}
          />
          <RegularButton onClick={handleScanClick}>
            <Icon src={`${process.env.PUBLIC_URL}/scan.svg`} />
            Scan
          </RegularButton>
        </TopContainer>
        <BottomContainer>
          <HorizontalRuler />
          <TotalPrice>
            Total: {getTotalPrice(productDetails).toFixed(2)}€
          </TotalPrice>
          <PageLink to="/payment">
            <Icon src={`${process.env.PUBLIC_URL}/pay.svg`} />
            Pay
          </PageLink>
        </BottomContainer>
      </BasketContainer>
      {showPopup.addItem && (
        <AddItem
          setShowPopup={setShowPopup}
          setBasketCookie={setBasketCookie}
        />
      )}
    </>
  );
};
