import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'formatFretNote'
})
export class FormatFretNote implements PipeTransform {
    transform(value: string): string {
        if(value.length === 1){
            return value + '-';
        }

        return value;
    }
}