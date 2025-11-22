import { useState } from 'react';
import Card from '../components/Card';
import mock from '../src/mocks/sample-data';

export default function MutationLab() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(mock.mutations.slice(0,4));

  function run() {
    // simple client-side filter (placeholder for AI integration)
    setResults(mock.mutations.filter(m => m.title.toLowerCase().includes(query.toLowerCase())));
  }

  return (
    <section>
      <h1>Mutation Lab</h1>
      <div className="controls">
        <input aria-label="mutation query" placeholder="Search mutation..." value={query} onChange={e => setQuery(e.target.value)} />
        <button onClick={run}>Run</button>
      </div>

      <div className="grid">
        {results.map((m,i) => (
          <Card key={i} title={m.title}>
            <p>{m.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
