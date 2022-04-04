
const Apparel = (gender,type,theme,color,image) => {
  return {
    gender,
    type,
    theme,
    color,
    image,
    size: null,
    price: {
      tee: 10,
      hoodie: 20,
      accessory: 5
    },
    quantity: null
  }
}

export default Apparel