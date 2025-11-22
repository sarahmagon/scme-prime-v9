export default function StoryCreator() {
  return (
    <main style={{fontFamily: "Inter, system-ui", padding:40, maxWidth:1100, margin:"0 auto"}}>
      <h1>Story Creator</h1>
      <p>Outline, draft and revise with AI-assisted modules.</p>
      <section style={{marginTop:24}}>
        <label>Title</label>
        <input placeholder="Story title..." style={{width:"100%", padding:8, marginTop:8}}/>
        <label style={{display:"block", marginTop:12}}>Outline</label>
        <textarea placeholder="Short outline..." style={{width:"100%", minHeight:120, padding:8}}/>
        <div style={{marginTop:12}}>
          <button style={{padding:"8px 12px", borderRadius:8}}>Generate Draft</button>
        </div>
      </section>
    </main>
  )
}
