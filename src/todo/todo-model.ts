import {status} from './enums/status';
import { v4 as uuidv4 } from 'uuid';
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import {missingProperty, shortProperty, longProperty} from "./errors/dto-errors";


export default class Todo {

    id: string;
    @IsNotEmpty({message: missingProperty})
    @MinLength(3, {message : shortProperty})
    @MaxLength(10, {message : longProperty})
    name: string;
    date: string;
    @IsNotEmpty({message: missingProperty})
    @MinLength(10, {message: shortProperty})
    description: string;
    state: status;
  
    constructor(name = 'none', date = 'none', description = 'none') {
      this.name = name;
      this.date = date;
      this.description = description;
      this.state = status.enAttente;
      this.id = uuidv4();
    }
  }