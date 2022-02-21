import { getAll } from "../../api/product";

const ProductPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div
        class="bg-center text-2xl md:text-[38px] uppercase text-gray-100 text-center mb-6 py-10"
      >
      Danh sách sản phẩm
      
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
        <div class="grid grid-cols-4 gap-8">
        ${data.map((products) => /* html */`
        <div class="border-solid border-2 border-blue-200">
            <a href="/products/${products.id}"><img src="${products.img}"/></a>
            <h3 class="text-orange-900 font-bold text-center"><a href="/products/${products.id}">${products.name}</a></h3>
            <p class="p-3">${products.price}</p>
        </div>
        `).join("")}
    </div>`;
    },
};
export default ProductPage;