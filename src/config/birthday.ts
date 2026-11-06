export const config = {
  recipientName: "Nature!",
  senderName: "Your slightly crazy friend",
  roseCount: 100001,

  letterText: `To My Chittipapa ❤️🌷

Happy Birthday! 🎂🥳`,

  finalMessage: `Happy Birthday ❤️`,

  specialRoseMessages: {
    1: "It had to start somewhere. 🌹",
    100: "A hundred down... only 99,901 to go. 😂",
    1000: "A thousand roses! 🌹",
    100001: "You found the last one. 🌹",
  } as Record<number, string>,

  hiddenMessages: {
    42: "The answer to everything. 😂",
    12345: "Hope you're smiling. ❤️",
  } as Record<number, string>,

  theme: {
    rosePink: "#e63973",
    crimson: "#c41e3a",
    magenta: "#ff3b8d",
    lavender: "#b388eb",
    peach: "#ffb085",
    warmGold: "#ffd700",
    warmOrange: "#ff7849",
    skyBlue: "#5b8def",
    cream: "#fff8e7",
    paper: "#fdf6e3",
    dark: "#1a0a1f",
  },

  audio: {
    backgroundMusic: null as string | null,
    gardenAmbience: null as string | null,
    gateSound: null as string | null,
    revealSound: null as string | null,
    selectSound: null as string | null,
  },
};

export type BirthdayConfig = typeof config;