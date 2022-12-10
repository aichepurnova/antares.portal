var questions = [
'Favorite movie?',
'Favorite book?',
'Favorite singer or band?',
'Favorite food',
'If you could do anything (no limitations), what would it be?',
'What do you regret?',
'How much money do you need for a comfortable life?',
'What is your relationship with your parents?',
'Describe the place where you would like to live.',
'If you could travel anywhere, where would you go?',
'You are getting BIG money right now, what are you going to do with them? You can not invest it or give it to charity.',
'Name the worst quality for each of those present',
'Name the best quality for each of those present',
'Top 5 of your best qualities',
'Top 5 of your worst qualities',
'What do you believe in?',
'Would you like to change something in yourself?',
'What was your last/weirdest/most memorable dream?',
'Kiss marry kill - first three from the left',
'The dumbest thing you have ever done',
'Most embarrassing story',
'Your first presidential decree',
'What is your favorite joke/meme?',
'Top 5 ideal qualities for a person',
'The biggest achievement in life',
'What useless talent do you have?',
'What is your best memory?',
'What is your worst memory?',
'What is your (childhood) trauma? ',
'What features of appearance do you find attractive?',
'What features of appearance do you find repulsive?',
'Who is your crush? 😌',
'Red flags',
'Green flags']

var playersField = document.querySelector('.playersField');
var gameSubmit = document.querySelector('.gameSubmit');
var randomQstn = document.querySelector('.randomQstn');
var firstPlayer = document.querySelector('.firstPlayer');
var secondPlayer = document.querySelector('.secondPlayer');

function rungame() {
  players_array = (playersField.value).split(',');
  randomPlayers = _.sample(players_array, 2);
  randomQstn.textContent = _.sample(questions, 1);
  firstPlayer.textContent = randomPlayers[0];
  secondPlayer.textContent = randomPlayers[1];
};

gameSubmit.addEventListener('click', rungame);