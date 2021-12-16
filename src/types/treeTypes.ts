export interface ITreeNode {
    id: Number
};
export interface ITreeLinkRelation{
    object:Number,
    type  :String
}
export interface ITreeLink {
    origin: Number,
    relation: ITreeLinkRelation
};