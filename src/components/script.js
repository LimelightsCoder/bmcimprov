const button = document.querySelector("button");
let checkoutSessionId;

button.addEventListener("click", () => {
  const bundleQuantity = parseInt(document.getElementById("bundleQuantity").textContent);
  const classQuantity = parseInt(document.getElementById("classQuantity").textContent);

  fetch("https://bmc-webapp.onrender.com/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: bundleQuantity },
        { id: 2, quantity: classQuantity },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json();
      return res.json().then(json => Promise.reject(json));
    })
    .then(({ url }) => {
      checkoutSessionId = extractCheckoutSessionId(url);
      window.location = url;
    })
    .catch(e => {
      console.error(e.error);
    });
});

window.onbeforeunload = () => {
  if (checkoutSessionId) {
    // If a checkout session ID is present, it means the user is leaving the checkout screen
    // without completing the payment. We need to cancel the checkout session on the server.
    fetch("https://bmc-webapp.onrender.com/cancel-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: checkoutSessionId,
      }),
    })
      .then(res => {
        if (res.ok) return res.json();
        return res.json().then(json => Promise.reject(json));
      })
      .then(() => {
        console.log("Checkout session cancelled.");
      })
      .catch(e => {
        console.error(e.error);
      });
  }
};

function extractCheckoutSessionId(url) {
  const regex = /\/(cs_[A-Za-z0-9]+)\/redirect/;
  const matches = url.match(regex);
  if (matches && matches.length >= 2) {
    return matches[1];
  }
  return null;
}
