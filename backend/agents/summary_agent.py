import json
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY not set in .env file. Please add your key and restart.")

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-2.5-flash')

def generate_summary(sentiment: dict, recommendations: list) -> str:
    """
    Summary & Review Generator Agent: Summarizes and generates a short review preview for the top recommendation.
    """
    prompt = f"""
    Summarize the recommendations based on sentiment: Positive {sentiment['positive']}%, Negative {sentiment['negative']}%, Insights: {sentiment['insights']}
    Recommendations: {', '.join(recommendations)}
    
    Generate a short, positive review-style message for the first recommendation, like: "Try our breathable cotton blouses — elegant yet cool for office wear."
    
    Output ONLY valid JSON in this exact format:
    {{
        "auto_generated_review_preview": "<the review message>"
    }}
    """
    
    response = model.generate_content(
        prompt,
        generation_config=genai.types.GenerationConfig(
            response_mime_type="application/json",
            temperature=0.2
        )
    )
    
    try:
        summary_data = json.loads(response.text)
        return summary_data.get("auto_generated_review_preview", "Generic preview.")
    except json.JSONDecodeError:
        # Fallback
        return f"Try our {recommendations[0]} — perfect match for your needs!"
