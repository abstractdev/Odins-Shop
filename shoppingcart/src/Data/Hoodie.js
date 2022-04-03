import odinMenHoodieWhite from'../Assets/odin-m-h-w.png'
import odinMenHoodieBlue from'../Assets/odin-m-h-b.png'
import odinMenHoodieGray from'../Assets/odin-m-h-g.png'
import odinMenHoodieRed from'../Assets/odin-m-h-r.png'
import odinWomenHoodieWhite from'../Assets/odin-w-h-w.png'
import odinWomenHoodiePink from'../Assets/odin-w-h-pi.png'
import odinWomenHoodiePurple from'../Assets/odin-w-h-pu.png'
import odinWomenHoodieYellow from'../Assets/odin-w-h-y.png'

const Hoodie = (gender,type,color,image) => {
  return {
    gender,
    type,
    color,
    image,
    size: null,
    price: null
  }
 }

export const menOdinHoodieWhite = Hoodie('men', 'odin', 'white', odinMenHoodieWhite,)
export const menOdinHoodieBlue = Hoodie('men', 'odin', 'blue', odinMenHoodieBlue,)
export const menOdinHoodieGray = Hoodie('men', 'odin', 'gray', odinMenHoodieGray,)
export const menOdinHoodieRed = Hoodie('men', 'odin', 'red', odinMenHoodieRed,)
export const womenOdinHoodieWhite = Hoodie('women', 'odin', 'white', odinWomenHoodieWhite,)
export const womenOdinHoodiePink = Hoodie('women', 'odin', 'pink', odinWomenHoodiePink,)
export const womenOdinHoodiePurple = Hoodie('women', 'odin', 'purple', odinWomenHoodiePurple,)
export const womenOdinHoodieYellow = Hoodie('women', 'odin', 'yellow', odinWomenHoodieYellow,)

export const menHoodies = [menOdinHoodieWhite, menOdinHoodieBlue, menOdinHoodieGray, menOdinHoodieRed]
export const womenHoodies = [womenOdinHoodieWhite, womenOdinHoodiePink, womenOdinHoodiePurple, womenOdinHoodieYellow]