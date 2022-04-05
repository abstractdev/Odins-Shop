
const Apparel = (gender,type,theme,color,image, small, medium, large) => {
  return {
    gender,
    type,
    theme,
    color,
    image,
    price: {
      tee: 20,
      hoodie: 30
    },
    small,
    medium,
    large,
    quantity: small+medium+large
  }
}

export default Apparel