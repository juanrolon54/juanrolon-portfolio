import { NavBar } from "../components"
import { HiDownload } from "react-icons/hi"
import { RiEnglishInput } from 'react-icons/ri'
import { IoRocketSharp, IoSchool, IoCodeSlash } from 'react-icons/io5'

export default function About() {
    return <div className="min-h-page flex flex-col gap-4 p-4 sm:py-32 sm:px-32 2xl:px-64">
        <h4 className="text-6xl font-introBold">About Me</h4>
        <div className="flex flex-col">
            <h6 className="text-2xl border-b-4 border-b-semidead pb-2 w-fit">class <span className="surface p-0 border-b-0 px-2">Web Developer</span> extends <span className="btn">Person</span> {'{'}</h6>
            <article className="flex flex-col gap-4 py-4 border-l-4 border-l-semidead">
                <p className="pl-4">
                    I'm a young student from Buenos Aires, Argentina.<br />
                    And as the title suggests, before a web developer I'm a person.<br />
                </p>
                <p className="pl-4">
                    I always liked technologies such as 3D printing and arduino, to the point I developed my own 3D printer and various CNC routers and plotters.
                    This weren't small projects, it took me months to develop each of them. I really wanted to become some sort of designer, but in the end software caught me.
                </p>
                <p className="pl-4">
                    I do certainly enjoy other things aside from the IT world, such as going to the gym. I'm a huge gym enthusiast.<br />
                </p>
                <p className="border-2 border-dotted border-dead ml-4 p-4 w-fit">
                    I have a passion for coding and making things work,<br />
                    which is why I specialize in both backend and frontend development.<br />
                    I am results-driven and practical in my approach.
                </p>
            </article>
            <h6 className="text-4xl pt-2">{'}'}</h6>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
            <div className="surface flex flex-col gap-8">
                <h6 className="text-4xl font-introBold">Education</h6>
                <ul className="decoration-black list-disc list-inside flex flex-col gap-2">
                    <div className="flex justify-between items-start border-t-2 border-t-dead">
                        <li className="text-xl">
                            SoyHenry 2022
                            <p className="text-sm">Web development bootcamp with 900hs+ of coding.</p>
                        </li>
                        <a href="https://www.talent.soyhenry.com/" target='_blank'><IoRocketSharp className="aspect-square text-4xl btn p-1" /></a>
                    </div>
                    <div className="flex justify-between items-start border-t-2 border-t-dead">
                        <li className="text-xl">
                            High School 2014-2021
                            <p className="text-sm">Is just high-school but with the added bonus of workshops such as metalworking (lathes, mills, electricity), PLC (programmable logic controler, like an Arduino but more robust, less opensource, and is programmed in a visual language), etc.
                                Basically I could work as an electrician or factory worker right away.</p>
                        </li>
                        <a href="https://www.salesianossi.org/blank" target='_blank'><IoSchool className="aspect-square text-4xl btn p-1" /></a>
                    </div>
                </ul>
            </div>
            <div className="surface flex flex-col gap-8">
                <h6 className="text-4xl font-introBold">Certificates</h6>
                <ul className="decoration-black list-disc list-inside flex flex-col gap-2">
                    <div className="flex justify-between items-start border-t-2 border-t-dead">
                        <li className="text-xl">
                            EFSet C1
                            <p className="text-sm">I have an advanced level of conversational english.</p>
                        </li>
                        <a href="https://www.efset.org/cert/eKVY38" target='_blank'><RiEnglishInput className="aspect-square text-4xl btn p-1" /></a>
                    </div>
                    <div className="flex justify-between items-start border-t-2 border-t-dead">
                        <li className="text-xl">
                            Full Stack Web Developer
                            <p className="text-sm">Finished soyHenry bootcamp.</p>
                        </li>
                        <a href="https://certificates.soyhenry.com/cert?id=3d40dde1-5316-412a-b9dc-5d6714617a01" target='_blank'><IoCodeSlash className="aspect-square text-4xl btn p-1" /></a>
                    </div>
                </ul>
            </div>
        </div>

    </div>
}