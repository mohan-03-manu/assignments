import React, { useRef, useState } from 'react'
import axios from 'axios';
import Markdown from 'react-markdown';
import { Skeleton } from '@/components/ui/skeleton';

function Home() {
    let userInput = useRef(null);
    let [response , setResponse] = useState('');
    let [status, setStatus] = useState(false);
    
    async function askChatgpt(){
        setStatus(true)
        let msg = userInput.current.value;
        let apiUrl = 'https://api.openai.com/v1/chat/completions';
        const apiKey = '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';
        const headers = {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${apiKey}`,
        }
        const requestBody = {
          model: 'gpt-4',
          messages: [
                {
                    role: 'user',
                    content: msg
                }
                    ]
        }
            axios.post(apiUrl, requestBody, {headers}).then(({data})=>{
            // console.log(data.choices)
            {
                setResponse(data.choices[0].message.content)
                setStatus(false)   
            }   
        })
    }
  return (
    <div>

    <div className=" w-full max-w-2xl mt-24 mb-40 mx-auto px-4">
         {
            status ? <div>
                <Skeleton className="w-[90%] h-4 mt-2 rounded-lg" />
                <Skeleton className="w-[95%] h-4 mt-2 rounded-lg" />
                <Skeleton className="w-[70%] h-4 mt-2 rounded-lg" />



            </div> : <Markdown>{response}</Markdown>
        }

    </div>

        {/* input */}
    <div className="fixed bg-white h-[100px] bottom-6 left-1/2 -translate-x-1/2  w-full max-w-2xl px-4  ">
      <div className="flex bg-white backdrop-blur-md border border-neutral-200 shadow-xl rounded-2xl items-center p-2">
        <input ref={userInput} type="text" placeholder='Ask anything' className='flex-1 bg-transparent px-4 py-2 focus:outline-none' />
        <button onClick={askChatgpt} className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-2 transition-all '>Search</button>
      </div>
       <p className="text-sm text-center text-neutral-500 mt-1">This is an AI tool and can make mistakes</p>
      </div> 
    </div>
  )
}

export default Home
