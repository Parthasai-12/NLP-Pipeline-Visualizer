/* NLP Visualizer — shared POS colours & DEP label map */

export const POS_STYLES = {
  NOUN:  { bg: 'rgba(59,130,246,0.15)',  border: 'rgba(59,130,246,0.45)',  color: '#60a5fa', label: 'Noun' },
  VERB:  { bg: 'rgba(16,185,129,0.15)',  border: 'rgba(16,185,129,0.45)',  color: '#34d399', label: 'Verb' },
  ADJ:   { bg: 'rgba(245,158,11,0.15)',  border: 'rgba(245,158,11,0.45)',  color: '#fbbf24', label: 'Adjective' },
  ADV:   { bg: 'rgba(139,92,246,0.15)',  border: 'rgba(139,92,246,0.45)',  color: '#a78bfa', label: 'Adverb' },
  DET:   { bg: 'rgba(107,114,128,0.15)', border: 'rgba(107,114,128,0.45)', color: '#9ca3af', label: 'Determiner' },
  ADP:   { bg: 'rgba(239,68,68,0.15)',   border: 'rgba(239,68,68,0.45)',   color: '#f87171', label: 'Preposition' },
  PRON:  { bg: 'rgba(236,72,153,0.15)',  border: 'rgba(236,72,153,0.45)',  color: '#f472b6', label: 'Pronoun' },
  PROPN: { bg: 'rgba(6,182,212,0.15)',   border: 'rgba(6,182,212,0.45)',   color: '#22d3ee', label: 'Proper Noun' },
  NUM:   { bg: 'rgba(234,179,8,0.15)',   border: 'rgba(234,179,8,0.45)',   color: '#facc15', label: 'Numeral' },
  AUX:   { bg: 'rgba(20,184,166,0.15)',  border: 'rgba(20,184,166,0.45)',  color: '#2dd4bf', label: 'Auxiliary Verb' },
  CCONJ: { bg: 'rgba(249,115,22,0.15)',  border: 'rgba(249,115,22,0.45)',  color: '#fb923c', label: 'Conjunction' },
  SCONJ: { bg: 'rgba(249,115,22,0.15)',  border: 'rgba(249,115,22,0.45)',  color: '#fb923c', label: 'Subord. Conj.' },
  PUNCT: { bg: 'rgba(55,65,81,0.25)',    border: 'rgba(55,65,81,0.5)',     color: '#6b7280', label: 'Punctuation' },
  PART:  { bg: 'rgba(167,139,250,0.15)', border: 'rgba(167,139,250,0.45)', color: '#a78bfa', label: 'Particle' },
  INTJ:  { bg: 'rgba(248,113,113,0.15)', border: 'rgba(248,113,113,0.45)', color: '#f87171', label: 'Interjection' },
  SYM:   { bg: 'rgba(52,211,153,0.15)',  border: 'rgba(52,211,153,0.45)',  color: '#34d399', label: 'Symbol' },
  X:     { bg: 'rgba(107,114,128,0.15)', border: 'rgba(107,114,128,0.45)', color: '#9ca3af', label: 'Other' },
};

export const getPos = (pos) => POS_STYLES[pos] || POS_STYLES.X;

export const DEP_LABELS = {
  nsubj:    'Nominal Subject',
  nsubjpass:'Passive Subject',
  ROOT:     'Root (main verb)',
  dobj:     'Direct Object',
  pobj:     'Prepositional Object',
  iobj:     'Indirect Object',
  amod:     'Adjectival Modifier',
  det:      'Determiner',
  prep:     'Prepositional Modifier',
  advmod:   'Adverbial Modifier',
  aux:      'Auxiliary Verb',
  auxpass:  'Passive Auxiliary',
  compound: 'Compound Noun',
  nmod:     'Nominal Modifier',
  attr:     'Attribute',
  cc:       'Coordinating Conjunction',
  conj:     'Conjunct',
  mark:     'Clause Marker',
  relcl:    'Relative Clause',
  acl:      'Adjectival Clause',
  xcomp:    'Open Clausal Complement',
  ccomp:    'Clausal Complement',
  case:     'Case Marker',
  nummod:   'Numeric Modifier',
  punct:    'Punctuation',
  appos:    'Appositional Modifier',
  poss:     'Possession Modifier',
  neg:      'Negation Modifier',
  expl:     'Expletive',
  csubj:    'Clausal Subject',
};

export const getDep = (dep) => DEP_LABELS[dep] || dep;
