/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');
// import nextui from '@nextui-org/react';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};
