import { get, update } from "../../../api/product";
import { reRender } from "../../../utils";
import AdminProduct from "./index";

const AdminProductEdit = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <div>            
        <div class="md:grid md:grid-cols-3 md:gap-6 py-5">
            <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
            </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">

            <form id="product_edit">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div>
                    <div class="mt-1">
                        <input id="name_product" value="${data.name}" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"/>
                    </div>
                    </div>

                    <div>
                    <label class="block text-sm font-medium text-gray-700">Image</label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                        <div class="flex text-sm text-gray-600">
                        <img src="${data.img}" alt="" />
                        </div>
                        </div>
                    </div>
                    <div class="mt-1">
                        <textarea id="desc_product" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Description">${data.desc}</textarea>
                    </div>
                    </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="btn_p" class="inline-flex justify-center py-2 px-4 text-center border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    </div>
        
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#product_edit");
        formEdit.addEventListener("btn_p", (e) => {
            e.preventDefault();
            update({
                id,
                name: document.querySelector("#product-title").value,
                img: document.querySelector("#product-img").value,
                desc: document.querySelector("#product-desc").value,
            })
                .then(
                    () => {
                        window.location.href = "/#/admin/product";
                        reRender(AdminProduct, "#app");
                    },
                );
        });
    },
};
export default AdminProductEdit;