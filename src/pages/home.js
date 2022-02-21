import Banner from "../components/banner";
import News from "../components/news";
import Header from "../components/header";
import Footer from "../components/footer";
import Activs from "../components/activ";
import Slogan from "../components/slogan";

const HomePage = {
    async render() {
        return /* html */`
            <div>
                <header>
                    ${Header.render()}
                </header>
            </div>
            <div>
                ${Banner.render()}
            </div>
            <div class="py-5">
                ${await News.render()}
            </div>
            <div class="pt-2">
                ${Slogan.render()}
        </div>
            <div class="py-5">
                ${await Activs.render()}
            </div>
            <div>
                <footer class="bg-blue-900 text-white">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;