import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize : {
        "heading-1" : ["1.875rem","2.25rem"],
        "heading-2" : ["1.5rem", "2rem"],
        "heading-3" : ["1.25rem", "1.75rem"],
        "heading-4" : ["1.125rem", "1.75rem"],
        "base"      : ["1rem", "1.5rem"],
        "small"     : ["0.875rem", "1.125rem"],
        "tiny"      : ["0.75rem", "1rem"],
      },
      fontWeight : {
        thin : "300",
      },
      colors : {
        text : {
          gray : '#6B6B6B'
        },
        background: "#FAFAFA",
        primary : "#10A4B0",
        action : {
          link : "#0584F9"
        },
        disbaled : {
          btn : "#919EAB3D",
        },
        border : "#919EAB52",
        card : {
          gray : "#EBEBEB"
        }
      },
      boxShadow : {
        card :'0px 2px 15px -4px #0000000F',
      },

      spacing: {
        xs    : "0.25rem",
        sm    : '0.5rem',
        md    : '0.75rem',
        base  : "1rem",
        lg    : '2rem',
        xl    : '3rem',
      },
    },
  },
  plugins: [],
}
export default config
