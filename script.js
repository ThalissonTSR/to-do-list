//lista de tarefas

function AddTarefa(){
   let input = document.querySelector("input").value

   let li = document.createElement("li")
   li.innerHTML = input + '<span onclick="Delete(this)">❌</span>'

   document.querySelector("ul").appendChild(li)

   document.querySelector("input").value = ''
}

function Delete(li) {
   li.parentElement.remove()
}