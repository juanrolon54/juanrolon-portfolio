import { useState, useRef } from "react"
import { HiPencilAlt, HiPaperAirplane, HiOutlinePaperAirplane } from 'react-icons/hi'
import type { ChangeEvent, FormEvent, ChangeEventHandler, ReactNode, ReactElement } from "react"
import { send } from "@emailjs/browser"

const initialJson = JSON.stringify({
    title: "",
    work: {
        "typeof work": "Full Time Full Stack",
        remote: false,
    },
    "extra details": "",
    "about you": {
        name: "",
        email: "",
        website: ""
    },
    "like the website": true
}, null, 2)

export default function Contact() {
    const [json, setJson] = useState(initialJson)

    const [caretPos, setCaretPos] = useState(0)
    const [error, setError] = useState("")

    const [isFormSubmitted, setFormSubmission] = useState(false)
    const [canSubmit, setSubmitAvailability] = useState(false)

    function getRelativeCaretDifference(pos: number, prior: string, post: string): number {
        return [...post].reduce((p, c, i) => (p.priors.length === 0 ? p : p.priors[0] === c ? { ...p, priors: p.priors.slice(1) } : { ...p, difference: p.difference + 1 }), { priors: [...prior].slice(0, pos), difference: pos }).difference
    }
    function checkValues(form: object) {
        for (let [key, value] of Object.entries(form)) {
            if (typeof value === 'string' && value === '') return false
            if (typeof value === 'object') {
                if (!checkValues(value)) return false
            }
        }
        return true
    }
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            if (!checkValues(JSON.parse(json))) return
        } catch (e) {
            return
        }
        setFormSubmission(true)
        await send("service_8rnxjek", "template_iw69uea", { json }, "ck9zPDsmdkeGhwQge")
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        if (error !== '') return

        let newJson = JSON.parse(json)

        let keysArray = JSON.parse(event.target.id)
        let almostAllKeys = keysArray.slice(0, -1)

        let referenceKey = keysArray[keysArray.length - 1]
        let valueToChange = almostAllKeys.reduce((p: any, c: any) => p[c], newJson)

        if (event.target.type === 'checkbox') {
            valueToChange[referenceKey] = event.target.checked
        } else {
            valueToChange[referenceKey] = event.target.value
        }

        setSubmitAvailability(checkValues(newJson))
        setJson(JSON.stringify(newJson, null, 2))
    }

    function handleJSON(event: ChangeEvent<HTMLTextAreaElement>) {
        const caretPos = event.target.selectionStart;
        setCaretPos(caretPos)

        let formattedText = event.target.value;

        try {
            formattedText = JSON.stringify(JSON.parse(event.target.value), null, 2)
            setError("")
        }
        catch (error) {
            setError(String(error))
        }

        let newCaretPos = getRelativeCaretDifference(caretPos, event.target.value, formattedText)
        setJson(formattedText);
        setTimeout(() => {
            event.target.setSelectionRange(newCaretPos, newCaretPos);
        }, 0);
    }

    return <div className="min-h-page flex flex-col gap-4 p-4 sm:py-32 sm:px-32 2xl:px-64">
        <h4 className="font-introBold text-6xl">Get in touch</h4>
        <h6 className="text-2xl flex items-center gap-4">Fill the form (or edit the json).<HiPencilAlt className="text-4xl" /></h6>
        <div className="grid sm:grid-cols-2 min-h-[60vh] gap-16 bg-semidead">
            {isFormSubmitted ?
                <div className="col-span-2 grid place-content-center ">
                    <span className="flex flex-col justify-center gap-4 items-center surface">
                        <span className="text-2xl font-introBold flex justify-center gap-4 items-center">
                            Thanks! <HiOutlinePaperAirplane className="text-4xl" />
                        </span>
                        I'll reach out to you as soon as possible!
                        <button className="btn" onClick={() => {
                            setFormSubmission(false)
                            setSubmitAvailability(false)
                        }}>Send another</button>
                    </span>
                </div>
                : <>
                    <form onSubmit={handleSubmit} className={`border-2 border-dead p-4 flex flex-col bg-alive ${error ? "bg-semidead" : ""}`}>
                        <RecursiveJsonToInputs json={json} handleChange={handleChange} />
                        <div className="flex-1" />
                        {((!canSubmit) || error !== '') ? <div className="bg-semidead p-4 w-fit self-end mt-4 flex gap-4 items-center cursor-not-allowed">Submit<HiPaperAirplane className="text-2xl" /></div> : <button className="btn p-4 flex gap-4 items-center w-fit self-end mt-4">Submit <HiPaperAirplane className="text-2xl" /></button>}
                    </form>
                    <div className="relative h-96 sm:h-auto">
                        {error !== '' && <p className="bg-semidead text-dead absolute top-0 right-0 z-50">{error}</p>}
                        <p className="bg-semidead absolute bottom-0 right-0 z-50 text-dead px-2">{caretPos}</p>
                        <textarea
                            value={json}
                            onKeyDown={(e: any) => { setCaretPos(e.target.selectionStart) }}
                            onMouseDown={(e: any) => { setCaretPos(e.target.selectionStart) }}
                            onChange={handleJSON}
                            autoCorrect="none"
                            autoComplete="none"
                            autoCapitalize="none"
                            className="bg-dead outline-none text-alive p-4 font-jetBrainsMono resize-none w-full h-full relative"
                        />
                    </div>
                </>}
        </div>

    </div >
}

function RecursiveJsonToInputs(props: { json: string, handleChange: ChangeEventHandler<HTMLInputElement>, pos?: string[] }): ReactElement {
    const saveRef = useRef<string>('{}')

    const pos = props.pos ?? []
    let parsedJson = ''

    try {
        parsedJson = JSON.parse(props.json)
        if (pos.length === 0) saveRef.current = props.json
    } catch (e) {
        return <RecursiveJsonToInputs {...props} json={saveRef.current} />
    }

    return <>{Object.entries(parsedJson).map(([key, value]: [string, any]) => {
        const valueType = typeof value
        const keyIsNaN = Number.isNaN(Number(key))
        const currentPos = JSON.stringify([...pos, key])

        if (valueType === 'object') return <div key={currentPos} className="flex flex-col mt-4">
            <div className="flex">
                <span className="border-2 border-dotted border-dead border-b-0 px-4">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <div className="flex-1 border-b-2 border-dotted w-8 border-b-dead" />
            </div>
            <div className="flex flex-col content-end gap-2 p-2 border-2 border-dead border-dotted pb-4 border-t-0">
                <RecursiveJsonToInputs {...props} json={JSON.stringify(value)} pos={JSON.parse(currentPos)} />
            </div>
        </div>

        if (valueType === 'boolean') return <label key={currentPos} className="flex gap-4 items-center h-10">
            <span className={!keyIsNaN ? "min-w-[1.5rem]" : ""}>{key.charAt(0).toUpperCase() + key.slice(1) + (!keyIsNaN ? " ." : "")}</span>
            <input id={currentPos} className="chk" onChange={props.handleChange} type='checkbox' checked={value} />
        </label>

        if (valueType === 'string') return <label key={currentPos} className={`flex ${!keyIsNaN ? "gap-4" : "flex-col"}`}>
            <span className={!keyIsNaN ? "min-w-[1.5rem]" : ""}>{key.charAt(0).toUpperCase() + key.slice(1) + (!keyIsNaN ? " ." : "")}</span>
            <input id={currentPos} className="btn h-6" onChange={props.handleChange} type='text' value={value} />
        </label>

        if (valueType === 'number') return <label key={currentPos} className={`flex ${!keyIsNaN ? "gap-4" : "flex-col"}`}>
            <span className={!keyIsNaN ? "min-w-[1.5rem]" : ""}>{key.charAt(0).toUpperCase() + key.slice(1) + (!keyIsNaN ? " ." : "")}</span>
            <input id={currentPos} className="btn h-6" onChange={props.handleChange} type='number' value={value} />
        </label>

        return <></>
    })}</>
}