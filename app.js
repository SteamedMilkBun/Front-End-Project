
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
  $nameHeader.text(spriteName.toUpperCase())
    .css("textAlign", "center")
  $(".display-sprite").append($nameHeader);
}

let showStats = function (data) {
  $(".stats-container").html('<p style="font-size: large">STATS</p>');
  const statsArray = data.stats;
  for (let statsIndex of statsArray) {
    const statName = statsIndex.stat.name;
    const statValue = statsIndex.base_stat;
    const $statp = $(`<p>${statName.toUpperCase()}: ${statValue}</p>`)
    $(".stats-container").append($statp);
  }
}

let showAbilities = function (data) {
  $(".abilities-container").html('<p style="font-size: large">ABILITIES</p>');
  const abilityArray = data.abilities;
  for (let abilityIndex of abilityArray) {
    let abilityName = abilityIndex.ability.name;
    let abilityUrl = 'https://pokeapi.co/api/v2/ability/' + abilityName;
    $.get(abilityUrl, (abilityData) => {
      let abilityDescription = abilityData.effect_entries[1].effect;
      const $abilityp = $(`<p>${abilityName.toUpperCase()}: ${abilityDescription}</p>`);
      $(".abilities-container").append($abilityp);
    })
  }
}

//take user input, get data from api based on input, returns data for future use
$('.search-button').on('click', (event) => {
  event.preventDefault();
  $('img').remove();//clear previous img
  $('h3').remove();//clear previous name header
  const userSearch = $('#userSearchID').val();
  let searchUrl = 'https://pokeapi.co/api/v2/pokemon/' + userSearch;
  $.get(searchUrl, (data) => {
    showName(data);
    showSprite(data);
    showStats(data);
    showAbilities(data);
  })
})

