import Link from 'next/link';
export default function Header() {
  return (
    <header className="sp-header" role="banner">
      <div className="container">
        <div className="brand">
          <Link href="/"><a>SCME PRIME</a></Link>
        </div>
        <nav className="nav" role="navigation" aria-label="Main">
          <Link href="/dashboard"><a>Dashboard</a></Link>
          <Link href="/mutation-lab"><a>Mutation Lab</a></Link>
          <Link href="/story-creator"><a>Story Creator</a></Link>
        </nav>
      </div>
    </header>
  );
}
