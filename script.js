const speakers = [
  {
    name: 'Sahle-Work Zewde',
    title: 'President of Ethiopia',
    image: './images/women6.jpg',
    bio: 'Sahle-Work Zewde is an Ethiopian politician and diplomat who is the current president of Ethiopia since 2018, being the first woman to hold the office.',
  },
  {
    name: 'Chimamanda Ngozi Adichie',
    title: 'writer whose works include novels, short stories and nonfiction',
    image: './images/women1.jpg',
    bio: 'Chimamanda Ngozi Adichie, (born September 15, 1977, Enugu, Nigeria), Nigerian author whose work drew extensively on the Biafran war in Nigeria during the late 1960s.',
  },
  {
    name: 'Kenya’s Lupita Nyong’o',
    title: 'Lupita Amondi Nyong’o is a Kenyan-Mexican actress',
    image: './images/women2.jpg',
    bio: 'Lupita Amondi Nyong’o is a Kenyan - Mexican actress.The daughter of Kenyan politician Peter Anyang’Nyong’o,she was born in Mexico City,where her father was teaching,and was raised in Kenya from the age of one.',
  },
  {
    name: 'Zozibini Tunzi',
    title: 'Miss Universe 2019',
    image: './images/women5.jpg',
    bio: 'Zozibini Tunzi is a South African model and beauty pageant titleholder who was crowned Miss Universe 2019. Tunzi had previously been crowned Miss South Africa 2019. She is the third woman from South Africa to win the title, and the first black woman since Angolan Leila Lopes was crowned Miss Universe 2011.',
  },
  {
    name: 'Osinachi Kalu Okoro Egbu',
    title: 'Nigerian singer',
    image: './images/women3t.png',
    bio: 'Osinachi Kalu Okoro Egbu, known professionally as Sinach, is a Nigerian singer, songwriter and senior worship leader at Loveworld until 2021. She is the first singer-songwriter to top the Billboard Christian Songwriter chart for 12 weeks in a row.',
  },
  {
    name: 'Meaza Ashenafi',
    title: 'President Superm court of Ethiopia',
    image: './images/women4.jpg',
    bio: 'Meaza Ashenafi is an Ethiopian lawyer. In November 2018, she was appointed by the Federal Parliamentary Assembly as President of the Federal Supreme Court of Ethiopia.',
  },
];

const container = document.querySelector('.container');

speakers.forEach((speaker, index) => {
  const dynamic = document.createElement('li');
  if (index > 1) {
    dynamic.className = 'mobile-hide';
  }
  dynamic.innerHTML = `
    <div class="left"><img src="${speaker.image}" alt="" /></div>
    <div class="right">
      <span>${speaker.name}</span>
      <p class="title">${speaker.title}</p>
      <p class="description">
      ${speaker.bio}
      </p>
    </div>
    `;

  container.appendChild(dynamic);
});

const more = document.querySelector('.more');

more.addEventListener('click', () => {
  const additional = document.querySelectorAll('.mobile-hide');

  additional.forEach((addition) => {
    addition.classList.remove('mobile-hide');
  });
  more.style.display = 'none';
});

// MOBILE MENU

const menu = document.querySelector('.menu');
const cancel = document.querySelector('.close');
const menuLinks = document.querySelector('.menu-links');

menu.addEventListener('click', () => {
  menuLinks.style.display = 'flex';
});
cancel.addEventListener('click', () => {
  menuLinks.style.display = 'none';
});
