/* const mq = window.matchMedia('(max-width: 2100px)')
 */
let scaleMap

/* if (mq.matches) {
    // ширина окна меньше, чем 2100px
    scale = 12
} else {
    // ширина окна больше, чем 2100px
    scale = 14
} */

let windowWidth = window.innerWidth

/* alert(windowWidth)

let windowHeight = window.innerHeight

alert(windowHeight) */



if (windowWidth > 2600) {
  scaleMap = 11
}
else if (windowWidth < 2000 ) {
  scaleMap = 9
}
else
{
  scaleMap = 10
}


console.log(scaleMap, windowWidth, window.innerHeight)
