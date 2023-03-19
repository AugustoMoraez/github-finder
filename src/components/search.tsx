import { Box } from "./searchStyle";
import { BsSearch} from 'react-icons/bs';
import { useState ,KeyboardEvent } from 'react';


type SearchProps = {
    User: (Name:string) => Promise<void>
}

export const Search = ({User}:SearchProps) => {

    const[userName,setUserName] = useState("");

    const HandleKey = (e:KeyboardEvent) => {
        
        if(e.key=="Enter"){
            User(userName)
        }
    }

    return(
        <Box>
            <h1>GitHub Finder</h1>
            <div>
                <input
                type="text"
                onChange={(e)=>setUserName(e.target.value)}
                onKeyDown={HandleKey}
                placeholder="BUSQUE UM PERFIL" />
                <button onClick={()=> User(userName)}><BsSearch/></button>
            </div>
        </Box>
       
    )
}