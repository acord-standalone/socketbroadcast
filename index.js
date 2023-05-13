const io = new (require('socket.io').Server)();


io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.onAny((event, ...args) => {
    io.emit(event, ...args);
  });
});


console.log('Server started on port 2000');
io.listen(2000);