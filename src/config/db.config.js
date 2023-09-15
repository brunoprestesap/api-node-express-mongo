import mongoose from "mongoose";

async function connect(){
  try {

    await mongoose.connect(process.env.DB_URI);
    return console.log("Conectado ao banco");
        
  } catch (error) {
    console.log(error);
  }
}

export default connect;