const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "A SQL query walks into a bar, walks up to two tables, and asks: 'Can I join you?'",
  "Why do Java developers wear glasses? Because they can’t C#!",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "I told my computer I needed a break, and now it won’t stop sending me KitKat ads.",
  "There are only 10 kinds of people in this world: those who understand binary and those who don’t.",
  "Why do Python programmers have low self-esteem? Because they're constantly comparing their self to others.",
  "My code doesn’t work, and I have no idea why. My code works, and I have no idea why.",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25.",
  "The best thing about a Boolean is that even if you are wrong, you are only off by a bit."
];

app.get("/", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: randomJoke });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

