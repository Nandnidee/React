import {useAuth0} from '@auth0/auth0-react';

export default function User(){
    const {user,isAuth,isload}=useAuth0();

    if(isload){
   return(<div>LOADING...............</div>)
    }
    return(
        isAuth&&(
            <div>
                <img src={user.picture}/>
                <h2>{user.name}</h2>
            </div>
        )
    );
}