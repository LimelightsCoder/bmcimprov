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
      window.location = url;
    })
    .catch(e => {
      console.error(e.error);
    });
});
