window.settings = {
  cardRegistrationPage: false,
  handleGlobalKeydownEnter: true,
  noSizeIframe: true,
  isToggleButtonEnabled: false,
  openApi: {
    baseUrl: "https://lt.pga.gazprombank.ru/api",
    version: "v4",
    portal: "5BAE2814BB16ED0AA4A146AA4A4E168D",
  },
  baseUrl: "",
  localization: {
    defaultLang: "ru",
    allowedLanguages: ["ru", "en"],
  },
  "3ds2": {
    supported: true,
    versions: ["2.1.0", "2.2.0"],
    browserJsDisabled: "2.2.0",
  },
  requestCancellation: [
    {
      timeout: 10000,
      matchUrls: ["/3ds2-prepare/accept"],
    },
  ],
  qrCodeSize: 182, //default 256
  googlePay: {
    gpay: false,
  },
};
