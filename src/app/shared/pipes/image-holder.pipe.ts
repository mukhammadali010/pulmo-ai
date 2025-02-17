import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageHolder',
  standalone:true,
  pure:false,
})
export class ImageHolderPipe implements PipeTransform {

  transform(imgUrl: string, placeholder: string = '../../../assets/images/elementor-placeholder-image.webp'): string {
    return imgUrl? imgUrl: placeholder;
  }

}
