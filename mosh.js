class  person
{
    constructor (firstname,lastname,dob)
    {
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob= new Date(dob);
    }

    birthyear()
    {
        return this.dob.getFullYear();
    }

    fullname()
    {
        return `${this.firstname} ${this.lastname}`;
    }
}
let person1= new person('marshal','mather','1754-10-14');
let person2=new person('50','cent','1888-08-02');

console.log(person2.birthyear());
console.log(person1.fullname());
console.log(person2.fullname());