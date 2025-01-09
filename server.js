const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (e.g., HTML, CSS, JS) from the 'public' directory
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  // Send a notification to the client after a successful connection
  socket.emit("notification", "Welcome to the real-time notification server!");

  // Handle other socket events here

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
