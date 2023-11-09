import {React, useState, useEffect, useRef, useReducer, useLayoutEffect, useCallback} from 'react'
import Button from '../components/Button'; 
import ProfileImage from '../components/ProfileImage'; 
import {useSession, signOut, signIn} from "next-auth/react"; 


// Create the types for style and scrollHeight here 


function updateTextAreaSize(textArea?: HTMLTExtAreaElement){



if(textArea == null )return
textArea.style.height = "0" 
textArea.style.height = `${textArea.scrollHeight}px`
    
}


function Form(){

    const session  = useSession()
    const [inputValue, setInputValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const inputRef = useCallback((textArea:HTMLTextAreaElement) => {

        updateTextAreaSize(textArea); 
        textAreaRef.current = textArea; 
        
        
        
    },[]);
    
    
useLayoutEffect(() => {
  
    updateTextAreaSize(textAreaRef.current)
  
  }, [inputValue])
  

    if(session.status !== "authenticated") return 
    
    
  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2 " >
    
    <div className="flex gap-4" >
    
    
    <ProfileImage url={session.data.user.image} /> 
    <textarea 
    ref={inputRef}
    style={{height: 0}}
    value={inputValue}
    
    onChange={e => setInputValue(e.target.value)}
    label='input' type="text" placeholder="x" className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" > 
    
    
    
    
    </textarea>
        
        
    </div>
    
    <Button className="self-end" >
    
    Tweet
    
    </Button>

    Form 
    
    </form>

  )
    
    
}

function NewTweetForm() {
    
    const session = useSession(); 
    
    if(session.status !== "authenticated") return null 

    return <Form/> 
    
    
}

export default NewTweetForm