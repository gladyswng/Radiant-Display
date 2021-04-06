module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["./src/**/*.html", "./src/**/*.tsx"],
  },
  theme: { 
    fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.75rem',
        '5xl': '3rem',
       

    },
    colors: {
      'rd-yellow': "#fbc531",
      'rd-gray': "#828282",
      'rd-darkGray': "#454545",
      'rd-lightGray': "#ededed",
      'rd-white': "#fff",
      'rd-red': "#fc5d24"
    },
    placeholderColor: {
      'rd-lightGray': "#ededed",
      'rd-gray': "#828282",
    },
    scale: {
      '200': '2'
    },
    cursor: {
      'zoom-in': 'zoom-in',
      'pointer': 'pointer'
    },
    extend: {
  
    },
  },
  variants: {},
  plugins: [],
}
