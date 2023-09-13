import express, { json } from 'express';
import { post } from 'axios';

const app = express();
const port = 3001;

// Your OpenAI API key
const apiKey = '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';

app.use(json());

app.post('/api/get-code-suggestions', async (req, res) => {
  try {
    const { userInput } = req.body;

    // Call the OpenAI API to get code suggestions
    const response = await post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: userInput,
        max_tokens: 100, // Adjust max_tokens as needed
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const suggestedCode = response.data.choices[0].text;
    res.json({ suggestedCode });
  } catch (error) {
    console.error('Error fetching code suggestions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
