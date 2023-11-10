/* eslint-disable @typescript-eslint/no-unsafe-return */
'use client'
// Import the api here 
import { api } from '../utils/api'; 
import { useMutation } from 'react-query';
import {
    FormEvent,
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
    useEffect

    } from "react";

export function useCreateTweet() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unused-vars
    return api.tweet.create.useMutation({onSuccess:  (NewTweetForm) => {
      console.log(newTweet); 
      console.log('why is this not working')
    //   setInputValue("");
    }});
  }