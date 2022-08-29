(()=>{

    //No aplicando el principio de responsabilidad unica
    type Gender = 'M' | 'F'

    interface PersonProps{
         name: string
         gender: Gender
         birthdate: Date
    }

    class Person {
        public name: string
        public gender: Gender
        public birthdate: Date

        constructor({name,gender,birthdate} : PersonProps){
            this.name = name
            this.gender = gender
            this.birthdate = birthdate
        }
    }

    
    interface UserProps{
        birthdate: Date
        email: string
        gender: Gender
        name: string
        role: string
    }

    class User extends Person{
        public email: string
        public role: string
        public lastAccess: Date

        constructor({birthdate,email,gender,name,role}: UserProps){
            super({name,gender,birthdate})
            this.email = email
            this.role = role
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps{
        workingDirectory: string
        lastOpenFolder: string
        email:string
        role:string
        name:string
        gender: Gender
        birthdate: Date
    }

    class userSettings extends User{
        public workingDirectory: string
        public lastOpendFolder: string
        constructor({workingDirectory,lastOpenFolder,email,role,name,gender,birthdate } : UserSettingsProps
        ){
            super({email,role,name,gender,birthdate})
            this.workingDirectory = workingDirectory
            this.lastOpendFolder = lastOpenFolder
        }
    }

    const userSetting = new userSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'david@gmail.com',
        role: 'Admin',
        name: 'David',
        gender:'M',
        birthdate: new Date('1995-08-03')
    }
       
    )

    console.log({userSetting , areCredentialsValid: userSetting.checkCredentials()})


})()