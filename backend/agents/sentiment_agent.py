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

def analyze_sentiment(review: str) -> dict:
    """
    Review Sentiment Agent: Analyzes sentiment using Gemini API.
    Outputs structured JSON: positive %, negative %, insights.
    """
    prompt = f"""
    Analyze the sentiment of this clothing review: "{review}"
    
    Output ONLY valid JSON in this exact format:
    {{
        "positive": <percentage as integer 0-100>,
        "negative": <percentage as integer 0-100>,
        "insights": "<short summary of key positives and negatives>"
    }}
    Ensure positive + negative = 100.
    """
    
    response = model.generate_content(
        prompt,
        generation_config=genai.types.GenerationConfig(
            response_mime_type="application/json",
            temperature=0.1
        )
    )
    
    try:
        sentiment_data = json.loads(response.text)
        # Ensure percentages sum to 100 (fallback if model errs)
        total = sentiment_data["positive"] + sentiment_data["negative"]
        if total != 100:
            sentiment_data["positive"] = int((sentiment_data["positive"] / total) * 100)
            sentiment_data["negative"] = 100 - sentiment_data["positive"]
        return sentiment_data
    except json.JSONDecodeError:
        # Fallback to default if JSON invalid
        return {"positive": 50, "negative": 50, "insights": "Neutral sentiment detected."}
