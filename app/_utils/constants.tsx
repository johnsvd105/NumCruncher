export const acceptedCurrencyCodes = [
    'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG',
    'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND',
    'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF',
    'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF',
    'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP',
    'FOK', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ',
    'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP',
    'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES',
    'KGS', 'KHR', 'KID', 'KMF', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK',
     'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA','MKD', 
    'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR',
    'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB',
    'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD',
    'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP',
    'SLE', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB', 'TJS',
    'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH',
    'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF',
    'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW', 'ZWL'
];


export const acceptedLengths = {
    centimeter: '',
    decimeter: '',
    feet: '',
    inch: '',
    kilometer: '',
    yard: '',
    meter: '',
    mile: '',
};


export const lengthConversions = {
    centimeter: 'decimeter/10 feet/30.48 inch/2.54 kilometer/100000 yard/91.44 meter/100 mile/160934.4',
    decimeter: 'centimeter*10 feet/3.048 inch*3.937 kilometer/0.0001 yard/9.144 meter/10 mile/16093.44',
    feet: 'centimeter*30.48 decimeter*3.048 inch*12 kilometer/3280.8398950131 yard/3 meter/3.280839895 mile/5280',
    inch: 'centimeter/2.54 decimeter/3.937 feet/12 kilometer/39370.078740157 yard/36 meter/39.37 mile/63360',
    kilometer: 'centimeter*100000 decimeter*10000 feet*3280.8398950131 inch*39370.078740157 yard*1093.6132983377 meter*1000 mile/1.609344',
    yard: 'centimeter*91.44 decimeter*9.144 feet*3 inch*36 kilometer/1093.6132983377 meter/1.0936132983 mile/1760',
    meter: 'centimeter*100 decimeter*10 feet*3.280839895 inch*39.3701 kilometer/1000 yard*1.0936132983 mile/1609.344',
    mile: 'centimeter*160934.4 decimeter*16093.44 feet*5280 inch*63360 kilometer*1.609344 yard*1760 meter*1609.344',
};