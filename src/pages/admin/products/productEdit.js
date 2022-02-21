import { get, update } from "../../../api/product";
import { reRender } from "../../../utils";
import AdminProduct from "./index";

const AdminProductEdit = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
            <form id="product_edit">
                <input type="text" class="border" value="${data.name}" placeholder="Tiêu đề bài viết" id="product-title"/> <br/>
                <img src="${data.img}" alt="" width="20%"/>
                <input type="text" class="border" placeholder="Ảnh" id="product-img" /><br/>
                <textarea name="" class="border"  id="" cols="30" rows="10" id="product-desc">${data.desc}</textarea><br/>
                <button class="btn_p">Cập nhật</button>
            </form>
        
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