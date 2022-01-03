import styled, { keyframes } from "styled-components";
import { getTotalPrice } from "../../utils/price";
import {
  RegularButton,
  Icon,
  Label,
  Paragraph,
  Heading2,
  FieldContainer,
} from "../Miscellaneous";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { fetchClientSecret } from "../../utils/fetchRequests";
import { useNavigate } from "react-router-dom";
import { Popup } from "../Popup";
import { removeCookie } from "../../utils/cookies";

const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
`;

const BorderContainer = styled.div`
  height: 50px;
  display: grid;
  padding-left: 10px;
  align-content: center;
  border: 2px solid #212529;
  border-radius: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: calc(65%) 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

const CardNumberStyle = {
  style: {
    base: {
      color: "#212529",
      fontFamily: "Quicksand",
      fontSize: "20px",
    },
  },
};

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingAnimation = styled.img`
  width: 30px;
  height: auto;
  animation: ${rotate} 3s linear infinite;
`;

export const Payment = ({ basketCookie, productDetails, setShowPopup }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [disablePayButton, setDisablePayButton] = useState(true);
  const [payButtonContent, setPayButtonContent] = useState("Pay Now");

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleCloseClick = () => {
    setShowPopup((prev) => ({ ...prev, payment: false }));
  };

  const handlePayNowClick = async (e) => {
    setDisablePayButton(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardNumberElement) },
    });

    if ((result.status = "succeeded")) {
      removeCookie("basket");
      navigate("/success");
    } else {
      console.log(result.error);
    }
  };
  useEffect(() => {
    fetchClientSecret(basketCookie, setClientSecret);
    setDisablePayButton(false);
  }, [basketCookie]);

  return (
    <Popup handleCloseClick={handleCloseClick}>
      <PaymentContainer>
        <div>
          <Heading2>Payment</Heading2>
          <Paragraph>
            Please fill in your card details to finish the purchase.
          </Paragraph>
        </div>
        <div>
          <FieldContainer>
            <Label htmlFor="cardNumber">Card Number</Label>

            <BorderContainer>
              <CardNumberElement id="cardNumber" options={CardNumberStyle} />
            </BorderContainer>
          </FieldContainer>
          <GridContainer>
            <FieldContainer>
              <Label htmlFor="expiryDate">Expiry Date</Label>

              <BorderContainer>
                <CardExpiryElement id="expiryDate" options={CardNumberStyle} />
              </BorderContainer>
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="cvc">CVC</Label>
              <BorderContainer>
                <CardCvcElement id="cvc" options={CardNumberStyle} />
              </BorderContainer>
            </FieldContainer>
          </GridContainer>
        </div>
        <RegularButton disabled={disablePayButton} onClick={handlePayNowClick}>
          {!disablePayButton && (
            <>
              <Icon src={`${process.env.PUBLIC_URL}/pay.svg`} />
              Pay {getTotalPrice(productDetails)}€
            </>
          )}
          {disablePayButton && (
            <>
              <LoadingAnimation src={`${process.env.PUBLIC_URL}/loading.svg`} />
              Processing
            </>
          )}
        </RegularButton>
      </PaymentContainer>
    </Popup>
  );
};
