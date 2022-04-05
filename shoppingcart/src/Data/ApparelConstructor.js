const Apparel = (type, id, gender, color, theme, price, image, small, medium, large) => {
  return {
    id,
    gender,
    type,
    theme,
    color,
    price,
    image,
    small,
    medium,
    large,
    quantity: small+medium+large
  }
}

export default Apparel