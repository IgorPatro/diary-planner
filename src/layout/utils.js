/* eslint-disable no-param-reassign */

// This function chooses between white or black to create the best color difference (used to set notes background)
export const blackOrWhite = (hex) => {
  hex = hex.slice(1)

  const r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16)

  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF"
}

export const randomColor = () => {
  let color = ""
  for (let i = 0; i < 3; i += 1) {
    const sub = Math.floor(Math.random() * 256).toString(16)
    color += sub.length === 1 ? `0${sub}` : sub
  }
  return `#${color}`
}

// Function creates normal human date from unix timestamp
export const createProperDate = (unixTime) => new Date(unixTime * 1000).toLocaleString()
