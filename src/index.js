document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById('create-task-form')
  const button = document.createElement('button')
  const deleteButton = document.createElement('button')
  button.textContent = 'Hi'
  deleteButton.textContent = 'Hello'
  form.append(button)
  form.append(deleteButton)
  button.addEventListener('click', () => {
    button.remove()
  })
})
deleteButton.addEventListener('click', () => {
  deleteButton.remove()
  e.preventDefault()
})




//create elements
// const h1 = document.createElement('h1')
// const button = document.createElement('button')
// const deleteButton = document.createElement('button')

//access elements
// const banner = document.getElementById('banner')

//update elements
// h1.textContent = 'Hello world!'
// button.textContent = 'Click Me'
// deleteButton.textContent = 'Delete'

//remove elements
//see below... node.remove()

//add nodes to the page 
// banner.append(h1)
// banner.append(button)
// banner.append(deleteButton)

//add eventlisteners
//all event handlers are cb functions
//not all cb functions are event handlers
// button.addEventListener('click', () => {
  // const p = document.createElement('p')
  // p.textContent = 'hi'
  //banner.append(p)
// })

// deleteButton.addEventListener('click', () => {
  // banner.remove()
// })