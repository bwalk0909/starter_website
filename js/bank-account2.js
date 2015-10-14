var accounts= [];

//Account Object
//balance
//User Name

function createAccount (account){
		accounts.push(account);
		return account;
}

function getAccount (username) {
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

//create account function

//deposit(account, amount)

//function deposit (account, amount) {
//	account.balance = account.balance + amount)
	//account.balance += amount; // this short-hand will give you the same result
//}

//withdraw(account, amount)
function withdraw (account, amount) {
	account.balance -= amount;
}

//getBalance(account)
function getBalance (account) {
	return account.balance
}

deposit(briansAccount, 1000);
console.log(getBalance(account));

withdraw(account, 121);
console.log(getBalance(account));

var briansAccount = createAccount({
	username: 'Brian',
	balance: 0
});

deposit(briansAccount, 100);
console.log(getBalance(briansAccount));


