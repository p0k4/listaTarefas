let tarefas = [];

function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  if (tarefa == "") {
    let mensagemErro = "INFO: Digita uma tarefa para adicioná-la a sua lista!";
    mensagem.textContent = mensagemErro;
  } else {
    let mensagemSucesso = "INFO: Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    tarefas.push(tarefa);
    renderizarTarefas();
  }

  inputTarefa.value = "";
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];
    let botaoExcluir = document.createElement("button");
    novaTarefa.appendChild(botaoExcluir);
    botaoExcluir.className = "botaoExcluir";
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = () => removerTarefa(i);

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "botaoEditar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);

    novaTarefa.appendChild(botaoEditar);
    novaTarefa.appendChild(botaoExcluir);
    listaTarefas.appendChild(novaTarefa);
  }
}
function removerTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "INFO: Tarefa removida com sucesso!";

}


function editarTarefa(i) {
  let tarefaEditavel = prompt("edita a nova tarefa");
  if (tarefaEditavel.trim() !== "") {
    tarefas[i] = tarefaEditavel;
    renderizarTarefas();
  }
}

function limparTarefas() {
  tarefas.length = 0;
  renderizarTarefas();
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent =
    "INFO: todas as terefas foram removidas da lista com sucesso!";
}
