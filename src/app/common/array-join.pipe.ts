import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'arrayJoin'
})
export class ArrayJoinPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return value.join(args !== undefined ? args[0] : '\n');
    }

}
