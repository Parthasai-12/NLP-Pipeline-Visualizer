const EXAMPLES = [
  'The quick brown fox jumps over the lazy dog',
  'Artificial intelligence is rapidly transforming the modern world',
  'She sells seashells by the seashore every summer morning',
]

export default function InputPanel({ text, setText, loading, onProcess }) {
  return (
    <div className="input-card">
      <label className="input-label" htmlFor="nlp-input">Input Sentence</label>
      <textarea
        id="nlp-input"
        className="input-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste a sentence here…"
        rows={3}
        onKeyDown={(e) => { if (e.ctrlKey && e.key === 'Enter') onProcess() }}
      />

      <div className="input-footer">
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {EXAMPLES.map((ex, i) => (
            <button
              key={i}
              className="example-btn"
              onClick={() => setText(ex)}
              title={ex}
            >
              Example {i + 1}
            </button>
          ))}
        </div>

        <button
          id="process-btn"
          className="process-btn"
          onClick={onProcess}
          disabled={loading || !text.trim()}
        >
          {loading ? <span className="spinner" /> : '⚡'}
          {loading ? 'Processing…' : 'Process Text'}
        </button>
      </div>

      <p style={{ marginTop: '0.6rem', fontSize: '0.7rem', color: '#374151' }}>
        Tip: Press <kbd style={{ background: '#111828', padding: '1px 5px', borderRadius: '4px', border: '1px solid #1e2840' }}>Ctrl+Enter</kbd> to process
      </p>
    </div>
  )
}
