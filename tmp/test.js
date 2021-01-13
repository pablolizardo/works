import Badge from "../components/Badge";

const test = () => {
    return (
        <div>
            <h1>Heading 1</h1>
            <h2>Title</h2>
            <p>
                Here we are going to put some badges <Badge color='red'>Backend Dev</Badge> or even another one like <Badge color='green'>CSS Arch</Badge>.
            </p>
            <p>Elit consectetur cillum exercitation magna. Ea occaecat cupidatat elit voluptate excepteur Lorem elit. Sunt velit irure eiusmod excepteur tempor in nisi eiusmod laborum qui. Amet fugiat sint eu laboris exercitation consectetur labore excepteur sunt eu exercitation. In quis dolore velit commodo anim deserunt amet dolore. Non adipisicing anim labore officia dolor.</p>
            <p className='text-sm'>Small P Laboris <Badge color='purple'>This is a badge</Badge>  sunt ipsum proident magna tempor nostrud duis ea voluptate sint enim nisi ut. Duis esse voluptate sit incididunt ex ut quis magna duis nostrud. Nisi nostrud officia nisi irure. Fugiat eu sit qui est. Excepteur proident Lorem amet culpa commodo sunt dolor id fugiat non anim. Irure incididunt mollit anim exercitation aliquip.</p>
        </div>
    );
}

export default test;