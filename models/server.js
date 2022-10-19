const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // Rutas de mi app
    this.routes();
  }

  middlewares() {
    // Directorio publico
    this.app.use(express.static("public"));
    // CORS
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json())
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
