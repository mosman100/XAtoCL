const xaToSymbility = {};
fetch('xa_to_symbility.txt')
  .then(response => response.text())
  .then(text => {
    text.split('\n').forEach(line => {
      const [xaItem, symbilityItem] = line.split(':');
      xaToSymbility[xaItem] = symbilityItem;
    });
  });

const xaLineItemInput = document.getElementById('xa-line-item');
const convertButton = document.getElementById('convert-button');
const symbilityLineItem = document.getElementById('symbility-line-item');

function convertLineItem() {
  const xaLineItem = xaLineItemInput.value;
  const symbilityLineItemText = xaToSymbility[xaLineItem] || 'Not available';
  symbilityLineItem.textContent = `Symbility line item: ${symbilityLineItemText}`;
}

xaLineItemInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    convertLineItem();
  }
});

convertButton.addEventListener('click', convertLineItem);
