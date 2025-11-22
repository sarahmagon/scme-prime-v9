export default function Home() {
  return (
    <main style={{
      fontFamily: "Inter, Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif",
      padding: "48px 24px",
      maxWidth: 980,
      margin: "0 auto",
      color: "#0f172a"
    }}>
      <header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1 style={{fontSize: 36, margin: 0}}>SCME PRIME</h1>
        <nav style={{fontSize: 14}}>
          <a href="#" style={{marginRight:16, color:"#0f172a", textDecoration:"none"}}>Home</a>
          <a href="#" style={{marginRight:16, color:"#0f172a", textDecoration:"none"}}>Docs</a>
          <a href="#" style={{color:"#0f172a", textDecoration:"none"}}>GitHub</a>
        </nav>
      </header>

      <section style={{marginTop: 48, display:"flex", gap: 32, alignItems:"center"}}>
        <div style={{flex:1}}>
          <h2 style={{fontSize:28, margin:"0 0 12px"}}>Creative mutation engine • SCME PRIME</h2>
          <p style={{fontSize:16, lineHeight:1.6, margin:0}}>
            A modular suite for rapid ideation, story mutation, and generative tools. This placeholder page was deployed so your project is live — replace it with your app pages when ready.
          </p>

          <div style={{marginTop:24, display:"flex", gap:12}}>
            <a href="#" style={{background:"#111827", color:"#fff", padding:"10px 16px", borderRadius:8, textDecoration:"none"}}>Open App</a>
            <a href="https://github.com/sarahmagon/scme-prime-v9" style={{border:"1px solid #e5e7eb", padding:"10px 16px", borderRadius:8, textDecoration:"none", color:"#0f172a"}}>View on GitHub</a>
          </div>
        </div>
        <div style={{flex:1, background:"#f8fafc", padding:20, borderRadius:8}}>
          <h3 style={{marginTop:0}}>Quick status</h3>
          <ul style={{marginTop:8, paddingLeft:18}}>
            <li>Framework: Next.js</li>
            <li>Build: Verified on Vercel</li>
            <li>Pages: /pages/index.js (replace to customize)</li>
          </ul>
        </div>
      </section>

      <section style={{marginTop:48}}>
        <h3 style={{marginBottom:8}}>Features</h3>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:16}}>
          <div style={{padding:16, borderRadius:8, background:"#fff", boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
            <strong>Mutation Ideas</strong>
            <p style={{margin:8, fontSize:13}}>Generate creative mutation prompts and transformations for stories and characters.</p>
          </div>
          <div style={{padding:16, borderRadius:8, background:"#fff", boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
            <strong>Story Creator</strong>
            <p style={{margin:8, fontSize:13}}>Modular editor for outlines, drafts, and revisions with AI assistance.</p>
          </div>
          <div style={{padding:16, borderRadius:8, background:"#fff", boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
            <strong>OS Integration</strong>
            <p style={{margin:8, fontSize:13}}>Integration-ready components for the SCME PRIME OS and dashboard.</p>
          </div>
        </div>
      </section>

      <footer style={{marginTop:64, borderTop:"1px solid #f1f5f9", paddingTop:24, color:"#64748b"}}>
        <small>SCME PRIME — Starter landing page deployed to Vercel. Replace this file <code>/pages/index.js</code> with your real app code.</small>
      </footer>
    </main>
  )
}
