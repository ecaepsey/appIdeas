const note = {
    notes: [],
    addNote: function(todoText) {
        this.notes.push({
            todoText: todoText,
        })
    },
    removeNote: function(index) {
        this.notes.splice(index, 1);
    }
}

var handler = {    
    addNote: function() {
        var inputNote = document.getElementById('note').value
        note.addNote(inputNote);
        view.drawView()
    },

    removeNote: function(position) {  
        note.removeNote(position)
        view.drawView();
    }
}

var view = {
    drawView: function() {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
      
        note.notes.forEach(function( todo, index ) {
          var todosLi = document.createElement("li");
         
          var todoTextWithCompletion = "";            
          
            todoTextWithCompletion = todo.todoText;         
            
          todosLi.id = index;
          todosLi.textContent = todoTextWithCompletion;
          todosLi.appendChild(this.createDeleteButton())     
          todosUl.appendChild(todosLi);
        }, this);
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
      },

      setupEventListeners: function () {
        var todosUl = document.querySelector('ul');
        
        todosUl.addEventListener('click', function (event) {
        var elementClicked = event.target;
        if (elementClicked.className === 'deleteButton') {
          var position = parseInt(elementClicked.parentNode.id);
          handler.removeNote(position);
          }
        });  
      },
}


view.setupEventListeners();