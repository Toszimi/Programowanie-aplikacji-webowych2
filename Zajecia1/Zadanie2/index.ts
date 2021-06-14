interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    name: string,
    surname: string,
    age: number,
    role: string
}

const users: Person[] = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
]

const admins: Person[] = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
]

function logPerson(person: Person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log(`imie: ${person.name}, nazwisko: ${person.surname}, wiek: ${person.age}, rola: ${person.role}`);
}

function filterPersons(persons: Person[], criteria: any): Person[] {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria

    return null;
}

// TODO:

console.log('');
console.log('1');
console.log('');

// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)

users.forEach(user => {
    logPerson(user);
})
admins.forEach(admin => {
    logPerson(admin);
})

console.log('');
console.log('2');
console.log('');

// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)

const persons = [...users, ...admins];
console.log(persons);

console.log('');
console.log('3');
console.log('');

// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)

const personFilter = persons.filter(person => person.age > 25);
console.log(personFilter);

console.log('');
console.log('4');
console.log('');

// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });

const personAdam = persons.filter(person => person.name === 'Adam');
console.log(personAdam);