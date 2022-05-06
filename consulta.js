let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');


cep.addEventListener('blur', function(a) {
    let cep = a.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(answer) {
    if("erro" in answer){    
        alert('CEP não encontrado!');
        location.reload();
    }
    console.log(answer);
    rua.value = answer.logradouro;
    bairro.value = answer.bairro;
    cidade.value = answer.localidade;
    estado.value = answer.uf;
};