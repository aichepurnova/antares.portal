function getModificator() {
  var clas = [".inte", ".wisd", ".charis", ".consti", ".stren", ".dext"]
  for (var i in clas) {
      var modif = document.querySelector('.modif'+clas[i]);
      modif.textContent = Math.floor((document.querySelector('.score'+clas[i]).innerHTML-10)/2);
  };
};
document.addEventListener('DOMContentLoaded', getModificator);

function getAC() {
  var AC = document.querySelector('.armor');
  AC.textContent = Number((document.querySelector('.modif.dext').innerHTML)) + Number(13);
  // AC.textContent = '2';
};
document.addEventListener('DOMContentLoaded', getAC);

function getInitiative() {
  var Initiative = document.querySelector('.Initiative');
  Initiative.textContent = (document.querySelector('.modif.dext').innerHTML);
};
document.addEventListener('DOMContentLoaded', getInitiative);

function getSpellDC() {
  var SpellDC = document.querySelector('.SpellDC');
  var Prof = document.querySelector('.Prof').innerHTML;
  var clas = [".inte", ".wisd", ".charis", ".consti", ".stren", ".dext"]
  var modifs = []
  for (var i in clas) {
    var modif = Number(document.querySelector('.modif'+clas[i]).innerHTML);
    modifs.push(modif);
  };
  SpellDC.textContent = Number(8) + Number(Prof) + Number(Math.max(...modifs));
};
document.addEventListener('DOMContentLoaded', getSpellDC);

function getBaseAttack() {
  var Attack = document.querySelector('.Attack');
  var Prof = document.querySelector('.Prof').innerHTML;
  var clas = [".inte", ".wisd", ".charis", ".consti", ".stren", ".dext"]
  var modifs = []
  for (var i in clas) {
    var modif = Number(document.querySelector('.modif'+clas[i]).innerHTML);
    modifs.push(modif);
  };
  Attack.textContent =  Number(Prof) + Number(Math.max(...modifs));
};
document.addEventListener('DOMContentLoaded', getBaseAttack);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

var rollInitSubmit = document.querySelector('.rollInitSubmit');
function rollInitiative() {
  var Initiative = Number(document.querySelector('.Initiative').innerHTML);
  var randnum = Number(getRandomIntInclusive(1,20))
  alert('Результат броска инициативы: '+ Number(Initiative+randnum)
  + ' (' + Initiative + ' + ' + randnum + ')');
  console.log('Результат броска инициативы: '+ Number(Initiative+randnum)
  + ' (' + Initiative + ' + ' + randnum + ')');
};
rollInitSubmit.addEventListener('click', rollInitiative);

var rollDice = document.querySelector('.btnRollDice');
function rollDiceFunc() {
  let diceQty = Number(prompt("Please enter dice qty:", 1));
  let diceValue = Number(prompt("Please enter dice value:", 20));
  let totResult = 0;
  let modificat = Number(prompt("Please add modificator:", 0));
  for (let step = 0; step < diceQty; step++) {
    var throoght = Number(getRandomIntInclusive(1, diceValue))
    totResult =  totResult + throoght
    console.log('Промежуточный бросок '+step+'. Результат броска: '+throoght);
  };
  totResult +=  modificat;
  alert('Результат броска: '+ totResult + ' (' + diceQty + 'd' + diceValue + '+' + modificat + ') ');
  console.log('Результат броска: '+ totResult+ ' (' + diceQty + 'd' + diceValue + '+' + modificat + ') ');
};
rollDice.addEventListener('click', rollDiceFunc);

var rollAttack = document.querySelector('.rollAttack');
function dorollAttack() {
  var Attack = Number(document.querySelector('.Attack').innerHTML);
  var randnum = Number(getRandomIntInclusive(1,20));
  var result = Attack+randnum;
  if (randnum == 1) {
    alert('Упс.... '+ result+' (' + Attack +' + ' + randnum + ')');
    console.log('Упс.... '+ result+ ' (' + Attack + ' + ' + randnum + ')');
  } else {
    if (randnum == 20) {
      alert('Критическая атака! '+ result+' (' + Attack +' + ' + randnum + ')');
      console.log('Критическая атака! '+ result+  ' (' + Attack + ' + ' + randnum + ')')} 
    else {
      alert('Результат броска: '+ result+ ' (' + Attack + ' + ' + randnum + ')');
      console.log('Результат броска: '+ result + ' (' + Attack + ' + ' + randnum + ')')}};
};
rollAttack.addEventListener('click', dorollAttack);

var HPchange = document.querySelector('.HPchange');
function changeHP() { 
  if (Number(document.querySelector('.curHP').innerHTML) == 0) {
    var curHP = Number(document.querySelector('.maxHP').innerHTML);
  } else {
    var curHP = Number(document.querySelector('.curHP').innerHTML);
  };
  var change = Number(prompt("Please enter heal/damage:", -5));
  var newHP = curHP + change
  if (newHP > 0 ) {
    if (newHP < Number(document.querySelector('.maxHP').innerHTML)) {
      document.querySelector('.curHP').textContent = newHP
      console.log('Изменить ХП: ', change);
    } else {
      document.querySelector('.curHP').textContent = Number(document.querySelector('.maxHP').innerHTML)
      console.log('Отхилились!!!');
    };
  } else {
    alert('Похоже, что ты умер.....')
    document.querySelector('.curHP').textContent = 1
    console.log('Похоже, что ты умер.....');
  };
};
HPchange.addEventListener('click', changeHP);
