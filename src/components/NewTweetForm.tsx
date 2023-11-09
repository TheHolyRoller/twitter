import React from 'react'
import Button from '../components/Button'; 
import ProfileImage from '../components/ProfileImage'; 
import {useSession, signOut, signIn} from "next-auth/react"; 

function NewTweetForm() {

    const session  = useSession()
    
    
    if(session.status !== "authenticated") return 
    
    
  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2 " >
    
    <div className="flex gap-4" >
    
    <ProfileImage url={session.data.user.image} /> 
    <textarea label='input' type="text"  className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" > 
    
    
    </textarea>
        
        
    </div>
    
    <Button className="self-end" >
    
    Tweet
    
    </Button>
    {/* <button></button> */}
    
    Form 
    
    </form>
  )
}

export default NewTweetForm