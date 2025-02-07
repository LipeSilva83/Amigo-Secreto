let amigos = [];

  function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();


    if (nome !== "") { 
        amigos.push(nome); 
        nomeInput.value = ""; 
        atualizarLista();

        
        } else {
            
        
            alert("Por favor, insira um nome.");
        }
    }

    console.log(amigos) 
  

function atualizarLista() {
  const lista = document.getElementById("listaAmigos"); 
  lista.innerHTML = ""; 

  for (let i = 0; i < amigos.length; i++) { 
    const amigo = amigos[i];
    const elementoLista = document.createElement("li"); 
    elementoLista.textContent = amigo; 
    lista.appendChild(elementoLista); 
  }

}

function sortearAmigo() {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = ""; // Limpa resultados anteriores

    if (amigos.length === 0) {
      resultadoElement.innerHTML = "<li>Adicione um amigo para ser sortedo!</li>";
      return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultadoElement.innerHTML = "<li>Amigo sorteado: " + amigoSorteado + "</li>";
  }