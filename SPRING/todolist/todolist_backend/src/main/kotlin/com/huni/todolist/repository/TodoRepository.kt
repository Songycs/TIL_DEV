package com.huni.todolist.repository

import org.springframework.data.repository.CrudRepository

// inherited, Todo 조작, service layer에 추후 개발 진행할 것
interface TodoRepository : CrudRepository<Todo,Long>