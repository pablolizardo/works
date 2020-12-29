import Header from "../components/Header";

const repos = (props) => {
    console.log(props)
    return (
        <div>
            <Header />

            <h1>Repos</h1>
            <main>
                <ul>
                    {props.data.map(repo =>
                        <li>{repo.name}</li>
                    )}
                </ul>
            </main>
        </div>
    );
}

export default repos;

export const getStaticProps = async (ctx) => {
    const res = await fetch(`https://api.github.com/users/pablolizardo/repos`)
    const json = await res.json()

    return {
        props: {
            data: json
        }
    }
}