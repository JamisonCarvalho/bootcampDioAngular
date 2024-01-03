// classes


/**
 * Data Modifier:
 * - public; --> Pode ser acessado fora da classe e é o default.
 * - private; --> Só pode ser acessado dentro da classe.
 * - protected; --> Só pode ser acessado dentro da classe ou subclasses que herdam essa classe.
 */


class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`);
    }
}


// Character: superclass --> Classe PAI
// Magician: subclass --> Classe FILHA
class Magician extends Character {
    magicPoint: number;
    constructor(name: string, stregth: number, skill: number, magicPoint: number){
        super(name, stregth, skill);
        this.magicPoint = magicPoint;
    }

}

const player1 = new Character("Jamison", 10, 98);
const player2 = new Magician("Jamison", 9, 30, 100);
player1.attack();

// Generics
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5],[6]);
const stgArray = concatArray<string[]>(["jamison","tiana"],["brenda"]);

// console.log(numArray);
// console.log(stgArray);

// Decorators

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version});
    }
}

@apiVersion("1.10")
class Api{}

const api = new Api();
//console.log(api.__version);

// attirbute decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        }

        Object.defineProperty(target, key,{
            get: getter,
            set: setter,
        })
    }
}

class Api2{
    @minLength(3)
    name: string
    
    constructor(name: string){
        this.name = name;
    }
}

const api2 = new Api2("Produto");
console.log(api2.name);