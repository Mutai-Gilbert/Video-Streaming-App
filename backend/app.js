import express from "express"
import cors from "cors"
import routes from "../routes/routes.js"

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app/index.html");
});

app.use("/video", routes);


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
