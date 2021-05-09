export default function getAllCharacters() {
  const url = 'https://hp-api.herokuapp.com/api/characters'
  return fetch(url).then(response => response.json())
}
