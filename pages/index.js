const PROJECTS = require('./../content/projects.json')
import Image from 'next/image'
import Link from 'next/link'
import Badge from './../components/Badge'

export default function Home(props) {
  return (
    <div>
      <h1>Projects 👨‍💻</h1>
      <ul className='projects__list'>
        {PROJECTS.map(project =>
          <Link href={`/projects/${project.slug}`}>
            <li>
              <div>
                <h2 className='m-0 p-0'>{project.title}</h2>
                <p className='text-muted text-sm m-0 '>{project.subtitle}</p>
                <p className='m-0 pt text-sm flex gap gap-sm items-center'>
                {project.tags.map( tag => <Badge>{tag}</Badge>)} </p>
              </div>
              <figure>
                {project.web && <Image className='web' alt={project.title} src={`/images/${project.web}`} width={270} height={130} objectFit='cover' ></Image>}
                {project.mobile && <Image className='web' alt={project.title} src={`/images/${project.mobile}`} width={100} height={200} objectFit='cover' ></Image>}
              </figure>
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}
