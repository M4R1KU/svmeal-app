import {Injectable} from "@angular/core";
import {DayOfWeek} from "./day-of-week.enum";

@Injectable()
export class DayOffsetService {

    private _today: DayOfWeek;
    private _currentOffset: number = 0;
    private _maxOffset: number;
    private _minOffset: number;

    constructor() {
        this._today = new Date().getDay();
        this._calculateMinMaxOffset();
    }

    private _calculateMinMaxOffset() {
        if (this._today == DayOfWeek.Saturday) {
            this._minOffset = this._maxOffset = 0;
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

    public calculateOffset(day: DayOfWeek) {
        return day - this._today;
    }

    public calculateAndSetCurrentOffset(day: DayOfWeek) {
        let offset = this.calculateOffset(day);
        if (this.isValidOffset(offset)) {
            this._currentOffset = offset;
        }
        return this._currentOffset;
    }

    public isValidOffset(offset: number) {
        return offset >= this._minOffset && this._maxOffset >= offset;
    }

    public isValidDay(day: DayOfWeek) {
        return this.isValidOffset(this.calculateOffset(day));
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

    get currentOffset(): number {
        return this._currentOffset;
    }
}
