export class PassEntity{
    constructor(
       public name: string,
       public fname: string,
       public phno: number,
       public altphno: number,
       public email:any,
       public address: string,
       public passrequirment: string,
       public reason: string,
       public vhno: any,
       public start: string,
       public destination: string,
       public route: string
    ){}
}

export class DocEntity{
    constructor(
       public name: string,
       public phno: number,
       public altphno: number,
       public email: any,
       public reason: string,
       public age: number,
       public appointmentdatetime: any
    ){}
}

export class VolEntity{
    constructor(
       public name: string,
       public phno: number,
       public altphno: number,
       public fname: string,
       public address: string,
       public aadhaar: number,
       public email: any,
       public qualification: any,
       public age : number
    ){}
}