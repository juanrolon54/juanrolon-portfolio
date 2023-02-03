import React, { useState, useEffect, useRef, ChangeEvent, FormEvent, ReactNode } from "react"
import { RiContactsBookLine } from "react-icons/ri"

export default function Contact() {
    const initialJson = JSON.stringify({ name: "", subject: "", content: "" }, null, 2)
    const [json, setJson] = useState(initialJson)
    const [form, setForm] = useState(JSON.parse(initialJson))
    const [caretPos, setCaretPos] = useState(0)
    const [error, setError] = useState("")

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    function getRelativeCaretDifference(pos: number, prior: string, post: string): number {
        return [...post].reduce((p, c, i) => (p.priors.length === 0 ? p : p.priors[0] === c ? { ...p, priors: p.priors.slice(1) } : { ...p, difference: p.difference + 1 }), { priors: [...prior].slice(0, pos), difference: pos }).difference
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {

    }
    function handleForm(event: ChangeEvent<HTMLFormElement>) {
        console.log(event.target.id)
    }

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.id)
    }

    function handleJSON(event: ChangeEvent<HTMLTextAreaElement>) {
        const caretPos = event.target.selectionStart;
        setCaretPos(caretPos)

        let formattedText = event.target.value;
        setError("")

        try {
            formattedText = JSON.stringify(JSON.parse(event.target.value), null, 2)
            setForm(JSON.parse(formattedText))
        }
        catch (error) { setError(String(error)) }

        let newCaretPos = getRelativeCaretDifference(caretPos, event.target.value, formattedText)
        setJson(formattedText);
        setTimeout(() => {
            event.target.setSelectionRange(newCaretPos, newCaretPos);
        }, 0);
    };

    function jsonToInput(json: string, pos: string[] = []): ReactNode {
        let parsedJson: Object
        try {
            parsedJson = JSON.parse(json)
        } catch (e) {
            return null
        }

        const situations = {
            object(value: object, key: string): ReactNode {
                return jsonToInput(JSON.stringify(value), [...pos, key])
            },
            string(string: string, key: string): ReactNode {
                return <input id={JSON.stringify([...pos, key])} className="btn" type='text' value={string} />
            },
            number(number: number, key: string): ReactNode {
                return <input id={JSON.stringify([...pos, key])} type='number' value={number} />
            }
        }

        return Object.entries(parsedJson).map(([key, value]: [string, string]) => {
            const valueType: string = typeof value
            if ()

                return <label className="flex flex-col">
                    {key.charAt(0).toUpperCase() + key.slice(1) + ` [${typeof value}]`}
                    {typeof value in situations && situations[typeof value](value, key)}
                </label>
        })
    }



    return <div className="min-h-page flex flex-col gap-4 py-32 px-32 2xl:px-64">
        <h4 className="font-introBold text-6xl">Get in touch</h4>
        <h6 className="text-2xl">Fill the form (or edit the json).</h6>
        <div className="grid grid-cols-2 min-h-[60vh] gap-16">
            <form onSubmit={handleSubmit} onChange={handleForm} className="border-2 border-dead p-4 flex flex-col">
                {/* {Object.entries(form).map(([key, value]) =>
                    <label key={key} className="flex flex-col">
                        {key.charAt(0).toUpperCase() + key.slice(1) + " [" + typeof value + ']'}
                        <input id={key} className="btn" onChange={handleInput} type="text" value={String(value)} />
                    </label>
                )} */}
                {jsonToInput(json)}
                <div className="flex-1" />
                <input className="btn p-4 w-fit self-end mt-4" type="submit" value="Submit" />
            </form>
            <div className="relative">
                {error !== "" && <p className="bg-semidead text-dead absolute top-0 right-0 z-50">{error}</p>}
                <p className="bg-semidead absolute bottom-0 right-0 z-50 text-dead px-2">{caretPos}</p>
                <textarea
                    ref={textareaRef}
                    value={json}
                    onKeyDown={(e: any) => { setCaretPos(e.target.selectionStart) }}
                    onMouseDown={(e: any) => { setCaretPos(e.target.selectionStart) }}
                    onChange={handleJSON}
                    className="bg-dead text-alive p-4 font-jetBrainsMono resize-none w-full h-full relative"
                />
            </div>
        </div>

    </div >
}
    // function getDeepCaretDifference(pos: number, prior: string, post: string): number {
    //     let difference = 0
    //     const charactersPrior = prior.slice(0, pos);

    //     for (let priorCharI in [...charactersPrior]) {
    //         console.log(priorCharI)
    //         let currIndex = post.indexOf(prior[priorCharI], Number(priorCharI))
    //         let currDif = currIndex - Number(priorCharI)
    //         if (currDif > difference) difference = currDif
    //     }
    //     return pos + difference
    // }

    // function getDeepCaretDifference2(pos: number, prior: string, post: string): number {
    //     const charactersPrior = prior.slice(0, pos)
    //     let difference: number = 0

    //     for (let i in [...post]) {
    //         const priorIndex = Number(i) - difference

    //         if (charactersPrior[priorIndex] === undefined) return pos + difference
    //         if (charactersPrior[priorIndex] !== post[i]) difference++
    //     }
    //     return pos + difference
    // }
