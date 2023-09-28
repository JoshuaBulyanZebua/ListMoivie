setInterval(function () {
  let genreElement = document.getElementById('genre');
  let currentGenre = genreElement.textContent;
  let genreMapping = {
    Horor: 'Action',
    Action: 'Romance',
    Drama: 'Anime',
    Komedi: 'Horor',
    Anime: 'Komedi',
    Romance: 'Drama',
  };

  let newGenre = genreMapping[currentGenre] || 'Horor';
  genreElement.textContent = newGenre;
}, 4000);

function klik1() {
  alert('Sedang dalam pengembangan');
}

let merah = document.querySelector('#red');
let hijau = document.querySelector('#green');
let biru = document.querySelector('#blue');
let isi = document.querySelector('.bodi');

merah.addEventListener('input', ubahwarna);
hijau.addEventListener('input', ubahwarna);
biru.addEventListener('input', ubahwarna);

function ubahwarna() {
  let bgmerah = merah.value;
  let bghijau = hijau.value;
  let bgbiru = biru.value;

  isi.style.backgroundColor = `rgb(${bgmerah},${bghijau},${bgbiru})`;
}

function cariGenre() {
  let input = document.getElementById('cari').value.toLowerCase();
  let images = document.querySelectorAll('.carousel-item');

  for (let i = 0; i < images.length; i++) {
    let genres = images[i]
      .querySelector('img')
      .getAttribute('genre')
      .toLowerCase()
      .split(',');

    let imageElement = images[i].querySelector('img');
    let found = false;

    for (let j = 0; j < genres.length; j++) {
      if (genres[j].trim().includes(input)) {
        found = true;
        break;
      }
    }

    if (found) {
      images[i].style.display = 'block';
    } else {
      images[i].style.display = 'none';
    }
  }

  let activeIndex = document
    .querySelector('.carousel-item.active')
    .getAttribute('data-bs-slide-to');
  let indicators = document.querySelectorAll('.carousel-indicators li');

  for (let k = 0; k < indicators.length; k++) {
    indicators[k].classList.remove('active');
  }

  if (activeIndex !== null && activeIndex !== undefined) {
    let matchingIndicator = document.querySelector(
      `.carousel-indicators li[data-bs-slide-to="${activeIndex}"]`
    );
    matchingIndicator.classList.add('active');
  }
}
