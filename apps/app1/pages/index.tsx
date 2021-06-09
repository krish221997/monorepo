import {Header} from "@monorepo-deploy/components"
import Link from "next/link";

const App1 = () => {
  return (
    <div style={{width: "100%", alignContent: "center"}}>
    <Header/>
    <h2>App1 works well</h2>
    <div>
       <Link href='/app2'>
        <a>App 2</a>
       </Link>
      </div>
    </div>
  )
};


export default App1;