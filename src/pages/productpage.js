import Header from "../components/header";
import Footer from "../components/footer";

const ProductPage = {
    render() {
        return `
        <div>
        <header>
            ${Header.render()}
        </header>
        <main>
            <h1>Product Page</h1>
        </main>
        <footer class="bg-blue-900 text-white">
            ${Footer.render()}
        </footer>
    </div>`;
    },
};
export default ProductPage;