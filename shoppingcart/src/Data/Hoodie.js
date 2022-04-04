import Apparel from './ApparelConstructor'
import odinMenHoodieWhite from'../Assets/odin-m-h-w.png'
import odinMenHoodieBlue from'../Assets/odin-m-h-b.png'
import odinMenHoodieGray from'../Assets/odin-m-h-g.png'
import odinMenHoodieRed from'../Assets/odin-m-h-r.png'
import odinWomenHoodieWhite from'../Assets/odin-w-h-w.png'
import odinWomenHoodiePink from'../Assets/odin-w-h-pi.png'
import odinWomenHoodiePurple from'../Assets/odin-w-h-pu.png'
import odinWomenHoodieYellow from'../Assets/odin-w-h-y.png'


export const menOdinHoodieWhite = Apparel('men', 'hoodie', 'odin', 'white', odinMenHoodieWhite,)
export const menOdinHoodieBlue = Apparel('men', 'hoodie', 'odin', 'blue', odinMenHoodieBlue,)
export const menOdinHoodieGray = Apparel('men', 'hoodie', 'odin', 'gray', odinMenHoodieGray,)
export const menOdinHoodieRed = Apparel('men', 'hoodie', 'odin', 'red', odinMenHoodieRed,)
export const womenOdinHoodieWhite = Apparel('women', 'hoodie', 'odin', 'white', odinWomenHoodieWhite,)
export const womenOdinHoodiePink = Apparel('women', 'hoodie', 'odin', 'pink', odinWomenHoodiePink,)
export const womenOdinHoodiePurple = Apparel('women', 'hoodie', 'odin', 'purple', odinWomenHoodiePurple,)
export const womenOdinHoodieYellow = Apparel('women', 'hoodie', 'odin', 'yellow', odinWomenHoodieYellow,)

export const menHoodies = [menOdinHoodieBlue, menOdinHoodieGray, menOdinHoodieRed, menOdinHoodieWhite,]
export const womenHoodies = [ womenOdinHoodiePink, womenOdinHoodiePurple, womenOdinHoodieYellow, womenOdinHoodieWhite,]