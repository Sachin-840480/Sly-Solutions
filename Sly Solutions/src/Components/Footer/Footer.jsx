const Footer = () => {
  return (
    <>
     <footer className="w-full py-14 bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
              <li><a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Pagedone</a></li>
              <li><a href="#" className=" rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Products</a></li>
              <li><a href="#" className=" rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Resources</a></li>
              <li><a href="#" className=" rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Blogs</a></li>
              <li><a href="#" className=" rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Support</a></li>
            </ul>
            <span className="flex justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer