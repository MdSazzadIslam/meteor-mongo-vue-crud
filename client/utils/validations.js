let required = (propertyType) => {
  return (v) => (v && v.length > 0) || `You must input a ${propertyType}`;
};
let minLength = (propertyType, minLength) => {
  return (v) =>
    (v && v.length >= minLength) ||
    `${propertyType} must be at least ${minLength} characters`;
};

export default {
  required,
  minLength,
};
