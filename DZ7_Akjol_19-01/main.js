// Задание номер 1
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }

    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary;
    }

}
const Akjol = new Worker('Travis', 'Scott', 1000, 20)
console.log(Akjol.name);
console.log(Akjol.surname);
console.log(Akjol.rate);
console.log(Akjol.days);
console.log(Akjol.getSalary());

// Задание номер 2
class WorkerTwo {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = Number(rate)
        this.days = Number(days)
    }

    get getFullName () {
        return console.log(`${this.name}  ${this.surname}`)
    }

    get getDaysAndRate() {
        return console.log(`Rate: ${this.rate}  Days: ${this.days}`)
    }

    getSalary () {
        return console.log(`Salary: ${this.rate * this.days}`)
    }
}
const AkjolTrav = new WorkerTwo('Travis', 'Scott', 1000, 20)
AkjolTrav.getFullName
AkjolTrav.getDaysAndRate
AkjolTrav.getSalary()
