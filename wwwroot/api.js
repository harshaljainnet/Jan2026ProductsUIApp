async function getProducts() {

    const account = msalInstance.getActiveAccount();

    const tokenResponse = await msalInstance.acquireTokenSilent({
        scopes: ["FULL_BACKEND_APP_SCOPE"],
        account: account
    });

    const accessToken = tokenResponse.accessToken;

    const response = await fetch(
        "http://localhost:5041/Products/GetProducts",
        {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        });

    const products = await response.json();

    const table = document.getElementById("productsTable");
    const body = document.getElementById("productsBody");

    body.innerHTML = "";

    products.forEach(p => {
        const row = `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.price}</td>
            </tr>
        `;
        body.innerHTML += row;
    });

    table.style.display = "table";
}
