import { getAll } from "../api/posts";

const News = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="grid grid-cols-4 gap-8">
            ${data.map((posts) => /* html */`
            <div class="border-solid border-2 border-blue-200">
                <a href="/news/${posts.id}"><img src="${posts.img}"/></a>
                <h3 class="text-orange-900 font-bold text-center"><a href="/news/${posts.id}">${posts.title}</a></h3>
                <p class="p-3">${posts.desc}</p>
            </div>
            `).join("")}
        </div>
        `;
    },
};
export default News;