import { Container } from "./Styles";
import { Search } from "./components/search";
import { useState } from 'react';
import { UserProp } from "./types/userType";
import { UserViwer } from "./components/UserViewer";
import { Err404} from "./components/erro";





function App() {
  const[user,setUser] = useState<null | UserProp>(null);
  const[Err,setErr] = useState<boolean>(false);
  const[load,setLoad] = useState<boolean>(false)


  const HandleUser =async (userName:string) => {
    setLoad(true)
    const promise = await fetch(`https://api.github.com/users/${userName}`);
    if(promise.status == 404){
      setUser(null);
      setErr(true);
      return;
    }
    const userData = await promise.json();
    const{ name, login, avatar_url,followers,following, bio,location }=userData;
    const data = {name, login, avatar_url,followers,following, bio,location};
    setUser(data);
    
  }
  


  return (
    <Container>
      <Search User={HandleUser}/>
      {
        
       user ? <UserViwer {...user} /> : (Err && <Err404/>)
        
      } 
      
    </Container>
  )
}

export default App
