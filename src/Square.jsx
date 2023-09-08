/* eslint-disable react/prop-types */
import { useState } from 'react'
import './index.css'

export default function Square() {
    function Board() {
        const [value, setValue] = useState(null)

        function onClickHandlers() {
            setValue('X')
        }
        return <button className="font-bold border-[1px]  border-black  p-10" onClick={onClickHandlers}>{value}</button>
    }
    return <>
        <div className='flex justify-center items-center  h-screen'>
            <div>
                <div>
                    <Board ></Board>
                    <Board ></Board>
                    <Board ></Board>
                </div>
                <div>
                    <Board  ></Board>
                    <Board ></Board>
                    <Board ></Board>
                </div>
                <div>
                    <Board ></Board>
                    <Board ></Board>
                    <Board ></Board>
                </div>
            </div>
        </div>

    </>
}