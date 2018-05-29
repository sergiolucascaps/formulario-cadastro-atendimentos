
//	********	INICIO MENSAGEMS ********

// Classes
function Mensagem(){}
function Modal(){}

function ModalPropriedades(){
	this.propriedades = {
		Des_Titulo_Modal: '',
		Des_Body_Modal: '',
		Des_Footer_Modal: ''
    }
	this.botoesPadroes = {
		btnVoltar: '<div class="col-md-2" style="float: right;"> <button type="button" class="btn btn-default btn-md" onclick="limpaModal();" data-dismiss="modal">Fechar</button> </div>',
		btnDeletarBackupAnterior: '<div class="col-md-2" style="float: right;"> <button type="button" class="btn btn-danger btn-md" onclick="DeletarHistoricoCompleto();InicializarTela();" data-dismiss="modal">Deletar</button> </div>',
		btnSalvarBackupAnterior: '<div class="col-md-2" style="float: right;"> <button type="button" class="btn btn-primary btn-md" onclick="btn_downloadData_Click(\'saveOldBackup\');InicializarTela();" data-dismiss="modal">Salvar</button> </div>'
	}
	this.mensagemPadrao = {
		msgConfirmaDeletarAtendimento: 'Tem certeza que deseja deletar este atendimento? <br><br> Esta ação <b>não poderá ser desfeita</b>!',
		msgConfirmaDeletarTodosAtendimentos: 'Tem certeza que deseja deletar <b>TODOS</b> atendimentos? <br><br> Esta ação <b>não poderá ser desfeita</b>!',
		msgInformaHistoricoAnterior: 'Foi localizado histórico anterior de atendimentos, deseja realizar o backup? <br><br>Obs: Caso o Histórico não seja salvo agora, será apagado <b>permanentemente</b>!'
	}
}

Mensagem.prototype.MostrarMensagem = function(des_mensagem = '', des_titulo = '', tipo_mensagem = 'info', flg_obriga_resposta = false)
{
	toastr.options = {
		closeButton: true,
		debug: false,
		newestOnTop: false,
		progressBar: true,
		rtl: false,
		positionClass: 'toast-top-right',
		preventDuplicates: false,
		onclick: null,
		showDuration: 300,
		hideDuration: 1000,
		timeOut: flg_obriga_resposta ? 0 : 5000,
		extendedTimeOut: flg_obriga_resposta ? 0 : 1000,
		showEasing: 'swing',
		hideEasing: 'linear',
		showMethod: 'fadeIn',
		hideMethod: 'fadeOut',
		tapToDismiss: flg_obriga_resposta ? true : false
	};
	des_mensagem += flg_obriga_resposta ? '<br /><br /><button type="button" class="btn clear">OK</button>' : '';
	
	switch(tipo_mensagem){
		case 'error':
			des_titulo != undefined && des_titulo != '' ? toastr.error(des_mensagem, des_titulo) : toastr.error(des_mensagem);
		break;
		case 'success':
			des_titulo != undefined && des_titulo != '' ? toastr.success(des_mensagem, des_titulo) : toastr.success(des_mensagem);
		break;
		case 'info':
			des_titulo != undefined && des_titulo != '' ? toastr.info(des_mensagem, des_titulo) : toastr.info(des_mensagem);
		break;
		case 'warning':
			des_titulo != undefined && des_titulo != '' ? toastr.warning(des_mensagem, des_titulo) : toastr.warning(des_mensagem);
		break;
		default:
			des_titulo != undefined && des_titulo != '' ? toastr.info(des_mensagem, des_titulo) : toastr.info(des_mensagem);
	}
}

var objMensagem = new Mensagem();

//	********	FIM MENSAGEMS ********


//	********	INICIO CRIAÇÃO E DOWNLOAD DE ARQUIVO ********

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

//	********	FIM CRIAÇÃO E DOWNLOAD DE ARQUIVO ********


//	********	INICIO MODAL / MODAL PROPRIEDADES ********

Modal.prototype.LimparModal = function()
{
	$("#conteudoModal, #tituloModal, #hddFooter").html("");
}

function limpaModal()
{
	var objModal = new Modal();
	objModal.LimparModal();
}

Modal.prototype.MostrarModal = function(objModalPropriedades)
{
	$("#tituloModal").html(objModalPropriedades.propriedades.Des_Titulo_Modal);
	$("#conteudoModal").html(objModalPropriedades.propriedades.Des_Body_Modal);
	$("#footerModal").html(objModalPropriedades.propriedades.Des_Footer_Modal);
	$("#myModal").modal();
}

ModalPropriedades.prototype.CriarBotaoConfirmacaoDelecaoItem = function(idNumerico)
{
	var botao = '<div class="col-md-2" style="float: right;"> <button type="button" id="'+idNumerico+'" typeToAction="delecaoConfirmada" class="btn btn-danger btn-md" onclick="AcaoBotoes(this);" data-dismiss="modal">Deletar</button> </div>';
	return botao;
}

ModalPropriedades.prototype.CriarBotaoConfirmacaoDelecaoGeral = function()
{
	var botao = '<div class="col-md-2" style="float: right;"> <button type="button" typeToAction="delecaoGeralConfirmada" class="btn btn-danger btn-md" onclick="AcaoBotoes(this);" data-dismiss="modal">Deletar</button> </div>';
	return botao;
}

//	********	FIM MODAL	********
