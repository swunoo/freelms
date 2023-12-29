import Content from "./_Content"
import Footer from "./_Footer"
import Hero from "./_Hero"

function Home() {
    return (
        <div className="relative">
            <Hero />
            <Content />
            <Footer />
        </div>
    )
}

export default Home
