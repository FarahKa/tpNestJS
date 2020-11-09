import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import {missingProperty, shortProperty, longProperty} from "../errors/dto-errors";

export class CreateTodoDto {
    @IsNotEmpty({message: missingProperty})
    @MinLength(3, {message : shortProperty})
    @MaxLength(10, {message : longProperty})
    name: string;
    @IsNotEmpty({message: missingProperty})
    @MinLength(10, {message: shortProperty})
    description: string
    date: string;
}