import styled from "styled-components";
import { getTotalPrice } from "../../utils/price";
import {
  RoundButton,
  PopupContainer,
  PopupWindow,
  RegularButton,
  Icon,
  Label,
  Paragraph,
  Heading2,
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

const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-gap: 10px;
  align-content: space-between;
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

export const Payment = ({ basketCookie, productDetails, setShowPopup }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [payButtonContent, setPayButtonContent] = useState("Pay Now");

  const navigate = useNavigate("/success");
  const stripe = useStripe();
  const elements = useElements();

  const handleCloseClick = () => {
    setShowPopup((prev) => ({ ...prev, payment: false }));
  };

  const handlePayNowClick = async (e) => {
    setDisableButton(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardNumberElement) },
    });

    if ((result.status = "succeeded")) {
      navigate("/success");
    }
  };
  useEffect(() => {
    fetchClientSecret(basketCookie, setClientSecret);
    setDisableButton(false);
  }, []);

  return (
    <>
      <PopupContainer>
        <PopupWindow>
          <RoundButton image="close" onClick={handleCloseClick} />
          <PaymentContainer>
            <Heading2>Payment</Heading2>
            <Paragraph>
              Please fill in your card details to finish the purchase.
            </Paragraph>
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>

              <BorderContainer>
                <CardNumberElement id="cardNumber" options={CardNumberStyle} />
              </BorderContainer>
            </div>
            <GridContainer>
              <div>
                <Label htmlFor="expiryDate">Expiry Date</Label>

                <BorderContainer>
                  <CardExpiryElement
                    id="expiryDate"
                    options={CardNumberStyle}
                  />
                </BorderContainer>
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <BorderContainer>
                  <CardCvcElement id="cvc" options={CardNumberStyle} />
                </BorderContainer>
              </div>
            </GridContainer>
            <Heading2>Due Amount: {getTotalPrice(productDetails)}€</Heading2>
            <RegularButton disabled={disableButton} onClick={handlePayNowClick}>
              <Icon src={`${process.env.PUBLIC_URL}/pay.svg`} />
              Pay Now
            </RegularButton>
          </PaymentContainer>
        </PopupWindow>
      </PopupContainer>
    </>
  );
};
