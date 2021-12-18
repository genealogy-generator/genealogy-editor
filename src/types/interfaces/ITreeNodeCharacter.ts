import { ITreeLinkRelation } from "./ITreeLinkRelation";
import IPerson from "./IPerson";

export default interface ITreeNodeCharacter extends IPerson{
    relations:ITreeLinkRelation[];
    type: "character";
}