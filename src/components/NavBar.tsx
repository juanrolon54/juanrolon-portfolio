import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome as Home } from 'react-icons/ai'
import { useTheme } from '../hooks'

function navClass(initial: string, plus: string) {

    return ({ isActive, isPending }: { isActive: boolean, isPending: boolean }) =>
        isActive ? plus : initial
}

function tailNav() {
    return navClass('btn flex items-center',
        'btn-active flex items-center')
}

export default function NavBar() {
    const [alive, setAlive] = useTheme('--alive', '#f9ffed')
    const [semiDead, setSemiDead] = useTheme('--semidead', '#b1c3b8')
    const [dead, setDead] = useTheme('--dead', '#2b3825')

    return <nav className="bg-dead flex justify-start w-full text-dead h-16">
        <div className='flex-1' />
        <NavLink className={tailNav()} to='/'><Home /></NavLink>
        <NavLink className={tailNav()} to='/skills'>skills</NavLink >
        <NavLink className={tailNav()} to='/about'>about</NavLink >
        <NavLink className={tailNav()} to='/contact'>contact</NavLink >
        <input type='color' onChange={e => { setAlive(e.target.value) }} value={alive} className='btn aspect-square h-full p-2' />
        <input type='color' onChange={e => { setSemiDead(e.target.value) }} value={semiDead} className='btn aspect-square h-full p-2' />
        <input type='color' onChange={e => { setDead(e.target.value) }} value={dead} className='btn aspect-square h-full p-2' />
    </nav >
}