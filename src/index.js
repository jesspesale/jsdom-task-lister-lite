document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form = document.getElementById("create-task-form")

  form.addEventListener("submit", function(event){
    event.preventDefault()

    let input = document.getElementById("new-task-description").value
    console.log(input)

    let ul = document.getElementById("tasks")
    let li = document.createElement("li")
    li.innerHTML = input
    ul.appendChild(li)
  }
  )
});
