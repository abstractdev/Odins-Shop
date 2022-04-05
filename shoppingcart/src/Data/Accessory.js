import odinPhone1Image from'../Assets/odin-phone1.png'
import odinPhone2Image from'../Assets/odin-phone2.png'
import odinMugImage from'../Assets/odin-mug.jpg'
import odinPillowImage from'../Assets/odin-pillow.png'
import odinStickersImage from'../Assets/odin-stickers.png'
import odinToteImage from'../Assets/odin-t-w.jpg'

const Accessory = (type,image, quantity) => {
  return {
    type,
    image,
    price: {
      case: 20,
      mug: 7,
      pillow: 10,
      sticker: 5,
      tote: 10
    },
    quantity
  }
 }

export const odinCase1 = Accessory('case', odinPhone1Image, 10)
export const odinCase2 = Accessory('case', odinPhone2Image, 10)
export const odinMug = Accessory('mug', odinMugImage, 10)
export const odinPillow = Accessory('pillow', odinPillowImage, 10)
export const odinStickers = Accessory('sticker', odinStickersImage, 10)
export const odinTote = Accessory('tote', odinToteImage, 10)

export const accessories = [odinCase1, odinCase2, odinMug, odinPillow, odinStickers, odinTote]