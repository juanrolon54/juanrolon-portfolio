import { useState, ReactNode, HTMLAttributes, MouseEvent, ReactElement } from 'react'
import {
    SiRedux as Redux, SiReact as React, SiTailwindcss as Tailwind, SiHtml5, SiCss3, SiJavascript, SiTypescript as TS, SiPostgresql as Postgres, SiExpress as Express, SiSequelize as Sequelize, SiNodedotjs as Node, SiGit,
    SiDiscord, SiGithub, SiVisualstudiocode, SiStackoverflow
} from 'react-icons/si'
import { HiExternalLink as LinkIcon, HiChevronDown as ChevD, HiChevronRight as ChevR, HiFolder, HiFolderOpen, HiDocument } from 'react-icons/hi'

export default function Skills() {
    return <div className="min-h-page flex flex-col gap-4 p-4 sm:py-32 sm:px-32 2xl:px-64">
        <h2 className='text-6xl font-introBold'>Tech Skills</h2>
        <p className='text-2xl'>I feel comfortable working with front-end as well as back-end code.</p>
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col sm:flex-row gap-4'>
                <FrontEnd />
                <WebBundle />
            </div>
            <BackEnd />
        </div>
        <h2 className='text-6xl font-introBold pt-16'>Soft Skills</h2>
        <SoftSkills />
    </div>
}

function WebBundle() {
    return <div className='grid grid-cols-2 grid-rows-2 aspect-square gap-4 sm:h-80 sm:w-80 text-8xl'>
        {[<SiHtml5 />, <SiCss3 />, <SiJavascript />, <small className='text-lg'>*included</small>]
            .map((e, i) => <div key={i} className='flex items-center justify-center surface'>{e}</div>)}
    </div>
}

function FrontEnd() {
    const [sel, setSel] = useState(0)

    const { title, content, icon, website } = frontend[sel]

    return <div className="border-2 border-dead h-80 flex-1" >
        <div className="flex h-8 sm:pl-8 bg-dead">
            {frontend.map((t, i) =>
                <button key={i}
                    onClick={() => setSel(i)}
                    className={i === sel ? 'btn-active flex gap-2 items-center' : 'btn flex gap-2 items-center'}>
                    {t.icon}{t.title.toLowerCase()}
                </button>
            )}
            <div className='sm:flex-1' />
            <ThreeDots />
        </div>
        <div className='bg-alive gap-4 p-4 overflow-y-scroll h-[calc(18rem-4px)]'>
            <div className='text-2xl underline font-introBold'>{title}</div><br />
            <div className='surface relative aspect-square w-48 h-48 float-right ml-2 mb-2 text-[8rem] flex flex-col justify-center'>
                {icon}
                <a href={website} target='_blank' className='absolute hover:cursor-pointer bottom-0 right-0 text-lg btn aspect-square flex items-center p-2'><LinkIcon /></a>
            </div>
            <p>{content}</p>
        </div>
    </div >
}

const frontend = [
    {
        title: 'React.js',
        content: "React.js is an open-source JavaScript library for building user interfaces. It was developed and maintained by Facebook, and is widely adopted for its efficient and fast rendering capabilities. React operates on a virtual DOM, which allows for quick updates and rendering of components, making it highly scalable for large and complex applications. Additionally, React's component- based architecture and modular design allows for code reusability, making it easier for developers to maintain and update their applications. The popularity of React has led to a thriving ecosystem, including a vast library of components, tools, and developer support, making it a valuable asset to any modern web development project.",
        icon: <React />,
        website: 'https://reactjs.org/'
    },
    {
        title: 'Redux',
        content: "Redux is a state management library for JavaScript applications. It was inspired by the Flux architecture and is often used in conjunction with React.js to manage application state in a predictable and maintainable manner. Redux operates on a single store that holds the complete state of the application, and changes are made through actions and reducers, ensuring all updates are made in a predictable and traceable way. Redux also facilitates the management of asynchronous actions, making it a valuable tool for building scalable and responsive applications. Its simple and elegant design, combined with its strong emphasis on functional programming, has made it a popular choice among developers and has led to a robust community with a wealth of resources and tools.",
        icon: <Redux />,
        website: 'https://redux.js.org/'
    },
    {
        title: 'TailwindCSS',
        content: "Tailwind CSS is a highly-customizable, utility-first CSS framework that provides a set of pre-designed CSS classes to quickly style and layout web pages. It operates based on a system of pre-defined CSS classes that allow developers to apply styles to elements with a single class, reducing the amount of custom CSS required and increasing development speed. Tailwind also provides a set of design-friendly default styles and flexible configuration options, making it easy to achieve a consistent design while allowing for customization. With its small size, performance-focused design, and support for modern CSS features, Tailwind has become a popular choice for modern web development projects, and its large community has developed a wealth of plugins and tools to further enhance its capabilities.",
        icon: <Tailwind />,
        website: 'https://tailwindcss.com/'
    },
]

function ThreeDots() {
    return <div className='hidden sm:flex gap-2 p-1'>
        <div className='h-4 rounded-full bg-alive aspect-square hover:bg-semidead' />
        <div className='h-4 rounded-full bg-alive aspect-square hover:bg-semidead' />
        <div className='h-4 rounded-full bg-alive aspect-square hover:bg-semidead' />
    </div>
}

function BackEnd() {
    const [sel, setSel] = useState<ReactElement>(<p>Select a file</p>)
    function clickHandler(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void {
        const target: any = e.target
        if (target?.innerText && backend[target.innerText]) setSel(backend[target.innerText])
    }

    return <div className='border-2 bg-semidead border-dead ms:h-80 w-full flex flex-col sm:flex-row text-lg'>
        <div className='sm:min-w-48 w-fit' onClick={clickHandler}>
            <InfiniteFolder name='node_modules' />
            <Folder name="src">
                <Folder name='db'>
                    <File icon={<Sequelize />}>sequelize.ts</File>
                    <File icon={<Postgres />}>postgres.ts</File>
                </Folder>
                <File icon={<Express />}>express.ts</File>
            </Folder>
            <File icon={<SiGit />}>.gitignore</File>
            <File icon={<Node />}>package.json</File>
            <File icon={<TS />}>tsconfig.json</File>
            <File>.env</File>
        </div>
        <code className='h-[calc(18rem-4px)] sm:flex-1 bg-dead text-alive p-4 overflow-y-scroll font-jetBrainsMono'>
            {sel}
        </code>
    </div >
}

const backend: { [key: string]: ReactElement } = {
    '.env': <p>
        NODE_DESCRIPTION="Node.js is a cross-platform JavaScript runtime environment that executes JavaScript code server-side."<br /><br />
        NODE_PURPOSE="Node.js is used to build fast, scalable network applications, as it allows developers to use JavaScript on the server side."<br /><br />
        NODE_FEATURES="Node.js offers non-blocking I/O, event-driven architecture, and a vast library of packages through npm (Node Package Manager)."<br /><br />
        NODE_USAGE="Node.js is commonly used for building server-side web applications, real-time applications, and command-line tools."<br /><br />
        NODE_APIURL="<a href='https://nodejs.org/en/' target='_blank'>https://nodejs.org/en/</a>"<br />
    </p>,
    'tsconfig.json': <p>{'{'}<br />
        &emsp;"compilerOptions": {'{'}<br />
        &emsp;&emsp;"target": "esnext",<br />
        &emsp;&emsp;"module": "module",<br />
        &emsp;&emsp;"strict": true,<br />
        &emsp;&emsp;"noImplicitAny": true,<br />
        &emsp;&emsp;"outDir": "./dist"<br />
        &emsp;{'}'},<br />
        &emsp;"description": "TypeScript is a statically typed, object-oriented programming language that builds on JavaScript by adding features such as classes, interfaces, and optional type annotations.",<br />
        &emsp;"purpose": "TypeScript is designed to make it easier to develop large-scale JavaScript applications by providing better type checking, improved error handling, and more advanced features.",<br />
        &emsp;"features": "TypeScript offers features like optional type annotations, interfaces, classes, and a built-in type checking system, allowing developers to catch errors at compile-time instead of runtime.",<br />
        &emsp;"usage": "TypeScript is commonly used for building web applications and large-scale JavaScript projects, as its static typing and advanced features make it easier to maintain and scale code."<br />
        &emsp;"url":<a href='https://www.typescriptlang.org/' target='_blank'>https://www.typescriptlang.org/</a>"<br />
        {'}'}</p>,
    'package.json': <p>
        {'{'}<br />
        &emsp;"name": "juanrolon-portfolio",<br />
        &emsp;"private": true,<br />
        &emsp;"version": "0.0.0",<br />
        &emsp;"type": "module",<br />
        &emsp;"scripts": {'{'}<br />
        &emsp;&emsp;"dev": "nodemon src/express,<br />
        &emsp;&emsp;"start": "node src/express",<br />
        &emsp;{'},'}<br />
        &emsp;"description": "Node Package Manager (npm) is the default package manager for the JavaScript runtime environment Node.js. It provides a comprehensive way to manage dependencies, packages and modules required for an application, making it easier to share and reuse code. npm allows users to install and manage packages from the npm registry, which contains over one million packages. npm is used by developers to simplify the process of building and deploying applications.",<br />
        &emsp;"version": "6.14.8",<br />
        &emsp;"homepage": <a href='https://www.npmjs.com/' target='_blank'>"https://www.npmjs.com/"</a>"<br />
        {'}'}<br />
    </p>,
    '.gitignore': <p>
        Git:<br />
        A distributed version control system for tracking changes in source code during software development.<br />
        <a href='https://git-scm.com/' target='_blank'>https://git-scm.com/</a><br /><br />
        Github:<br />
        A web-based platform for version control repositories, utilizing the capabilities of Git.<br />
        <a href='https://github.com/juanrolon54' target='_blank'>https://github.com/</a><br /><br />
        .env<br />
        node_modules<br />
    </p>,
    'express.ts': <p>
        // Express:<br />
        // A fast, minimalist web framework for Node.js.<br />
        // <a href='https://expressjs.com/' target='_blank'>https://expressjs.com/</a><br />
        <br />
        import express from 'express';<br />
        <br />
        const app = express();<br />
        <br />
        app.listen(3000, () {'=>'} {'{'}<br />
        console.log('Express server listening on port 3000');<br />
        {'}'});<br />
        <br />
        app.use((req, res, next) {'=>'} {'{'}<br />
        console.log(`{'Received ${req.method} request for ${req.url}'}`);<br />
        next();<br />
        {'}'});<br />
        <br />
        app.get('/', (req, res) {'=>'} {'{'}<br />
        res.send('Hello World!');<br />
        {'}'});<br />
    </p>,
    'postgres.ts': <p>
        const postgres = {'{'}<br />
        &emsp;type: "Relational Database Management System",<br />
        &emsp;language: "SQL",<br />
        &emsp;features: ["ACID transactions", "Indexing and Constraints", "Stored Procedures and Triggers"],<br />
        &emsp;uses: ["Data Warehousing", "Web Applications", "Geospatial Data Analysis"],<br />
        &emsp;popularity: "Widely used and well-established in the industry,"<br />
        &emsp;url: <a href='https://www.postgresql.org/' target='_blank'>"https://www.postgresql.org/"</a><br />
        {'};'}<br />
        <br />
        export default postgres
    </p>,
    'sequelize.ts': <p>
        const sequelize = {'{'}<br />
        &emsp;type: "ORM (Object-Relational Mapping) Library",<br />
        &emsp;language: "JavaScript",<br />
        &emsp;features: ["Model Definition", "Query Interface", "Transaction Management"],<br />
        &emsp;useCase: "Simplifying database interactions for Node.js applications",<br />
        &emsp;compatibleDatabases: ["PostgreSQL", "MySQL", "SQLite", "MSSQL"],<br />
        &emsp;popularity: "Widely used in the Node.js community for simplifying database operations",<br />
        &emsp;url: <a href='https://sequelize.org/' target='_blank'>"https://sequelize.org/"</a><br />
        {'};'}<br />
        <br />
        export default sequelize
    </p>
}

interface FileProps extends HTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode
}


function File(props: FileProps) {
    return <button className='btn-dark px-4 w-full text-left flex gap-2 items-center' {...props}>
        {props.icon || <HiDocument />} {props.children}
    </button>
}

interface FolderProps extends HTMLAttributes<HTMLButtonElement> {
    name: string,
}

function Folder(props: FolderProps) {
    const [open, setOpen] = useState(false)

    return <div>
        <button
            {...props}
            onClick={() => setOpen(!open)}

            className={open ? 'btn-dark-active flex items-center w-full pl-2.5 gap-2 pr-4' : 'btn-dark flex items-center pl-2.5 gap-2 pr-4 w-full'}
        >
            {open ? <ChevD /> : <ChevR />}
            {open ? <HiFolderOpen /> : <HiFolder />}
            {props.name}
        </button>
        {
            open && <div className={`border-l-[1rem] border-dead border-b-2 border-b-dead`}>
                {props.children}
            </div>
        }
    </div>
}

function InfiniteFolder(props: FolderProps) {
    return <Folder {...props}>
        <InfiniteFolder {...props} />
    </Folder>
}

function SoftSkills() {
    return <div className='grid sm:grid-cols-4 gap-4'>
        <div className='surface flex flex-col gap-4 items-start justify-start'>
            <h4 className='font-introBold text-2xl '>Communication</h4>
            <div className='text-8xl mx-auto'><SiDiscord /></div>
            <p>Good communication skills allow a developer to work effectively with team members, clients, and stakeholders.</p>
        </div>
        <div className='surface flex flex-col gap-4 items-start justify-start'>
            <h4 className='font-introBold text-2xl '>Collaboration</h4>
            <div className='text-8xl mx-auto'><SiGithub /></div>
            <p>The ability to collaborate with others can greatly improve the overall efficiency and success of a project.</p>
        </div>
        <div className='surface flex flex-col gap-4 items-start justify-start'>
            <h4 className='font-introBold text-2xl '>Adaptability</h4>
            <div className='text-8xl mx-auto'><SiVisualstudiocode /></div>
            <p>Being adaptable and able to quickly adjust to changes in technology and requirements is essential in the fast-paced field of software development.</p>
        </div>
        <div className='surface flex flex-col gap-4 items-start justify-start'>
            <h4 className='font-introBold text-2xl '>ProblemSolving</h4>
            <div className='text-8xl mx-auto'><SiStackoverflow /></div>
            <p>Strong problem-solving abilities enable a developer to effectively troubleshoot and find solutions to complex technical issues. (The icon serves as a comic relief.)</p>
        </div>
    </div>
}