import { CreateTodoDto } from "./create-todo.dto";
import {status} from '../enums/status';
import { IsNotEmpty } from "class-validator";
export class UpdateTodoDto extends CreateTodoDto {
    status: status;
    @IsNotEmpty()
    id:string;
}