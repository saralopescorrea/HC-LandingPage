const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //impede a página de recarregar ao clicar em cadastrar
    let nome = document.getElementById('nome').value;
    //document refere ao html; colocamos o id no código e o value recebe os valorees.
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let conteudo = document.getElementById('conteudo')

    let carregando = `<p><div style="text-align: center; color: white"><p>Carregando...</p></div>`

    let pronto = `<p><div style="text-align: center; color: white">E-mail cadastrado com sucesso!</p></div>`

    conteudo.innerHTML = carregando

    setTimeout(() => {
        conteudo.innerHTML = pronto
    }, 1000)
})