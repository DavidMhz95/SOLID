(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getCastByMovieId( id: string ) {
        console.log({ id });
    }

    function getBioByActorId( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie{
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie( {title,description,rating,cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullname: string){
        console.log({fullname})
        return true;
    }
    function createActor( fullName: string, birthdate: Date ): boolean {
        if ( checkFullName(fullName)) return false;
        console.log('Crear actor',birthdate);
        return true;        
    }


    //Continuar, mejorar esta  función
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    const getPayAmountRefactored = ({ isDead = false, isSeparated = true, isRetired = false }) => {
       
        if (isDead) return 1500;

        if (isSeparated) return 2500;
        
        return isRetired ? 3000 : 4000;
    
    }

    


})();
