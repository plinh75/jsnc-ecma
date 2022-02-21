import Footer from "../../components/footer";
import Header from "../../components/header";
import ContactPage from "./contact_page";

const Contact = {
    render() {
        return `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main>
                ${ContactPage.render()}
                </main>
                <footer class="bg-blue-900 text-white">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};

export default Contact;