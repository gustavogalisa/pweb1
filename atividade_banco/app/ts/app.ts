let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const cliente1 = new Cliente("Sandy", "082.685.450-55", 1)
const cliente2 = new Cliente("Xuxa", "578.958.236-02", 2)
const cliente3 = new Cliente("Angelica", "698.214.775-90", 3)

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);


