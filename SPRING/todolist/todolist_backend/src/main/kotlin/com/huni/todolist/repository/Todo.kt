package com.huni.todolist.repository

import org.hibernate.annotations.ColumnDefault
import javax.persistence.*

// entity, database의 table과 mapping
@Entity
class Todo (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column(nullable = false)//null이 못들어가게
    @ColumnDefault( "false")
    var completed: Boolean = false,

    @Column(nullable=false)
    var todoName: String
)