const Apparel = (id, gender, type, theme, color, price, image, small, medium, large) => {
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
    category: 'apparel'
  }
}

export default Apparel