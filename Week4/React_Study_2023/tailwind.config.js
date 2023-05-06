import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      minHeight: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
      gridTemplateRows: {
        "header-footer": "auto 1fr auto",
      },
    },
  },
  plugins: [
    typography,
    forms,
    daisyui,
  ],
  daisyui: {
    darkTheme: "light",
  },
};