require('dotenv').config()
const express = require('express');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');


app.use(bodyParser.json());
app.use(express.static('public'));

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    const mode = req.body.mode; 

    try {
        let prompt = `User is asking for a food recipe without * and servings. Dish: "${userMessage}". Provide the recipe.`;

        const result = await model.generateContent(prompt);
        const reply = result.response.text().trim();
        res.json({ reply });
    } catch (error) {
        console.error('Error with Google Generative AI API:', error);
        res.status(500).send('Something went wrong!');
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
