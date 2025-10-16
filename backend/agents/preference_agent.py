def format_preferences(gender: str, occasion: str, preferred_color: str, budget: str) -> str:
    """
    Formats user preferences into a single string for use in other agents.
    This simulates the 'User Preference Agent' collecting and structuring input.
    """
    return f"Gender: {gender}, Occasion: {occasion}, Preferred color: {preferred_color}, Budget: {budget}"