


// export function Footer(){

//     return<>
//     <div className="container mx-auto flex justify-end items-center space-x-4">
//     <a href="#" className="bg-white rounded-full p-2 hover:bg-purple-100">
//       <i className="fab fa-facebook-f"></i>
//     </a>
//     <a href="#" className="bg-white rounded-full p-2 ">
//       <i className="fab fa-facebook-f"></i>
//     </a>
//     <a href="#" className="bg-white rounded-full p-2 hover:bg-purple-100">
//       <i className="fab fa-twitter"></i>
//     </a>
//   </div>
//         </>
// }



export function Footer() {
  return (
    <div className="w-full bg-gradient-to-r  py-3 px-6">
      <div className="container mx-auto flex justify-end items-center space-x-4">
        <a href="https://www.facebook.com/" className="bg-white rounded-full p-2 hover:bg-purple-100">
          <i className="fab fa-facebook-f "></i>
        </a>
        <a href="https://www.instagram.com/" className="bg-white rounded-full p-2 hover:bg-purple-100">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://x.com/home" className="bg-white rounded-full p-2 hover:bg-purple-100">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}