const PROJECTS = require('./../content/projects.json')
import Image from 'next/image'
import Link from 'next/link'

export default function Home(props) {
  return (
    <div>
      <h1>projects 👨‍💻</h1>
      <ul>
        {PROJECTS.map( project => 
          <Link href={`/projects/${project.slug}`}>
            <li>
          
              <div>
                <p>{project.title}</p>
                <p className='text-muted'>{project.subtitle}</p>
              </div>
              <figure>
                {project.web && <Image className='web' src={`/images/${project.web}`} width={250} height={130} objectFit='cover' ></Image> }
                {project.mobile && <Image className='web' src={`/images/${project.mobile}`} width={100} height={200} objectFit='cover' ></Image> }
              </figure>
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}
