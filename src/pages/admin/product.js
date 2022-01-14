import AdminProductList from "../../components/admin/product";

const AdminProductPage = {
    render() {
        return `
        <div class="pt-40">
            <h1>Quản lý product</h1>
            ${AdminProductList.render()}
        </div>`;
    },
};
export default AdminProductPage;