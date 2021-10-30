package com.huni.todolist.service

import com.huni.todolist.repository.Todo
import com.huni.todolist.repository.TodoRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service


@Service
class TodoService(
    private val todoRepository: TodoRepository
) {
    //할일 목록 전부 불러오는 메소드
    fun getTodos() = todoRepository.findAll()

    fun insertTodo(todoName:String): Todo = todoRepository.save(Todo(todoName = todoName))

    //todo가 있는지 DB검색,
    fun updateTodo(todoId:Long): Todo{
        //없으면 throw exception
        val todo = todoRepository.findByIdOrNull(todoId) ?: throw Exception()
        // 있으면 완료 <-> 미완료
        todo.completed = !todo.completed
        return todoRepository.save(todo)
    }
    fun deleteTodo(todoId: Long) = todoRepository.deleteById(todoId)
    //TodoRepository 활용할거임
}