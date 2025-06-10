import { useConnection,useWallet } from "@solana/wallet-adapter-react";
import { PublicKey,LAMPORTS_PER_SOL,SystemProgram,Transaction } from "@solana/web3.js";



export function SendSolana(){
    const {connection} = useConnection();
    const wallet = useWallet();

    async function sendTokens() {
        
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();

        transaction.add(SystemProgram.transfer({
            fromPubkey:wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports : amount * LAMPORTS_PER_SOL
        }));


        await wallet.sendTransaction(transaction,connection);
        alert("send"+amount+"sol to"+ to)



    }

    return <div>
        <div className="flex pt-8 ">
        <div className="pl-10">
        <input id="to" type="text" placeholder="To" className="text-white border-3 border-gray-100  rounded-md px-4 py-2 placeholder-white font-bold focus:outline-none "/>
        </div>
        <div className="pl-30">
        <input id="amount" type="text" placeholder="Amount" className="text-white border-3 border-gray-100  rounded-md px-4 py-2 placeholder-white font-bold focus:outline-none " />
        </div>
        </div>
        <div className="flex justify-center items-center pt-8">
        <button onClick={sendTokens} className="bg-[#552eaf] text-white border-none border-gray-300 rounded-md hover:bg-[#262626]   px-13 py-3 cursor-pointer shadow-black shadow-md font-bold " >Send</button>
        </div>
    </div>

}





// import { useConnection, useWallet } from "@solana/wallet-adapter-react"
// import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


// export function SendTokens() {
//     const wallet = useWallet();
//     const {connection} = useConnection();

//     async function sendTokens() {
//         let to = document.getElementById("to").value;
//         let amount = document.getElementById("amount").value;
//         const transaction = new Transaction();
//         transaction.add(SystemProgram.transfer({
//             fromPubkey: wallet.publicKey,
//             toPubkey: new PublicKey(to),
//             lamports: amount * LAMPORTS_PER_SOL,
//         }));

//         await wallet.sendTransaction(transaction, connection);
//         alert("Sent " + amount + " SOL to " + to);
//     }

//     return <div>
//         <input id="to" type="text" placeholder="To" />
//         <input id="amount" type="text" placeholder="Amount" />
//         <button onClick={sendTokens}>Send</button>
//     </div>
// }