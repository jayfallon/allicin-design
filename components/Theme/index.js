const Colors = {
  curious: '#2b8cc4',
  daisyBush: '#4c2c92',
  endeavour: '#005ea5',
  iron: '#dee0e2',
  java: '#24bcb3',
  meadow: '#23b564',
  orange: '#e97406',
  razzmatazz: '#e60050',
  rollingStone: '#6f777b',
  scarlett: '#ff2500',
  shiraz: '#b10e1e',
  silverSand: '#bfc1c3',
  white: '#ffffff',
  woodsmoke: '#0b0c0c',
  yellowOrange: '#ffbf47',
  shiraz: '#b10e1e',
  razzmatazz: '#e60050',
  java: '#24bcb3',
  meadow: '#23b564',
  purple: '#2e358b',
  lightPurple: '#6f72af',
  brightPurple: '#912b88',
  pink: '#f499be',
  red: '#b10e1e',
  brightRed: '#df3034',
  jaffa: '#f47738',
  brown: '#b58840',
  lightGreen: '#85994b',
  green: '#006435',
  turquoise: '#28a197',
  lightBlue: '#2b8cc4',
  blue: '#005ea5',
  black: '#0b0c0c',
  gray01: '#6f777b',
  gray02: '#bfc1c3',
  gray03: '#dee0e2',
  gray04: '#f8f8f8',
};

const TextColors = [
  {
    name: 'woodsmoke',
    hex: '#0b0c0c',
    purpose: 'Text color',
  },
  {
    name: 'rollingStone',
    hex: '#6f777b',
    purpose: 'Secondary text',
  },
];
const LinkColors = [
  {
    name: 'endeavour',
    hex: '#005ea5',
    purpose: 'Link color',
  },
  {
    name: 'curious',
    hex: '#2b8cc4',
    purpose: 'Hover & Active color',
  },
  {
    name: 'daisyBush',
    hex: '#4c2c92',
    purpose: 'Visited color',
  },
];
const BorderColors = [
  {
    name: 'silverSand',
    hex: '#bfc1c3',
    purpose: 'Border color',
  },
  {
    name: 'woodsmoke',
    hex: '#0b0c0c',
    purpose: 'Input border color',
  },
];
const FocusColors = [
  {
    name: 'yellowOrange',
    hex: '#FFBF47',
    purpose: 'Focus color',
  },
  {
    name: 'woodsmoke',
    hex: '#0b0c0c',
    purpose: 'Focus text color',
  },
];

const ErrorColors = [
  {
    name: 'Shiraz',
    hex: '#b10e1e',
    purpose: 'Error messages color',
  },
];
const BrandColors = [
  {
    name: 'razzmatazz',
    hex: '#e60050',
    purpose: 'Brand color',
  },
];

const PaletteColors = [
  { name: 'purple', hex: '#2e358b', purpose: 'Supporting color' },
  { name: 'lightPurple', hex: '#6f72af', purpose: 'Supporting color' },
  { name: 'brightPurple', hex: '#912b88', purpose: 'Supporting color' },
  { name: 'pink', hex: '#f499be', purpose: 'Supporting color' },
  { name: 'red', hex: '#b10e1e', purpose: 'Supporting color' },
  { name: 'brightRed', hex: '#df3034', purpose: 'Supporting color' },
  { name: 'jaffa', hex: '#f47738', purpose: 'Supporting color' },
  { name: 'brown', hex: '#b58840', purpose: 'Supporting color' },
  { name: 'lightGreen', hex: '#85994b', purpose: 'Supporting color' },
  { name: 'green', hex: '#006435', purpose: 'Supporting color' },
  { name: 'turquoise', hex: '#28a197', purpose: 'Supporting color' },
  { name: 'lightBlue', hex: '#2b8cc4', purpose: 'Supporting color' },
  { name: 'blue', hex: '#005ea5', purpose: 'Supporting color' },
  { name: 'black', hex: '#0b0c0c', purpose: 'Supporting color' },
  { name: 'gray01', hex: '#6f777b', purpose: 'Supporting color' },
  { name: 'gray02', hex: '#bfc1c3', purpose: 'Supporting color' },
  { name: 'gray03', hex: '#dee0e2', purpose: 'Supporting color' },
  { name: 'gray04', hex: '#f8f8f8', purpose: 'Supporting color' },
];

const Theme = {
  // Global adsLink
  adsLinkDef: Colors.endeavour,
  adsLinkHov: Colors.curious,
  adsLinkFoc: Colors.yellowOrange,
  adsLinkVis: Colors.daisyBush,
  // AppNav
  appNavBg: Colors.gray04,
  appNavActive: Colors.endeavour,
  appNavHover: Colors.curious,

  // Page Templates
  bodyBackground: Colors.iron,
  mainBackground: Colors.white,

  // Header
  headerBg: Colors.woodsmoke,
  headerLink: Colors.white,
  headerBorder: Colors.endeavour,

  // Heroes
  heroEndBg: Colors.endeavour,
  heroTextWh: Colors.white,

  // Footer
  footerBg: Colors.iron,

  // Helpers
  boxShadow: '0 1px 3px hsla(0, 15%, 12%, 0.4)',
  betaBg: Colors.endeavour,
  whiteBg: Colors.white,
  errorText: Colors.shiraz,
  errorBg: Colors.yellowOrange,
};

export default Theme;

export {
  Colors,
  TextColors,
  LinkColors,
  BorderColors,
  FocusColors,
  ErrorColors,
  BrandColors,
  PaletteColors,
};
