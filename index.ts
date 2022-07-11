let animal: string = 'mouton';
console.log(`Dessine moi un ${animal}`);

let age: number = 30;
console.log(`j'ai ${age} ans`);

let alife: boolean = true;

let animals: string[] = ['dog', 'sheep'];
let student: Array<string> = ['Camille', 'Laura', 'Samir'];
let multi: (number | string)[] = ['Camille', 25];

let tuple: [number, string] = [25, 'Camille'];

interface objet {
  lastName: string;
  age: number;
  array: any;
  otherObjet: {
    name: string;
    firstName: string;
  };
}

let objet = {
  lastName: 'Samir',
  age: 25,
  array: ['samir', 28, 'camille', 24],
  otherObjet: {
    name: 'Samir',
    firstName: 'Dunno',
  },
};

//--------------

interface Vehicle {
  name: string;
  nbWheels: number;
  hasMotor: boolean;
  carbonPerMile: number;
  type: 'terrestre' | 'aerien' | 'maritime' | null;
}
