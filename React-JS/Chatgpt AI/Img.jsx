import { useRef, useState } from "react"
import axios from "axios";
import Markdown from "react-markdown";
import { Skeleton } from "@/components/ui/skeleton"

function Img() {
    let userInput = useRef(null)
    let [url, setUrl] = useState('');
    let [status, setStatus] = useState(false);
    async function  askChatgpt() {
        setStatus(true)
        let msg = userInput.current.value;
        let apiUrl = 'https://api.openai.com/v1/images/generations';
        const apiKey = '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';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        }
        const requestBody = {
            model: 'dall-e-3',
            prompt: msg,
            n: 1,
            size: "1024x1024",
        }
        axios.post(apiUrl, requestBody, {headers}).then(({data})=>{
            {
                console.log(data)
                setUrl(data.data[0].url);
                console.log(url)
                setStatus(false)
                
            }
            
        })
    }
  return (
    <div>

    <div className="w-[700px] mt-12 mb-24 mx-auto bg-white rounded-xl overflow-hidden">
        {
            status ? <div>
                <Skeleton className="h-[400px] w-full border-none" />



            </div> : <img className="h-full w-full object-cover " src={url} alt="" />
        }
        
    </div>

        {/* input */}
      <div className="fixed bg-white h-[100px] bottom-6 left-1/2 -translate-x-1/2  w-full max-w-2xl px-4 ">
      <div className="flex bg-white backdrop-blur-md  shadow-xl rounded-2xl items-center p-2">
        <input ref={userInput} placeholder="Ask chatgpt to generate image" type="text" className='flex-1 bg-transparent px-4 py-2 focus:outline-none'  />
        <button onClick={askChatgpt} className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-2 transition-all '>Serach</button>
      </div>
        <p className="text-sm text-center text-neutral-600 mt-1">This is an AI tool and can make mistakes</p>
      </div>
    </div>
  )
}

export default Img