import "./App.css";
import { AirDrop } from "./Components/AirDrop";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ShowBalance } from "./Components/ShowBalance";
import { SignMessage } from "./Components/SignMessage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SendSolana } from "./Components/SendSolana";
import { Header } from "./Components/Header";
import { Footer } from "./Components/footer";

function App() {
  return (
    <>
      {/* <div className= "relative w-full h-screen"> */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_left,#6917F6,#BC44F8)] z-0"></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                    w-[1301px] h-[814px] bg-[linear-gradient(to_right,#6917F6,#BC44F8)] 
                                     shadow-2xl shadow-black z-10 "
      >
        <Header />
        <ConnectionProvider
          endpoint={
            "https://solana-devnet.g.alchemy.com/v2/EdaJnUf-NdD2rMoFFx09jb5rPaAnzaoY"
          }
        >
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div className=" flex items-center p-20  flex-col">
                <div className="flex">
                  <div className="pr-4">
                    <div className=" shadow-black shadow-md rounded-md">
                      <WalletMultiButton />
                    </div>
                  </div>
                  <div>
                    <div className=" shadow-black shadow-md rounded-md pl">
                      <WalletDisconnectButton />
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <ShowBalance></ShowBalance>
                </div>
                <div className="">
                  <AirDrop />
                </div>
                <div>
                  <SignMessage></SignMessage>
                </div>
                <div>
                  <SendSolana></SendSolana>
                </div>
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
        <Footer />
      </div>
    </>
  );
}

// function App() {
//   return (
//     <div className="relative w-full h-screen">

//       {/* Top Half: White Background */}
//       <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>

//       {/* Bottom Half: Gradient Background */}
//       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_left,#6917F6,#BC44F8)] z-0"></div>

//       {/* Center Card */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//                       w-[1301px] h-[814px] bg-[linear-gradient(to_right,#6917F6,#BC44F8)]
//                       rounded-lg shadow-xl z-10">

//         {/* Optional Header Section - you can now safely use this! */}
//         <div className="h-1/2 bg-white">
//           {/* <Headers /> or anything inside here */}
//         </div>

//         <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/EdaJnUf-NdD2rMoFFx09jb5rPaAnzaoY">
//           <WalletProvider wallets={[]} autoConnect>
//             <WalletModalProvider>
//               <div className="flex items-center p-20 flex-col">
//                 <div className="p-2"><WalletMultiButton /></div>
//                 <div className="p-2"><WalletDisconnectButton /></div>

//                 <AirDrop />
//                 <ShowBalance />
//                 <SignMessage />
//                 <SendSolana />
//               </div>
//             </WalletModalProvider>
//           </WalletProvider>
//         </ConnectionProvider>
//       </div>
//     </div>
//   );
// }

export default App;
