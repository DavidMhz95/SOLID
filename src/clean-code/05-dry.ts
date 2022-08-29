type Size = 'S'|'M'|'L'|'XL'| ''

class Product{
    constructor(
        public name: string = '',
        public prize: number = 0,
        public size: Size = '',
    ){}

    toString(){
        // No Dry, cada vez que llega una propiedad duplico mi código
        // if( this.name.length <=0) throw Error('Name is empty')
        // if( this.prize<=0) throw Error('Prize is zero')
        // if( this.size.length<=0) throw Error('Size is empty')
        if(!this.isProductReady()) return;
        
        return `${this.name} (${this.prize}), ${this.size}`
    }

    private isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case "string":
                    if ((<string><unknown>this[key]).length <= 0)
                        throw Error(`${key} is empty`);
                    break;

                case "number":
                    if ((<number><unknown>this[key]) <= 0)
                        throw Error(`${key} is zero`);
                    break;


                default:
                    throw Error(`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }
}

(()=>{

const bluePants = new Product('Blue Large Pants',10,'S')
console.log(bluePants.toString())


})();