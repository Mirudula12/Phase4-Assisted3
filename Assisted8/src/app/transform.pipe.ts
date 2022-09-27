import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(person:any, wish:string): string {
    if(person.gender=="m") {
      return "Hello Mr "+ person.name + " " + wish;
    }
    else {
      return "Hello Miss "+ person.name + " " + wish;
    }
  }

}
