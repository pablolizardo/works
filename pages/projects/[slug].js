import Image from 'next/image';
import Link from 'next/link';

const projects = require('./../../content/projects.json')

const Project = (props) => {
    return (
        <div>
            
            <div className='flex items-center pt'>
            <Link href='/' ><a className='back__link mr'>←</a></Link>
            <h1 className='p-0'>{props.title}</h1>
            </div>
            
                {props.web && <Image className='web' src={`/images/${props.web}`} width={600} height={330} objectFit='cover' ></Image> }
                <h3 className='text-muted'>{props.subtitle}</h3>
            
        </div>
    );
}

export const getStaticPaths = async (ctx) => {

    return {
        paths: projects.map((project, index) => {
            return {
                params : {
                    slug: project.slug
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    return { props: projects.find( project=> project.slug === params.slug ) }
  }
  
export default Project;