import {Injectable} from "@angular/core";
import {DayOfWeek} from "./day-of-week.enum";

@Injectable()
export class DayOffsetService {

    private _today: DayOfWeek;
    private _maxOffset: number;
    private _minOffset: number;

    constructor() {
        this._today = new Date().getDay();
        this._calculateMinMaxOffset();
    }

    private _calculateMinMaxOffset() {
        if (this._today == DayOfWeek.Saturday) {
            this._minOffset = this._maxOffset = -1;
        } else {
            this._minOffset = 0;
            this._maxOffset = (this._today == DayOfWeek.Sunday) ? 4 : 5 - this._today;
        }
    }

    public getValidDays(): DayOfWeek[] {
        let days = [];
        if (this._today == DayOfWeek.Saturday) return days;

        for (let i = this._today; i <= DayOfWeek.Friday; i++) {
            days.push({day: i, name: DayOfWeek[i]});
        }
        return days;
    }

    public calculateOffSet(day: DayOfWeek) {
        let offset = day - this._today;
        return this.isValidOffset(offset) ? offset : null;
    }

    public isValidOffset(offset: number) {
        return offset >= this._minOffset && this._maxOffset >= offset;
    }


    get maxOffset(): number {
        return this._maxOffset;
    }

    set maxOffset(value: number) {
        this._maxOffset = value;
    }

    get minOffset(): number {
        return this._minOffset;
    }

    set minOffset(value: number) {
        this._minOffset = value;
    }


    get today(): DayOfWeek {
        return this._today;
    }

    /*private currentOffset: number = 0;
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
    }*/
}
