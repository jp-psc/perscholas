let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  function smallerMain(length) {
    const main = document.getElementById('main-title');
    if (main.innerHTML.length > length) {
      main.innerHTML = main.innerHTML.slice(0, length) + ' ';
      console.log(main.textContent.length)
    } else console.dir(main)
  }
  smallerMain(27)
  // Part 2
  function bodyBgColor() {
    document.body.style.backgroundColor = 'gray';
  }  
  bodyBgColor();
  // Part 3
  function remove() {
    const ul = document.getElementById('favorite-things')
    ul.removeChild(ul.lastElementChild)
    console.log(ul)
  }
  remove();
  // Part 4
  function special() {
    const special = document.querySelectorAll('.special-title')
    special.forEach(element => {
      console.log(element)
      element.style.fontSize = '2rem';
    });
  }
  special();
  // Part 5
  function chiBye() {
    const pastRace = document.getElementById('past-races')
    pastRace.children[3].remove();
  }
  chiBye();
  // Part 6
  function pastRaces() {
    const newCity = document.createElement('li')
    const newCityText = document.createTextNode('New York City')
    const pastRace = document.getElementById('past-races')
    newCity.appendChild(newCityText)
    pastRace.appendChild(newCity)
  }
  pastRaces();
  // Part 7
  function post() {
    const h1 = document.createElement('h1')
    const h1Txt = document.createTextNode('New York City')
    const aNewPost1 = document.createElement('p')
    const aNewPostTxt = document.createTextNode('NYC IS GETTING LIVE!')
    const main = document.querySelector('.main')

    const eContainer = document.createElement('div')
    
    eContainer.classList.add('blog-post')
    eContainer.classList.add('purple')

    main.appendChild(eContainer)
    eContainer.appendChild(h1)

    h1.appendChild(h1Txt)
    h1.style.color = '#FFF'
    h1.style.marginBottom = '3rem'

    eContainer.appendChild(aNewPost1)
    aNewPost1.appendChild(aNewPostTxt)
    aNewPost1.style.fontSize = '1.5rem'
  }
  post();
  // Part 8
  function changeQuote() {
    const quote = document.querySelector('#quote-title')
    quote.addEventListener('click', function() {
      randomQuote();
    });
  }
  changeQuote();
  // Part 9
  function all() {
    let allElms = document.querySelectorAll('.blog-post')
    allElms.forEach(element => {
      element.addEventListener('mouseout', function() {
        element.classList.toggle('purple')
    });
    element.addEventListener('mouseenter', function() {
      element.classList.toggle('red')
    });
  });
  }
  all();
  })
