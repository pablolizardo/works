
const repos = (props) => {
    return (
        <div>
            <h1>repos 📱</h1>
            <main>
                <ul>
                    {props.data.map(repo =>
                        <li>
                            <p>{repo.name}</p>
                            <p className='text-muted'>{repo.description}</p>
                        </li>
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