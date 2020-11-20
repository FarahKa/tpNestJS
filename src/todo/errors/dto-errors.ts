import { ValidationArguments } from "class-validator";

export const missingProperty = (validationData : ValidationArguments) => `${validationData.property} is empty.`;
export const shortProperty = (validationData : ValidationArguments) => `${validationData.property} should be at least ${validationData.constraints[0]} characters long`
export const longProperty = (validationData : ValidationArguments) => `${validationData.property} should be at most ${validationData.constraints[0]} characters long`
