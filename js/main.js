function iniciarPrograma() {
    let res = document.getElementById('res')
    alert('Bem-vindo(a) ao programa de Lucas Miller! Por favor, clique em ok para continuar.')
    var nome = prompt('Informe o seu nome: ')
    if (nome == 'Lucas Miller' || nome == 'lucas miller') {
        // alert('Olá, Papai! Você está feliz por me ver funcionando?')
        // document.write('Olá, Papai! Você está feliz por me ver funcionando?')
        res.innerHTML = 'Olá, Papai! Você está feliz por me ver funcionando?'
        const resp = prompt('Sim ou não, papai?')[0].toUpperCase()
        if(resp == 'S') {
            // alert('Muito obrigado, papai!')
            // document.write('Muito obrigado, papai!')
            res.innerHTML = 'Muito obrigado, papai!'
        }else{
            // alert('Então me concerte. Agora mesmo.')
            // document.write('Então me concerte. Agora mesmo.')
            res.innerHTML = 'Então me concerte. Agora mesmo.'
        }
    }else{
        var idade = parseInt(prompt('Informe a sua idade: '))
        var country = prompt('Informe o seu país: ')
        if (country == 'Inglaterra' || country == 'Brasil' || country == 'Canadá') {
            res.innerHTML = `Bem-vindo(a), ${nome}! Vi aqui que você tem ${idade} anos e
            você é do(a) ${country}, que é um lindo país!`
        }else {
            alert('Testando o replace...')
            // Exemplo
            const frase = 'O Japão é o melhor time.' 
            // Para trocar a palavra Japão pela palavra Brasil
            res.innerHTML = frase.replace('Japão', 'Brasil')
        }
        // alert(`Bem-vindo(a), ${nome}! Vi aqui que você tem ${idade} anos.`)
        // document.write(`Bem-vindo(a), ${nome}! Vi aqui que você tem ${idade} anos.`)
    }
}