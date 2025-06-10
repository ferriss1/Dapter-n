
// import { useConnection,useWallet } from "@solana/wallet-adapter-react";
// import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";



// export function ShowBalance(){

//     const {connection} = useConnection();
//     const wallet = useWallet();


//     async function getBalance(){

//         if(wallet.publicKey){
        
//         const balance = await connection.getBalance(wallet.publicKey);
//         document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL
        
//         }
//     }
//         getBalance();
//     return(
//         <div>
//             <p>balance:</p><div id="balance "></div>
//         </div>
//     )
// }

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() { 
        if (wallet.publicKey) {

            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        }
    }
    
    getBalance();
    return <div>
        <div className="flex">
        <div className="text-white font-bold text-xl pr-35">
        SOL Balance:
        </div>
        <div id="balance" className="text-white"></div>
        </div>
    </div>
}