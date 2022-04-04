import Apparel from './ApparelConstructor'
import odinMenTeeWhite from'../Assets/odin-m-t-w.png'
import odinMenTeeBlue from'../Assets/odin-m-t-b.png'
import odinMenTeeGray from'../Assets/odin-m-t-g.png'
import odinMenTeeRed from'../Assets/odin-m-t-r.png'
import odinMenTeeRuby from'../Assets/ruby-m-t-w.png'
import odinMenTeeJs from'../Assets/javascript-m-w.png'
import odinWomenTeeWhite from'../Assets/odin-w-t-w.png'
import odinWomenTeePink from'../Assets/odin-w-t-pi.png'
import odinWomenTeePurple from'../Assets/odin-w-t-pu.png'
import odinWomenTeeYellow from'../Assets/odin-w-t-y.png'
import odinWomenTeeRuby from'../Assets/ruby-w-t-w.png'
import odinWomenTeeJs from'../Assets/javascript-w-t-w.png'


export const menOdinTeeWhite = Apparel('men', 'tee', 'odin', 'white', odinMenTeeWhite,)
export const menOdinTeeBlue = Apparel('men', 'tee', 'odin', 'blue', odinMenTeeBlue,)
export const menOdinTeeGray = Apparel('men', 'tee', 'odin', 'gray', odinMenTeeGray,)
export const menOdinTeeRed = Apparel('men', 'tee', 'odin', 'red', odinMenTeeRed,)
export const menOdinTeeRuby = Apparel('men', 'tee', 'ruby', 'white', odinMenTeeRuby,)
export const menOdinTeeJs = Apparel('men', 'tee', 'js', 'white', odinMenTeeJs,)

export const womenOdinTeeWhite = Apparel('women', 'tee', 'odin', 'white', odinWomenTeeWhite)
export const womenOdinTeePink = Apparel('women', 'tee', 'odin', 'blue', odinWomenTeePink)
export const womenOdinTeePurple = Apparel('women', 'tee', 'odin', 'gray', odinWomenTeePurple)
export const womenOdinTeeYellow = Apparel('women', 'tee', 'odin', 'red', odinWomenTeeYellow)
export const womenOdinTeeRuby = Apparel('women', 'tee', 'ruby', 'white', odinWomenTeeRuby)
export const womenOdinTeeJs = Apparel('women', 'tee', 'js', 'white', odinWomenTeeJs)

export const menTees = [menOdinTeeBlue, menOdinTeeGray, menOdinTeeRed, menOdinTeeWhite, menOdinTeeRuby, menOdinTeeJs]
export const womenTees = [womenOdinTeePink, womenOdinTeePurple, womenOdinTeeYellow, womenOdinTeeWhite, womenOdinTeeRuby, womenOdinTeeJs]