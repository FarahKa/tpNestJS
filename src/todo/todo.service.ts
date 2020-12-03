import { Injectable } from '@nestjs/common';
import {
    NotFoundException,
  } from '@nestjs/common';
  import { CreateTodoDto } from './dto/create-todo.dto';
  import { UpdateTodoDto } from './dto/update-todo.dto';
  import {status} from './enums/status';
  import Todo from './todo-model';
  
  

@Injectable()
export class TodoService {
    todolist: Todo[];

    constructor() {
      this.todolist = [
        {
          id: '1',
          name: 'test1',
          description: 'la description 1',
          date: '23/10/20',
          state: status.enCours,
        },
        {
          id: '2',
          name: 'test2',
          description: 'la description 2',
          date: '23/10/20',
          state: status.enAttente,
        },
        {
          id: '3',
          name: 'test3',
          description: 'la description 3',
          date: '23/10/20',
          state: status.finalise,
        },
      ];
    }
  
    getTodos(): Array<Todo> {
      return this.todolist;
    }
  
    getTodo( id: string): Todo {
      // return this.todolist.filter((element) => element.id === id)[0];
      const todo = this.todolist.find(element => element.id === id);
      if (todo) {
        return todo;
      } else {
        throw new NotFoundException();
      }
    }
  
    //   @Post('addTodo')
    //   addTodo(@Body() body) : Todo {
    //       console.log(body);
    //       const added = new Todo(body.name, body.date, body.description);
    //       this.todolist.push(added);
    //       return(added);
  
    //   }
  
    addTodo(body: CreateTodoDto): Todo {
      console.log(body);
      const added = new Todo(body.name, body.date, body.description);
      this.todolist.push(added);
      return added;
    }
  
    modifyTodo(body: UpdateTodoDto): Todo[] {
      const modified = new Todo(body.name, body.date, body.description);
      modified.id = body.id;
      modified.state = body.status;
      this.todolist = this.todolist.filter(element => {
        return element.id != body.id;
      });
      this.todolist.push(modified);
      return this.todolist;
    }
  
    patchTodo(body:UpdateTodoDto): Todo[] {
      const toModify = this.todolist.find(e => e.id = body.id);
      if(body.name){
        toModify.name = body.name;
      }
      if(body.description){
        toModify.description = body.description;
      }
      if(body.date){
        toModify.date = body.date;
      }
      if(body.status){
        toModify.state = body.status;
      }
      return this.todolist;
    }
  
    delTodo(id: string): Array<Todo> {
      this.todolist = this.todolist.filter(element => {
        return element.id != id;
      });
      return this.todolist;
    }
}
