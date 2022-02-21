import toastr from "toastr";
import { get } from "../../api/product";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";

const DetailProduct = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
    <main id="main" class="mt-[92px] lg:mt-0">
    <div
      class="bg-center text-2xl md:text-[38px] uppercase text-gray-100 text-center mb-6 py-10"
    >
    ${data.name}
    </div>

    <div class="container mb-8">
      <div class="bg-gray-100 p-2 rounded">
        <ol class="flex items-center gap-2">
          <li>
            <a href="/"><i class="fa fa-home"></i></a>
          </li>
        </ol>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-col lg:flex-row gap-12">
        <div class="w-full lg:w-[40%] flex">
          <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
            <div class="w-full lg:w-[80%]">
              <img
                src="${data.img}"
                alt=""
                class="p-4 border border-solid border-gray-900 object-cover"
              />
            </div>
            <div class="w-[20%]">
              <img
                src="${data.img}"
                alt=""
                class="p-2 border border-solid border-gray-900 object-cover"
              />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[60%]">
          <div class="mb-10">
            <h3 class="text-xl lg:text-3xl mb-2">
            ${data.name}
            </h3>
            <div class="flex items-center gap-8">
              <span
                class="text-base text-black text-center"
                >${data.desc}</span
              >
            </div>
          </div>
          <div>
                    <input type="number" id="inputValue" class="border border-gray-500" />
                </div>
          <div class="border-y border-solid border-gray-300 py-4">
            <button class="bg-[#e10747] text-white p-4 rounded-sm" id="btnAddToCart">
              <i class="fa-solid fa-cart-shopping"></i>
              <span class="uppercase">Thêm vào giỏ hàng</span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex items-center gap-2 border-b border-gray-300 border-solid mb-2"
      >
        <div>
          <button
            class="bg-gray-100 py-2 px-3 rounded-tl-xl rounded-tr-xl uppercase"
          >
            Thông tin sản phẩm
          </button>
        </div>
        <div>
          <button
            class="bg-gray-300 py-2 px-3 rounded-tl-xl rounded-tr-xl uppercase"
          >
            Bình luận(0)
          </button>
        </div>
      </div>
      <div class="flex justify-end gap-2 pb-32">
        <i class="fa-solid fa-star start"></i>
        <i class="fa-solid fa-star start"></i>
        <i class="fa-solid fa-star start"></i>
        <i class="fa-solid fa-star start"></i>
        <i class="fa-regular fa-star"></i>
        <span>4 |</span>
        <i class="fa-solid fa-star"></i>
        <span>444</span>
      </div>
      
        </div>
      </div>
    </div>
  </main>
        `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const inputValue = document.querySelector("#inputValue");
        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: inputValue.value ? +inputValue.value : 1 }, () => {
                toastr.success("Thêm thành công");
            });
        });
    },
};
export default DetailProduct;