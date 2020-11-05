import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

enum status {
    enAttente = "EN ATTENTE",
    enCours = "EN COURS",
    finalise = "FINALISE"
}

class Todo {
    id:string;
    name: string;
    date: string;
    description: string;
    state : status;

    constructor(name = "none", date = "none", description = "none"){
        this.name = name;
        this.date= date;
        this.description = description;
        this.state =  status.enAttente;
        this.id = uuidv4();
    }
}


@Controller()
export class TodoController {

    todolist: Todo[] ;

    constructor() {
        this.todolist = [
            {
                id: "1",
                name: "test1",
                description: "la description 1",
                date: "23/10/20",
                state: status.enCours
            },
            {
                id: "2",
                name: "test2",
                description: "la description 2",
                date: "23/10/20",
                state: status.enAttente
            },
            {
                id: "3",
                name: "test3",
                description: "la description 3",
                date: "23/10/20",
                state: status.finalise
            },
    
    
        ];
    
    }



  @Get('todo')
  getTodos(): Array<Todo> {
    return this.todolist;
  }

  @Get('todo/:id')
  getTodo(@Param('id') id: string): Todo {
    return this.todolist.filter((element) => element.id == id)[0];
  } 

  @Post('addTodo')
  addTodo(@Body() body) : Todo {
      console.log(body);
      const added = new Todo(body.name, body.date, body.description);
      this.todolist.push(added);
      return(added);
      
  }

  @Delete('delTodo/:id')
  delTodo(@Param('id') id: string): Array<Todo> {
      this.todolist = this.todolist.filter((element) => {
        return element.id != id;
      });
      return this.todolist;
  }


}