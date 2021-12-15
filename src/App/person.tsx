import TimelineDate from "./timelineDate";

interface Person {
name : string;
surname : string;
patronymic : string;
birth: TimelineDate | null;
death: TimelineDate | null;
}

export default Person