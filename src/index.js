import './styles.css';
const image = document.querySelector('#image');
const button = document.querySelector('button');
const heroName = document.querySelector('#hero-name');


const baseUrl = 'https://akabab.github.io/superhero-api/api';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getHero = async () => {
  const response = await fetch(`${baseUrl}/all.json`);
  const data = await response.json();
  const randomIndex = getRandomInt(data.length);
  console.log(data[randomIndex]);
  return data[randomIndex];
}

button.addEventListener('click', async () => {
  try {
    const hero = await getHero();
    image.src = hero.images.md;
    heroName.innerHTML = hero.name;
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: 'Something went wrong',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
});
