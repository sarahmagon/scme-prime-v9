// VisualStudio.tsx (example)
import React from 'react';

export default function VisualStudio({ prompt, seed }: { prompt: string; seed: number }) {
  const create = () => {
    const id = `job-${Date.now()}`;
    console.log('Create T2I job', id, prompt, seed);
    // Use provider actions.addJob(...) in real app
  };
  return (
    <div>
      <div className="text-xs">Visual Studio (T2I)</div>
      <button onClick={create}>Generate Visual Variant</button>
    </div>
  );
}
