import TimelineDate from "../TimelineDate";

interface IPerson {
name : string;
surname : string;
patronymic : string;
birth: TimelineDate | null;
death: TimelineDate | null;
}

export default IPerson