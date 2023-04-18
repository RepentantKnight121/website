function Login() {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
  
  <div className="mx-2 my-20 grid place-items-center sm:my-auto">
    <div className="flex">
      <span className="mx-auto my-20 text-center font-bold"> </span>
    </div>

    <div className="w-11/12 rounded-lg bg-white p-12 px-6 py-10 shadow-md sm:w-8/12 sm:px-10 sm:py-6 md:w-6/12 lg:w-5/12 lg:shadow-lg 2xl:w-4/12">
      
      <h2 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Login</h2>

      <form className="mt-10" method="POST">
        
        <label hmtlfor="email" className="block text-xs font-semibold uppercase text-gray-600">Username</label>
        <input id="email" type="email" name="email" placeholder="username" autoComplete="current-username"
               className="mt-2 block w-full appearance-none border-b-2 border-gray-100 px-1 py-3 text-gray-800 focus:border-gray-200 focus:text-gray-500 focus:outline-none" required />

        
        <label hmtlfor="password" className="mt-2 block text-xs font-semibold uppercase text-gray-600">Password</label>
        <input id="password" type="password" name="password" placeholder="password" autoComplete="current-username"
               className="mb-4 mt-2 block w-full appearance-none border-b-2 border-gray-100 px-1 py-3 text-gray-800 focus:border-gray-200 focus:text-gray-500 focus:outline-none" required />

        
        <button type="submit"
                className="mt-10 w-full rounded-sm bg-gray-800 py-3 font-medium uppercase text-white hover:bg-gray-700 hover:shadow-none focus:outline-none">Login</button>

        
        <div className="mt-8 text-center text-sm sm:mb-4  sm:flex-wrap">
          <a href="./register" className="text-center"> Create an Account </a>
        </div>
      </form>
    </div>
  </div>
</div>
  
  )
}

export default Login;