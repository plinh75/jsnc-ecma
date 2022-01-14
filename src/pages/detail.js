import news from "../data";

const DetailPage = {
    render(id) {
        const result = news.find((post) => post.id === id);
        return /* html */`
            <div>Detail Page</div>
            <h1>${result.title}</h1>
            <img src="${result.img}" />
            <p>${result.desc}</p>
        `;
    },
};
export default DetailPage;