import { useState } from 'react'
import './App.css'
import InputPanel from './components/InputPanel'
import StageCard from './components/StageCard'
import TokenizationStage from './components/TokenizationStage'
import FilteredStage from './components/FilteredStage'
import LemmatizationStage from './components/LemmatizationStage'
import PosTaggingStage from './components/PosTaggingStage'
import ParsingStage from './components/ParsingStage'

export default function App() {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleProcess = async () => {
    if (!text.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/process`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text.trim() }),
      })
      const data = await res.json()
      if (data.status === 'success') {
        setResult(data.data)
      } else {
        setError(data.message || 'Unknown error from server.')
      }
    } catch {
      setError(`Cannot reach Flask backend. Make sure it is running on ${import.meta.env.VITE_API_URL}`)
    } finally {
      setLoading(false)
    }
  }

  const stages = result
    ? [
        {
          id: 1, icon: '✂️', title: 'Tokenization',
          badge: `${result.tokens.length} tokens`,
          delay: '0ms',
          content: <TokenizationStage tokens={result.tokens} />,
        },
        {
          id: 2, icon: '🔍', title: 'Stop-word Removal',
          badge: `${result.filtered.length} kept`,
          delay: '80ms',
          content: (
            <FilteredStage
              posTagged={result.pos_tagged}
              filtered={result.filtered}
            />
          ),
        },
        {
          id: 3, icon: '📖', title: 'Lemmatization',
          badge: `${result.filtered.length} words`,
          delay: '160ms',
          content: (
            <LemmatizationStage
              filtered={result.filtered}
              lemmatized={result.lemmatized}
            />
          ),
        },
        {
          id: 4, icon: '🏷️', title: 'Part-of-Speech Tagging',
          badge: `${result.pos_tagged.length} tagged`,
          delay: '240ms',
          content: <PosTaggingStage posTagged={result.pos_tagged} />,
        },
        {
          id: 5, icon: '🌳', title: 'Dependency Parsing',
          badge: `${result.parsing.length} relations`,
          delay: '320ms',
          content: <ParsingStage parsing={result.parsing} />,
        },
      ]
    : []

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-icon">🧠</div>
        <div>
          <div className="header-title">NLP Pipeline Visualizer</div>
          <div className="header-subtitle">Powered by spaCy + Flask</div>
        </div>
      </header>

      <main className="main-content">
        {/* Hero */}
        <div className="hero">
          <h1 className="hero-title">Visualize Natural Language Processing</h1>
          <p className="hero-subtitle">
            Enter any sentence and watch it flow through five NLP stages — from raw tokens to full dependency parse.
          </p>
        </div>

        {/* Input */}
        <InputPanel
          text={text}
          setText={setText}
          loading={loading}
          onProcess={handleProcess}
        />

        {/* Error */}
        {error && (
          <div className="error-banner">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Pipeline */}
        {result && (
          <div className="pipeline" role="list">
            {stages.map((s) => (
              <div className="pipeline-item" key={s.id} role="listitem">
                <div className="stage-num">{s.id}</div>
                <StageCard
                  icon={s.icon}
                  title={s.title}
                  badge={s.badge}
                  delay={s.delay}
                >
                  {s.content}
                </StageCard>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
