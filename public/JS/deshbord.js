function fechar_alerta() {
    alerta_grupo3.style = "display:none"
    div_sair_alerta.style = "display:none"
    
}
/*COMECO DE VERIFICAÇÕES DA ABA CADASTRO DE FUNCIONARIOS--------------------------------------------------------------------------------------------------------------------**/
function digitando() {
    ipt_nome.value != '' ? (texto_nome.style = "color:black", ipt_nome.style = " border-bottom-color: #0B0B0B") : null
    ipt_email.value != '' ? (texto_email.style = "color:black", ipt_email.style = " border-bottom-color: #0B0B0B") : null
    ipt_telefone.value != '' ? (texto_telefone.style = "color:black", ipt_telefone.style = " border-bottom-color: #0B0B0B") : null
    ipt_cargo.value != '' ? (texto_cargo.style = "color:black", ipt_cargo.style = " border-bottom-color: #0B0B0B") : null
    ipt_senha.value != '' ? (texto_senha.style = "color:black", ipt_senha.style = " border-bottom-color: #0B0B0B") : null
    ipt_email_atualizar.value != '' ? (texto_email_atualizar.style = "color:black", ipt_email_atualizar.style = " border-bottom-color: #0B0B0B") : null
    ipt_telefone_atualizar.value != '' ? (texto_telefone_atualizar.style = "color:black", ipt_telefone_atualizar.style = " border-bottom-color: #0B0B0B") : null
    ipt_cargo_atualizar.value != '' ? (texto_cargo_atualizar.style = "color:black", ipt_cargo_atualizar.style = " border-bottom-color: #0B0B0B") : null
    ipt_email_remover.value != '' ? (texto_email_remover.style = "color:black", ipt_email_remover.style = " border-bottom-color: #0B0B0B") : null
    ipt_cargo_remove.value != '' ? (texto_cargo_remove.style = "color:black", ipt_cargo_remove.style = " border-bottom-color: #0B0B0B") : null
}
function cadastrar_funcionario() {
    var nome = ipt_nome.value;
    var email = ipt_email.value;
    var telefone = ipt_telefone.value;
    var cargo = ipt_cargo.value;
    var senha = ipt_senha.value;
    var valido = false;
    var email_largura = email.length
    var i_arroba = 0
    //validar email
    if (email == '' || cargo == '' || telefone == '' || senha == '') {
        cadastrar_vazio.style = "display:1; color:red;"
    }
    // verificar se tem mais de um @ 
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') i_arroba++
    }
    
    if ((email.includes('@') && (i_arroba == 1)) && (email.includes('.')) && email_largura >= 7) {
        valido = true
    } else {
        erro_email.style = "display:1; color:red"
        vaido = false
    }
    if (telefone.length == 11) {
        valido = true
    } else {
        erro_telefone.style = "display:1; color:red"
        vaido = false
    }
    if (valido == true) {
        alerta_grupo3.style = "display:1"
        div_sair_alerta.style = "display:1"
        erro_telefone.style = "display:none"
        erro_email.style = "display:none"
        ipt_nome.value = ''
        ipt_email.value = ''
        ipt_telefone.value = ''
        ipt_cargo.value = ''
        ipt_senha.value = ''
    }
}
function atualizar_funcionario() {
    var email_atualizar = ipt_email_atualizar.value;
    var telefone_atualizar = ipt_telefone_atualizar.value;
    var cargo_atualizar = ipt_cargo_atualizar.value;
    var valido = false;
    var email_atualizar_largura = email_atualizar.length
    var i_arroba = 0
    if (email_atualizar == '' || cargo_atualizar == '' || telefone_atualizar == '') {
        atualizar_vazio.style = "display:1; color:red;"
    }
    //validar email_atualizar
    // verificar se tem mais de um @ 
    for (let i = 0; i < email_atualizar.length; i++) {
        i_arroba++

    }
    if ((email_atualizar.includes('@') && (i_arroba == 1)) && (email_atualizar.includes('.')) && email_atualizar_largura >= 7) {
        valido = true
    } else {
        erro_email_atualizar.style = "display:1; color:red"
        vaido = false
    }
    if (telefone_atualizar.length == 11) {
        valido = true
    } else {
        erro_telefone_atualizar.style = "display:1; color:red"
        vaido = false
    }
    if (valido == true) {
        alerta_grupo3.style = "display:1"
        div_sair_alerta.style = "display:1"
        erro_telefone_atualizar.style = "display:none"
        erro_email_atualizar.style = "display:none"
        ipt_email_atualizar.value = ''
        ipt_telefone_atualizar.value = ''
        ipt_cargo_atualizar.value = ''
    }

}
function remover_funcionario() {
    var email_remover = ipt_email_remover.value;
    var cargo_remover = ipt_cargo_remover.value;
    var valido = false;
    var email_remover_largura = email_remover.length
    var i_arroba = 0
    if (email_remover == '' || cargo_remover == '') {
        remover_vazio.style = "display:1; color:red;"
    }
    //validar email_remover

    // verificar se tem mais de um @ 
    for (let i = 0; i < email_remover.length; i++) {
        i_arroba++
    }
    if ((email_remover.includes('@') && (i_arroba == 1)) && (email_remover.includes('.')) && email_remover_largura >= 7) {
        valido = true
    } else {
        erro_email_remover.style = "display:1; color:red"
        vaido = false
    }
    if (valido == true) {
        alerta_grupo3.style = "display:1"
        div_sair_alerta.style = "display:1"
        erro_email_remover.style = "display:none"
        ipt_email_remover.value = ''
        ipt_telefone_atualizar.value = ''
        ipt_cargo_remover.value = ''
    }

}
/*FIM DE VERIFICAÇÕES DA ABA CADASTRO DE FUNCIONARIOS--------------------------------------------------------------------------------------------------------------------**/
/*COMECO VERIFICAÇÕES DSA ABA CADASTRO DE ARMAZEMS-------------------------------------------------------------------------------------------------------------------------------- */

function digitando() {
    var select = select_grupo.value
    //var temperatura = ipt_temp_ideal.value
   // var umidade = ipt_umidade_ideal.value
    ipt_nome.value != '' ? (texto_nome.style = "color:black", ipt_nome.style = " border-bottom-color: #0B0B0B") : null
    ipt_descricao.value != '' ? (texto_descricao.style = "color:black", ipt_descricao.style = " border-bottom-color: #0B0B0B") : null
    //ipt_temp_ideal.value != '' ? (texto_temp_ideal.style = "color:black", ipt_temp_ideal.style = " border-bottom-color: #0B0B0B") : null
   // ipt_umidade_ideal.value != '' ? (texto_umidade_ideal.style = "color:black", ipt_umidade_ideal.style = " border-bottom-color: #0B0B0B") : null
    ipt_armazem_remover.value != '' ? (texto_armazem_remover.style = "color:black", ipt_armazem_remover.style = " border-bottom-color: #0B0B0B") : null
    ipt_senha_remover.value != '' ? (texto_senha_remover.style = "color:black", ipt_senha_remover.style = " border-bottom-color: #0B0B0B") : null
    ipt_confirmacao_remover.value != '' ? (texto_confirmacao_remover.style = "color:black", ipt_confirmacao_remover.style = " border-bottom-color: #0B0B0B") : null
    if (select != '') {
        texto_select.style = "color:black"
        select_grupo.style = " border-bottom-color: #0B0B0B"
        // ipt_umidade_ideal.value = "55"
       // ipt_umidade_ideal.placeholder = "55 (sugestão)"
       // texto_umidade_ideal.style = "color: black"
        //ipt_umidade_ideal.style = " border-bottom-color: #0B0B0B"
        //texto_temp_ideal.style = "color: black"
       // ipt_temp_ideal.style = " border-bottom-color: #0B0B0B"
    }
   /* if (temperatura != '') {
        texto_temp_ideal.style = "color: black"
        ipt_temp_ideal.style = " border-bottom-color: #0B0B0B"
    }
    if (umidade != '') {
        texto_umidade_ideal.style = "color: black"
        ipt_umidade_ideal.style = " border-bottom-color: #0B0B0B"
    }*/
    if (select == 'gelado') {
   //     ipt_temp_ideal.placeholder = '5 (sugestão)';

        op_gelado.style = "display:1"
        op_frio.style = "display:none"
        op_temp_adega.style = "display:none"
        op_fresco.style = "display:none"

    }
    if (select == 'frio') {
        //ipt_temp_ideal.placeholder = '10 (sugestão)'
        op_gelado.style = "display:none"
        op_frio.style = "display:1"
        op_temp_adega.style = "display:none"
        op_fresco.style = "display:none"
    }
    if (select == 'temp_adega') {
       // ipt_temp_ideal.placeholder = '15 (sugestão)'
        op_gelado.style = "display:none"
        op_frio.style = "display:none"
        op_temp_adega.style = "display:1"
        op_fresco.style = "display:none"
    }
    if (select == 'fresco') {
      //  ipt_temp_ideal.placeholder = '18 (sugestão)'
        op_gelado.style = "display:none"
        op_frio.style = "display:none"
        op_temp_adega.style = "display:none"
        op_fresco.style = "display:1"
    }
}
function cadastrar_armazem() {
    var select = select_grupo.value
   // var temperatura = ipt_temp_ideal.value
  //  var umidade = ipt_umidade_ideal.value
    var nome_armazem = ipt_nome.value
    var descricao = ipt_descricao.value
    var grupo = select_grupo.value
    var espumante = ipt_espumante.value ? true : false
    var branco_leve = ipt_branco_leve.value ? true : false
    var branco_encorpado = ipt_branco_encorpado.value ? true : false
    var branco_aromatico = ipt_branco_aromatico.value ? true : false
    var rose = ipt_rose.value ? true : false
    var tinto_médio_corpo = ipt_tinto_medio_corpo.value ? true : false
    var tinto_leve = ipt_tinto_leve.value ? true : false
    var tinto_medio_corpo = ipt_tinto_medio_corpo.value ? true : false
    var tinto_encorpado = ipt_tinto_encorpado.value ? true : false

    if (select == '' || /*temperatura == '' || umidade == '' */ nome_armazem == '' || grupo == '' ||
        (espumante == false && branco_leve == false) || (branco_encorpado == false && branco_aromatico == false && rose == false)
        || (tinto_medio_corpo == false && tinto_leve == false) || (tinto_médio_corpo == false && tinto_encorpado == false)) {
        cad_armazem_vazio.style="display=1"
    }
}
function remover_armazem() {
    var armazem_remover = ipt_armazem_remover.value
    var remover_arm_senha = ipt_senha_remover.value
    var remover_arm_confirmacao = ipt_confirmacao_remover.value
    if (remover_arm_senha == remover_arm_confirmacao) {
        armazem_remover == 'armazem1'?(arm1.style="display:none", ipt_armazem_remover.value=''):null
        armazem_remover == 'armazem2'?(arm2.style="display:none", ipt_armazem_remover.value=''):null
        armazem_remover == 'armazem3'?(arm3.style="display:none", ipt_armazem_remover.value=''):null
        armazem_remover == 'armazem4'?(arm4.style="display:none", ipt_armazem_remover.value=''):null
        armazem_remover == 'armazem5'?(arm5.style="display:none", ipt_armazem_remover.value=''):null
    }
    if (armazem_remover == ''|| remover_arm_senha == '' || remover_arm_confirmacao == '') {
        remover_armazem_vazio.style="display:1"
    }
}


/*FIM VERIFICAÇÕES DSA ABA CADASTRO DE ARMAZEMS-------------------------------------------------------------------------------------------------------------------------------- */