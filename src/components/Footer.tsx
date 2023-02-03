import { SiLinkedin, SiGithub } from "react-icons/si"
import { HiDownload } from "react-icons/hi"

export default function Footer() {
    return <footer className="w-full h-16 border-t-2 border-dotted border-t-alive text-alive bg-dead flex items-center">
        <a href="resume.pdf" download='JuanRolon_Resume' className="flex gap-2 items-center btn h-full">
            <HiDownload className="text-4xl" />
            Resume
        </a>
        <a href="https://www.linkedin.com/in/juanrolon54" target='_blank' className="flex gap-2 items-center btn h-full">
            <SiLinkedin className="text-4xl" />
            My Linkedin
        </a>

        <a href='https://github.com/juanrolon54' target='_blank' className="flex gap-2 items-center btn h-full">
            <SiGithub className="text-4xl" />
            My Github
        </a>
        <div className="flex-1" />
        <div className="text-sm px-4 text-center">
            <p>juanrolon54-portfolio © {new Date().getFullYear()}-{Math.ceil(Math.random() * 10 + new Date().getFullYear())}</p>
            <p className="leading-3 text-[0.5rem]">Infringement of this copyright is punishable <br />by death in any nation accesible by plane.</p>
        </div>
    </footer>
}