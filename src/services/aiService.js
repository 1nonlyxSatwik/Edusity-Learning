import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Required for client-side usage
});

export const getAIResponse = async (prompt) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful AI Tutor for EduSpark, an online learning platform. Provide concise and clear explanations for complex topics in machine learning and software development."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama-3.3-70b-versatile",
    });

    return chatCompletion.choices[0]?.message?.content || "I couldn't generate a response.";
  } catch (error) {
    console.error("Groq AI Error:", error);
    return "I'm having trouble connecting to my brain. Please check your API key or connection.";
  }
};
