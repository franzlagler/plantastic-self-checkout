const Quagga = require("quagga");

export const scanBarcode = (setFoundProduct, setContent) => {
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#livestream"),
        constraints: {
          width: 320,
          height: 240,
        },
      },
      decoder: {
        readers: ["ean_reader"],
      },
    },
    function (err) {
      if (err) {
        console.log(err);
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    }
  );
  Quagga.onDetected(async (data) => {
    Quagga.stop();
    const barcode = data.codeResult.code;
    const res = await fetch(
      "https://plantastic-server.herokuapp.com/findProduct",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ barcode }),
      }
    );
    const response = await res.json();
    if (response.product) {
      setFoundProduct(response.product);
      return;
    }

    console.log(response.error);
    setContent({ scanner: false, foundItem: false, error: true });
  });
};
