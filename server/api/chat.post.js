import { Configuration, OpenAIApi } from "openai";

export default defineEventHandler(async event => {
  const { messages } = await readBody(event);
  const { aiApiKey, org } = useRuntimeConfig();
  const configuration = new Configuration({
    apiKey: aiApiKey,
    organization: org,
  });
  const openai = new OpenAIApi(configuration);

  let chatHistory = [
    {
      role: "system",
      content:
        "Ти віртуальний асистент, знаток кіноіндустії. Можеш порадити фільм, мультфільм чи серіал. Ти помічник на сайті де люди можуть знайти інформіцію про будь який фільм. Якщо в тебе запитають щось, що не відноситься до кіноіндустрії, скажи, що твір володар Фролов Дмитро, заборонив тобі говорити на якісь інші теми",
    },
    ...messages,
  ];

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: chatHistory,
  });

  const response = completion.data.choices[0].message;
  return response;
});
