const Header = {
    render() {
        return `
        <div class="bg-blue-900">
        <img class="mx-auto py-6 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png"
          alt="" width="10%">
      </div>
      <div class=" grid grid-cols-2 bg-orange-700 py-5">
        <nav>
          <ul>
            <li class="inline ml-9"><a class="text-white hover:text-yellow-400" href="/">Home Page</a></li>
            <li class="inline ml-5"><a class="text-white hover:text-yellow-400" href="/about">About Page</a></li>
            <li class="inline ml-5"><a class="text-white hover:text-yellow-400" href="/product">Product Page</a></li>
            <li class="inline ml-5"><a class="text-white hover:text-yellow-400" href="/signin">Signin</a></li>
            <li class="inline ml-5"><a class="text-white hover:text-yellow-400" href="/signup">Signup</a></li>
            <li class="inline ml-5"><a class="text-white hover:text-yellow-400" href="/admin/dashboard">Admin</a></li>
          </ul>
        </nav>
        <div class="ml-80">
          <input id="text" type="text">
          <input class="bg-blue-900 text-white border-double border-2 hover:text-yellow-400" type="submit"
            value="TÌM KIẾM">
        </div>
      </div>
      
        `;
    },
};
export default Header;