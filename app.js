//display sprite
let showSprite = function (data) {
  //find sprite in data object
  //url for sprite = data.sprites.front_default
  const spriteUrl = data.sprites.front_default;
  //const $spriteDiv = $(<div id="spriteDiv"></div>)
  const $sprite = $(`<img src=${spriteUrl}>`);
  $(".image-holder").append($sprite);
}

let showName = function (data) {
  const spriteName = data.name;
  const $nameHeader = $(`<h3 id="name"></h3>`);
  $nameHeader.text(spriteName).css("textAlign", "center");
  $(".display-sprite").append($nameHeader);
}

let showStats = function (data) {
  $(".stats-container").text("Stats");
  const statsArray = data.stats;
  for (let statsIndex of statsArray) {
    const statName = statsIndex.stat.name;
    const statValue = statsIndex.base_stat;
    const $stath3 = $(`<h5>${statName}: ${statValue}</h5>`);
    $(".stats-container").append($stath3);
  }
}

let showAbilities = function (data) {
  $(".abilities-container").text("Abilities");
  const abilityArray = data.abilities;
  for (let abilityIndex of abilityArray) {
    const abilityName = abilityIndex.ability.name;
    //const abilityDescription = getAbilityDescription(abilityName);
    const $abilityh3 = $(`<h5>${abilityName}: {abilityDescription placeholder}</h5>`);
    $(".abilities-container").append($abilityh3);
  }
}

//take user input, get data from api based on input, returns data for future use
$('#searchButton').on('click', (event) => {
  event.preventDefault();
  $('img').remove();//clear previous img
  $('h3').remove();//clear previous name header
  const userSearch = $('#userSearchID').val();
  console.log(`userSearch: ${userSearch}`);
  let searchUrl = 'https://pokeapi.co/api/v2/pokemon/' + userSearch;
  $.get(searchUrl, (data) => {
    console.log(data);
    showName(data);
    showSprite(data);
    showStats(data);
    showAbilities(data);
  })
})

