import { useState } from 'react';
import Link from 'next/link';
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <aside className={`sp-sidebar ${open ? 'open' : 'closed'}`} aria-label="Sidebar">
      <button className="collapse-btn" onClick={() => setOpen(!open)} aria-pressed={!open}>
        {open ? 'Collapse' : 'Open'}
      </button>
      <nav>
        <ul>
          <li><Link href="/dashboard"><a>Dashboard</a></Link></li>
          <li><Link href="/mutation-lab"><a>Mutation Lab</a></Link></li>
          <li><Link href="/story-creator"><a>Story Creator</a></Link></li>
        </ul>
      </nav>
    </aside>
  );
}
