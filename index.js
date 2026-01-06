import express from "express";
import { kanpsack } from "./kanpsack.js";

const app = express();
const PORT = 3000;

app.get("/kanpsack", (req, res) => {
    const { capacity, values, weights } = req.query;
    const cap = Number(capacity);
    const valArr = values.split(",").map(Number);
    const wtArr = weights.split(",").map(Number);
    let items = [];
    for (let i = 0; i < valArr.length; i++) {
        items.push({
            value: valArr[i],
            weight: wtArr[i]
        });
    }
    const result = kanpsack(cap, items);
    res.send(`Maximum value = ${result.toFixed(2)}`);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
