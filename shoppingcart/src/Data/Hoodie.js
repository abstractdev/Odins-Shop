import Apparel from './ApparelConstructor'
import odinMenHoodieWhite from'../Assets/odin-m-h-w.png'
import odinMenHoodieBlue from'../Assets/odin-m-h-b.png'
import odinMenHoodieGray from'../Assets/odin-m-h-g.png'
import odinMenHoodieRed from'../Assets/odin-m-h-r.png'
import odinWomenHoodieWhite from'../Assets/odin-w-h-w.png'
import odinWomenHoodiePink from'../Assets/odin-w-h-pi.png'
import odinWomenHoodiePurple from'../Assets/odin-w-h-pu.png'
import odinWomenHoodieYellow from'../Assets/odin-w-h-y.png'


export const menOdinHoodieBlue = Apparel('mh0','men', 'hoodie', 'odin', 'blue', odinMenHoodieBlue, 10, 10, 10)
export const menOdinHoodieGray = Apparel('mh1','men', 'hoodie', 'odin', 'gray', odinMenHoodieGray, 10, 10, 10)
export const menOdinHoodieRed = Apparel('mh2','men', 'hoodie', 'odin', 'red', odinMenHoodieRed, 10, 10, 10)
export const menOdinHoodieWhite = Apparel('mh3', 'men', 'hoodie', 'odin', 'white', odinMenHoodieWhite, 10, 10, 10)
export const womenOdinHoodiePink = Apparel('wh0', 'women', 'hoodie', 'odin', 'pink', odinWomenHoodiePink, 10, 10, 10)
export const womenOdinHoodiePurple = Apparel('wh1','women', 'hoodie', 'odin', 'purple', odinWomenHoodiePurple, 10, 10, 10)
export const womenOdinHoodieYellow = Apparel('wh2','women', 'hoodie', 'odin', 'yellow', odinWomenHoodieYellow, 10, 10, 10)
export const womenOdinHoodieWhite = Apparel('wh3','women', 'hoodie', 'odin', 'white', odinWomenHoodieWhite, 10, 10, 10)

export const menHoodies = [menOdinHoodieBlue, menOdinHoodieGray, menOdinHoodieRed, menOdinHoodieWhite,]
export const womenHoodies = [ womenOdinHoodiePink, womenOdinHoodiePurple, womenOdinHoodieYellow, womenOdinHoodieWhite,]