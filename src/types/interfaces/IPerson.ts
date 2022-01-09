import Id from "../Id";
import TimelineDate from "../TimelineDate";
import {cat} from "../../components/TreeDrawer/cat";

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

export interface IGraphNode{
    id   : number,
    label: string,
    title: string,
    image?: string
}
export function IPersonAsINode(person:IPerson):IGraphNode{
    return {
        id: person.id.valueOf(),
        label:`${person.name} ${person.surname} ${person.patronymic}`,
        title:`${person.name} ${person.surname} ${person.patronymic}`,
        image: cat
    }
}

export default IPerson