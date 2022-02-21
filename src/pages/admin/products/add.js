import axios from "axios";
import { add } from "../../../api/product";
import adminProductsList from "./admin_product";
import NavAdmin from "../../../components/nav_admin";
import { reRender } from "../../../utils";

const AdminProductsAdd = {
    async render() {
        return /* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                        >
                        Thêm mới
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/products/add" class="sm:ml-3">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Quay lại
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                    <form id="form_add_product">
                        <input type="text" class="border-dashed border-2 border-gray-400" placeholder="Name" id="name_product"/><br>
                        <input type="file" class="border-dashed border-2 border-gray-400" placeholder="Image" id="img_product"/><br>
                        <img src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/>
                        <textarea name="" id="desc_product" cols="30" rows="10" class="border-dashed border-2 border-gray-400" placeholder="Description"></textarea><br>
                        <input type="submit" class="bg-stone-800 text-white border-double border-2 w-28 hover:text-yellow-300" value="Add">
                    </form>
                </div>
                
                <!-- /End replace -->
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form_add_product");
        const imgPost = document.querySelector("#img_product");
        const imgPreview = document.querySelector("#img_preview");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ddnobdgia/image/upload";
        const CLOUDINARY_PRESET = "web_jsnc";
        let imgLink = "";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = document.querySelector("#img_product").files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }

            add({
                title: document.querySelector("#name_product").value,
                img: imgLink || "",
                desc: document.querySelector("#desc_product").value,
            })
                .then(
                    () => {
                        window.location.href = "/#/admin/product";
                        reRender(adminProductsList, "#app");
                    },
                );
        });
    },
};
export default AdminProductsAdd;