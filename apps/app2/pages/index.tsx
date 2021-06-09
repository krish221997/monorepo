import {Header} from "@monorepo-deploy/components"
import Link from "next/link";

const App2 = () => {
  return (
    <div style={{width: "100%", alignContent: "center"}}>
    <Header/>

    <h2>App2</h2>
    <div>
       <Link href='/app3'>
        <a>App 3</a>
       </Link>
      </div>
    </div>
  )
};


export default App2;