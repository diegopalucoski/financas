let contas = []
let opcao = ''
let saldo = 0


while (opcao != '4') {
    opcao = prompt(`Sistema Pessoal de Finanças
    saldo: ${saldo}
    1- Cadatrar crédito
    2- Cadastrar débito
    3- Extrato dos débitos e créditos
    4- Sair`)


switch (opcao){
    case '1':
        let credito = {}
        credito.descricao = prompt('Digite uma descrição')
        credito.status = 'C'
        credito.valor = Number(prompt('Quanto deseja creditar ?'))

        if (isNaN(credito.valor)){
            alert('Digite valor numérico')
        } else {
        const confirma1 = confirm(`Confirme o crédito se está correto: ${credito.valor}`)
        saldo += credito.valor
        if (confirma1){
            contas.push(credito)
        }
    }
        break
    
    case '2':
        let debito = {}

        if (saldo > 0){

        debito.descricao = prompt('Digite uma descrição')
        debito.status = 'D'

        debito.valor = Number(prompt('Quanto deseja debitar ?'))

        if (isNaN(debito.valor)){
            alert('Digite valor numérico')
        } else if (debito.valor > saldo){
            alert('Você não possui saldo suficiente')
        }
        else {
        const confirma2 = confirm(`Confirme o débito se está correto: ${debito.valor}`)
        saldo -= debito.valor

        if (confirma2){
            contas.push(debito)
        }
        }
        }   
        break
        

    case '3':
        let teste = ''
        for (let i=0; i < contas.length; i++){
            teste += contas[i].descricao + ' - '+contas[i].status + ' - R$' + contas[i].valor + '\n' 
        
        }
        alert(`Seu saldo é: ${saldo}
        ${teste}
        `)

        break
    
    case '4':
        alert('Saindo do sistema...')
        break
    default:
        alert('Opção inválida do menu')
        break    
}
}