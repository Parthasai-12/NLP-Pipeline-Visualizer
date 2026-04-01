"""
backend/nlp_pipeline.py  —  Core NLP processing with spaCy
"""
import spacy

try:
    nlp = spacy.load("en_core_web_sm")
except OSError:
    raise RuntimeError("Run: python -m spacy download en_core_web_sm")


def process_text(text: str) -> dict:
    """Run the full NLP pipeline and return structured results."""
    if not isinstance(text, str) or not text.strip():
        raise ValueError("Input must be a non-empty string.")

    doc = nlp(text)

    # 1. Tokenization
    tokens = [t.text for t in doc if not t.is_space]

    # 2. Stop-word removal
    filtered = [t.text for t in doc if not t.is_stop and not t.is_punct and not t.is_space]

    # 3. Lemmatization (of filtered tokens)
    lemmatized = [
        t.lemma_ for t in doc
        if not t.is_stop and not t.is_punct and not t.is_space
    ]

    # 4. POS tagging (all non-space tokens)
    pos_tagged = [
        {
            "token": t.text,
            "pos":   t.pos_,
            "tag":   t.tag_,
            "explanation": spacy.explain(t.tag_) or "",
            "is_stop": t.is_stop,
        }
        for t in doc if not t.is_space
    ]

    # 5. Dependency parsing
    parsing = [
        {
            "token":    t.text,
            "dep":      t.dep_,
            "head":     t.head.text,
            "children": [c.text for c in t.children],
        }
        for t in doc if not t.is_space
    ]

    return {
        "tokens":     tokens,
        "filtered":   filtered,
        "lemmatized": lemmatized,
        "pos_tagged": pos_tagged,
        "parsing":    parsing,
    }
