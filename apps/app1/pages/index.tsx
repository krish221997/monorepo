import {Header} from "@monorepo-deploy/components"

const App1 = () => {
  return (
    <div style={{width: "100%", alignContent: "center"}}>
    <Header/>
    <h2>App1</h2>
    <div>
        <a href="/app2">App2</a>
      </div>
    </div>
  )
};


export default App1;