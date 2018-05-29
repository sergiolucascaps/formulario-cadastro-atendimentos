
var objMensagem = null;
window.onload = function(){ PreIniciar(); }

// Inicialização do objeto Formulário
function Formulario(){
	
	this.fields = {
		procon: document.getElementById('txtProcon'),
		proconValue: document.getElementById('txtProcon').value,
		proconPlaceholder: document.getElementById('txtProcon').placeholder,
		tecnico: document.getElementById('txtTecnico'),
		tecnicoValue: document.getElementById('txtTecnico').value,
		tecnicoPlaceholder: document.getElementById('txtTecnico').placeholder,
		contato: document.getElementById('txtContato'),
		contatoValue: document.getElementById('txtContato').value,
		contatoPlaceholder: document.getElementById('txtContato').placeholder,
		linhaReclamada: document.getElementById('txtLinhaReclamada'),
		linhaReclamadaValue: document.getElementById('txtLinhaReclamada').value,
		linhaReclamadaPlaceholder: document.getElementById('txtLinhaReclamada').placeholder,
		cpf: document.getElementById('txtCpf'),
		cpfValue: document.getElementById('txtCpf').value,
		cpfPlaceholder: document.getElementById('txtCpf').placeholder,
		consumidor: document.getElementById('txtConsumidor'),
		consumidorValue: document.getElementById('txtConsumidor').value,
		consumidorPlaceholder: document.getElementById('txtConsumidor').placeholder,
		solicitacao: document.getElementById('txtSolicitacao'),
		solicitacaoValue: document.getElementById('txtSolicitacao').value,
		solicitacaoPlaceholder: document.getElementById('txtSolicitacao').placeholder,
		tratativa: document.getElementById('txtTratativa'),
		tratativaValue: document.getElementById('txtTratativa').value,
		tratativaPlaceholder: document.getElementById('txtTratativa').placeholder,
		protocolo: document.getElementById('txtProtocolo'),
		protocoloValue: document.getElementById('txtProtocolo').value,
		protocoloPlaceholder: document.getElementById('txtProtocolo').placeholder,
		assinaturaAtendente: 'Flavia / Procon Online',
		conteudoBotoesCadastro: document.getElementById('conteudoBotoesCadastro'),
		btnSalvarDados: document.getElementById('btn_salvarDados')
	}
	this.elementsFromView = {
		tableHistory: document.getElementById("tabela"),
		countAtendimentos: document.getElementById("lbl_contadorAtendimentos")
	}
	this.formatsFromDate = {
		ptbr: "pt-BR",
		enus: "en-US"
	}
	this.botoesDeAcao = {
		botoes: ["detalhes", "edicao", "delecao"]
	}
	this.botoesDeAcaoCadastro = {
		btn_salvarDados : '<input id="btn_salvarDados" value="Salvar" title="Salvar atendimento" type="button" onclick="btn_salvarDados_Click()" class="btn btn-success"/>',
		btn_salvarEdicao : '<input id="idReplace" value="Salvar edição" type="button" title="Salvar edição do atendimento" onclick="AcaoBotoes(this)" typeToAction="salvarEdicao" class="btn btn-success"/>',
		btn_cancelarEdicao : '<input id="idReplace" value="Cancelar edição" type="button" title="Cancelar edição de atendimento" onclick="AcaoBotoes(this)" typeToAction="cancelarEdicao" class="btn btn-danger"/>'
	}
}

function UtilidadesFormulario(){ } 

// Protótipos (Formulario)

Formulario.prototype.MontarLayoutDeSaida = function(objFormulario){ return RetornaLayoutSaida(objFormulario); }
Formulario.prototype.CopiarParaAreaDeTransferencia = function(texto){ CopiarAreaTransferecia(texto); }
Formulario.prototype.CleanFields = function(objFormulario){ Clean(objFormulario); }
Formulario.prototype.FocusOnField = function(objFormulario){ SetFocus(objFormulario); }
Formulario.prototype.RetornaObjAtendimento = function(objFormulario){ return GetObjAtendimento(objFormulario); }
Formulario.prototype.InserirObjAtendimentoNaSection = function(objFormulario, objAtendimento, arrAtendimentos){ InsertObjOnSection(objFormulario, objAtendimento, arrAtendimentos); }
// Formulario.prototype.InserirArrAtendimentosNaSection = function(objFormulario, arrAtendimentos){ InserirArrAtendimentosNaSection(objFormulario, arrAtendimentos); }
Formulario.prototype.InsertArrOnSection = function(arrAtendimentos){ InsertArrOnSection(arrAtendimentos); }
Formulario.prototype.CleanTableHistory = function(objFormulario){ CleanTableHistory(objFormulario); }
Formulario.prototype.ReinsertAllHistory = function(objFormulario, arrAtendimentos){ return ReinsertAllHistory(objFormulario, arrAtendimentos); }
Formulario.prototype.RetornarArrAtendimentos = function(objFormulario){ return RetornarArrAtendimentos(objFormulario); }
Formulario.prototype.RetornarStringParaData = function(valorDataString){ return RetornarStringParaData(valorDataString); }
Formulario.prototype.RetornaQuantidadeAtendimentos = function(objFormulario){ return RetornaQuantidadeAtendimentos(objFormulario); }
Formulario.prototype.InserirQuantidadeAtendimentos = function(objFormulario, qtdAtendimentos){ return InserirQuantidadeAtendimentos(objFormulario, qtdAtendimentos); }
Formulario.prototype.RecuperarHistoricoCompletoAtendimentosLayoutDownload = function(objFormulario, arrAtendimentos){ return RecuperarHistoricoCompletoAtendimentosLayoutDownload(objFormulario, arrAtendimentos); }
Formulario.prototype.CriarButton = function(tipoBotao, idAtendimento){ return CriarButton(tipoBotao, idAtendimento); }
Formulario.prototype.getNextId = function(){ return getNextId(); }
Formulario.prototype.DeletarItem = function(objFormulario, idNumerico){ DeletarItem(objFormulario, idNumerico); }
Formulario.prototype.DetalharItem = function(objFormulario, id, idNumerico){ DetalharItem(objFormulario, id, idNumerico); }
Formulario.prototype.EditarItem = function(objFormulario, id, idNumerico){ EditarItem(objFormulario, id, idNumerico); }
Formulario.prototype.RecuperarAtendimentoLayoutModal = function(objFormulario, objAtendimentoAtual){ return RecuperarAtendimentoLayoutModal(objFormulario, objAtendimentoAtual); }
Formulario.prototype.ConfirmarDelecaoItem = function(objFormulario, idCompleto, idNumerico){ return ConfirmarDelecaoItem(objFormulario, idCompleto, idNumerico); }
Formulario.prototype.DeletarHistoricoCompleto = function(){ trashHistory(); }
Formulario.prototype.DeletarHistoricoCompletoInicializacao = function(){ trashHistoryInicialize(); }
Formulario.prototype.CriarBotaoCancelarEdicao = function(htmlBotao, idBotao){ return CriarBotaoCancelarEdicao(htmlBotao, idBotao); }
Formulario.prototype.CriarBotaoSalvarEdicao = function(htmlBotao, idBotao){ return CriarBotaoSalvarEdicao(htmlBotao, idBotao); }
Formulario.prototype.SalvarEdicao = function(objFormulario, id, idNumerico){ SalvarEdicao(objFormulario, id, idNumerico); }
Formulario.prototype.CancelarEdicaoItem = function(objFormulario, id, idNumerico){ SalvarEdicao(objFormulario, id, idNumerico); }
Formulario.prototype.RetornarArrAtendimentosHistory = function(objFormulario){ return RetornarArrAtendimentosHistory(objFormulario); }

// Protótipos (UtilidadesFormulario)

UtilidadesFormulario.prototype.RetornarObjMensagem = function(){ return RetornaObjMensagem(); }

// Funções trabalhadoras - Não devem ser modificadas, a não ser por mudança de regra

function PreIniciar(){
	
	var objFormulario = new Formulario();
	
	// Recupera os dados armazenados
	var arrAtendimentos = localStorage.getItem("arrAtendimentos");
	
	var dataHoje = new Date().toLocaleDateString(objFormulario.formatsFromDate.ptbr);
		
	// Converte string para objeto
	arrAtendimentos = JSON.parse(arrAtendimentos); 
	// Caso não haja conteúdo, iniciamos um vetor vazio
	if(arrAtendimentos == null) 
		InicializarTela();
	else{
		var dataArray = objFormulario.RetornarStringParaData(arrAtendimentos.data).toLocaleDateString(objFormulario.formatsFromDate.ptbr);
		
		if(dataArray < dataHoje){
			var objModalPropriedades = new ModalPropriedades();
			var objModal = new Modal();
			
			objModalPropriedades.propriedades.Des_Titulo_Modal = 'ATENÇÃO !!!';
			objModalPropriedades.propriedades.Des_Body_Modal = objModalPropriedades.mensagemPadrao.msgInformaHistoricoAnterior;
			objModalPropriedades.propriedades.Des_Footer_Modal = objModalPropriedades.botoesPadroes.btnDeletarBackupAnterior;
			objModalPropriedades.propriedades.Des_Footer_Modal += objModalPropriedades.botoesPadroes.btnSalvarBackupAnterior;
			
			objModal.MostrarModal(objModalPropriedades);
		}
		else
			InicializarTela();
	}
}

function InicializarTela()
{
	// Inicialização dos objetos
	var objUtilidadesFormulario = new UtilidadesFormulario();
	var objFormulario = new Formulario();
	objMensagem = objUtilidadesFormulario.RetornarObjMensagem();
	
	try
	{
		// Limpa completamente a tabela
		objFormulario.CleanTableHistory(objFormulario);
		// Reinsere todo histórico de atendimentos
		var count = objFormulario.ReinsertAllHistory(objFormulario, objFormulario.RetornarArrAtendimentos(objFormulario));
		objMensagem.MostrarMensagem((count > 0 ? (count.toString() + ' registros foram encontrados') : 'Não foi localizado histórico para recuperar!'), 'Histórico', 'info');
		
		objFormulario.fields.conteudoBotoesCadastro.innerHTML = objFormulario.botoesDeAcaoCadastro.btn_salvarDados;
		
		// Setar Foco novamente
		objFormulario.FocusOnField(objFormulario);	
		
		objMensagem.MostrarMensagem('Sucesso!<br>Sistema operando com força total.', 'Inicialização');
	}
	catch(err){
		objMensagem.MostrarMensagem('Desculpe, mas algo saiu fora do meu controle, e pode ser que meu funcionamento não ocorra corretamente!' + '<br><b>Detalhes:</b>' + (err.message != undefined ? err.message : err), 'Ops...', 'error', true);
	}
}

function RetornaObjMensagem(){
	return objMensagem != null ? objMensagem : new Mensagem();
}

function RetornarArrAtendimentosHistory(objFormulario)
{
	// Recupera os dados armazenados
	var arrAtendimentos = localStorage.getItem("arrAtendimentos");
	arrAtendimentos = JSON.parse(arrAtendimentos); 
	return arrAtendimentos;
}

function RetornarArrAtendimentos(objFormulario)
{
	// Recupera os dados armazenados
	var arrAtendimentos = localStorage.getItem("arrAtendimentos");
	
	var dataHoje = new Date().toLocaleDateString(objFormulario.formatsFromDate.ptbr);
		
	// Converte string para objeto
	arrAtendimentos = JSON.parse(arrAtendimentos); 
	// Caso não haja conteúdo, iniciamos um vetor vazio
	if(arrAtendimentos == null) 
		arrAtendimentos = {"data":dataHoje, "atendimentos":[]};
	
	var dataArray = objFormulario.RetornarStringParaData(arrAtendimentos.data).toLocaleDateString(objFormulario.formatsFromDate.ptbr);
	
	if(dataArray < dataHoje)
		arrAtendimentos = {"data":dataHoje, "atendimentos":[]};
	
	return arrAtendimentos;
}

function RetornaQuantidadeAtendimentos(objFormulario){
	var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
	return (arrAtendimentos.atendimentos != null && arrAtendimentos.atendimentos.length > 0) ? arrAtendimentos.atendimentos.length : 0;
}

function RetornarStringParaData(valorDataString)
{
	var arrString = valorDataString.split('/');
	if(arrString.length == 3)
		return new Date(arrString[1] + '/' + arrString[0] + '/' + arrString[2])
	else
		return '';
}

function RetornaLayoutSaida(objFormulario){
	var layoutRetorno = '\n';
	
	layoutRetorno += (objFormulario.fields.proconPlaceholder + ': ' + objFormulario.fields.proconValue + '\n');
	layoutRetorno += (objFormulario.fields.tecnicoPlaceholder  + ': ' + objFormulario.fields.tecnicoValue + '\n');
	layoutRetorno += (objFormulario.fields.contatoPlaceholder  + ': ' + objFormulario.fields.contatoValue + '\n');
	layoutRetorno += (objFormulario.fields.linhaReclamadaPlaceholder  + ': ' + objFormulario.fields.linhaReclamadaValue + '\n');
	layoutRetorno += (objFormulario.fields.cpfPlaceholder  + ': ' + objFormulario.fields.cpfValue + '\n');
	layoutRetorno += (objFormulario.fields.consumidorPlaceholder  + ': ' + objFormulario.fields.consumidorValue + '\n');
	layoutRetorno += (objFormulario.fields.solicitacaoPlaceholder  + ': ' + objFormulario.fields.solicitacaoValue + '\n');
	layoutRetorno += (objFormulario.fields.tratativaPlaceholder  + ': ' + objFormulario.fields.tratativaValue + '\n');
	layoutRetorno += (objFormulario.fields.protocoloPlaceholder  + ': ' + objFormulario.fields.protocoloValue + '\n');
	layoutRetorno += (objFormulario.fields.assinaturaAtendente + '\n');
	
	return layoutRetorno;
}

function CopiarAreaTransferecia(texto){
	document.getElementById('AreaTransferencia').setAttribute('style','display:inline-block;');
	document.getElementById('AreaTransferencia').value = texto;
	document.getElementById('AreaTransferencia').select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
	}
	catch (err) {
		console.log('Problema ao Copiar');
	}
	document.getElementById('AreaTransferencia').setAttribute('style','display:none;');
}

function Clean(objFormulario){
	objFormulario.fields.procon.value = '';
	objFormulario.fields.tecnico.value = '';
	objFormulario.fields.contato.value = '';
	objFormulario.fields.linhaReclamada.value = '';
	objFormulario.fields.cpf.value = '';
	objFormulario.fields.consumidor.value = '';
	objFormulario.fields.solicitacao.value = '';
	objFormulario.fields.tratativa.value = '';
	objFormulario.fields.protocolo.value = '';
}

function SetFocus(objFormulario){
	objFormulario.fields.procon.focus();
}

function GetObjAtendimento(objFormulario){
	var objAtendimento = { 
		idAtendimento: objFormulario.getNextId(),
		procon: objFormulario.fields.proconValue, 
		tecnico: objFormulario.fields.tecnicoValue, 
		contato: objFormulario.fields.contatoValue, 
		linhaReclamada: objFormulario.fields.linhaReclamadaValue, 
		cpf: objFormulario.fields.cpfValue, 
		consumidor: objFormulario.fields.consumidorValue, 
		solicitacao: objFormulario.fields.solicitacaoValue, 
		tratativa: objFormulario.fields.tratativaValue, 
		protocolo: objFormulario.fields.protocoloValue, 
		assinaturaAtendente: objFormulario.fields.assinaturaAtendente
	}
	return JSON.stringify(objAtendimento);
}

function getNextId(){
	var objFormulario = new Formulario();
	var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
	if(arrAtendimentos.atendimentos.length == 0)
		return 1;
	else
	{
		var idRetorno = 1;
		
		arrAtendimentos.atendimentos.forEach(function(atendimento){
			var objAtendimentoAtual = JSON.parse(atendimento);
			if(objAtendimentoAtual.idAtendimento > idRetorno)
				idRetorno = objAtendimentoAtual.idAtendimento;
		});
		
		return (idRetorno + 1)
	}
}

function InsertObjOnSection(objFormulario, objAtendimento, arrAtendimentos){
	if(objFormulario.fields.consumidorValue.trim() != '' || objFormulario.fields.proconValue.trim() != '')
	{
		arrAtendimentos.atendimentos.push(objAtendimento);
		localStorage.setItem("arrAtendimentos", JSON.stringify(arrAtendimentos));
	}
}

function InsertArrOnSection(arrAtendimentos){
	localStorage.setItem("arrAtendimentos", JSON.stringify(arrAtendimentos));
}

function CleanTableHistory(objFormulario){
	for (var x = objFormulario.elementsFromView.tableHistory.rows.length - 1; x > 0; x--) 
	{ 
		objFormulario.elementsFromView.tableHistory.deleteRow(x); 
	}
}

function ReinsertAllHistory(objFormulario, arrAtendimentos){
	if(arrAtendimentos.atendimentos.length > 0){
		var tbody  = document.createElement('tbody'); 
		
		for(var atendimento = 0; atendimento < arrAtendimentos.atendimentos.length; atendimento++)
		{
			var objAtualAtendimento = JSON.parse(arrAtendimentos.atendimentos[atendimento]);
			
			var tr = document.createElement('tr'); 
			
			var thCliente = document.createElement('td');
			thCliente.appendChild(document.createTextNode(objAtualAtendimento.consumidor));
			
			var thProcon = document.createElement('td');
			thProcon.appendChild(document.createTextNode(objAtualAtendimento.procon));
			
			var thBotoes = document.createElement('td');
			
			objFormulario.botoesDeAcao.botoes.forEach(function(tipoBotao){
				thBotoes.appendChild(objFormulario.CriarButton(tipoBotao, objAtualAtendimento.idAtendimento));
			});
			
			tr.appendChild(thCliente);
			tr.appendChild(thProcon);
			tr.appendChild(thBotoes);
			tbody.appendChild(tr);
			
		}
		objFormulario.elementsFromView.tableHistory.appendChild(tbody);
		
		var qtdAtendimentos = objFormulario.RetornaQuantidadeAtendimentos(objFormulario);
		objFormulario.InserirQuantidadeAtendimentos(objFormulario, qtdAtendimentos);
		
		return arrAtendimentos.atendimentos.length;
	}
}

function CriarButton(tipoBotao, idAtendimento){
	// Criação do Botão
	var btn = document.createElement("BUTTON");
	btn.id = tipoBotao + idAtendimento;
	btn.setAttribute('class', tipoBotao == 'detalhes' ? "btn btn-xs btn btn-info" : (tipoBotao == 'delecao' ? "btn btn-xs btn btn-danger" : "btn btn-xs btn btn-primary"));
	btn.setAttribute('title', tipoBotao == 'detalhes' ? "Exibir detalhes do atendimento" : (tipoBotao == 'delecao' ? "Deletar este atendimento" : "Editar este atendimento"));
	btn.type = "button";
	btn.setAttribute("aria_label", "Left Align");
	btn.setAttribute('typeToAction', tipoBotao);
	btn.setAttribute('onclick','AcaoBotoes(this);');
	
	// Criação do Span
	var spam = document.createElement("SPAN");
	spam.setAttribute('class', tipoBotao == 'detalhes' ? 'glyphicon glyphicon-search' : (tipoBotao == 'delecao' ? 'glyphicon glyphicon-remove' : 'glyphicon glyphicon-pencil'))
	spam.setAttribute('aria-hidden', 'true');
	
	btn.appendChild(spam);
	
	return btn;
}

function DeletarHistoricoCompleto()
{
	var objFormulario = new Formulario();
	objFormulario.DeletarHistoricoCompletoInicializacao();
}

function AcaoBotoes(botao){
	var objFormulario = new Formulario();
	var objUtilidadesFormulario = new UtilidadesFormulario();
	objMensagem = objUtilidadesFormulario.RetornarObjMensagem();
	var idNumerico = /[0-9]+/g.exec(botao.id);
	switch(botao.attributes.getNamedItem('typeToAction').value) {
		case 'delecao':
			objFormulario.ConfirmarDelecaoItem(objFormulario, botao.id, idNumerico);
			break;
		case 'delecaoConfirmada':
			objFormulario.DeletarItem(objFormulario, idNumerico);
			break;
		case 'delecaoGeralConfirmada':
			objFormulario.DeletarHistoricoCompleto();
			break;
		case 'detalhes':
			objFormulario.DetalharItem(objFormulario, botao.id, idNumerico);
			break;
		case 'edicao':
			objFormulario.EditarItem(objFormulario, botao.id, idNumerico);
			break;
		case 'salvarEdicao':
			objFormulario.SalvarEdicao(objFormulario, botao.id, idNumerico);
			break;
		case 'cancelarEdicao':
			objFormulario.CancelarEdicaoItem(objFormulario, botao.id, idNumerico);
			break;
		default:
			objMensagem.MostrarMensagem('Parece que algum bug passou pela minha defesa. Por favor recarregue a página e tente novamente!', 'Ops', 'error', true);
	}
}

function CancelarEdicaoItem(objFormulario, id, idNumerico)
{
	// Limpar Campos
	objFormulario.CleanFields(objFormulario);
	// Recria Botão Salvar
	objFormulario.fields.conteudoBotoesCadastro.innerHTML = objFormulario.botoesDeAcaoCadastro.btn_salvarDados;
	// Setar Foco novamente
	objFormulario.FocusOnField(objFormulario);
}

function ConfirmarDelecaoItem(objFormulario, idCompleto, idNumerico)
{
	var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
	
	for(var atendimento = 0; atendimento < arrAtendimentos.atendimentos.length; atendimento++)
	{
		var objAtualAtendimento = JSON.parse(arrAtendimentos.atendimentos[atendimento]);
		if(objAtualAtendimento.idAtendimento == idNumerico)
		{
			var objModalPropriedades = new ModalPropriedades();
			var objModal = new Modal();
			objModalPropriedades.propriedades.Des_Titulo_Modal = objAtualAtendimento.consumidor;
			objModalPropriedades.propriedades.Des_Body_Modal = objModalPropriedades.mensagemPadrao.msgConfirmaDeletarAtendimento;
			objModalPropriedades.propriedades.Des_Footer_Modal = objModalPropriedades.botoesPadroes.btnVoltar;
			objModalPropriedades.propriedades.Des_Footer_Modal += objModalPropriedades.CriarBotaoConfirmacaoDelecaoItem(idNumerico);
			
			objModal.MostrarModal(objModalPropriedades);
		}
	}
}

function DetalharItem(objFormulario, id, idNumerico){
	
	var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
	
	for(var atendimento = 0; atendimento < arrAtendimentos.atendimentos.length; atendimento++)
	{
		var objAtualAtendimento = JSON.parse(arrAtendimentos.atendimentos[atendimento]);
		if(objAtualAtendimento.idAtendimento == idNumerico)
		{
			var objModalPropriedades = new ModalPropriedades();
			var objModal = new Modal();
			objModalPropriedades.propriedades.Des_Titulo_Modal = objAtualAtendimento.consumidor;
			objModalPropriedades.propriedades.Des_Body_Modal = objFormulario.RecuperarAtendimentoLayoutModal(objFormulario, objAtualAtendimento);
			objModalPropriedades.propriedades.Des_Footer_Modal = objModalPropriedades.botoesPadroes.btnVoltar;
			
			objModal.MostrarModal(objModalPropriedades);
		}
	}
}

function SalvarEdicao(objFormulario, id, idNumerico)
{
	var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
	
	for(var atendimento = 0; atendimento < arrAtendimentos.atendimentos.length; atendimento++)
	{
		var objAtualAtendimento = JSON.parse(arrAtendimentos.atendimentos[atendimento]);
		if(objAtualAtendimento.idAtendimento == idNumerico)
		{
			objAtualAtendimento.procon = objFormulario.fields.proconValue;
			objAtualAtendimento.tecnico = objFormulario.fields.tecnicoValue;
			objAtualAtendimento.contato = objFormulario.fields.contatoValue;
			objAtualAtendimento.linhaReclamada = objFormulario.fields.linhaReclamadaValue;
			objAtualAtendimento.cpf = objFormulario.fields.cpfValue;
			objAtualAtendimento.consumidor = objFormulario.fields.consumidorValue;
			objAtualAtendimento.solicitacao = objFormulario.fields.solicitacaoValue;
			objAtualAtendimento.tratativa = objFormulario.fields.tratativaValue;
			objAtualAtendimento.protocolo = objFormulario.fields.protocoloValue;
			
			arrAtendimentos.atendimentos[atendimento] = JSON.stringify(objAtualAtendimento);

			// Reinsere o Array na section
			objFormulario.InsertArrOnSection(arrAtendimentos);
			// Limpar Campos
			objFormulario.CleanFields(objFormulario);
			// Limpa completamente a tabela
			objFormulario.CleanTableHistory(objFormulario);
			// Reinsere todo histórico de atendimentos
			objFormulario.ReinsertAllHistory(objFormulario, arrAtendimentos);
			// Recria Botão Salvar
			objFormulario.fields.conteudoBotoesCadastro.innerHTML = objFormulario.botoesDeAcaoCadastro.btn_salvarDados;
			// Setar Foco novamente
			objFormulario.FocusOnField(objFormulario);
		}
	}
}

function EditarItem(objFormulario, id, idNumerico){
	
	var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
	
	for(var atendimento = 0; atendimento < arrAtendimentos.atendimentos.length; atendimento++)
	{
		var objAtualAtendimento = JSON.parse(arrAtendimentos.atendimentos[atendimento]);
		if(objAtualAtendimento.idAtendimento == idNumerico)
		{
			objFormulario.fields.procon.value = objAtualAtendimento.procon;
			objFormulario.fields.tecnico.value = objAtualAtendimento.tecnico;
			objFormulario.fields.contato.value = objAtualAtendimento.contato;
			objFormulario.fields.linhaReclamada.value = objAtualAtendimento.linhaReclamada;
			objFormulario.fields.cpf.value = objAtualAtendimento.cpf;
			objFormulario.fields.consumidor.value = objAtualAtendimento.consumidor;
			objFormulario.fields.solicitacao.value = objAtualAtendimento.solicitacao;
			objFormulario.fields.tratativa.value = objAtualAtendimento.tratativa;
			objFormulario.fields.protocolo.value = objAtualAtendimento.protocolo;
			
			objFormulario.fields.conteudoBotoesCadastro.innerHTML = objFormulario.CriarBotaoCancelarEdicao(objFormulario.botoesDeAcaoCadastro.btn_cancelarEdicao, id);
			objFormulario.fields.conteudoBotoesCadastro.innerHTML += objFormulario.CriarBotaoSalvarEdicao(objFormulario.botoesDeAcaoCadastro.btn_salvarEdicao, id);
		}
	}
}

function CriarBotaoSalvarEdicao(htmlBotao, idBotao)
{
	var htmlRetorno = htmlBotao.replace('idReplace', idBotao);
	return htmlRetorno;
}

function CriarBotaoCancelarEdicao(htmlBotao, idBotao)
{
	var htmlRetorno = htmlBotao.replace('idReplace', idBotao);
	return htmlRetorno;
}

function DeletarItem(objFormulario, idNumerico){
	
	var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
	
	for(var atendimento = 0; atendimento < arrAtendimentos.atendimentos.length; atendimento++)
	{
		var objAtualAtendimento = JSON.parse(arrAtendimentos.atendimentos[atendimento]);
		if(objAtualAtendimento.idAtendimento == idNumerico)
		{
			arrAtendimentos.atendimentos.splice(atendimento, 1);
		}
	}
	
	// Reinsere o Array na section
	objFormulario.InsertArrOnSection(arrAtendimentos);
	// Limpa completamente a tabela
	objFormulario.CleanTableHistory(objFormulario);
	// Reinsere todo histórico de atendimentos
	objFormulario.ReinsertAllHistory(objFormulario, arrAtendimentos);
}

function RecuperarHistoricoCompletoAtendimentosLayoutDownload(objFormulario, arrAtendimentos){
	var retornoAtendimentos = '';
	for(var atendimento = 0; atendimento < arrAtendimentos.atendimentos.length; atendimento++)
	{
		var objAtualAtendimento = JSON.parse(arrAtendimentos.atendimentos[atendimento]);
		
		retornoAtendimentos += (objFormulario.fields.proconPlaceholder + ': ' + objAtualAtendimento.procon + '\r\n');
		retornoAtendimentos += (objFormulario.fields.tecnicoPlaceholder  + ': ' + objAtualAtendimento.tecnico + '\r\n');
		retornoAtendimentos += (objFormulario.fields.contatoPlaceholder  + ': ' + objAtualAtendimento.contato + '\r\n');
		retornoAtendimentos += (objFormulario.fields.linhaReclamadaPlaceholder  + ': ' + objAtualAtendimento.linhaReclamada + '\r\n');
		retornoAtendimentos += (objFormulario.fields.cpfPlaceholder  + ': ' + objAtualAtendimento.cpf + '\r\n');
		retornoAtendimentos += (objFormulario.fields.consumidorPlaceholder  + ': ' + objAtualAtendimento.consumidor + '\r\n');
		retornoAtendimentos += (objFormulario.fields.solicitacaoPlaceholder  + ': ' + objAtualAtendimento.solicitacao + '\r\n');
		retornoAtendimentos += (objFormulario.fields.tratativaPlaceholder  + ': ' + objAtualAtendimento.tratativa + '\r\n');
		retornoAtendimentos += (objFormulario.fields.protocoloPlaceholder  + ': ' + objAtualAtendimento.protocolo + '\r\n');
		retornoAtendimentos += (objFormulario.fields.assinaturaAtendente + '\r\n\r\n *************************************** \r\n\r\n');		
	}
	return retornoAtendimentos;
}

function RecuperarAtendimentoLayoutModal(objFormulario, objAtualAtendimento){
	var retornoAtendimentos = '';
		
	retornoAtendimentos += ('<b>' + objFormulario.fields.proconPlaceholder + ': </b>' + objAtualAtendimento.procon + '<br>');
	retornoAtendimentos += ('<b>' + objFormulario.fields.tecnicoPlaceholder  + ': </b>' + objAtualAtendimento.tecnico + '<br>');
	retornoAtendimentos += ('<b>' + objFormulario.fields.contatoPlaceholder  + ': </b>' + objAtualAtendimento.contato + '<br>');
	retornoAtendimentos += ('<b>' + objFormulario.fields.linhaReclamadaPlaceholder  + ': </b>' + objAtualAtendimento.linhaReclamada + '<br>');
	retornoAtendimentos += ('<b>' + objFormulario.fields.cpfPlaceholder  + ': </b>' + objAtualAtendimento.cpf + '<br>');
	retornoAtendimentos += ('<b>' + objFormulario.fields.consumidorPlaceholder  + ': </b>' + objAtualAtendimento.consumidor + '<br>');
	retornoAtendimentos += ('<b>' + objFormulario.fields.solicitacaoPlaceholder  + ': </b>' + objAtualAtendimento.solicitacao + '<br>');
	retornoAtendimentos += ('<b>' + objFormulario.fields.tratativaPlaceholder  + ': </b>' + objAtualAtendimento.tratativa + '<br>');
	retornoAtendimentos += ('<b>' + objFormulario.fields.protocoloPlaceholder  + ': </b>' + objAtualAtendimento.protocolo + '<br>');
	retornoAtendimentos += ('<b>' + objFormulario.fields.assinaturaAtendente + '');		
	
	return retornoAtendimentos;
}

function InserirQuantidadeAtendimentos(objFormulario, qtdAtendimentos){
	objFormulario.elementsFromView.countAtendimentos.innerHTML = '<b>' + qtdAtendimentos +'</b>' + " Atendimento(s)";
}

function txtProcon_keypress(e){
	if(isEnter(e))
		pressionarEnter(e);
}
function txtTecnico_keypress(e){
	if(isEnter(e))
		pressionarEnter(e);
}
function txtContato_keypress(e){
	if(isEnter(e))
		pressionarEnter(e);
}
function txtLinhaReclamada_keypress(e){
	if(isEnter(e))
		pressionarEnter(e);
}
function txtCpf_keypress(e){
	if(isEnter(e))
		pressionarEnter(e);
}
function txtConsumidor_keypress(e){
	if(isEnter(e))
		pressionarEnter(e);
}
function txtSolicitacao_keypress(e){
	if(isEnter(e))
		pressionarEnter(e);
}
function txtTratativa_keypress(e){
	if(isEnter(e))
		pressionarEnter(e);
}
function txtProtocolo_keypress(e){
	if(isEnter(e))
		pressionarEnter(e);
}

function btn_salvarDados_Click(){
	pressionarEnter(null);
}

function RetornaQuantidadeAtendimentos(objFormulario){
	var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
	return (arrAtendimentos.atendimentos != null && arrAtendimentos.atendimentos.length > 0) ? arrAtendimentos.atendimentos.length : 0;
}

function btn_refresh_Click(e){

	var objUtilidadesFormulario = new UtilidadesFormulario();
	var objFormulario = new Formulario();
	objMensagem = objUtilidadesFormulario.RetornarObjMensagem();
	
	try
	{
		var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
		if(arrAtendimentos.atendimentos != null && arrAtendimentos.atendimentos.length > 0){
			// Limpa completamente a tabela
			objFormulario.CleanTableHistory(objFormulario);
			// Reinsere todo histórico de atendimentos
			var count = objFormulario.ReinsertAllHistory(objFormulario, objFormulario.RetornarArrAtendimentos(objFormulario));
			// Setar Foco novamente
			objFormulario.FocusOnField(objFormulario);
			
			objMensagem.MostrarMensagem('Sucesso ao atualizar histórico de dados!', 'Atualização!', 'success');
		}
		else{
			objMensagem.MostrarMensagem('Não há histórico para atualizar!', 'Histórico', 'warning');
		}
	}
	catch(err){
		objMensagem.MostrarMensagem('Desculpe, não consegui atualizar o Histórico, por favor tente novamente mais tarde!' + '<br><b>Detalhes:</b>' + (err.message != undefined ? err.message : err), 'Ops...', 'error', true);
	}
	var qtdAtendimentos = objFormulario.RetornaQuantidadeAtendimentos(objFormulario);
	objFormulario.InserirQuantidadeAtendimentos(objFormulario, qtdAtendimentos);
}

function btn_downloadData_Click(e){
	var objUtilidadesFormulario = new UtilidadesFormulario();
	objMensagem = objUtilidadesFormulario.RetornarObjMensagem();
	var objFormulario = new Formulario();
	var arrAtendimentos = e != undefined && e != null && e == 'saveOldBackup' ? objFormulario.RetornarArrAtendimentosHistory(objFormulario) : objFormulario.RetornarArrAtendimentos(objFormulario);
	
	if(arrAtendimentos.atendimentos != null && arrAtendimentos.atendimentos.length > 0){
		var todosAtendimentos = objFormulario.RecuperarHistoricoCompletoAtendimentosLayoutDownload(objFormulario, arrAtendimentos);
		download(todosAtendimentos, arrAtendimentos.data, 'text/plain');
		
		if(e=='saveOldBackup'){
			var dataHoje = new Date().toLocaleDateString(objFormulario.formatsFromDate.ptbr);
			
			arrAtendimentos = {"data":dataHoje, "atendimentos":[]};
			
			objFormulario.InsertArrOnSection(arrAtendimentos);
		}
	}
	else{
		objMensagem.MostrarMensagem('Não há histórico para baixar!', 'Histórico', 'warning');
	}
}

function btn_trashHistory_Click(e)
{
	var objUtilidadesFormulario = new UtilidadesFormulario();
	objMensagem = objUtilidadesFormulario.RetornarObjMensagem();
	var objFormulario = new Formulario();
	var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
	
	if(arrAtendimentos.atendimentos != null && arrAtendimentos.atendimentos.length > 0){
		
		var objModalPropriedades = new ModalPropriedades();
		var objModal = new Modal();
		objModalPropriedades.propriedades.Des_Titulo_Modal = '<b>ATENÇÃO !!!</b>';
		objModalPropriedades.propriedades.Des_Body_Modal = objModalPropriedades.mensagemPadrao.msgConfirmaDeletarTodosAtendimentos;
		objModalPropriedades.propriedades.Des_Footer_Modal = objModalPropriedades.botoesPadroes.btnVoltar;
		objModalPropriedades.propriedades.Des_Footer_Modal += objModalPropriedades.CriarBotaoConfirmacaoDelecaoGeral();
		
		
		objModal.MostrarModal(objModalPropriedades);
	}
	else{
		objMensagem.MostrarMensagem('Não há histórico para deletar!', 'Histórico', 'warning');
	}
}

function trashHistory(){
	var objUtilidadesFormulario = new UtilidadesFormulario();
	var objFormulario = new Formulario();
	objMensagem = objUtilidadesFormulario.RetornarObjMensagem();
	
	try{
		var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
		if(arrAtendimentos.atendimentos != null && arrAtendimentos.atendimentos.length > 0){
			objFormulario.CleanTableHistory(objFormulario);
			objFormulario.InsertArrOnSection(null);
			objMensagem.MostrarMensagem('Limpeza concluída!', 'Histórico', 'success');
		}
		else{
			objMensagem.MostrarMensagem('Não há histórico para deletar!', 'Histórico', 'warning');
		}
	}
	catch(err){
		objMensagem.MostrarMensagem('Problema ao limpar Histórico. Tente novamente mais tarde!' + '<br><b>Detalhes:</b>' + (err.message != undefined ? err.message : err), 'Ops...', 'error', true);
	}
	var qtdAtendimentos = objFormulario.RetornaQuantidadeAtendimentos(objFormulario);
	objFormulario.InserirQuantidadeAtendimentos(objFormulario, qtdAtendimentos);
}

function trashHistoryInicialize()
{
	var objUtilidadesFormulario = new UtilidadesFormulario();
	var objFormulario = new Formulario();
	objMensagem = objUtilidadesFormulario.RetornarObjMensagem();
	
	try{
		var arrAtendimentos = objFormulario.RetornarArrAtendimentosHistory(objFormulario);
		if(arrAtendimentos.atendimentos != null && arrAtendimentos.atendimentos.length > 0){
			objFormulario.CleanTableHistory(objFormulario);
			objFormulario.InsertArrOnSection(null);
			objMensagem.MostrarMensagem('Limpeza concluída!', 'Histórico', 'success');
		}
		else{
			objMensagem.MostrarMensagem('Não há histórico para deletar!', 'Histórico', 'warning');
		}
	}
	catch(err){
		objMensagem.MostrarMensagem('Problema ao limpar Histórico. Tente novamente mais tarde!' + '<br><b>Detalhes:</b>' + (err.message != undefined ? err.message : err), 'Ops...', 'error', true);
	}
	var qtdAtendimentos = objFormulario.RetornaQuantidadeAtendimentos(objFormulario);
	objFormulario.InserirQuantidadeAtendimentos(objFormulario, qtdAtendimentos);
}

function isEnter(e){ return e.which == 13; }

function pressionarEnter(e){
	// Instancia um novo objeto formulario
	var objFormulario = new Formulario();
	
	if(objFormulario.fields.btnSalvarDados != null && objFormulario.fields.btnSalvarDados != undefined)
	{
		var arrAtendimentos = objFormulario.RetornarArrAtendimentos(objFormulario);
		// Montar Layout de Saída
		var valoresDeSaída = objFormulario.MontarLayoutDeSaida(objFormulario);
		// Copiar para área de transferência
		objFormulario.CopiarParaAreaDeTransferencia(valoresDeSaída);
		// Limpar Campos
		objFormulario.CleanFields(objFormulario);
		// Retorna como stringfy
		var objAtendimento = objFormulario.RetornaObjAtendimento(objFormulario);	
		// Inserir na session
		objFormulario.InserirObjAtendimentoNaSection(objFormulario, objAtendimento, arrAtendimentos);
		// Limpa completamente a tabela
		objFormulario.CleanTableHistory(objFormulario);
		// Reinsere todo histórico de atendimentos
		objFormulario.ReinsertAllHistory(objFormulario, arrAtendimentos);
		// Setar Foco novamente
		objFormulario.FocusOnField(objFormulario);
	}
	else if($('[typeToAction*=salvarEdicao]').length > 0)
	{
		AcaoBotoes($('[typeToAction*=salvarEdicao]')[0]);
	}
	else{
		var objUtilidadesFormulario = new UtilidadesFormulario();
		objMensagem = objUtilidadesFormulario.RetornarObjMensagem();
		objMensagem.MostrarMensagem('Parece que algo deu errado. Por favor recarregue a página e tente novamente!', 'Ops', 'error', true);
	}
}

document.getElementById("txtProcon").addEventListener("keypress", function(e){txtProcon_keypress(e);},false );
document.getElementById("txtTecnico").addEventListener("keypress", function(e){txtTecnico_keypress(e);},false );
document.getElementById("txtContato").addEventListener("keypress", function(e){txtContato_keypress(e);},false );
document.getElementById("txtLinhaReclamada").addEventListener("keypress", function(e){txtLinhaReclamada_keypress(e);},false );
document.getElementById("txtCpf").addEventListener("keypress", function(e){txtCpf_keypress(e);},false );
document.getElementById("txtConsumidor").addEventListener("keypress", function(e){txtConsumidor_keypress(e);},false );
document.getElementById("txtProtocolo").addEventListener("keypress", function(e){txtProtocolo_keypress(e);},false );
// document.getElementById("btn_salvarDados").addEventListener("click", function(e){ btn_salvarDados_Click(e); },true );
document.getElementById("btn_trashHistory").addEventListener("click", function(e){ btn_trashHistory_Click(e); },true );
document.getElementById("btn_refresh").addEventListener("click", function(e){ btn_refresh_Click(e); },true );
document.getElementById("btn_downloadData").addEventListener("click", function(e){ btn_downloadData_Click(e); },true );