(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }
    class InputAttributes{
        constructor(
            public value: string,
            public placeholder: string,
            id: string,
        ) {
            
        }
    }

    class InputEvents{
        constructor( value: string, placeholder: string, id: string ) {
           
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()