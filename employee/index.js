
const connectDB = require('./src/utils/db');
const express  = require("express")

const userRouter = require("./src/routes/userRoute")

connectDB();
const app = express();

app.use(express.json())

app.use("/api", userRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

