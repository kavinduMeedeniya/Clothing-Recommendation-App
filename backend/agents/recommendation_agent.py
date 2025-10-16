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

def generate_recommendations(preferences: str, sentiment: dict) -> list:
    """
    Recommendation Agent: Uses preferences and sentiment to recommend clothing categories.
    Outputs list of 3-5 recommendations.
    """
    insights = sentiment["insights"]
    prompt = f"""
    Based on user preferences: {preferences}
    And review sentiment insights: {insights}
    
    Recommend 3-5 clothing categories/items that match.
    Focus on categories like "blue cotton blouses".
    
    Output ONLY valid JSON in this exact format:
    {{
        "recommendations": ["item1", "item2", "item3"]
    }}
    """
    
    response = model.generate_content(
        prompt,
        generation_config=genai.types.GenerationConfig(
            response_mime_type="application/json",
            temperature=0.3
        )
    )
    
    try:
        rec_data = json.loads(response.text)
        return rec_data.get("recommendations", ["Generic recommendation"])
    except json.JSONDecodeError:
        # Fallback
        return ["Lightweight office blouses", "Breathable dresses", "Cotton tops"]
