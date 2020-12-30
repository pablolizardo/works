const PROJECTS = require('./../content/projects.json')
import Image from 'next/image'
export default function Home(props) {
  return (
    <div>
      <h1>projects 👨‍💻</h1>
      <ul>
        {PROJECTS.map( project => 
          <li>
            <div>

              <p>{project.title}</p>
              <p className='text-muted'>{project.subtitle}</p>
            </div>
            {project.image && 
            <Image className='web' src={`/images/${project.image}`} width={250} height={130} objectFit='cover' ></Image>
            }
          </li>
        )}
      </ul>
    </div>
  )
}
