
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

async function chuckJokeCategories() {
    const response = await fetch('https://api.chucknorris.io/jokes/categories')
    const categories = await response.json()
  
    const categoriesSelect = document.querySelector('#category-select')
  
    categories.forEach(category => {
      const categoryOption = document.createElement('option')
      categoryOption.textContent = category
  
      categoriesSelect.append(categoryOption)
    })
  
    const categoryForm = document.querySelector('#category-form')
  
    categoryForm.addEventListener('submit', async (event) => {
      event.preventDefault()
  
      const selectedCategory = categoriesSelect.value
      const categoryUrl = `https://api.chucknorris.io/jokes/random?category=` + selectedCategory
  
      // fetch(categoryUrl)
      //   .then(response => response.json())
      //   .then(joke => {
      //     console.log(joke)
      //   })
  
      const response = await fetch(categoryUrl)
      const joke = await response.json()
  
      const jokeParagraph = document.querySelector('#joke-paragraph')
      jokeParagraph.textContent = joke.value
    })
  }
  
  chuckJokeCategories()