import Badge from "../components/Badge"

const repos = (props) => {
    return (
        <div>
            <h1>Repos</h1>
            <main>
                <ul className='repos__list'>
                    {props.data.map(repo =>
                        <li>
                            <div className='two-thirds'>
                                <p className='m-0 p-0 '>{repo.name}</p>
                                <p className='m-0 p-0  text-muted text-sm'>{repo.description}</p>

                            </div>
                            <div className='text-sm  text-right'>

                                <Badge color='yellow'>★ {repo.stargazers_count}</Badge>
                            </div>
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
    console.log(json)
    return {
        props: {
            data: json
        }
    }
}