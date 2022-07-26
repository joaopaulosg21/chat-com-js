import { server } from "./app.js";
import { Server } from "socket.io";
const io = new Server(server);
const historico = [];

io.on("connection",(socket)=>{
    socket.on("message",(msg)=>{
        historico.push(msg);
        console.table(historico);
        io.emit("message",msg);
    });
    socket.on("delete",()=>{
        historico.pop();
        console.table(historico);
        io.emit("delete");
    });
});

server.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})