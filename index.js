// index.js
import express from "express";
import { kanpsack } from "./kanpsack.js";

const app = express();
const PORT = 3000;

app.get("/kanpsack", (req, res) => {
    const { capacity, values, weights } = req.query;

    if (!capacity || !values || !weights) {
        return res.send("❌ Please provide capacity, values, and weights");
    }

    const cap = Number(capacity);
    const valArr = values.split(",").map(Number);
    const wtArr = weights.split(",").map(Number);

    if (valArr.length !== wtArr.length) {
        return res.send("❌ values and weights length mismatch");
    }

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
