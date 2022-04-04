import odinPhone1Image from'../Assets/odin-phone1.png'
import odinPhone2Image from'../Assets/odin-phone2.png'
import odinMugImage from'../Assets/odin-mug.jpg'
import odinPillowImage from'../Assets/odin-pillow.png'
import odinStickersImage from'../Assets/odin-stickers.png'
import odinToteImage from'../Assets/odin-t-w.jpg'

const Accessory = (type,image) => {
  return {
    type,
    image,
    quantity: null
  }
 }

export const odinCase1 = Accessory('case', odinPhone1Image,)
export const odinCase2 = Accessory('case', odinPhone2Image,)
export const odinMug = Accessory('mug', odinMugImage,)
export const odinPillow = Accessory('pillow', odinPillowImage,)
export const odinStickers = Accessory('sticker', odinStickersImage,)
export const odinTote = Accessory('tote', odinToteImage,)

export const accesories = [odinCase1, odinCase2, odinMug, odinPillow, odinStickers, odinTote]