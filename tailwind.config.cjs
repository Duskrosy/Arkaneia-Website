/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./src/**/*.{astro,html,js,tsx,jsx}',
],
theme: {
extend: {
colors: {
bg: '#0A0A0A',
purple: '#7A00FF',
magenta: '#FF007F',
electric: '#00D4FF',
graylite: '#B3B3B3'
},
borderRadius: {
'pill': '9999px'
},
boxShadow: {
glass: '0 8px 20px rgba(0,0,0,.45), 0 2px 6px rgba(0,0,0,.25)'
},
backdropBlur: {
18: '18px',
24: '24px',
30: '30px',
36: '36px'
}
}
},
plugins: []
}