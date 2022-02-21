import toastr from "toastr";
import NavAdmin from "../../../components/nav_admin";
import { getAll, remove } from "../../../api/posts";
import "toastr/build/toastr.min.css";
import { reRender } from "../../../utils";

const adminNewsList = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        ${NavAdmin.render()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý tin tức
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/news/add" class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Thêm mới
                        </button>
                    </a>
                </div>
            </div>
        </div>
        </header>
        <div class="flex flex-col pt-32">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      
                    </th>
                  </tr>
                </thead>
                
                ${data.map((post) => `
                <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                    ${post.id}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    ${post.title}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <img src="${post.img}">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${post.desc}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      <button data-id="${post.id}" class="btn btn-remove text-indigo-600 hover:text-indigo-900">Delete</button>
                    </td>
                  </tr>
      
                  <!-- More people... -->
                </tbody>
                `).join(" ")}                 
              </table>
            </div>
          </div>
        </div>
        `;
    },
    afterRender() {
        // lấy toàn bộ button thông qua class .bnt
        const btns = document.querySelectorAll(".btn");
        // tạo vòng lặp để lấy từng button element
        btns.forEach((btn) => {
            // Lấy giá trị ID thông qua thuộc tính data-id của button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                // eslint-disable-next-line no-alert
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Bạn đã xóa thành công");
                    }).then(() => {
                        reRender(adminNewsList, "#app");
                    });
                }
            });
        });
    },
};
export default adminNewsList;