import { ITreeLinkRelation } from "./ITreeLinkRelation";

export interface ITreeNodeRoot {
    relations:ITreeLinkRelation[];
    type: "root";
}
export interface ITreeNodeCharacter{
    birth_date: number;
    relations:ITreeLinkRelation[];
    type: "character";
}

export type ITreeNode = ITreeNodeRoot | ITreeNodeCharacter;