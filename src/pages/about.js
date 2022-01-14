import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <h1>About Page</h1>
                </main>
                <footer class="bg-blue-900 text-white">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};

export default AboutPage;