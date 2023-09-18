class ErroBase extends Error {
  constructor(mensagem = "Erro interno do servidor", status = 500) {
    super();
    this.message = mensagem;
    this.status = status;
  }

  enviarResposta(res){
    res.status(this.status).send({mesagem: this.mensagem, status: this.status});
  }
}

export default ErroBase;