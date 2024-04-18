import { UserAccount, BankManager } from "../app/bank"; 

describe('UserAccount', () => {
    let user: UserAccount;
    let user2: UserAccount;

    beforeEach(() => {
        user = new UserAccount('TestUser', 1000);
        user2 = new UserAccount('TestUser2', 500);
    });

    it('can open account using Customer name and initial deposit', () => {
        expect(user.name).toBe('TestUser');
        expect(user.amount).toBe(1000);
    });

    it('can deposit from their account as a Customer', () => {
        user.deposit(500);
        expect(user.amount).toBe(1500);
    });

    it('can withdraw from their account as a Customer', () => {
        user.withdraw(500);
        expect(user.amount).toBe(500);
    });

    it('can view the balance from their account as a Customer', () => {
        user.viewBalance();
        expect(user.amount).toBe(1000);
    });

    it('should be able to see total balance of the bank as a Manager', () => {
        const userAccounts: UserAccount[] = [user, user2];
        const totalAmount = BankManager.getTotalAmount(userAccounts);
        expect(totalAmount).toBe(1500); 
    });

    it('should not allow overdraft in withdrawal of money', () => {
        user.withdraw(1500);
        expect(user.amount).toBe(1000); 
    });

    it('can transfer money to another Customer', () => {
        user.transferAmount(200, user2);
        expect(user.amount).toBe(800);
        expect(user2.amount).toBe(700);
    });

    it('should not allow overdraft in transfering of money', () => {
        user.transferAmount(1500, user2);
        expect(user.amount).toBe(1000); 
        expect(user2.amount).toBe(500);
    });
});