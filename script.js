// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textarea = document.getElementById('textarea');
// if (localStorage.getItem('textarea')){
//     textarea.value = localStorage.getItem('textarea')
// }
// textarea.oninput = () => {
//   localStorage.setItem('textarea', textarea.value);
// };



// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

let selectMark = document.getElementById('selectMark');
if (localStorage.getItem('Marka')){
    selectMark.value = localStorage.getItem('Marka');
}
selectMark.oninput = () => {
    localStorage.setItem('Marka', selectMark.value);
};

let inputModel = document.getElementById('inputModel');
if (localStorage.getItem('Model')){
    inputModel.value = localStorage.getItem('Model');
}
inputModel.oninput = () => {
    localStorage.setItem('Model', inputModel.value)
};


function radioKPPP(){
    let radioManual = document.getElementById("radioManual");
    let radioAutomatic = document.getElementById('radioAutomatic');
    let radioTiptronic =  document.getElementById('radioTiptronic');

    if (radioManual.checked ){
        localStorage.setItem("Manual", radioManual.checked);
    } else if (radioManual.checked === false){
        localStorage.removeItem('Manual')
    }

    if (radioAutomatic.checked){
        localStorage.setItem("Automatic", radioAutomatic.checked);
    }else if (radioAutomatic.checked === false){
        localStorage.removeItem('Automatic')
    }

    if (radioTiptronic.checked){
        localStorage.setItem("Tiptronic", radioTiptronic.checked);
    }else if (radioTiptronic.checked === false){
        localStorage.removeItem('Tiptronic')
    }
}

function checkboxComfortt (){
    let checkboxElectro = document.getElementById("checkboxElectro");
    let checkboxDzerkala = document.getElementById('checkboxDzerkala');
    let checkboxMultiRull =  document.getElementById('checkboxMultiRull');

    if (checkboxElectro.checked){
        localStorage.setItem("Electric windows", checkboxElectro.checked);
    } else if (checkboxElectro.checked === false){
        localStorage.removeItem('Electric windows')
    }
    if (checkboxDzerkala.checked){
        localStorage.setItem("Pidihriv dzerkal", checkboxDzerkala.checked);
    } else if (checkboxDzerkala.checked === false){
        localStorage.removeItem('Pidihriv dzerkal')
    }
    if (checkboxMultiRull.checked){
        localStorage.setItem("Multirole", checkboxMultiRull.checked);
    }else if (checkboxMultiRull.checked === false){
        localStorage.removeItem('Multirole')
    }
}

function radioFuell (){
    let radioDiesel = document.getElementById("radioDiesel");
    let radioPetrol = document.getElementById('radioPetrol');
    let radioGasPetrol =  document.getElementById('radioGasPetrol');

    if (radioDiesel.checked){
        localStorage.setItem("Diesel", radioDiesel.checked);
    }else if (radioDiesel.checked === false){
        localStorage.removeItem('Diesel')
    }
    if (radioPetrol.checked){
        localStorage.setItem("Petrol", radioPetrol.checked);
    }else if (radioPetrol.checked === false){
        localStorage.removeItem('Petrol')
    }
    if (radioGasPetrol.checked){
        localStorage.setItem("Gas/Petrol", radioGasPetrol.checked);
    }else if (radioGasPetrol.checked === false){
        localStorage.removeItem('Gas/Petrol')
    }
}


let textareaDescription = document.getElementById('textareaDescription');
if (localStorage.getItem('Description')){
    textareaDescription.value = localStorage.getItem('Description')
}
textareaDescription.oninput = () => {
  localStorage.setItem("Description", textareaDescription.value);
};



// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).





// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня.При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта



