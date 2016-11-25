angular.module('uitexercise').factory('Todo', function($firebaseArray, $firebaseObject) {
	
	// @NOTE: this is the ref that you need to set to point at the list
	//		  of todos. Please see the instructions on the page for the location.
	// var todoRef = firebase.database().ref().child("<collection name>");

	var Todo = {
		todos: [],

		addTodo: function(newTodo) {
			alert("Add your add todo function!");
			// @NOTE: use the $add function of firebaseArray to add the todo.
			//		  remember to return the promise!
			// https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebasearray-addnewdata
		},

		getTodos: function() {
			return Todo.todos;
		},

		getTodo: function(todo_id) {

			alert("Add your get todo function!");
			// @NOTE: this is the individual todo ref. You will use this to 
			// 		  call your firebaseObject
			var individualTodoRef = todoRef.child(todo_id);
			
			// @NOTE: return your firebase object here!
			// https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebaseobject
		},

		saveTodo: function(theTodo) {
			
			alert("Add your save todo function!");
			// @NOTE: use the $save function of firebaseObject to update the
			//		  todo.
			// https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebaseobject-save
		},

		removeTodo: function(todo_id) {
			alert("Add your remove todo function!");
			var individualTodoRef = todoRef.child(todo_id);
			
			// @NOTE: use the $remove function of firebaseObject to remove the
			//	      todo. You will need to load the firebaseObject first. See
			//		  the following example:
			// https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebaseobject-remove
		},
	};

	// @NOTE: initialize your todos here. The line should go something like:
	// Todo.todos = <a firebase array initialization containing the variable todoRef>;
	// https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebasearray

	return Todo;
});