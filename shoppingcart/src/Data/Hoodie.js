import Apparel from './ApparelConstructor'
import odinMenHoodieWhite from'../Assets/odin-m-h-w.png'
import odinMenHoodieBlue from'../Assets/odin-m-h-b.png'
import odinMenHoodieGray from'../Assets/odin-m-h-g.png'
import odinMenHoodieRed from'../Assets/odin-m-h-r.png'
import odinWomenHoodieWhite from'../Assets/odin-w-h-w.png'
import odinWomenHoodiePink from'../Assets/odin-w-h-pi.png'
import odinWomenHoodiePurple from'../Assets/odin-w-h-pu.png'
import odinWomenHoodieYellow from'../Assets/odin-w-h-y.png'


export const menOdinHoodieWhite = Apparel('men', 'hoodie', 'odin', 'white', odinMenHoodieWhite, 10, 10, 10)
export const menOdinHoodieBlue = Apparel('men', 'hoodie', 'odin', 'blue', odinMenHoodieBlue, 10, 10, 10)
export const menOdinHoodieGray = Apparel('men', 'hoodie', 'odin', 'gray', odinMenHoodieGray, 10, 10, 10)
export const menOdinHoodieRed = Apparel('men', 'hoodie', 'odin', 'red', odinMenHoodieRed, 10, 10, 10)
export const womenOdinHoodieWhite = Apparel('women', 'hoodie', 'odin', 'white', odinWomenHoodieWhite, 10, 10, 10)
export const womenOdinHoodiePink = Apparel('women', 'hoodie', 'odin', 'pink', odinWomenHoodiePink, 10, 10, 10)
export const womenOdinHoodiePurple = Apparel('women', 'hoodie', 'odin', 'purple', odinWomenHoodiePurple, 10, 10, 10)
export const womenOdinHoodieYellow = Apparel('women', 'hoodie', 'odin', 'yellow', odinWomenHoodieYellow, 10, 10, 10)

export const menHoodies = [menOdinHoodieBlue, menOdinHoodieGray, menOdinHoodieRed, menOdinHoodieWhite,]
export const womenHoodies = [ womenOdinHoodiePink, womenOdinHoodiePurple, womenOdinHoodieYellow, womenOdinHoodieWhite,]