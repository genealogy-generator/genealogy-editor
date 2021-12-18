import { ITreeLinkRelation } from "./ITreeLinkRelation";

export default interface ITreeNodeRoot {
    relations:ITreeLinkRelation[];
    type: "root";
}