const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const bitcoin = 'https://api.coinmarketcap.com/v1/ticker/';
const cities = [];
const coins = [];
const prom = fetch(bitcoin).then(blob => blob.json().then(data => coins.push(...data)));

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function findMatches(wordToMatch, coins) {
  return coins.filter((coin) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return coin.name.match(regex);
  });
}

function displayMatches() {
  const inputValue = this.value ? this.value : '';
  const matchArr = findMatches(inputValue, coins);
  const html = matchArr.map((item) => {
    const regex = new RegExp(inputValue, 'gi');
    const coinName = item.name.replace(regex, `<span class="hl">${inputValue}</span>`);
    return `
      <li>
        <span class="name">${coinName}</span>
        <span class="symbol">${item.symbol}</span>
        <span class="population">${(1 * item.price_usd).toFixed(3)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
window.addEventListener('load', displayMatches);
