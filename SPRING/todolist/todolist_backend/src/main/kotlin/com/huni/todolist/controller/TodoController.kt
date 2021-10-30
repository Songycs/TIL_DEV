package com.huni.todolist.controller

import com.huni.todolist.service.TodoService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/todo") //todo라는 url로 controller에 접근가능
class TodoController(

    private val todoService: TodoService
) {
    //getTodo
    @GetMapping
    fun getTodos() = todoService.getTodos()

    //insert Todo to db
    @PostMapping
    fun insertTodo(@RequestBody todoRequest: TodoRequest) = todoService.insertTodo(todoRequest.todoName)


    //updateTodo, 하위 주소
    @PutMapping(path = ["/{todoId}"])
    //id를 받아 완료 시킴
    fun updateTodo(@PathVariable("todoId") todoId: Long) = todoService.updateTodo(todoId)


    //deleteMapping
    @DeleteMapping(path = ["/{todoId}"])
    fun deleteTodo(@PathVariable("todoId") todoId: Long) = todoService.deleteTodo(todoId)

}