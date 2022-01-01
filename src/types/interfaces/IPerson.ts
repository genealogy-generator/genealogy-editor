import TimelineDate from "../TimelineDate";

interface IPerson {
    isMale                      :boolean;
    name                        :string;
    surname                     :string;
    patronymic                  :string;
    birth                       :TimelineDate;
    death                       :TimelineDate | null;
    childCount                  :number;
    
    id                          :number;
    _awaitedCildCount           :number,
}

export default IPerson