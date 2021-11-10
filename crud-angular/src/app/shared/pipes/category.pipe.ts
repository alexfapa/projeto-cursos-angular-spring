import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'front-end' : return 'code';
      case 'Back-end' : return 'laptop';
      case 'DevOps' : return 'queue_play_next';
    }

    return 'code';
  }

}
