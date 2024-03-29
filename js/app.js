const checkbox1 = document.getElementById('checkbox');

checkbox1.addEventListener('change', () => {
  //mudar o tema do site
  document.body.classList.toggle('dark');
});


// botão que faz a adicionar os cards
btn.addEventListener('click', function criarLista(evento) {

  evento.preventDefault();

  var btnExcluir = document.createElement('button');
  var checkBOX = document.createElement('input');
  var texto_check = document.createElement('p');
  var ul = document.querySelector('ul');
  var li = document.createElement('li');
  var inputDataLimite = document.querySelector("#datalimite");
  var descricao = document.querySelector("#descricao");
  var br = document.createElement("br");
  var btn = document.querySelector("#btn");

  // data de criação da lista
  var agora = new dayjs();
  var dia = agora.get('D');
  var mes = agora.get('M');
  mes = mes + 1;
  var ano = agora.get('y');


  var inputDataCriacao = document.querySelector('input');

  var inputDataCriacao2 = document.querySelector('input[type="date"]');

  // formatar data menor que 10 acrescentar um 0
  if(dia < 10){
     inputDataCriacao2.value = (ano + "-" + mes+ "-0" + dia);
  } else {
     inputDataCriacao2.value = (ano + "-" + mes+ "-" + dia);
  }
 

  // data de término
  console.log(inputDataLimite.value);
  let validaData = inputDataLimite.value.split('-');
  let anoTermino = validaData[0];
  let mesTermino = validaData[1];
  let diaTermino = validaData[2];

  if ((anoTermino == ano) && ((mesTermino >= mes) && (diaTermino >= dia))) {
    // comparando string textarea validando
    if (descricao.value.length <= 10) {
      // alert("O número de caracteres precisa ser maior que 10!")
      Swal.fire({
        title: 'Ops!',
        text: 'O número de caracteres precisa ser maior que 10!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } else {
      inputDataCriacao.value = (ano.toString() + "-" + mes.toString() + "-" + dia.toString());
      li.innerHTML = "Data de criação: " + inputDataCriacao.value + "<br>" + "Data Limite: " +
        inputDataLimite.value + "<br>" + descricao.value;
      li.classList.add('card');
      li.setAttribute('id', 'card1')

      // botão excluir
      li.appendChild(btnExcluir);
      btnExcluir.setAttribute('type', 'submit');
      btnExcluir.setAttribute('value', 'Excluir')
      btnExcluir.innerHTML = "Excluir";
      btnExcluir.classList.add('btnExcluir')

      // checkbox
      li.appendChild(checkBOX);
      checkBOX.setAttribute('type', 'checkbox');
      checkBOX.setAttribute('id', 'checkbox');
      checkBOX.setAttribute('unchecked', 'false');
      texto_check.innerHTML = 'Concluído!'
      li.appendChild(texto_check);
      ul.appendChild(li);

      checkBOX.addEventListener('change', () => {

        if (document.getElementById('checkbox').checked = true) {
          li.classList.add('card-done');
        }
        else if (document.getElementById('checkbox').unchecked = true) {

          li.classList.remove('card-done');
        }
      })
    }
  } else
    if (anoTermino > ano) {
      // comparando string textarea validando
      if (descricao.value.length <= 10) {
        // alert("O número de caracteres precisa ser maior que 10!")
        Swal.fire({
          title: 'Ops!',
          text: 'O número de caracteres precisa ser maior que 10!',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      } else {
        inputDataCriacao.value = (ano.toString() + "-" + mes.toString() + "-" + dia.toString());
        li.innerHTML = "Data de criação: " + inputDataCriacao.value + "<br>" + "Data Limite: " +
          inputDataLimite.value + "<br>" + descricao.value;
        li.classList.add('card');
        li.setAttribute('id', 'card1')

        // botão excluir
        li.appendChild(btnExcluir);
        btnExcluir.setAttribute('type', 'submit');
        btnExcluir.setAttribute('value', 'Excluir')
        btnExcluir.innerHTML = "Excluir";
        btnExcluir.classList.add('btnExcluir')

        // checkbox
        li.appendChild(checkBOX);
        checkBOX.setAttribute('type', 'checkbox');
        checkBOX.setAttribute('id', 'checkbox');
        checkBOX.setAttribute('unchecked', 'false');
        texto_check.innerHTML = 'Concluído!'
        li.appendChild(texto_check);
        ul.appendChild(li);

        checkBOX.addEventListener('change', () => {

          if (document.getElementById('checkbox').checked = true) {
            li.classList.add('card-done');
          }
          else if (document.getElementById('checkbox').unchecked = true) {

            li.classList.remove('card-done');
          }
        })
      }
    }
    else {
      // alert("Escolha outra data!");
      Swal.fire({
        title: 'Ops!',
        text: 'Não pode ser uma data anterior à data de hoje!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }


  btnExcluir.addEventListener('click',
    function _click() {
      // var confirmar = confirm("Quer excluir o item?");
      var confirmar = Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          document.getElementById('card1').remove();
        }
      })

      // if (confirmar == true) {
      //   document.getElementById('card1').remove();
      // }

    });

    anime({
      targets: 'label',
      translateX: 50,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800
    });

    anime({
      targets: 'button',
      translateX: 10,
      rotate: '1turn',
      backgroundColor: '#0000',
      duration: 800
    });
});

// anime({
//   targets: 'button',
//   translateX: 250,
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 800
// });