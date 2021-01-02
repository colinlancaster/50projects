const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);


generateJoke();

// function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

// using .then() syntax
//   fetch('https://icanhazdadjoke.com/', config)
//     .then(res => res.json())
//     .then(data => {
//       jokeEl.innerHTML = data.joke
//     })
// }

// using async/await
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}