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

const Tee = (gender,type,color,image) => {
 return {
   gender,
   type,
   color,
   image,
   size: null,
   price: null,
   quantity: null
 }
}
export const menOdinTeeWhite = Tee('men', 'odin', 'white', odinMenTeeWhite,)
export const menOdinTeeBlue = Tee('men', 'odin', 'blue', odinMenTeeBlue,)
export const menOdinTeeGray = Tee('men', 'odin', 'gray', odinMenTeeGray,)
export const menOdinTeeRed = Tee('men', 'odin', 'red', odinMenTeeRed,)
export const menOdinTeeRuby = Tee('men', 'ruby', 'white', odinMenTeeRuby,)
export const menOdinTeeJs = Tee('men', 'js', 'white', odinMenTeeJs,)

export const womenOdinTeeWhite = Tee('women', 'odin', 'white', odinWomenTeeWhite)
export const womenOdinTeePink = Tee('women', 'odin', 'blue', odinWomenTeePink)
export const womenOdinTeePurple = Tee('women', 'odin', 'gray', odinWomenTeePurple)
export const womenOdinTeeYellow = Tee('women', 'odin', 'red', odinWomenTeeYellow)
export const womenOdinTeeRuby = Tee('women', 'ruby', 'white', odinWomenTeeRuby)
export const womenOdinTeeJs = Tee('women', 'js', 'white', odinWomenTeeJs)

export const menTees = [menOdinTeeBlue, menOdinTeeGray, menOdinTeeRed, menOdinTeeWhite, menOdinTeeRuby, menOdinTeeJs]
export const womenTees = [womenOdinTeePink, womenOdinTeePurple, womenOdinTeeYellow, womenOdinTeeWhite, womenOdinTeeRuby, womenOdinTeeJs]