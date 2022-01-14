import Navigo from "navigo";
// import Footer from "./components/footer";
// import Header from "./components/header";
import AboutPage from "./pages/about";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/productpage";
import AdminProductPage from "./pages/admin/product";
import Signup from "./pages/signup";
import AdminProductEdit from "./pages/admin/productEdit";
import Signin from "./pages/signin";
import AdminProductList from "./components/admin/product";
import DashboardPage from "./pages/dasboard";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/admin/products": () => {
        print(AdminProductPage.render());
    },
    "/admin/dashboard": () => {
        print(DashboardPage.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },
    "/admin/adminProductList": () => {
        print(AdminNews.render());
    },
    "/admin/news": () => {
        print(AdminProductList.render());
    },
    "/admin/news/add": () => {
        print(AdminNewsAdd.render());
    },
});
router.resolve();