import IPerson from '../types/interfaces/IPerson';
import TimelineDate from '../types/TimelineDate';
import NameGen from './namegen'
import Id from "../types/Id"
type relationType = "merried" | "child";

export interface IGenaLink {from:Id,to:Id,type:relationType}

class CharactersArray{
    dynastyid                   :number;
    memberCount                 :number;
    main                        :Map<Id,IPerson>;
    secondary                   :Map<Id,IPerson>;
    constructor(dynastyid:number){
        this.dynastyid = dynastyid
        this.memberCount = 0;
        this.main      = new Map<Id,IPerson>();
        this.secondary = new Map<Id,IPerson>();
    }
    get all(){
        return [...this.main.values(),...this.secondary.values()]
    }
    add(character: IPerson){
        if(character.id.dynastyid === this.dynastyid) this.memberCount++;
        this.update(character)
    }
    update(character: IPerson){
        if(character.id.dynastyid === this.dynastyid) return this.main.set(character.id,character)
        return this.secondary.set(character.id,character)
    }
    find(id:Id){
        if(id.dynastyid === this.dynastyid) return this.main.get(id)
        return this.secondary.get(id)
    }
    delete(id:Id){
        if(id.dynastyid === this.dynastyid) return this.main.delete(id)
        return this.secondary.delete(id)
    }
    clear(){
        this.main      = new Map<Id,IPerson>();
        this.secondary = new Map<Id,IPerson>();
    }

}
interface IGeneratorParams{
    DYNASTY_NAME                :string | undefined,
    AVRAGE_FIRTILITY_AGE        :number,
    AVRAGE_LIFESPAN             :number,
    YEAR_DIFERENCE_LIMIT        :number,
    LIVESPAN_DEFFERENCE_KOEF    :number,
    SECANDARY_DYNASTIES_LIMIT   :number,
    MAX_RANDOM_NUM              :number,
    DEBUG                       :number
}
const DEFAULT_PARAMS = {
    DYNASTY_NAME:undefined,
    AVRAGE_FIRTILITY_AGE        :18,
    AVRAGE_LIFESPAN             :60,
    YEAR_DIFERENCE_LIMIT        :6,
    LIVESPAN_DEFFERENCE_KOEF    :0.5,
    SECANDARY_DYNASTIES_LIMIT   :2,
    MAX_RANDOM_NUM              :1447649678,
    DEBUG                       :0
}
interface IGenData{
    idCounter                   :number;
    nameGen                     :NameGen.NameGenerator;
    dynNameGen                  :NameGen.NameGenerator;
    dynasty                     :string;
    options                     :IGeneratorParams;
    foundingDate                :TimelineDate;
    dynastys                    :Array<string>;
    characters                  :CharactersArray;
    links                       :Array<IGenaLink>;

    _pseudorandom               :()=>number;
}
class Generator implements IGenData{
    idCounter                   :number  = 0;
    nameGen                     !:NameGen.NameGenerator;
    dynNameGen                  !:NameGen.NameGenerator;
    dynasty                     !:string;
    options                     !:IGeneratorParams;
    foundingDate                !:TimelineDate;
    dynastys                    !:Array<string>;
    characters                  !:CharactersArray;
    links                       !:Array<IGenaLink>;

    _pseudorandom               !:()=>number;

    constructor(nameTemplate:string | IGenData,seed:number = Math.random(),options: IGeneratorParams = DEFAULT_PARAMS,foundingDate:TimelineDate = new TimelineDate(0,0,0,0,0,0)) {
        if(typeof nameTemplate === "string") {
            this.nameGen            = new NameGen.NameGenerator(nameTemplate);
            this.dynNameGen         = new NameGen.NameGenerator(nameTemplate);
            this.dynastys           = new Array<string>();
            this.characters         = new CharactersArray(0);
            this.links              = new Array<IGenaLink>();
            this.options            = options;
            this.foundingDate       = foundingDate;
            
            this._pseudorandom = function() {
                var t = seed += 0x6D2B79F5;
                // eslint-disable-next-line
                t = Math.imul(t ^ t >>> 15, t | 1);
                // eslint-disable-next-line
                t ^= t + Math.imul(t ^ t >>> 7, t | 61);
                // eslint-disable-next-line
                const ret = ((t ^ t >>> 14) >>> 0) / 4294967296;
                this.options.DEBUG >= 3 && console.log(ret);
                return ret;
            }
            this.dynasty = this.options.DYNASTY_NAME?this.options.DYNASTY_NAME:this.dynNameGen.toString(this._pseudorandom());  
            return      
        } 
        Object.assign(this,nameTemplate);
    }
    private IPersonFactory(name:string, surname:string, patronymic:string, birth:TimelineDate, death:null | TimelineDate, _awaitedCildCount: number,isMale:boolean = Boolean(this._randint() % 2)):IPerson{
        const id = this.dynasty === surname?0:this.dynastys.findIndex(v=>v === surname)
        return {
            name,surname,patronymic,birth,death,
            _awaitedCildCount,isMale,
            id:new Id(id,this.idCounter++),
            childCount:0
        }
    }
    private _createChildTimelineDate(parentBirth: TimelineDate[]):TimelineDate{
        const youngDate = parentBirth.reduce((prev,curr) => curr.year >= prev.year?curr:prev)
        const td:TimelineDate = Object.assign({},youngDate)
        
        td.year += this._randint() % (this.options.AVRAGE_LIFESPAN - this.options.AVRAGE_FIRTILITY_AGE) + this.options.AVRAGE_FIRTILITY_AGE; 
        td.day   = this._randint() % 31;
        td.month = this._randint() % 12;
        return td
    }
    private _createPeerTimlineDate(peerBirth: TimelineDate):TimelineDate{
        const td:TimelineDate = Object.assign({},peerBirth)
        
        td.year += this._randint() % (this.options.YEAR_DIFERENCE_LIMIT * 2) - this.options.YEAR_DIFERENCE_LIMIT; 
        td.day = this._randint()   % 31;
        td.month = this._randint() % 12;
        return td;
    }
    private _createDeathTimelineDate(character: IPerson):TimelineDate{
        if(!character._awaitedCildCount){
            const td = Object.assign({},character.birth)
        
            td.year += this._randint() % this.options.AVRAGE_LIFESPAN; 
            td.day   = this._randint() % 31;
            td.month = this._randint() % 12;
            return td;
        }
        const td = Object.assign({},character.birth)

        td.year += this._randint() % (this.options.AVRAGE_LIFESPAN * (1 + this.options.LIVESPAN_DEFFERENCE_KOEF) - this.options.AVRAGE_FIRTILITY_AGE ) + this.options.AVRAGE_FIRTILITY_AGE; 
        td.day   = this._randint() % 31;
        td.month = this._randint() % 12;

        return td;
    }
    private _randint(){
        return Math.floor(this._pseudorandom() * this.options.MAX_RANDOM_NUM);
    }
    private _randomFromArray<T=any>(array:Array<T>){
        return array[Math.floor(this._pseudorandom() * array.length)];
    }
    private _generateDynasty() {
        const ret = this.dynNameGen.toString(this._pseudorandom())
        this.dynastys.push(ret);
        return ret;
    }
    private _getSecondaryDynasty(){
        if(!~this.options.SECANDARY_DYNASTIES_LIMIT) return this._generateDynasty()
        const idx = this._randint() % this.options.SECANDARY_DYNASTIES_LIMIT
        if(idx >= this.dynastys.length) {
            const dyn = this._generateDynasty()
            this.dynastys.push(dyn)
            return dyn
        }
        return this.dynastys[idx]
    }
    private _findMerried(id:Id){
        return this.links.find((value)=>(value.from.valueOf() === id.valueOf()  || value.to.valueOf() === id.valueOf()) && value.type === "merried")
    }
    private _logChararacterData(character:IPerson,role:"founder" | "wifu" | "child",...args:IPerson[]){
        let prefix = "UNKNOWN"
        switch (role) {
            case "child"  : prefix = `${character.isMale?"Son":"Daughter"} of ${args[0].name} and ${args[1].name}`;break;
            case "wifu"   : prefix = `${character.isMale?"Hasband":"Wife"} of ${args[0].name}`;break;
            case "founder": prefix = `Founder`;break;
            default       : break;
        }
        console.log(`${character.name} ${character.surname} al ${character.patronymic}.\n${prefix}.\nBirth in ${character.birth.year} year\n${character.death?`Pass off in ${character.death.year} year`:"Until our time"}\n`);
    }
    /**
     * produce
     */
    public produce():IPerson {
        if(!this.characters.memberCount){
            const name       = this.nameGen.toString(this._pseudorandom());
            const surname    = this.dynasty;
            const patronymic = this.nameGen.toString(this._pseudorandom())
            const founder = this.IPersonFactory(name,surname, patronymic, this.foundingDate, null,this._randint() % 3 + 1)
            founder.death = this._createDeathTimelineDate(founder);
            this.characters.add(founder);
            this.options.DEBUG && this._logChararacterData(founder,"founder");
            this.options.DEBUG>=2 && console.log(founder.birth);
            return founder;
        }
        const person = this._randomFromArray([...this.characters.main.values()]);
        const marriege = this._findMerried(person.id)
        if(!marriege){
            const name       = this.nameGen.toString(this._pseudorandom());
            const surname    = this._getSecondaryDynasty();
            const patronymic = this.nameGen.toString(this._pseudorandom())
            const wifu = this.IPersonFactory(name,surname, patronymic,this._createPeerTimlineDate(person.birth),null,0,!person.isMale)
            wifu.death = this._createDeathTimelineDate(wifu);
            this.characters.add(wifu);
            this.links.push({from:person.id,to:wifu.id,type:"merried"});
            this.options.DEBUG && this._logChararacterData(wifu,"wifu",person);
            this.options.DEBUG>=2 && console.log(wifu.birth);
            return wifu;
        }
        //TODO Check all characters can have children
        const wifu    = this.characters.find(marriege.to)!;
        const name    = this.nameGen.toString(this._pseudorandom());
        const surname = this.dynasty;
        const patronymic = person.name;
        const child = this.IPersonFactory(name,surname, patronymic,this._createChildTimelineDate([person.birth,wifu.birth]),null,this._randint() % 3 + 1)

        child.death = this._createDeathTimelineDate(child);
        this.characters.add(child);

        this.links.push({from:person.id,to:child.id,type:"child"});
        this.links.push({from:marriege.to,to:child.id,type:"child"});

        this.options.DEBUG    && this._logChararacterData(child,"child",person,wifu);
        this.options.DEBUG>=2 && console.log(child.birth);

        return child;
    }
    get data():IGenData{
        return {...this}
    }
    /**
     * generateCharacters     
     */
    public generateDynasty(count:number) {
        for (let index = 0; index < count - 1; index++)
            this.produce()
        return this.characters.all
    }
    public updateCharacter(char: IPerson){
        this.characters.update(char)
    }
    public addCharacter(char: IPerson){
        this.characters.add(char)
    }
    public deleteCharacter(id:Id){
        this.characters.delete(id);
    }

}

export default Generator;