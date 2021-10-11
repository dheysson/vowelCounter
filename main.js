let input = document.querySelector('input');
let frase = '';
let arrayFrase = [];
let vogais = 0;
let backgrounds = [
'linear-gradient(90deg,#ee9ca7,#ffdde1)',
'linear-gradient(90deg,#2193b0,#6dd5ed)',
'linear-gradient(90deg,#8E2DE2,#4A00E0)',
'linear-gradient(90deg,#f12711,#f5af19)'
];
let bgIndex = 0;

document.addEventListener('keydown', (ev) => {
    if(document.querySelector('button').innerText === 'DELETE'){
        input.value = '';
        input.style.textTransform = 'lowercase';
        input.style.color = '#000';
        document.querySelector('button').innerText = 'CHECK';
    } else  {
        if(ev.key == 'Enter' && input.value.length > 0){
            document.querySelector('span').innerText = '';
            separarString();
        } else if(ev.key == 'Enter' && input.value.length == 0) {
            document.querySelector('span').innerText = '⚠ fill the field';
        } else if(ev.key !== 'Enter' && input.value.length + 1 > 0) {
            document.querySelector('span').innerText = '';
        }
    }
});
document.querySelector('button').addEventListener('click', () => {
    if(document.querySelector('button').innerText === 'DELETE'){
        input.value = '';
        input.style.textTransform = 'lowercase';
        input.style.color = '#000';
        document.querySelector('button').innerText = 'CHECK';
    } else {
        if(input.value.length > 0){
            document.querySelector('span').innerText = '';
            separarString();
        } else if(input.value.length == 0) {
            document.querySelector('span').innerText = '⚠ fill the field';
        }
    }
});
document.querySelector('i').addEventListener('click', () => {
    input.value = '';
});
function separarString(){
    frase = input.value;
    for(i = 0; i < frase.length; i++){
        arrayFrase.push(frase.charAt(i));
        if(i == frase.length - 1){
            checarString();
        }
    }
}
function checarString(){
    for(array in arrayFrase){
        switch(arrayFrase[array])
        {
            case 'a':
                vogais++;
                break;
                
            case 'e':
                vogais++;
                break;
                    
            case 'i':
                vogais++;
                break;
                        
            case 'o':
                vogais++;
                break;
                            
            case 'u':
                vogais++;
                break;
        }

        if(Number(array) === arrayFrase.length - 1){
            showResult();
        }
    }
}
function showResult(){
    document.querySelector('button').innerText = 'DELETE';

    if(vogais == 0){
        input.value = `o valor inserido não há vogais.`;
        input.style.color = 'crimson';
    } else {
        input.value = `o valor inserido contém ${vogais} vogais.`;
        input.style.color = '#4cd137';
    }
    
    input.style.textTransform = 'uppercase';

    resetData('arrayFrase');
    resetData('contador');
}
function resetData(comando){
    switch(comando)
    {
        case 'arrayFrase':
            arrayFrase = [];
            break;

        case 'contador':
            vogais = 0;
            break;
    }
}
document.addEventListener('click', (ev) => {
    if(ev.target.className == 'fas fa-arrow-left'){
        if(bgIndex > 0){
            bgIndex--;
            changeBackground(bgIndex);
        }
    } else if(ev.target.className == 'fas fa-arrow-right'){
        if(bgIndex < backgrounds.length){
            bgIndex++;
            changeBackground(bgIndex);
        }
    }
})
function changeBackground(index){
    document.body.style.background = backgrounds[index];
}