import Banner from "../components/banner";
import News from "../components/news";
import Header from "../components/header";
import Footer from "../components/footer";
import Activs from "../components/activ";

const HomePage = {
    render() {
        return /* html */`
            <div>
                <header>
                    ${Header.render()}
                </header>
            </div>
            <div>
                ${Banner.render()}
            </div>
            <div>
                ${News.render()}
            </div>
            <div class="py-5">
                ${Activs.render()}
            </div>
            <div>
                <footer class="bg-blue-900 text-white">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};
export default HomePage;