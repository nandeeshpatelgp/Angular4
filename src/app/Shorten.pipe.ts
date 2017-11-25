import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "shorten"
})
export class ShortenPipe implements PipeTransform{
  transform(str: string, limit: number, ellipse: boolean){
    if(str.length > limit)
      return str.substr(0,limit) + (ellipse ? ' ...' : '');
    return str;
  }
}
