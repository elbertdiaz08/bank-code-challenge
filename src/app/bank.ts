export class UserAccount {
    name: string;
    amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    deposit(amount: number): void {
        this.amount += amount;
        console.log(`Deposited ${amount} into ${this.name}'s account. Current balance: ${this.amount}`);
    }

    withdraw(amount: number): void {
        if (amount > this.amount) {
            console.log(`Insufficient funds. ${this.name}'s account balance: ${this.amount}`);
        } else {
            this.amount -= amount;
            console.log(`Withdrawn ${amount} from ${this.name}'s account. Current balance: ${this.amount}`);
        }
    }

    viewBalance(): number {
        console.log(`${this.name}'s account balance: ${this.amount}`);
        return this.amount;
    }
    
    transferAmount(amount: number, receiver: UserAccount): void {
        if (amount > this.amount) {
            console.log(`Insufficient funds. ${this.name}'s account balance: ${this.amount}`);
        } else {
            this.amount -= amount;
            receiver.amount += amount;
            console.log(`Transferred ${amount} from ${this.name}'s account to ${receiver.name}'s account.`);
            console.log(`${this.name}'s account balance: ${this.amount}`);
            console.log(`${receiver.name}'s account balance: ${receiver.amount}`);
        }
    }
}

export class BankManager {
    static getTotalAmount(userAccounts: UserAccount[]): number {
        let totalAmount = 0;
        for (const user of userAccounts) {
            totalAmount += user.amount;
        }
        return totalAmount;
    }
}