import Image from 'next/image';
import Link from 'next/link';
import Badge from '../../components/Badge';

const projects = require('./../../content/projects.json')

const Project = (props) => {
    return (
        <div>
            <div className='flex items-center  space-between items-center text-sm mb' >
                <div className='flex gap items-center' style={{ marginLeft: `-2rem`}}>
                    <Link href='/' ><a className='back__link'>←</a></Link>
                    {props.tags.map( (tag,j) => <Badge key={j}>{tag}</Badge>)}

                </div>
                <div>
                    <button className='button--primary flex gap items-center'>
                        Tweet
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </button>
                </div>
            </div>
            <h1 className='p-0 m-0'>{props.title}</h1>
            <h3 className='text-muted p-0 m-0'>{props.subtitle}</h3>
            <p className='p-0'>{props.description}</p>

            {props.web && <Image 
            alt={project.title} className='web' src={`/images/${props.web}`} width={700} height={330} objectFit='contain' ></Image>}
            <p>
                <a href={props.github_repo}>{props.github_repo}</a>
            </p>

        </div>
    );
}

export const getStaticPaths = async (ctx) => {

    return {
        paths: projects.map((project, index) => {
            return {
                params: {
                    slug: project.slug
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    return { props: projects.find(project => project.slug === params.slug) }
}

export default Project;