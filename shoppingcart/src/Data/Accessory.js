import odinPhone1Image from'../Assets/odin-phone1.png'
import odinPhone2Image from'../Assets/odin-phone2.png'
import odinMugImage from'../Assets/odin-mug.jpg'
import odinPillowImage from'../Assets/odin-pillow.png'
import odinStickersImage from'../Assets/odin-stickers.png'
import odinToteImage from'../Assets/odin-t-w.jpg'

const Accessory = (id, category, theme, type, price, image, quantity) => {
  return {
    id,
    category,
    theme,
    type,
    price,
    image,
    quantity
  }
 }

export const odinCase1 = Accessory('acc0', 'accessory', 'odin', 'case', 20, odinPhone1Image, 10)
export const odinCase2 = Accessory('acc1', 'accessory', 'odin','case', 20, odinPhone2Image, 10)
export const odinMug = Accessory('acc2', 'accessory', 'odin','mug', 11, odinMugImage, 10)
export const odinPillow = Accessory('acc3', 'accessory', 'odin', 'pillow', 12, odinPillowImage, 10)
export const odinStickers = Accessory('acc4', 'accessory', 'odin', 'sticker', 5, odinStickersImage, 10)
export const odinTote = Accessory('acc5', 'accessory', 'odin', 'tote', 9, odinToteImage, 10)

export const accessories = [odinCase1, odinCase2, odinMug, odinPillow, odinStickers, odinTote]