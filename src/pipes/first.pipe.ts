import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FirstPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //Faire les changements
    let result = "";
    value.skills.forEach(skill => {
      result = result + "-" + skill.toUpperCase();
    })
    return result;
  }
}
