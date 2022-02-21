import Navigo from "navigo";
import AboutPage from "./pages/about/about";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product/productpage";
import Signup from "./pages/signup";
import AdminProductEdit from "./pages/admin/products/productEdit";
import Signin from "./pages/signin";
import AdminProductList from "./pages/admin/products/admin_product";
import DashboardPage from "./pages/dasboard";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import DetailProduct from "./pages/product/detail_prd";
import Contact from "./pages/contacts/contact";
import AdminNewsEdit from "./pages/admin/news/new_edit";
import AdminProduct from "./pages/admin/products";
import AdminProductsAdd from "./pages/admin/products/add";
import adminNewsList from "./pages/admin/news/admin_new";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (components, id) => {
    document.querySelector("#app").innerHTML = await components.render(id);
    if (components.afterRender) await components.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        // nếu userId === 1 thì tôi mới render
        if (userId === 1) {
            done();
        } else {
            // ngược thì lại redirect về trang chủ
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/products/:id": ({ data }) => {
        print(DetailProduct, data.id);
    },
    "/contact": () => {
        print(Contact);
    },
    "/news/:id": ({ data }) => {
        print(DetailPage, data.id);
    },
    "/admin/dashboard": () => {
        print(DashboardPage);
    },
    "/signup": () => {
        print(Signup);
    },
    "/signin": () => {
        print(Signin);
    },
    "/admin/products/:id/edit": ({ data }) => {
        print(AdminProductEdit, data.id);
    },
    "/admin/products": () => {
        print(AdminProduct);
    },
    "/admin/products/add": () => {
        print(AdminProductsAdd);
    },
    "/admin/product": () => {
        print(AdminProductList);
    },
    "/admin/news": () => {
        print(adminNewsList);
    },
    "/admin/news/add": () => {
        print(AdminNewsAdd);
    },
    "/admin/news/:id/edit": ({ data }) => {
        print(AdminNewsEdit, data.id);
    },
    "/admin/adminNewsList": () => {
        print(AdminNews);
    },
});
router.resolve();