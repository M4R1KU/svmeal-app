import {Injectable} from "@angular/core";
import {DayOfWeek} from "./day-of-week.enum";

@Injectable()
export class DayOffsetService {
    private currentOffset: number = 0;
    private possibleDays: number[];

    constructor() {
        this.possibleDays = this.calculatePossibleDays(this.getToday());
    }

    private calculatePossibleDays(day) {
        let days: number[] = [];
        if (day === DayOfWeek.Saturday) return null;
        if (day === DayOfWeek.Sunday) day = DayOfWeek.Monday;

        for (let i = day; i <= DayOfWeek.Friday; i++) {
            days.push(i);
        }
        return days;

    }

    public getToday() {
        return new Date().getDay();
    }

    public calculateOffset(day: number) {
        return day - this.getToday();
    }

    public getPossibleDays() {
        return this.possibleDays;
    }

    public getPossibleDaysWithNames() {
        let result = [];
        for (let day of this.possibleDays) {
            result.push({name: DayOfWeek[day], day: day});
        }
        return result;
    }

    public getCurrentOffset() {
        return this.currentOffset;
    }
}
