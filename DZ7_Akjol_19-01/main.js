
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = Number(rate)
        this.days = Number(days)
    }

    getSalary () {
        return console.log(`Salary: ${this.rate * this.days}`)
    }

    get getFullName () {
        return console.log(`${this.name}  ${this.surname}`)
    }

    get getDaysAndRate() {
        return console.log(`Rate: ${this.rate}  Days: ${this.days}`)
    }
}

const Akjol = new Worker('Travis', 'Scott', 1000, 20)

Akjol.getSalary()
Akjol.getFullName
Akjol.getDaysAndRate
