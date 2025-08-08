const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "How many programmers does it take to change a light bulb? None. It's a hardware problem.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "Real programmers count from 0.",
  "There are only 10 types of people in the world: those who understand binary and those who don't.",
  "I would tell you a UDP joke, but you might not get it.",
  "What's a programmer's favorite hangout place? The Foo Bar.",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
  "Why do Python programmers wear glasses? Because they can't C.",
  "Programmers hate nature. Too many bugs.",
  "Debugging: Being the detective in a crime movie where you are also the murderer.",
  "To understand recursion, you must first understand recursion.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
  "Why did the developer go broke? Because he used up all his cache.",
  "In order to understand recursion, one must first understand recursion.",
  "Why did the functions stop calling each other? Because they had constant arguments.",
  "Why do programmers hate nature? It has too many bugs.",
  "Why do Java programmers have to wear glasses? Because they don't C#.",
  "What's the object-oriented way to become wealthy? Inheritance.",
  "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
  "0 is false and 1 is true, right? 1.",
  "If at first you don’t succeed; call it version 1.0.",
  "I love pressing F5. It’s refreshing.",
  "The problem with UDP jokes: I don’t care if you get them or not.",
  "Knock knock. Who’s there? Race condition. Race condition who? Sorry, still loading.",
  "A programmer's wife tells him: 'While you're at the store, get some milk.' He never comes back.",
  "Why did the computer go to the doctor? Because it caught a virus.",
  "I just got fired from the keyboard factory. They said I wasn't putting in enough shifts.",
  "An SEO expert walks into a bar, pub, inn, tavern, cafe, coffee shop, ...",
  "My code never has bugs, it just develops random features.",
  "Why did the developer go broke? Because he used up all his cache.",
  "There’s no place like 127.0.0.1.",
  "Why was the cell phone wearing glasses? Because it lost its contacts.",
  "Why don’t bachelors like Git? Because they are afraid to commit.",
  "Why did the developer quit his job? He didn’t get arrays.",
  "Why do backend devs love REST? Because they don’t like to be in a state.",
  "What do you call 8 hobbits? A hobbyte.",
  "What's the first step in understanding recursion? Understanding recursion.",
  "Why did the computer show up at work late? It had a hard drive.",
  "I told my computer I needed a break, and it said 'No problem – I'll go to sleep.'",
  "The cloud is just someone else’s computer.",
  "I told a joke about UDP... but I'm not sure if anyone got it.",
  "I would love to change the world, but they won’t give me the source code.",
  "Why was the JavaScript developer sad? He didn’t Node how to Express himself.",
  "Why did the programmer cross the road? He was stuck in a while loop.",
  "There’s no place like localhost.",
  "Why don’t programmers like to go outside? The sunlight causes too many glares.",
  "What did the HTML say to the CSS? 'I like your style.'",
  "Why did the CSS developer go to therapy? To get rid of his margins.",
  "What do you call a developer who doesn’t comment code? A magician.",
  "What’s a programmer’s favorite type of music? Algo-rhythm.",
  "404 joke not found.",
  "Why did the programmer get stuck in the shower? The instructions said: Lather, Rinse, Repeat.",
  "What’s the object-oriented way to become rich? Inheritance.",
  "I put my root beer in a square glass. Now it’s just beer.",
  "I’d tell you a Fibonacci joke, but it’s probably as bad as the last two you’ve heard combined.",
  "Why did the JavaScript function return undefined? Because it didn’t return anything.",
  "What’s a computer’s favorite snack? Microchips.",
  "Why did the PowerPoint Presentation cross the road? To get to the other slide.",
  "What did the computer say to the keyboard? 'You’re my type.'",
  "Knock knock. Who’s there? Control freak. Now you say 'Control freak who?'",
  "I have a joke about stack overflow, but it’s too deep.",
  "There are 10 kinds of people: those who get binary jokes and those who don’t.",
  "My password is 'incorrect,' so whenever I forget it, the computer tells me 'Your password is incorrect.'",
  "I told my computer I needed a break, and it froze.",
  "How do you comfort a JavaScript bug? You console it.",
  "Why don’t Java programmers like to play hide and seek? Because they always get caught in the stack trace.",
  "What’s a programmer’s favorite place to hang out? The Foo Bar.",
  "What do you call a programmer from Finland? Nerdic.",
  "What’s a computer’s least favorite food? Spam.",
  "Why did the computer break up with the internet? There was no connection.",
  "Why don’t programmers trust the ocean? Too many C’s.",
  "How do you know a programmer is an extrovert? They look at your shoes instead of their own.",
  "A byte walks into a bar and orders a pint. Bartender asks: 'What’s wrong?' Byte says: 'Parity error.'",
  "ASCII a stupid question, get a stupid ANSI.",
  "Why don’t programmers like nature? It has too many bugs.",
  "Why did the coder bring a ladder? To reach the high-level language.",
  "I told my IDE a joke... but it didn’t find it funny.",
  "What’s a computer’s favorite beat? An algo-rhythm.",
  "Why did the variable break up with the constant? Because it couldn’t change.",
  "Why did the function break up with the loop? It felt trapped.",
  "Why did the software developer go broke? Too many microtransactions.",
  "Why don’t programmers trust atoms? They make up everything.",
  "How did the database administrator fix the broken table? With a join.",
  "Why did the Boolean leave the party? It was either true or false.",
  "What did the array say after being extended? 'I’ve got room for more elements!'",
  "Why was the developer unhappy at their job? They wanted arrays.",
  "Why do front-end developers eat lunch alone? Because they don’t know how to join tables.",
  "Why do programmers like UNIX? Because it’s user-friendly – it’s just very particular about who its friends are.",
  "Why did the software engineer sleep at work? They were on call.",
  "Why did the git repository go to therapy? It had too many conflicts.",
  "What’s a programmer’s favorite exercise? The for-loop.",
  "Why don’t JavaScript developers get lost? Because they follow the map.",
  "Why did the CSS selector break up with the HTML element? They didn’t match."
];

app.get("/api/joke", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: randomJoke });
});

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Random Dev Joke</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f0f4f8, #d9bed1);
          color: #333;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          padding: 20px;
          text-align: center;
        }
        .container {
          background: white;
          padding: 30px 40px;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          max-width: 600px;
          width: 100%;
        }
        h1 {
          color: #7f4a8b;
          margin-bottom: 24px;
        }
        #joke {
          font-size: 1.3rem;
          margin-bottom: 30px;
          min-height: 60px;
        }
        button {
          background-color: #7f4a8b;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #a369b8;
        }
        footer {
          margin-top: 40px;
          font-size: 0.9rem;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>💬 Random Dev Joke</h1>
        <div id="joke">Loading joke...</div>
        <button id="newJokeBtn">Get Another Joke</button>
      </div>
      
      
      <script>
        const jokeDiv = document.getElementById('joke');
        const button = document.getElementById('newJokeBtn');

        async function fetchJoke() {
          jokeDiv.textContent = 'Loading joke...';
          try {
            const res = await fetch('/api/joke');
            const data = await res.json();
            jokeDiv.textContent = data.joke;
          } catch (error) {
            jokeDiv.textContent = 'Failed to fetch a joke. Please try again.';
          }
        }

        button.addEventListener('click', fetchJoke);

        fetchJoke();
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
