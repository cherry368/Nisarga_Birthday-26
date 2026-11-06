
// ==========================================================
// NISARGA BIRTHDAY WEBSITE — CENTRAL CONFIGURATION
// Project: Nisarga_Birthday-26
// Edit all birthday details from this file.
// ==========================================================

export const config = {
  // BASIC DETAILS
  recipientName: "Nature!",
  senderName: "Your slightly crazy friend",
  roseCount: 100001,

  // BIRTHDAY LETTER
  letterText: `Hey Nature! ❤️

Happy Birthday! 🎂🥳

Do you like roses? 🌹

I thought of gifting you something nice for your birthday...
but honestly, I couldn't find anything worthy enough. 😭😂

So I thought...
why not do something completely unnecessary instead? 👀

I decided to make you a bouquet.
And then I may have gotten a LITTLE carried away... 😂🌹🌹🌹

Hopefully this makes your day a little brighter,
puts a smile on your face,
and reminds you that you deserve lots of beautiful things. ❤️

You deserve happiness,
good memories,
crazy adventures,
and a LOT of reasons to smile. 🫶✨

Anyway...
I have something waiting for you.
Don't worry...
it's not as crazy as it sounds.

Okay...
maybe it is. 😂

With lots of love,
Your slightly crazy friend ❤️

P.S. — Please press the button below.
I promise it's worth it. 👀🌹`,

  // FINAL BIRTHDAY MESSAGE
  finalMessage: `Happy Birthday, Nature! ❤️

I hope this year brings you
more happiness,
more laughter,
more adventures,
and countless beautiful memories.

May you always find reasons to smile,
strength to chase your dreams,
and happiness in the little things.

Stay happy, stay blessed,
and never stop being the beautiful person you are. 🫶✨

And yes...
I really did make you
100,001 virtual roses. 😂🌹

Because apparently
I had too much time. 😭

Have an amazing birthday! 🎂❤️

— From your slightly crazy friend 🌹`,

  // SPECIAL ROSES — CUSTOM MESSAGES
  specialRoseMessages: {
    1: "It had to start somewhere. 🌹",
    100: "A hundred down... only 99,901 to go. 😂",
    1000: "A thousand roses! Still going strong. 🌹",
    10001: "10,000 down... apparently I still wasn't done. 😂",
    25000: "A quarter of the way there. ❤️",
    50000: "Halfway there. Still ridiculous. 😂",
    75000: "Three quarters done. 🌹",
    100000: "So close...",
    100001: "You found the last one. This one's special! ❤️🌹",
  } as Record<number, string>,

  // HIDDEN PERSONAL MESSAGES
  hiddenMessages: {
    42: "The answer to everything — including why I made so many roses. 😂",
    12345: "Hope you're smiling right now, Nature! ❤️",
    77777: "Lucky rose! 🍀🌹",
    88888: "Wishing you endless happiness. ❤️",
    99999: "Almost the last one... but not quite. 😂",
  } as Record<number, string>,

  // WEBSITE COLOR THEME
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

  // AUDIO CONFIGURATION
  audio: {
    backgroundMusic: null as string | null,
    gardenAmbience: null as string | null,
    gateSound: null as string | null,
    revealSound: null as string | null,
    selectSound: null as string | null,
  },
};

export type BirthdayConfig = typeof config;
