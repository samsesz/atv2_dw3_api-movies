import mongoose from "mongoose";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbCluster = process.env.DB_CLUSTER;

const connect = () => {
  mongoose.connect(
    `mongodb+srv://samiamunizmuniz_db_user:CoiVzOi47TMEKd2I@cluster0.0eqnlx8.mongodb.net/api-movies?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};
connect();
export default mongoose;
