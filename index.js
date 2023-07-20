const {config} = require("dotenv")
const express = require('express');
const {Configuration, OpenAIApi } = require('openai')

config()

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/prompt', async (req, res) => {
    const input = req.body.input
    console.log("starting request")
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: 'system', content: "you are a intellectual feedback assistant for college essays that I will be writing. You will give me feedback from the perspective of a College Essay grader at Harvard. Help me make my essay better and more likely to get me into the school"}, 
            {role: "user", content: "I will give you my college essay. Please give the essay the following scores:\nReadability score: \nWriting score(out of 100):\n Creativity score(out of 10): \n Uniquness score(out of 10): \nAccomplishment score: " + input}],
        temperature: 1,
    })
    const data = response.data.choices[0].message.content
    console.log(data)
    res.json({data}).end();
  })

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


