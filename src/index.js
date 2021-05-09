import getElement from './js/utils/getElement'
import getAllElements from './js/utils/getAllElements'
import getAllCharacters from './js/getAllCharacters'

const container = getElement('[data-js="characters"]')
let characters
let selectedHouse

getAllCharacters().then(data => {
  characters = data
  renderCharacters()
})

function renderCharacters() {
  container.innerHTML = ''
  characters
    .filter(
      character =>
        character.house === selectedHouse ||
        selectedHouse === 'All' ||
        selectedHouse === undefined
    )
    .forEach(renderCharacter)
}

const filterButtons = getAllElements('[data-js="filter"] > button')
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedHouse = button.innerText
    renderCharacters()
  })
})

function renderCharacter(character) {
  const { name, yearOfBirth, house } = character
  const el = document.createElement('section')
  el.className = 'character'
  el.innerHTML = `
    <h2 class="character__name">${name}</h2>
        <div class="character__border">
            <div class"character__card">
             <dl class="character__details">
                <dd class="character__definition">Year of Birth</dd>
                <dt class="character__value">${yearOfBirth}</dt>
                <dd class="character__definition">House</dd>
                <dt class="character__value">${house}</dt>
             </dl>
            </div>
        </div>
    `
  container.append(el)
}
