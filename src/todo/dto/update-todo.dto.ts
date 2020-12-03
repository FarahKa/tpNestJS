import { CreateTodoDto } from "./create-todo.dto";
import {status} from '../enums/status';
import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import {longProperty, missingProperty, shortProperty, wrongStatus} from "../errors/dto-errors";

export class UpdateTodoDto {
    @IsIn([
        status.enAttente,
        status.enCours,
        status.finalise
    ], {message : wrongStatus})
    @IsOptional()
    status: status;
    @IsNotEmpty()
    id:string;
    @IsNotEmpty()
    @IsOptional()
    @MinLength(3, {message : shortProperty})
    @MaxLength(10, {message : longProperty})
    name: string;
    @IsNotEmpty()
    @IsOptional()
    @IsString()
    @MinLength(10, {message: shortProperty})
    description: string
    @IsOptional()
    date: string;
}