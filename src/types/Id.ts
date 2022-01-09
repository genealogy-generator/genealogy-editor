export default class Id{
    dynastyid   :number;
    characterid :number;
    constructor(dynastyid:number,characterid?:number){
        if(characterid){
            this.dynastyid = dynastyid;
            this.characterid = characterid;
            return;
        }
        this.dynastyid = Math.floor(dynastyid / 100000);
        this.characterid = dynastyid % 100000;
    }
    public valueOf(){
        return this.dynastyid * 100000 + this.characterid
    }
}