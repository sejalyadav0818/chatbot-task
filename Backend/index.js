const express = require("express");
const mongoose = require("mongoose");
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const PORT = 3001;
const server = http.createServer(app);
const io = socketIo(server);
require("dotenv").config();
app.use(express.json());
const path = require("path");
const cors = require("cors");
const userRoute = require("./Router/UserRouter");
const authMiddleware = require("./middleware/authMiddleware");
const User = require("./models/User");
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//error handler
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).send({ error: "Invalid JSON" });
  }
  next(err);
});


//scoket-io
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// const deleteAllUsers = async () => {
//   try {
//     const deleteResult = await User.deleteMany({});
//     console.log(`Deleted ${deleteResult.deletedCount} users`);
//   } catch (error) {
//     console.error('Error deleting users:', error);
//   }
// };

// deleteAllUsers();
//database connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // console.log("Connected to MongoDB Atlas!");
  })
  .catch((err) => {
    // console.error("Error connecting to MongoDB Atlas:", err);
  });

app.use(authMiddleware.initialize());
app.use(userRoute);


app.listen(PORT);
// app.listen(PORT, () => {
//   // console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = app;
