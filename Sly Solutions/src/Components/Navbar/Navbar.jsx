import logo from "./loop.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
              </div>
              <div className="w-full flex justify-center">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import logo from './loop.png'; // Replace with the path to your logo file

// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <img className="h-10 w-auto" src={logo} alt="Your Company" />
//             <span className="ml-3 text-white font-bold text-xl tracking-wide">Your Company</span>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex space-x-6">
//             <a
//               href="#"
//               className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Dashboard
//             </a>
//             <a
//               href="#"
//               className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Team
//             </a>
//             <a
//               href="#"
//               className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Projects
//             </a>
//             <a
//               href="#"
//               className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Calendar
//             </a>
//           </div>
//         </div>
//       </div>  
//     </nav>
//   );
// };

// export default Navbar;