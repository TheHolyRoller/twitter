'use client'

import {

FormEvent,

useCallback,

useLayoutEffect,

useRef,

useState,

useEffect

} from "react";

import { useCreateTweet } from '../hooks/useCreateTweet';

import { useMutation } from 'react-query';

import Button from '../components/Button';

import ProfileImage from '../components/ProfileImage';

import {useSession, signOut, signIn} from "next-auth/react";

// import { api } from "/utils/api";

import { api } from "../utils/api";

function updateTextAreaSize(textArea?: HTMLTExtAreaElement){

if(textArea == null )return

textArea.style.height = "0"

textArea.style.height = `${textArea.scrollHeight}px`

}

function Form(){

const session  = useSession()

const [inputValue, setInputValue] = useState("");

const textAreaRef = useRef<HTMLTextAreaElement>(null)

const inputRef = useCallback((textArea:HTMLTextAreaElement) => {

// const [createTweet, createTweetStatus] = useCreateTweet();

updateTextAreaSize(textArea);

textAreaRef.current = textArea;

},[]);

useLayoutEffect(() => {

updateTextAreaSize(textAreaRef.current)

}, [inputValue])

//   This is causing the Get-static props error

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access

const createTweet = api.tweet.create.useMutation({onSuccess: newTweet => {

    console.log(newTweet); 
    console.log('is this working ')
    
    
}}); 



if(session.status !== "authenticated") return

function handleSubmit(e: FormEvent){

e.preventDefault();

createTweet.mutate({content: inputValue});
setInputValue("");




}

return (



<form onSubmit={handleSubmit} className="flex flex-col gap-2 border-b px-4 py-2 " >

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