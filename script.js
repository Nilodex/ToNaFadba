//confirmação do cadastro do anúncio
function cadastrar(){
    alert("Cadastro de anúncio realizado!... Faz de conta que criou x)");
}

//Simula o salvamento das alterações feitas em um anúncio
function salvarAlteracaoAnuncio(){
    alert("Alterações realizadas!");
}

//Simula a exclusão de um anúncio
function excluirAnuncio(){
    let confirmar = prompt("Tem certeza que deseja excluir o anúncio?\n Digite SIM para confirmar exclusão");
    if(confirmar == "SIM"){
        alert("Anúncio excluido!");
        return window.location.replace("/minhaConta.html");
    }
    return alert("Valor inválido, ação cancelada!");
}

//Simula interesse pelo anúncio
function criarInteresse(){
    const criarInteresseEl = document.getElementById('botaoCriarInteresse');
    const removerInteresseEl = document.getElementById('botaoRemoverInteresse');
    const botaoContatoEl = document.getElementById('botaoContato');
    if(!criarInteresseEl.classList.contains('d-none')){
        criarInteresseEl.classList.add('d-none');
    }
    if(removerInteresseEl.classList.contains('d-none')){
        removerInteresseEl.classList.remove('d-none');
    }
    if(botaoContatoEl.classList.contains('d-none')){
        botaoContatoEl.classList.remove('d-none');
    }
}

//Função para retornar ao acessar páginas indisponíveis
function indisponivel(){
    return alert("Oops! No momento essa função se encontra indisponível");
}

//simula o cancelamento de interesse pelo anúncio
function removerInteresse(){
    const criarInteresseEl = document.getElementById('botaoCriarInteresse');
    const removerInteresseEl = document.getElementById('botaoRemoverInteresse');
    const botaoContatoEl = document.getElementById('botaoContato');
    if(criarInteresseEl.classList.contains('d-none')){
        criarInteresseEl.classList.remove('d-none');
    }
    if(!removerInteresseEl.classList.contains('d-none')){
        removerInteresseEl.classList.add('d-none');
    }
    if(!botaoContatoEl.classList.contains('d-none')){
        botaoContatoEl.classList.add('d-none');
    }
}

//abre a aba de informações do usuário na página Minha Conta
function abrirMeuPerfil(){
    esconderMeusAnuncios();
    esconderInteresses();
    const navlinkPerfilEl = document.getElementById('navlinkPerfil');
    if(!navlinkPerfilEl.classList.contains('active')){
        navlinkPerfilEl.classList.add('active');
    }
    const meuPerfilEl = document.getElementById('meuPerfil');
    if(meuPerfilEl.classList.contains('d-none')){
        meuPerfilEl.classList.remove('d-none');
    }
}

//abre a aba de anúncios criados pelo usuário
function abrirMeusAnuncios(){
    esconderMeuPerfil();
    esconderInteresses();
    const navlinkAnunciosEl = document.getElementById('navlinkAnuncios');
    if(!navlinkAnunciosEl.classList.contains('active')){
        navlinkAnunciosEl.classList.add('active');
    }
    const meusAnunciosEl = document.getElementById('meusAnuncios');
    if(meusAnunciosEl.classList.contains('d-none')){
        meusAnunciosEl.classList.remove('d-none');
        console.log(meusAnunciosEl);
    }
}

//abre a aba de anúncios que o usuário se interessou
function abrirAnunciosInteressados(){
    esconderMeuPerfil();
    esconderMeusAnuncios();
    const navlinkInteressesEl = document.getElementById('navlinkInteresses');
    if(!navlinkInteressesEl.classList.contains('active')){
        navlinkInteressesEl.classList.add('active');
    }
    const anunciosCurtidosEl = document.getElementById('anunciosCurtidos');
    if(anunciosCurtidosEl.classList.contains('d-none')){
        anunciosCurtidosEl.classList.remove('d-none');
    }

}

//esconde as informações do usuário
function esconderMeuPerfil(){
    const navlinkPerfilEl = document.getElementById('navlinkPerfil');
    if(navlinkPerfilEl.classList.contains('active')){
        navlinkPerfilEl.classList.remove('active');
    }
    const meuPerfilEl = document.getElementById('meuPerfil');
    if(!meuPerfilEl.classList.contains('d-none')){
        meuPerfilEl.classList.add('d-none');
    }
}

//esconde os anuncios que o usuário criou
function esconderMeusAnuncios(){
    const navlinkAnunciosEl = document.getElementById('navlinkAnuncios');
    if(navlinkAnunciosEl.classList.contains('active')){
        navlinkAnunciosEl.classList.remove('active');
    }
    const meusAnunciosEl = document.getElementById('meusAnuncios');
    if(!meusAnunciosEl.classList.contains('d-none')){
        meusAnunciosEl.classList.add('d-none');
    }
}

//esconde os anuncios que o usuario se interessou
function esconderInteresses(){
    const navlinkInteressesEl = document.getElementById('navlinkInteresses');
    if(navlinkInteressesEl.classList.contains('active')){
        navlinkInteressesEl.classList.remove('active');
    }
    const anunciosCurtidosEl = document.getElementById('anunciosCurtidos');
    if(!anunciosCurtidosEl.classList.contains('d-none')){
        anunciosCurtidosEl.classList.add('d-none');
    }
}

//valida se há campos vazios no formulário de edição do perfil
function validarFormulario(nome, email, telefone){
    if(nome == '' || email == '' || telefone == ''){
        return false;
    }
    return true;
}

//Simula desfazer interesse de um anúncio
function desfazerInteresse(){
    alert("desfeito!");
}

//Salva as alterações feitas no perfil
function salvarEdicaoPerfil(){
    nome = document.getElementById('nomeForm').value;
    email = document.getElementById('emailForm').value;
    telefone = document.getElementById('telForm').value;
    if(!validarFormulario(nome, email, telefone)){
        return alert("Atenção: Há campos vazios que devem ser preenchidos!");
    }
    nomeEl = document.getElementById('nome');
    emailEl = document.getElementById('email');
    telEl = document.getElementById('telefone');
    nomeEl.innerText = nome;
    emailEl.innerText = email;
    telEl.innerText = telefone;
    fecharEdicaoPerfil();
}

//Abre a modal de edição do perfil
function abrirEdicaoPerfil(){
    const editarModal = $('#editarModal');
    const bsModal = new bootstrap.Modal(editarModal);
    const nomeFormEl = document.getElementById('nomeForm');
    const emailFormEl = document.getElementById('emailForm');
    const telFormEl = document.getElementById('telForm');
    nomeFormEl.value = document.getElementById('nome').innerText;
    emailFormEl.value = document.getElementById('email').innerText;
    telFormEl.value = document.getElementById('telefone').innerText;
    bsModal.show();
}

//Fecha a modal de edição do perfil
function fecharEdicaoPerfil(){
    $('#editar')[0].reset();
    const bsModal = bootstrap.Modal.getInstance('#editarModal');
    bsModal.hide();
}