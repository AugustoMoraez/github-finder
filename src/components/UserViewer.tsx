import { UserProp } from "../types/userType";
import { BoxUser } from "./UserViwerStyle";
import { MdLocationPin } from "react-icons/md";

export const UserViwer = ({name, avatar_url,followers,following, bio,location}:UserProp) => {
    
    return(
        <BoxUser>
            <div className="profile">
                <img src={avatar_url} alt="perfil" />
                <p>{name}</p>
            </div>
            <div className="info-1">
                <p>{`Seguidores ${followers} | Seguindo ${following}`}</p>
                <div className="info-2">
                {
                    location ?
                    <div className="location">
                        <MdLocationPin/>
                        <p>{location}</p>
                    </div>
                    :
                    <div className="location">
                        <MdLocationPin/>
                        <p>Indisponivel</p>
                    </div>
                }
                    <div className="bio">
                        <p>{bio}</p>
                    </div>
            </div>
            </div>
            
        </BoxUser>
    )
}