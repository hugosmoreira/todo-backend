const express = require("express");

module.exports = function (server) {
  const router = express.Router();
  server.use("/api", router);

  // mapeando rotas todo

  const todoService = require("../api/todo/todoService");
  todoService.register(router, "/todos");
};
