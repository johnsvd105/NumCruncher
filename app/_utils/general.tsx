export const formatValue = (value) => {
    if (value === 0) {
        return '';
      }
      if (Number.isNaN(value)) {
        return 'NaN'
      }
      if (Math.abs(value) < 0.01) {
        return value.toExponential(2);
      }
  
      const fixedValue = value.toFixed(2);
  
      return parseFloat(fixedValue).toString();
}
