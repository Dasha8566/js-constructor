import {model} from './model'
import {App} from './classes/app'
import './styles/main.css'


new App(model).init()
// import {templates} from './templates'
// import {Site} from './classes/site'
// import {Sidebar} from './classes/sidebar'


// const $site = document.querySelector('#site')
// const site = new Site('#site')

// const key = 'title'
// console.log(templates[key])

// site.render(model)

// model.forEach(block => {  
   

//   let html = ''

// if(block.type === 'title') {
//     html = title(block)
// } else if (block.type === 'text') {
// html = text(block)
// } else if (block.type === 'columns'){
//     html = columns(block)
// } else if (block.type === 'image'){
//     html = image(block)
// }

//const toHTML = templates[block.type]

// console.log(block.toHTML())
// if (false ) {
//     $site.insertAdjacentHTML('beforeend', toHTML(block))
// }

// site.insertAdjacentHTML('beforeend', block.toHTML())


// })

// const updateCallback = newBlock => {
//     model.push(newBlock)
//     site.render(model)
// }

// new Sidebar('#panel', updateCallback)
