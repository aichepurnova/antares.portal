$('#des-submit').click(rungame);


function rungame() {
let options = $('#des-test').val();
const pairs = [];

options = options.split(/[;\n]/);
options = options.sort((a, b) => 0.5 - Math.random());
console.log(options);

for (let i = 0; i < options.length; i += 2) {
  if (i + 1 < options.length) {
    pairs.push([options[i], options[i + 1]]);
  } else {
    pairs.push([options[i]]);
  }
}
console.log(pairs);

var div = document.createElement('div');
div.classList.add("row");
for (i of options) {
    var option_id = options.indexOf(i)
    if ((i != '') & (i != ' ')) {
        div.appendChild(createOption(i, option_id));
    }
};
$('#des-area')[0].appendChild(div);
};


function createOption(name, option_id) {
    let div = document.createElement('div');
    div.style.cssText = 'width:500px;height:100px;border:1px solid #000;margin:2px;'
    div.textContent = name;
    div.classList.add("col-sm");
    div.setAttribute('id',option_id)
    return div;
}

