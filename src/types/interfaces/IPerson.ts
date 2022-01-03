import Id from "../Id";
import TimelineDate from "../TimelineDate";

interface IPerson {
    isMale                      :boolean;
    name                        :string;
    surname                     :string;
    patronymic                  :string;
    birth                       :TimelineDate;
    death                       :TimelineDate | null;
    childCount                  :number;
    
    id                          :Id;
    _awaitedCildCount           :number,
}

export default IPerson