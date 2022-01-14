import news from "../data";

const Activs = {
    render() {
        return /* html */`
        <h1 class="text-3xl font-bold text-blue-900 py-5">HOẠT ĐỘNG SINH VIÊN</h1>
        <div class="grid grid-cols-3 gap-8">
            ${news.map((post) => /* html */`
            <div class="border-solid border-2 border-blue-200">
                <a href="/news/${post.id}"><img src="${post.img}"/></a>
                <h3 class="text-orange-900 font-bold text-center"><a href="/news/${post.id}">${post.title}</a></h3>
                <p class="p-3">${post.desc}</p>
            </div>
            `).join(" ")}
        </div>
        `;
    },
};
export default Activs;