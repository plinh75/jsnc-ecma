import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return `
            <div class="max-w-5xl mx-auto">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <h1>About Page</h1>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
            
        `;
    },
};

export default AboutPage;