const liS = document.querySelectorAll('.access-menu ul li');
const liSA = document.querySelectorAll('.access-menu ul li a');
const name = document.querySelector('.client-name');
const imgProfile = document.querySelector('.img-profile');
const splitedName = name.innerHTML.split('');
let len = liS.length;

/*==Barra nos endereços==*/

for(let i in liS){
    if(i < len - 1){
        const newP = document.createElement('p');
        newP.innerHTML = "/";
        liS[i].appendChild(newP);
    }
}

for(let y of liSA){
    y.addEventListener('click', ()=>{
        for(let i of liSA){
            i.classList.remove('access-selected');
        }
        y.classList.add('access-selected');
    });
}
/*==Foto de perfil==*/

const newImgProfile = document.createElement('p');
newImgProfile.innerHTML = splitedName[0];
imgProfile.appendChild(newImgProfile);


/*==Campos de horario==*/

const inputChecked = document.querySelectorAll('.check-input-d');
const divHorario = document.querySelectorAll('.horario-abre-fecha');
const pFechado = document.querySelectorAll('.fechado');

function addInput(e){
    for(let x in inputChecked){
        if(e.target == inputChecked[x]){
            pFechado[x].classList.toggle('hidden');
            divHorario[x].classList.toggle('hidden');
        }
    }
}


inputChecked.forEach( e=>{
    e.addEventListener('click', e =>{
        addInput(e);
    })
})


/*==Sidebar Ul==*/
const sidebarSubUl = document.querySelectorAll('.menu-sidebar li ul');
const sidebarA = document.querySelectorAll('.sidebar-principal-links');

sidebarA.forEach(e=>{
    e.addEventListener('click', (e)=>{
        e.preventDefault();
        for(let x = 0; x < sidebarA.length; x++){
            if(e.target == sidebarA[x]){
                sidebarSubUl[x].classList.toggle('hidden');
            }
        }
    })
})

/*==Menu fecha==*/
const btnMenu = document.querySelector('.btn-menu');
const sidebarEnt = document.querySelector('.sidebar');
const containerAll = document.querySelector('.container-all');
const iconOpenClose = btnMenu.children;

btnMenu.addEventListener('click', ()=>{
    sidebarEnt.classList.toggle('off');
    containerAll.classList.toggle('withoutSidebar');
    for(let x of iconOpenClose){
        x.classList.toggle('hidden');
    }
});



/*==Select Options==*/

const selecEstado = document.querySelector('#select-estado');
const selecCidade = document.querySelector('#select-cidade');
const optionsCidade = {
    'MG' : ['Uberlândia', 'Belo Horizonte', 'Juiz de Fora'],
    'RJ' : ['Rio de Janeiro', 'Barra Mansa', 'Volta Redonda'],
    'SP' : ['São Paulo', 'Ribeirão Preto', 'Bauru'],
    'ES' : ['Vitória', 'Vila Velha', 'Guarapari'],
    'BA' : ['Salvador', 'Itabuna', 'Ilhéus'],
    'DF' : ['Brasília', 'Ceilândia', 'Gama'],
    'SC' : ['Florianópolis', 'Joinville', 'Blumenau'],
    'SE' : ['Aracaju', 'Laranjeiras', 'São Fransico']
}


function clearOptions(){
    const childrenCidade = selecCidade.children;
    for(let i in childrenCidade){
        selecCidade.options.remove(i);
    }
}

function criaOptions(target){
    for(let x of optionsCidade[target.value]){
        let optionSelect = document.createElement('option');
        optionSelect.value = x;
        optionSelect.innerHTML = x;
        selecCidade.appendChild(optionSelect);
    }
}

selecEstado.addEventListener('change', (e)=>{
    const el = e.target;
    clearOptions();
    criaOptions(el);
})



/*==Mascara dos campos==*/

const inputCnpj = document.querySelector('#input-cnpj');

inputCnpj.addEventListener('keypress', (e)=>{
    if(inputCnpj.value.length == 2 || inputCnpj.value.length == 6){
        inputCnpj.value += '.';
    }
    if(inputCnpj.value.length == 10){
        inputCnpj.value += '/';
    }
    if(inputCnpj.value.length == 15){
        inputCnpj.value += '-';
    }
});

const inputCep = document.querySelector('#input-cep');
inputCep.addEventListener('keypress', ()=>{
    if(inputCep.value.length == 5){
        inputCep.value += '-';
    }
 });

const inputData = document.querySelector('#input-data');
inputData.addEventListener('keypress', ()=>{
    if(inputData.value.length == 2){
        inputData.value += '/';
    }
    if(inputData.value.length == 5){
        inputData.value += '/';
    }
    if(inputData.value.length == 10){
        inputData.value += ' ';
    }
    if(inputData.value.length == 13){
        inputData.value += ':';
    }
 });


const inputDia = document.querySelectorAll('.input-dia')
inputDia.forEach(e=>{
    e.addEventListener('keypress', ()=>{
        if(e.value.length == 2){
            e.value += ':';
        }
     });
    
})

/*==Validação Campos==*/
const allInputs = document.querySelectorAll('input');

function clearFirst(){
    for(let error of document.querySelectorAll('.error-msg')){
        error.remove();
    }
}

function criaErro(divPai, msg){
    const p = document.createElement('p');
    p.classList.add('error-msg');
    p.style.color = '#ff0000';
    p.innerHTML = msg;
    p.style.fontSize= '12px';
    divPai.appendChild(p);
}

function emptyCamp(e){
    let flag = true;
    const nomeDiv = document.querySelector('.nome-loja');
    const endDiv = document.querySelector('.end-loja');
    const numDiv = document.querySelector('.num-loja');
    const bairroDiv = document.querySelector('.bairro-loja');
    const complementDiv = document.querySelector('.complemento-loja');
    if(allInputs[0].value == ''){
        e.preventDefault();
        criaErro(nomeDiv, 'Insira o nome!');
        flag = false;
    }
    if(allInputs[6].value == ''){
        e.preventDefault();
        criaErro(endDiv, 'Insira o endereço!');
        flag = false;
    }
    if(allInputs[7].value == ''){
        e.preventDefault();
        criaErro(numDiv, 'Insira o numero!');
        flag = false;
    }
    if(allInputs[8].value == ''){
        e.preventDefault();
        criaErro(bairroDiv, 'Insira o bairro!');
        flag = false;
    }
    if(allInputs[9].value == ''){
        e.preventDefault();
        criaErro(complementDiv, 'Insira um complemento!');
        flag = false;
    }
    if(selecEstado.value == 'placeholder'){
        e.preventDefault();
        criaErro(document.querySelector('.estado'), 'Insira um estado!');
        criaErro(document.querySelector('.cidade'), 'Insira uma cidade!');
        flag = false;
    }

    return flag;
    
}

function validLen(e){
    let flag = true;
    const cnpjDiv = document.querySelector('.cnpj-loja');
    const dataDiv = document.querySelector('.div-data');
    const cepDiv = document.querySelector('.cep-loja');
    if(inputCnpj.value.length < 18){
        e.preventDefault();
        criaErro(cnpjDiv, 'Insira todos os números do CNPJ!');
        flag = false;
    }
    if(inputData.value.length < 16){
        e.preventDefault();
        criaErro(dataDiv, 'Insira data e hora completas!');
        flag = false;
    }
    if(inputCep.value.length < 9){
        e.preventDefault();
        criaErro(cepDiv, 'Insira todos os números do CEP!');
        flag = false;
    }
    return flag;
}


/*==Botoes do form==*/
const btnButton = document.querySelector('.cancela');
const btnSubmit = document.querySelector('.envia-form');


function cancelSubmit(event){
    event.preventDefault();
}

function clearInputs(){
    for(let i in allInputs){
        allInputs[i].value = '';
        if(allInputs[i].type == 'radio'){
            allInputs[i].checked = false;
        }
    }

    const childrenCidade = selecCidade.children;
    const childrenEstado = selecEstado.children;
    childrenEstado[0].selected = true;
    for(let i in childrenCidade){
        selecCidade.options.remove(i);
    }

    for(let ind = 0; ind < inputChecked.length; ind++){
        inputChecked[ind].checked = false;
        pFechado[ind].classList.remove('hidden');
        divHorario[ind].classList.add('hidden');
    }
}

btnButton.addEventListener('click', (e)=>{
    cancelSubmit(e);
    clearInputs();
    clearFirst();
})

function simOuNao(){
    let opc = '';
    const radioSim = document.querySelector('#radio-sim')
    const radioNao = document.querySelector('#radio-nao')
    if(radioSim.checked == true){
        opc = radioSim.value;
    }

    if(radioNao.checked == true){
        opc = radioNao.value;
    }
    return opc;
}




function horarioEscolhido(x){
    let checkeds = 'Fechado';
    let horarioAbre;
    let horarioFecha;
    if(inputChecked[x].checked == true){
        let abre = divHorario[x].children[0].lastChild;
        horarioAbre = abre.previousSibling.value;
        let fecha = divHorario[x].children[1].lastChild;
        horarioFecha = fecha.previousSibling.value;
        checkeds = `Abre: ${horarioAbre} e Fecha: ${horarioFecha}`;
        return checkeds;
    }
    return checkeds;
}


btnSubmit.addEventListener('click', (e)=>{
    let flag;
    clearFirst();
    flag = emptyCamp(e);
    flag = flag === false ? false : validLen(e);
    const objForm = {
        'Nome da Loja': `${allInputs[0].value}`,
        'CNPJ': `${allInputs[1].value}`,
        'Data Ativação': `${allInputs[2].value}`,
        'Loja Ativa': `${simOuNao()}`,
        'Endereço': {
            'CEP': `${allInputs[5].value}`,
            'Endereço': `${allInputs[6].value}`,
            'Numero': `${allInputs[7].value}`,
            'Bairro': `${allInputs[8].value}`,
            'Estado': `${selecEstado.value == 'placeholder' ? '' : selecEstado.value}`,
            'Cidade': `${selecCidade.value == 'ex.: Uberlândia' ? '' : selecCidade.value}`,
            'Complemento': `${allInputs[9].value}`,
        },
        'Horario de Atendimento': {
            'Segunda-Feira' : `${horarioEscolhido(0)}`,
            'Terça-Feira' : `${horarioEscolhido(1)}`,
            'Quarta-Feira' : `${horarioEscolhido(2)}`,
            'Quinta-Feira' : `${horarioEscolhido(3)}`,
            'Sexta-Feira' : `${horarioEscolhido(4)}`,
            'Sabádo' : `${horarioEscolhido(5)}`,
            'Domingo' : `${horarioEscolhido(6)}`
        }
    }
    if(flag) alert(JSON.stringify(objForm));
});