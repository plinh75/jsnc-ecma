import { get, update } from "../../../api/posts";
import { reRender } from "../../../utils";
import AdminNews from "./index";

const AdminNewsEdit = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
            <form id="form-edit">
                <input type="text" class="border" value="${data.title}" placeholder="Tiêu đề bài viết" id="post-title"/> <br/>
                <img src="${data.img}" alt="" />
                <input type="text" class="border" placeholder="Ảnh" id="img-post" /><br/>
                <textarea name="" class="border"  id="" cols="30" rows="10" id="desc-post">${data.desc}</textarea><br/>
                <button class="btn">Cập nhật</button>
            </form>
        
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        formEdit.addEventListener("btn", (e) => {
            e.preventDefault();
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
            })
                .then(
                    () => {
                        window.location.href = "/#/admin/news";
                        reRender(AdminNews, "#app");
                    },
                );
        });
    },
};
export default AdminNewsEdit;