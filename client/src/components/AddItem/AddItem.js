import { Scanner } from "./Scanner";
import { useEffect, useState } from "react";
import { FoundProduct } from "./FoundProduct";
import { addItemToCookie } from "../../utils/cookies";
import { Error } from "./Error";
import { Popup } from "../Popup";
const Quagga = require("quagga");

export const AddItem = ({ setShowPopup, setBasketCookie }) => {
  const defaultSettings = {
    scanner: true,
    foundItem: false,
    error: false,
  };
  const [content, setContent] = useState(defaultSettings);
  const [givenProductName, setGivenProductName] = useState("");
  const [foundProduct, setFoundProduct] = useState();

  const handleNameInput = ({ currentTarget }) => {
    const value = currentTarget.value;
    setGivenProductName(value);
  };

  const handleCloseClick = () => {
    Quagga.stop();
    setShowPopup((prev) => ({ ...prev, addItem: false }));
    setContent(defaultSettings);
  };

  const handleAddClick = () => {
    const updatedCookie = addItemToCookie("basket", {
      id: foundProduct._id,
      name: givenProductName,
      barcode: foundProduct.barcode,
    });
    setBasketCookie(updatedCookie);
    setShowPopup({ addItem: false, help: false });
    setContent(defaultSettings);
  };

  const handleScanClick = () => {
    setContent(defaultSettings);
  };

  useEffect(() => {
    if (foundProduct) {
      setContent({ scanner: false, foundItem: true, error: false });
    }
  }, [foundProduct]);

  return (
    <Popup handleCloseClick={handleCloseClick}>
      {content.scanner && (
        <Scanner
          setFoundProduct={setFoundProduct}
          setContent={setContent}
          aria-label="Scanner for Barcodes"
        />
      )}
      {content.foundItem && (
        <FoundProduct
          givenProductName={givenProductName}
          handleNameInput={handleNameInput}
          foundProduct={foundProduct}
          handleAddClick={handleAddClick}
        />
      )}
      {content.error && <Error handleScanClick={handleScanClick} />}
    </Popup>
  );
};
