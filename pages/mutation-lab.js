export default function MutationLab() {
  return (
    <main style={{fontFamily: "Inter, system-ui", padding:40, maxWidth:1100, margin:"0 auto"}}>
      <h1>Mutation Lab</h1>
      <p>Generate mutation ideas and transform prompts.</p>
      <section style={{marginTop:24}}>
        <label>Seed idea</label>
        <input placeholder="A heroic archaeologist..." style={{width:"100%", padding:8, marginTop:8}}/>
        <div style={{marginTop:12}}> 
          <button style={{padding:"8px 12px", borderRadius:8}}>Generate Mutations</button>
        </div>
      </section>
      <section style={{marginTop:24}}>
        <h3>Results</h3>
        <div id="results" style={{marginTop:8}}>- No results yet -</div>
      </section>
    </main>
  )
}
