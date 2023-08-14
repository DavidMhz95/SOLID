

//Segregar las interfaces para que bird no implemente todos los metodos

interface old_Bird{
    eat(): void;
    fly(): void;
    run(): void;
    swim(): void;
}

interface Bird {
    eat(): void;
}

interface FlyingbBird{
    fly(): void;
}

interface RunningBird{
    run(): void;
}

interface SwimmingBird{
    swim(): void;
}


class Tucan implements Bird, FlyingbBird{

    public fly():void {}
    public eat():void {}
}

//Colibrí
class Hummibird implements Bird, FlyingbBird{

    public fly():void {}
    public eat():void {}
}

//El avestruz no vuela, no tiene sentido , se esta violentando el principio de segregation
class Ostrich implements Bird, RunningBird{
    public eat():void {}
    public run():void {}
    public swim():void {}
}

//El pinguino no vuela, y puede nadar
class Penguin implements Bird,SwimmingBird{
    public eat():void {}
    public swim():void {}
}