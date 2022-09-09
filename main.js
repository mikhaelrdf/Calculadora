var span = document.querySelectorAll('span:not(.btnCalcular,.deletar)');
var input = document.querySelector('input');
var btnCalcular =document.querySelector('.btnCalcular');

span.forEach(spanItem=> {
  spanItem.addEventListener('click',()=>{
    input.value += spanItem.innerHTML;
  
  })
})

function calcular(){
  var resultado = eval(input.value);
  if (input.value ==''){
    alert("Faça operações Matemáticas");
  }else{
    input.value = resultado
  }
}

function limpar(){
  input.value ='';
}