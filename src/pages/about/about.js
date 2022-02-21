import Footer from "../../components/footer";
import Header from "../../components/header";
import Ctv from "./ctv";

const AboutPage = {
    render() {
        return `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main>
                ${Ctv.render()}
                </main>
                <footer class="bg-blue-900 text-white">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};

export default AboutPage;