import { useConnection ,useWallet} from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL  } from "@solana/web3.js"




// export function AirDrop(){

//     const wallet = useWallet();
//     const {connection} = useConnection



//     async function sendAirdrop(){
//             let amount = document.getElementById("amount").value
//             await connection.sendAirdrop(wallet.publicKey,amount *LAMPORTS_PER_SOL)
//             alert("airdroped "+ amount +"sol tt" + wallet.publicKey.toBase58())
//     }
// return(
//     <div>
//         <input id="amount"type="text" placeholder="enter amount" className="bg-white text-black border border-gray-300 rounded-md px-4 py-2"/>
//         <button onClick={sendAirdrop} className="bg-amber-500 text-black border border-gray-300 rounded-md p-4 px-4 py-2 cursor-pointer ">AirDropSol</button>
//     </div>
// )

// }

export function AirDrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return <div className="p-10 flex">
        <div className="">
        <input id="amount" type="text" placeholder="Amount" className=" text-white border-3 border-gray-100  rounded-md px-4 py-2 placeholder-white font-bold focus:outline-none" />
        </div>
        <div className="pl-30">
        <button onClick={requestAirdrop} className="bg-[#552eaf] text-white border-none border-gray-300 rounded-md hover:bg-[#262626]   px-10 py-3 cursor-pointer shadow-black shadow-md font-bold ">Request Airdrop</button>
        </div>
    </div>
}