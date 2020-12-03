import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { status } from './enums/status';
import { TodoService } from './todo.service';
import Todo from './todo-model';
import { FirstPipe } from 'src/pipes/first.pipe';

@Controller()
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get('todo')
  getTodos(): Array<Todo> {
    return this.todoService.getTodos();
  }

  @Get('todo/:id')
  getTodo(@Param('id') id: string): Todo {
    return this.todoService.getTodo(id);
  }

  //   @Post('addTodo')
  //   addTodo(@Body() body) : Todo {
  //       console.log(body);
  //       const added = new Todo(body.name, body.date, body.description);
  //       this.todolist.push(added);
  //       return(added);

  //   }

  @Post('addTodo')
  addTodo(@Body() body: CreateTodoDto): Todo {
    return this.todoService.addTodo(body);
  }

  @Put('modifyTodo')
  modifyTodo(@Body() body: UpdateTodoDto): Todo[] {
    return this.todoService.modifyTodo(body);
  }

  //exemple utilisation pipe:
  @Patch('patchTodo')
  patchTodo(@Body(FirstPipe) body: UpdateTodoDto): Todo[] {
    return this.todoService.patchTodo(body);
  }

  @Delete('delTodo/:id')
  delTodo(@Param('id') id: string): Array<Todo> {
    return this.todoService.delTodo(id);
  }
}
