function Register() {
    return (
        <div class="flex h-screen flex-col bg-gray-100">
  
        <div class="mx-2 my-20 grid place-items-center sm:my-auto">
          <div class="flex">
            <span class="mx-auto my-20 text-center font-bold"> </span>
          </div>
      
          
          <div class="w-11/12 rounded-lg bg-white p-12 px-6 py-10 shadow-md sm:w-8/12 sm:px-10 sm:py-6 md:w-6/12 lg:w-5/12 lg:shadow-lg 2xl:w-4/12">
            
            <h2 class="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Register</h2>
      
            <form class="mt-10" method="POST">
              
              <label for="email" class="block text-xs font-semibold uppercase text-gray-600">E-mail</label>
              <input id="email" type="email" name="email" placeholder="e-mail address" autocomplete="email" class="mt-2 block w-full appearance-none border-b-2 border-gray-100 px-1 py-3 text-gray-800 focus:border-gray-200 focus:text-gray-500 focus:outline-none" required />
      
              
              <label for="password" class="mt-2 block text-xs font-semibold uppercase text-gray-600">Password</label>
              <input id="password" type="password" name="password" placeholder="password" autocomplete="current-password" class="mb-4 mt-2 block w-full appearance-none border-b-2 border-gray-100 px-1 py-3 text-gray-800 focus:border-gray-200 focus:text-gray-500 focus:outline-none" required />
      
              <label for="Confirm password" class="mt-2 block text-xs font-semibold uppercase text-gray-600">Confirm password</label>
              <input id="Confirm password" type="password" name="Confirm password" placeholder="confirm password" autocomplete="current-Confirm password" class="mb-4 mt-2 block w-full appearance-none border-b-2 border-gray-100 px-1 py-3 text-gray-800 focus:border-gray-200 focus:text-gray-500 focus:outline-none" required />
      
              
              <button type="submit" class="mt-10 w-full rounded-sm bg-gray-800 py-3 font-medium uppercase text-white hover:bg-gray-700 hover:shadow-none focus:outline-none">Register</button>
      
              
              <div class="mt-8 text-center text-sm sm:mb-4  sm:flex-wrap">
                <a href="./login" class="text-center"> “Login account” </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Register;