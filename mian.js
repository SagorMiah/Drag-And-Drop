const lists = document.querySelectorAll('.list')
const listItem = document.querySelectorAll('.list-item')

let draggedItem = null;

// Advance js ES6 Apply 

listItem.forEach(item => {

    item.addEventListener('dragstart', () => {
        draggedItem = item
        setTimeout(() => {
            item.style.display = 'none'
        },0)
    })

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            item.style.display = 'block'
        },0)
    })

})

lists.forEach(list => {

    list.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    list.addEventListener('dragenter', (e) => {
        e.preventDefault()
        list.style.backgroundColor = '#5a2e86'
    })

    list.addEventListener('dragleave', () => {
        list.style.backgroundColor = 'rebeccapurple'
    })

    list.addEventListener('drop', () => {
        list.append(draggedItem)
        list.style.backgroundColor = 'rebeccapurple'
    }) 

})



//or Normal js Apply

// for(let i = 0 ; i < listItem.length ; i++){
//     const item = listItem[i]

//     item.addEventListener('dragstart',function(){
//         draggedItem = item;
//         setTimeout(function(){
//             item.style.display = 'none'
//         },0)
//     })

//     item.addEventListener('dragend',function(){
//         setTimeout(function(){
//             item.style.display = 'block'
//         },0)
//     })

//     for(let i = 0; i < lists.length ; i++){
//         const list = lists[i]

//         list.addEventListener('dragover',function(e){
//             e.preventDefault()
//         })
//         list.addEventListener('dragenter',function(e){
//             e.preventDefault()
//         })
//         list.addEventListener('drop',function(){
//             this.append(draggedItem)
//         })
//     }
// }