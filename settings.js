window.settings = {
  cardRegistrationPage: false,
  handleGlobalKeydownEnter: true,
  noSizeIframe: true,
  isToggleButtonEnabled: false,
  openApi: {
    baseUrl: "https://www.pga.gazprombank.ru/api",
    version: "v4",
    portal: "4246218C81AF2F5E6DF9742C494ADF22"
  },
  baseUrl: "pages-mmc-tm",
  // redirectTimeout: 10,
  localization: {
    defaultLang: 'ru',
    allowedLanguages: ['ru', 'en'],
  },
  '3ds2': {
    supported: true,
    versions: ['2.1.0', '2.2.0'],
    browserJsDisabled: '2.2.0',
  },
  requestCancellation: [
    {
      timeout: 100000,
      matchUrls: ['/3ds2-prepare/accept'],
    },
  ],
  qrCodeSize: 182,
  googlePay: {
    // googlePayEnvironment: 'PRODUCTION',
    //googlePayRequestType: 'DIRECT',
    // googlePayAllowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'],
    // googlePayAllowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
    gpay: false,
  },
  stateInProgress: 'no',
  applePay: {
    applePayEnabled: false,
  },
  mirPayResetTimer: 5,
  gppLabel: false /* {
    startDate: '2023-09-29',
    endDate: '2023-09-30',
    position: 'top-left',
  } */,
  expandMerchantInfo: true,
  saveReceiptDefault: false,
  expandableBillDetail: false,
  enableSaveCard: true,
};
