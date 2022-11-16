module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'header': "url('./asset/Background-header1.png')",
        'header2': "url('./asset/Background-header2.png')",
        'wordpress': "url('./asset/Wordpress.svg')",
        'calendly': "url('./asset/Calendly.svg')",
        'responsive': "url('./asset/Responsive.svg')",
        'webdesignsvg': "url('./asset/Web-design.svg')",
        'maintenance': "url('./asset/Maintenance.svg')",
        'seo': "url('./asset/SEO.svg')",
        'edt': "url('./asset/EDT.svg')",
        'weexa': "url('./asset/Weexa.svg')",
        'world': "url('./asset/World.svg')",
        'shoppy': "url('./asset/Shoppy.svg')",
        'illu2': "url('./asset/illu2.png')",
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main': '#FCFAFA',
        'secondary': '#FE856E',
        'third': '#24252D',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
};