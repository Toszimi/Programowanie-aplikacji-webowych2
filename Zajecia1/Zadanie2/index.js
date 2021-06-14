var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log("imie: " + person.name + ", nazwisko: " + person.surname + ", wiek: " + person.age + ", rola: " + person.role);
}
function filterPersons(persons, criteria) {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    return null;
}
// TODO:
console.log('');
console.log('1');
console.log('');
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
users.forEach(function (user) {
    logPerson(user);
});
admins.forEach(function (admin) {
    logPerson(admin);
});
console.log('');
console.log('2');
console.log('');
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
var persons = __spreadArray(__spreadArray([], users), admins);
console.log(persons);
console.log('');
console.log('3');
console.log('');
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
var personFilter = persons.filter(function (person) { return person.age > 25; });
console.log(personFilter);
console.log('');
console.log('4');
console.log('');
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
var personAdam = persons.filter(function (person) { return person.name === 'Adam'; });
console.log(personAdam);
