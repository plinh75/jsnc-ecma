import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */`
        <div
        class="hidden md:block z-[999] bg-black h-11 fixed top-0 left-0 w-full py-3"
      >
        <div class="container">
          <div class="flex items-center justify-between">
            <div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                class="italic pl-2 text-white bg-transparent border border-solid border-gray-600 rounded-sm focus:border-gray-300"
              />
            </div>
            <div class="flex items-center gap-2">
              <span>
                <a class="text-white" href="signin">
                  Signin</a
                >
                |
              </span>
              <span>
                <a class="text-white" href="signup">
                  Signup</a
                >
                |
              </span>
              <span>
                <a class="text-white" href="" id="logout">
                      Logout</a
                    >
              </span>
              <span>
                <a
                  class="text-white"
                  target="_blank"
                  href="#"
                  title="Shop son môi trên Facebook"
                >
                  <i class="fa-brands fa-facebook-square"></i>
                </a>
              </span>
              <span>
                <a
                  class="text-white"
                  target="_blank"
                  href="#"
                  title="Shop son môi trên Instagram"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <header id="header" class="hidden lg:block mt-[44px]">
        <div class="container">
          <nav class="flex justify-between items-center">
            <a href="#" class="header-logo">
              <img
                src="https://shopsonmoi.vn/assets/uploads/files/60be3-logo.png"
                alt="Logo"
                style="width: 60px; height: 60px"
              />
            </a>
            <ul class="flex items-center uppercase">
              <li class="py-8 px-4">
                <a
                  href="#"
                  class="text-[#334d5e] transition duration-300 hover:text-[#b4073a]"
                  >Trang chủ</a
                >
              </li>
              <li class="py-8 px-4">
                <a
                  href="/product"
                  class="text-[#334d5e] transition duration-300 hover:text-[#b4073a]"
                  >Son môi</a
                >
              </li>
              <li class="py-8 px-4">
                <a
                  href="/#/about"
                  class="text-[#334d5e] transition duration-300 hover:text-[#b4073a]"
                >
                  Tuyển đại lý, cộng tác viên
                </a>
              </li>
              <li class="py-8 px-4">
                <a
                  href="/#/contact"
                  class="text-[#334d5e] transition duration-300 hover:text-[#b4073a]"
                  >Liên hệ</a
                >
              </li>
              <li class="py-8 px-4">
                <a
                  class="text-[#334d5e] transition duration-300 hover:text-[#b4073a]"
                  >
                  ${localStorage.getItem("user") ? `
                  <span id="account-email">
                    
                  </span>
                  ` : ""}
                  </a
                >
              </li>
            </ul>
            <a href="" class="text-black text-3xl relative pt-[6px] pr-[6px]">
              <i class="fa-solid fa-cart-shopping"></i>
              <span
                class="absolute top-0 right-0 text-white text-base bg-pink-400 rounded-[50%] w-5 h-5 text-center hover:text-[#b4073a]"
                >0</span
              >
            </a>
          </nav>
        </div>
      </header>
      
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");

        document.querySelector("#account-email").innerHTML = user.username;
        // logout
        if (logout) {
            logout.addEventListener("click", () => {
                toastr.success("Đăng xuất thành công");
                localStorage.removeItem("user");
                reRender(Header, "#header");
            });
        }
    },
};
export default Header;