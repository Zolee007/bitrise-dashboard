import merge from "lodash.merge";

import { preset } from "./preset";

export default merge(preset, {
  colors: {
    primary: "#492F5C",
    primaryHover: "#3C274C",
    secondary: "#028090",
    secondaryHover: "#026976",
    highlight: "#492F5C",
    white: "#FFFFF0",
    gray: "#BEBEBE",
    red: "#C03221",
    green: "#0EB27D",
    orange: "#F08700",
    shadow: "rgba(0, 0, 0, 0.35)",
    skeleton: "#E8DBE1",
  },
  shadows: {
    header: "0px 2px 8px 1px rgba(0, 0, 0, 0.35)",
    footer: "0px -2px 8px 1px rgba(0, 0, 0, 0.35)",
    card: "2px 4px 8px 0px rgba(0, 0, 0, 0.35)",
  },
  variants: {
    header: {
      color: "white",
      backgroundColor: "primary",
      px: 3,
      p: 2,
      boxShadow: "header",
    },
    nav: {
      color: "white",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "secondary",
      },
    },
  },
  text: {
    copyrightText: {
      color: "white",
      fontSize: "1",
      fontWeight: 200,
    },
  },
  buttons: {
    primary: {
      ":hover": {
        bg: "primaryHover",
      },
    },
    secondary: {
      ":hover": {
        bg: "secondaryHover",
      },
    },
    signout: {
      variant: "buttons.primary",
      bg: "transparent",
      ":hover": {
        bg: "primaryHover",
      },
    },
    big: {
      variant: "buttons.primary",
      margin: 3,
      fontSize: 4,
    },
  },
});
