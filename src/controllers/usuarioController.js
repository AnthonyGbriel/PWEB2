let usuarios = require('../models/usuarioModel');

// GET - listar todos
exports.listar = (req, res) => {
  res.json(usuarios);
};

// GET por ID
exports.buscarPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  res.json(usuario);
};

// POST - criar
exports.criar = (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
};

// PUT - atualizar
exports.atualizar = (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.findIndex(u => u.id === id);
  if (usuario < 0) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
  // usuario = 1
  usuarios[usuario].nome = req.body.nome
  // usuario.nome = req.body.nome;
  res.json(usuarios[usuario]);
};

// DELETE - remover
exports.deletar = (req, res) => {
  // 1
  // [{id:1, nome: "an"}]
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);

  res.json({ mensagem: "Usuário removido" });
};