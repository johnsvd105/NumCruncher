export const getCurrencyRate= async(fromCurrency, toCurrency) => {
    const apiKey = process.env.EXPO_PUBLIC_EXCHANGE_RATE_API_KEY;

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.result === 'success') {
        return data.conversion_rate;
      } else {
        throw new Error('Failed to fetch conversion rate');
      }
    } catch (error) {
      console.error(error);
      return null;
    }
}