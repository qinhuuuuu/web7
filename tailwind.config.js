const defaultColors = require("tailwindcss/colors");
const COLORS = {
  success: {
    100: "#E9F6EC",
    200: "#DFFCE6",
    300: "#88CE97",
    400: "#28A745",
    500: "#20913A",
  },
  info: {
    100: "#E5F2FF",
    200: "#CCE7FF",
    300: "#72B7FB",
    400: "#2395FF",
    500: "#0184FF",
  },
  warning: {
    100: "#FEF6E9",
    200: "#FCF0CB",
    300: "#F8CE8B",
    400: "#FFC107",
    500: "#F3A72E",
  },
  error: {
    100: "#FDEBE9",
    200: "#FCE6EA",
    300: "#F17585",
    400: "#EB3B5B",
    500: "#DA072D",
  },
  primary: {
    1: '#0062BD',
    2: '#0085FF',
    3: '#6BB8FF',
  },
  secondary: {
    1: '#f8fafc',
    2: '#010612',
    3: '#091126',
    4: '#222734',
    5: '#161e30',
  },

  'neutral-1': {
    900: '#070e21',
    800: '#1f3b53',
    700: '#475765',
    600: '#617382',
    500: '#8e9ba6',
    400: '#a7b1ba',
    300: '#bcc4cc',
    200: '#d0d7dd',
    100: '#dee1e4',
  },
  'neutral-2': {
    300: '#dae0e6',
    200: '#E2E7ED',
    100: '#E9EDF2',
    50: '#F2F4F7',
  },
  'neutral-3': {
    300: '#f6f9fe',
    200: '#EBEDEF',
    100: '#F0F1F3',
    50: '#F8F9FB',
  },
  'black': "#1a1d25",
  'white': "#ffffff",
  'border': "#ececec",
}

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '450',
      semibold: '600',
      bold: '700',
      heavy: '900',
    },
    extend: {
      colors: {
        ...COLORS
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      fontSize: {
        'heading-1': ['38px', '56px'],
        'heading-2': ['36px', '48px'],
        'heading-3': ['28px', '40px'],
        'heading-4': ['24px', '36px'],
        'heading-5': ['20px', '30px'],
        'heading-6': ['18px', '28px'],
        'body-1': ['16px', '26px'],
        'body-2': ['14px', '20px'],
        'caption-1': ['12px', '20px'],
      },
      fontFamily: {
        svn: ['SVN Avenirnext', 'sans-serif']
      },
      backgroundImage: {
      },
      keyframes: {
        'fade-left-menu': {
          '0%': { transform: 'translateX(-73.91%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-right-menu': {
          '0%': { transform: 'translateX(73.91%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'fade-left-menu': 'fade-left-menu 0.3s ease-in-out ',
        'fade-right-menu': 'fade-right-menu 0.3s ease-in-out ',
      },
      boxShadow: {
        'box-shadow-tin-tuc': "0px 1px 10px 0px rgba(29, 45, 73, 0.10)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};