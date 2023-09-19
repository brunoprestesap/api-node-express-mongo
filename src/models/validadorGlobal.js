import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validade", {
  validator: (valor) => valor.trim() !== "",
  message: ({ path }) => `O campo ${path} foi fornecido em branco`
});