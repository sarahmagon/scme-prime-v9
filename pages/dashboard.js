export default function Dashboard() {
  return (
    <main style={{fontFamily: "Inter, system-ui", padding:40, maxWidth:1100, margin:"0 auto"}}>
      <h1>SCME PRIME — Dashboard</h1>
      <p>Welcome to the central workspace. Use the left nav to open modules.</p>
      <section style={{display:"grid", gridTemplateColumns:"1fr 2fr", gap:20, marginTop:24}}>
        <aside style={{padding:16, borderRadius:8, background:"#f8fafc"}}>
          <h3>Workspace</h3>
          <ul>
            <li><a href="/mutation-lab">Mutation Lab</a></li>
            <li><a href="/story-creator">Story Creator</a></li>
          </ul>
        </aside>
        <div style={{padding:16}}>
          <h2>Quick Actions</h2>
          <div style={{display:"flex", gap:12, marginTop:12}}>
            <button style={{padding:"8px 12px", borderRadius:8}}>New Mutation</button>
            <button style={{padding:"8px 12px", borderRadius:8}}>New Story</button>
          </div>
        </div>
      </section>
    </main>
  )
}
