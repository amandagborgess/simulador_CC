document
  .getElementById("cardForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos
    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolder = document.getElementById("cardHolder").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    // Atualiza os dados do cartão exibido
    document.getElementById("displayCardNumber").textContent =
      formatCardNumber(cardNumber);
    document.getElementById("displayCardHolder").textContent =
      cardHolder.toUpperCase() || "NOME DO TITULAR";
    document.getElementById("displayExpiryDate").textContent =
      expiryDate || "MM/AA";
    document.getElementById("displayCVV").textContent = cvv || "***";
  });

// Formata o número do cartão para aparecer com espaços
function formatCardNumber(number) {
  return number.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
}
