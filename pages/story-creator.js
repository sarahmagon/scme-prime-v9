import { useState } from 'react';
import Card from '../components/Card';

export default function StoryCreator() {
  const [outline, setOutline] = useState('');
  const [draft, setDraft] = useState('');

  return (
    <section className="story-creator">
      <aside className="outline">
        <h2>Outline</h2>
        <textarea value={outline} onChange={e => setOutline(e.target.value)} placeholder="Write an outline..." />
      </aside>

      <div className="editor">
        <h2>Draft</h2>
        <textarea value={draft} onChange={e => setDraft(e.target.value)} placeholder="Write draft..." />
        <Card title="Preview">
          <div dangerouslySetInnerHTML={{__html: draft.replace(/\n/g, '<br/>')}} />
        </Card>
      </div>
    </section>
  );
}
