const msalConfig = {
    auth: {
        clientId: "",
        authority: "https://login.microsoftonline.com/{tenantid}",
        redirectUri: "UI_APP_URL"
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

const loginRequest = {
    scopes: ["FULL_BACKEND_APP_SCOPE"]
};

async function login() {

    const response = await msalInstance.loginPopup(loginRequest);

    msalInstance.setActiveAccount(response.account);

    // redirect to products page
    window.location.href = "products.html";
}
