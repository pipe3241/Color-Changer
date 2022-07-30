// creating the div with an h1 and appending it to the body
var div = document.createElement('div');
div.innerHTML = '<h1>Color Changer</h1><input type="text"/>';
document.body.appendChild(div);

// centering the div (pain)
div.style.position = 'absolute';
div.style.left = '50%';
div.style.top = '50%';
div.style.transform = 'translate(-50%, -50%)';

// centering the input box because css is stupid
div.querySelector('input').style.position = 'absolute';
div.querySelector('input').style.left = '50%';
div.querySelector('input').style.top = '100%';
div.querySelector('input').style.transform = 'translate(-50%, -50%)';

// color changing stuff
div.querySelector('input').addEventListener('input', function (e) {
  var input = e.target.value;
  if (input.match(/^#[0-9a-f]{6}$/i)) {
    document.body.style.backgroundColor = input;
    div.querySelector('h1').style.color = getContrastingColor(input);
  } else {
    document.body.style.backgroundColor = '#fff';
    document.body.style.transition = 'background-color 0.5s ease';
    div.querySelector('h1').style.color = '#000';
  }
});

// takes a color and returns the color that is opposite on the color wheel
function getContrastingColor(color) {
  var r = parseInt(color.substring(1, 3), 16);
  var g = parseInt(color.substring(3, 5), 16);
  var b = parseInt(color.substring(5, 7), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}
