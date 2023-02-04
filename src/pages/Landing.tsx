

export default function Landing() {
    return <div className="flex-1 grid sm:grid-cols-2 gap-8 min-h-page border-4 border-alive p-4 sm:p-0">
        <div className="flex justify-end h-full items-center sm:border-r-dead sm:border-r-4">
            <div className="w-full sm:border-b-4 sm:border-b-dead flex sm:justify-end">
                <img src='me.png' className="surface cursor-cell p-0 h-96 border-b-0 bg-dead" />
            </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-6xl font-introBold">Juan <br /> Rolón </h2>
            <h4 className="text-2xl surface w-fit">web developer</h4>
            <h6 className="sm:w-64">
                I’m a Junior Web Developer eager to learn and jumpstart my proffesional career. Specializing in websites and apis. Have done numerous projects involving front and back end development as well as collaborating with other people.
            </h6>
        </div>
    </div>
}