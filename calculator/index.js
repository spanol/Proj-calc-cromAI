/* Função que "puxa" o electron  */
const {app, BrowserWindow} = require("electron"); 
/*Função que determina o tamanho da janela do electron e faz a ligação com o localhost */ 
function createWindow() {
  const win = new BrowserWindow({ width:1200, height:800});
  win.loadURL("http://localhost:3000");
}
/* Propriedade para abrir a janela*/
app.on("ready", createWindow);