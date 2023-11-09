

import Link from "next/Link"; 
import {useSession, signOut, signIn} from "next-auth/react"; 


export function SideNav(){
    
    const session = useSession(); 
    const user = session.data?.user
    

    return(
    
    <nav className="sticky top-0 self-start px-2 py-4" >
        HI 
        <ul className="flex flex-col items-start gap-2" >
        <li  >
        <Link href='/' ></Link> 
        <Link href={`/profile`} ></Link> 
            
        </li>
        {user != null && (
        
        <li>
        <Link href={`/profiles/${user.id}`} ></Link> 
            
        </li>
        
        )}
        
        
        {user == null ? (
          <li>
            <button onClick={() => void signIn()}>
                <span className="flex items-center gap-4">
                  <span className="hidden text-lg text-green-700 md:inline">
                    Log In
                  </span>
                </span>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => void signOut()}>
                <span className="flex items-center gap-4">
                  <span className="hidden text-lg text-red-700 md:inline">
                    Log Out
                  </span>
                </span>
            </button>
          </li>
        )}
        
        
        {user == null ? null : null}
        
        
            
        </ul>
        
    </nav>
    

    )
    
    
}