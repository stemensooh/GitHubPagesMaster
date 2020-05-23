import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {
  transform(images: any[]): string {
    if(!images){
      return './assets/img/img-tecnologia/no-image.jpg';
    }
    if(images.length > 0)
    {
      return images[0].url;
    }else{
      return './assets/img/img-tecnologia/no-image.jpg';
    }
  }

}
