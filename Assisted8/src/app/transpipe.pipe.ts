import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transpipe'
})
export class TranspipePipe implements PipeTransform {

  transform(wish : string,param1:string,param2:number): string {
    if(param1=="lower") {
      wish=wish.toLowerCase();
    }
    return wish.substring(0,param2);
  }

}
