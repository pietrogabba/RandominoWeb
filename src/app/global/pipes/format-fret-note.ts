import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'formatFretNote'
})
export class FormatFretNote implements PipeTransform {
    transform(value: string): string {
        let baseFretValue = '---N---';
        if(!value)
            value = '-';
        return baseFretValue.replace('N',value); //String('-').repeat(7 - value.length) + value;
    }
}