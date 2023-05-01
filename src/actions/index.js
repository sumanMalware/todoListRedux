const addTodo =(data) =>{
    return {
        type : 'ADDTODO',
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

const deleteTo =(itemId) =>{
    return {
        type : 'DELETE_TODO',
        id : itemId
    } 
}

 
const removeAll =() =>{
    return {
        type : 'REMOVE_ALL'
    }
}



export {addTodo,removeAll,deleteTo}