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


export const menOdinTeeBlue = Apparel('mt0','men', 'tee', 'odin', 'blue', odinMenTeeBlue, 10, 10, 10)
export const menOdinTeeGray = Apparel('mt1','men', 'tee', 'odin', 'gray', odinMenTeeGray, 10, 10, 10)
export const menOdinTeeRed = Apparel('mt2','men', 'tee', 'odin', 'red', odinMenTeeRed, 10, 10, 10)
export const menOdinTeeWhite = Apparel('mt3', 'men', 'tee', 'odin', 'white', odinMenTeeWhite, 10, 10, 10)
export const menOdinTeeRuby = Apparel('mt4','men', 'tee', 'ruby', 'white', odinMenTeeRuby, 10, 10, 10)
export const menOdinTeeJs = Apparel('mt5','men', 'tee', 'js', 'white', odinMenTeeJs, 10, 10, 10)

export const womenOdinTeePink = Apparel('wt0','women', 'tee', 'odin', 'blue', odinWomenTeePink, 10, 10, 10)
export const womenOdinTeePurple = Apparel('wt1','women', 'tee', 'odin', 'gray', odinWomenTeePurple, 10, 10, 10)
export const womenOdinTeeYellow = Apparel('wt2','women', 'tee', 'odin', 'red', odinWomenTeeYellow, 10, 10, 10)
export const womenOdinTeeWhite = Apparel('wt3','women', 'tee', 'odin', 'white', odinWomenTeeWhite, 10, 10, 10)
export const womenOdinTeeRuby = Apparel('wt4','women', 'tee', 'ruby', 'white', odinWomenTeeRuby, 10, 10, 10)
export const womenOdinTeeJs = Apparel('wt5','women', 'tee', 'js', 'white', odinWomenTeeJs, 10, 10, 10)

export const menTees = [menOdinTeeBlue, menOdinTeeGray, menOdinTeeRed, menOdinTeeWhite, menOdinTeeRuby, menOdinTeeJs]
export const womenTees = [womenOdinTeePink, womenOdinTeePurple, womenOdinTeeYellow, womenOdinTeeWhite, womenOdinTeeRuby, womenOdinTeeJs]