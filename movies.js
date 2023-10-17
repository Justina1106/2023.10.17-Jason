
async function fetchRandomJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}


async function displayRandomJoke() {
    const jokeContainer = document.getElementById('jokeContainer');
    const joke = await fetchRandomJoke();
    jokeContainer.innerHTML = `<p><strong>${joke.setup}</strong></p><p>${joke.punchline}</p>`;
}


const getJokeButton = document.getElementById('getJokeButton');
getJokeButton.addEventListener('click', displayRandomJoke);