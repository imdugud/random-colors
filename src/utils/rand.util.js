const randHex = () => {
  return Math.floor(Math.random() * 16).toString(16);
};
const randNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const rgbToHex = (rgb) => {
  return rgb.map((number) => {
    const hex = number.toString(16);
    return hex.length > 1 ? hex : "0"+hex;
  }).join("");
  // return hex.length > 1 ? hex : "0" + hex;
};
const hexToRgb = (hexCode) => {
  const arr = [...hexCode];
  return [
    parseInt(arr[0].concat(arr[1]), 16),
    parseInt(arr[2].concat(arr[3]), 16),
    parseInt(arr[4].concat(arr[5]), 16)];
};

export const randColor = () => {
  const colorCodes = { rgb: [], hex: "" };
  for (let i = 0; i < 3; i++) {
    colorCodes.rgb.push(randNumber(256));
  }
  colorCodes.hex = rgbToHex(colorCodes.rgb);
  return colorCodes;
};
