const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    "./src/**/*.php",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./resources/**/*.php",
    "./resources/**/*.html",
    "./node_modules/@left4code/tw-starter/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body':'#F6F7F9',
        'primary-color':'#e8505b',
        'secondary-color':'#B9966E',
        'tertiary-color':'#E8E9EE',
        'primary-font':'#282D3E',
        'secondary-font':'#6A7186',  
        'icon-bg-light':'#FCF5E3',
        'select-flight-b':'#66BD90',
        'toggle-color':'#D8DBE3',
        'bound-green-color':'#43946A',
        'inProgressColor':"rgb(245 158 11)",
        'SuccessColor':'rgb(21 128 61)',
        'failColor':'rgb(190 18 60)',
        'newColor':'rgb(162 28 175)',
        'litepie-primary':colors.gray
      }
      ,
      fontSize:{
        'h1-font':'24px',
        'h2-font':'20px',
        'h3-font':'18px',
        'p1-font':'16px',
        'p2-font':'14px',
        'p3-font':'12px',
        'p4-font':'10px'
      },
      fontFamily: {
        'proxima':'Proxima Nova'
      }
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled']
    },
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin')
  ],
  
}