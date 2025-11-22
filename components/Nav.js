import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", padding:16, alignItems:"center"}}>
      <div style={{fontWeight:700}}>SCME PRIME</div>
      <div style={{display:"flex", gap:12}}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/dashboard"><a>Dashboard</a></Link>
        <Link href="/mutation-lab"><a>Mutation Lab</a></Link>
        <Link href="/story-creator"><a>Story Creator</a></Link>
      </div>
    </nav>
  )
}
