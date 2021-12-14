import TimelineDate from "./timelineDate";

class Person {
name : string;
surname : string;
patronymic : string;
birth: TimelineDate | null;
death: TimelineDate | null;

    constructor() {
        this.name = "undefined";
        this.surname = "undefined";
        this.patronymic = "undefined";
        this.birth = null;
        this.death = null;
    }
}

export default Person