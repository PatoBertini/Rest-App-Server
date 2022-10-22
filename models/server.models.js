const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config.db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = "/api/usuarios";

    // Conectar a base de datos
    this.conectarDB()

    // Middlewares
    this.middlewares();

    // Rutas de mi app
    this.routes();
  }
  async conectarDB() {
    await dbConnection();
  }
  middlewares() {
    // Directorio publico
    this.app.use(express.static("public"));
    // CORS
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosRoutePath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
