import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'formatFretNote'
})
export class FormatFretNote implements PipeTransform {
    transform(value: string): string {
        if(!value)
            value = '-';
        return String('-').repeat(7 - value.length) + value;
    }
}