// import React from "react";
// import bs58 from 'bs58';
// import {ed25519} from '@noble/curves/ed25519'
// import { useWallet } from "@solana/wallet-adapter-react";


// export function SignMessage(){
//     const[publicKey , SignMessage] = useWallet();
//     async function onClick() {
//            if(!publicKey) throw new Error("wallet not connected")
//            if(!SignMessage) throw new Error("not signeed")
            
            
//     const message = document.getElementById("message").value;
//     const encodedMessage = new TextEncoder().encode(message);
//     const signature = await SignMessage(encodedMessage);
//     if(!ed25519.verify(signature,encodedMessage,publicKey.toBytes()))throw new Er alert("success",`Message signature : ${bs58.ecncode(signature)}`)
//     }

//     return (
//         <div>
//             <input id="message" type="text" placeholder="Message" />
//             <button onClick={onClick}>
//                 Sign Message
//             </button>
//         </div>)
// }

import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <div className='flex'>
            <div className='pr-30'>
            <input id="message" type="text" placeholder="Message" className='text-white border-3 border-gray-100  rounded-md px-4 py-2 placeholder-white font-bold focus:outline-none' />
            </div>
            <div className='bg-[#552eaf] text-white border-none border-gray-300 rounded-md   px-13 py-3 cursor-pointer shadow-black shadow-md hover:bg-[#262626] font-bold'>
            <button onClick={onClick} >
                Sign Message
            </button >
            
            </div>
        </div>
    );
};