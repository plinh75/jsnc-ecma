import news from "../../data";
import NavAdmin from "../nav_admin";

const adminProductList = {
    render() {
        return /* html */`
        ${NavAdmin.render()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý bài viết
                    </h2>
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
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                
                ${news.map((post) => `
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
                      <a href="/admin/product/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>
      
                  <!-- More people... -->
                </tbody>
                `).join(" ")}                 
              </table>
            </div>
          </div>
        </div>
      </div>
        `;
    },
};
export default adminProductList;