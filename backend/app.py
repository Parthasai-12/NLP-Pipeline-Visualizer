"""
backend/app.py  —  Flask REST API for the NLP Pipeline Visualizer
"""
from flask import Flask, request, jsonify
from flask_cors import CORS
from nlp_pipeline import process_text

app = Flask(__name__)
CORS(app)  # Allow React dev server on port 3000

DEMO = "The quick brown fox jumps over the lazy dog"


def ok(data, status=200):
    return jsonify({"status": "success", "data": data}), status


def err(msg, status=400):
    return jsonify({"status": "error", "message": msg}), status


@app.route("/health", methods=["GET"])
def health():
    return ok({"message": "NLP API is running 🚀"})


@app.route("/demo", methods=["GET"])
def demo():
    result = process_text(DEMO)
    result["input"] = DEMO
    return ok(result)


@app.route("/process", methods=["POST"])
def process():
    if not request.is_json:
        return err("Content-Type must be application/json")

    body = request.get_json(silent=True) or {}
    text = body.get("text", "").strip()

    if not text:
        return err('Missing or empty "text" field')

    try:
        result = process_text(text)
        result["input"] = text
        return ok(result)
    except ValueError as e:
        return err(str(e))
    except Exception as e:
        return err(f"Processing error: {e}", 500)


if __name__ == "__main__":
    print("\n" + "="*50)
    print("  NLP API  ->  http://localhost:5000")
    print("  POST /process   GET /demo   GET /health")
    print("="*50 + "\n")
    app.run(debug=True, host="0.0.0.0", port=5000)
