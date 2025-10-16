from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agents.preference_agent import format_preferences
from agents.sentiment_agent import analyze_sentiment
from agents.recommendation_agent import generate_recommendations
from agents.summary_agent import generate_summary

app = FastAPI(title="Clothing Recommendation Multi-Agent System")

# CORS Middleware: Allow requests from local dev and your live frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "https://clothing-recommendation-fashion.onrender.com"  # Your live frontend URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserInput(BaseModel):
    gender: str
    occasion: str
    preferred_color: str
    budget: str
    review: str

@app.post("/recommend")
async def recommend_clothing(user_input: UserInput):
    """
    Main endpoint: Processes user input through all 4 agents.
    1. Preference Agent: Formats preferences.
    2. Sentiment Agent: Analyzes review.
    3. Recommendation Agent: Generates recommendations.
    4. Summary Agent: Creates preview summary.
    """
    try:
        # Agent 1: User Preference Agent
        preferences = format_preferences(
            user_input.gender,
            user_input.occasion,
            user_input.preferred_color,
            user_input.budget
        )
        
        # Agent 2: Review Sentiment Agent
        sentiment = analyze_sentiment(user_input.review)
        
        # Agent 3: Recommendation Agent
        recommendations = generate_recommendations(preferences, sentiment)
        
        # Agent 4: Summary & Review Generator Agent
        review_preview = generate_summary(sentiment, recommendations)
        
        return {
            "sentiment_analysis": {
                "positive": sentiment["positive"],
                "negative": sentiment["negative"],
                "insights": sentiment["insights"]
            },
            "recommended_clothing": recommendations,
            "auto_generated_review_preview": review_preview
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {str(e)}")

@app.get("/")
async def root():
    return {"message": "Clothing Recommendation API is running!"}
