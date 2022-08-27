// https://www.omnicalculator.com/chemistry/dilution-factor#dilution-factor-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const totaltostockRadio = document.getElementById('totaltostockRadio');
const dilutanttostockRadio = document.getElementById('dilutanttostockRadio');

let dilutantvolume;
let initialvolume = v1;
let finalvolume = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

totaltostockRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial volume';
  variable2.textContent = 'Final volume';
  initialvolume = v1;
  finalvolume = v2;
  result.textContent = '';
});

dilutanttostockRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial volume';
  variable2.textContent = 'Dilutant volume';
  initialvolume = v1;
  dilutantvolume = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(totaltostockRadio.checked)
    result.textContent = `Total to stock = ${computeTotaltostock().toFixed(2)}`;

  else if(dilutanttostockRadio.checked)
    result.textContent = `Dilutant to stock = ${computeDilutanttostock().toFixed(2)}`;
})

// calculation

function computeTotaltostock() {
  return Number(finalvolume.value) / Number(initialvolume.value);
}

function computeDilutanttostock() {
  return Number(dilutantvolume.value) / Number(initialvolume.value);
}