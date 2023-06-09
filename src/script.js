const button = document.querySelector("button");
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
      const cancelUrl = `${window.location.origin}/registration`; // Update the cancel URL here
      const successUrl = `${window.location.origin}/success`; // Add the success URL here
      const updatedUrl = new URL(url);
      updatedUrl.searchParams.set("cancel_url", cancelUrl);
      updatedUrl.searchParams.set("success_url", successUrl);
      window.location.href = updatedUrl.href;
    })
    .catch(e => {
      console.error(e.error);
    });
});
