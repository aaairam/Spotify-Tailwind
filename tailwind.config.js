/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue:'#1d75de',
        dark:'#000000',
        light:'#ffffff',
        green:'#1db954',
        darkgreen:'#056952',
        lightgreen:'#c5f0c9',
        gray:'#191414',
        lighter:'#FFFFFF7F',
        pusha:'#af28b1',
        pink:'#f573a0',
        orange:'#f59b23',
        purple:'#b49bc8',
        red:'#ff4632',
        yellow:'#f59b23',
      }
    },

    // container{

    // }
    // container:{
    //   center:true,
    //   padding:'15px',
      
    // },
  },
  plugins: [],
}
