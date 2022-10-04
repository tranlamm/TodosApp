import Header from '~/components/Header';
import Main from '~/components/Main';
import Footer from '~/components/Footer';

function DefaultLayout() {
    return (
        <section className="todoapp">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </section>
    );
}

export default DefaultLayout;
