/* eslint-disable react/prop-types */
import { useState } from 'react'
import './index.css'

export default function Square() {
    const [squares,setSqaures] = useState(Array(9).fill(null))
    console.log(squares)

    function handleClick(i){
        const nxtSqaure = squares.slice() ;
        nxtSqaure[i] = "X" ;
        setSqaures(nxtSqaure);
    }

    function Board({value,onSquareClick}) {
        return <button className="font-bold border-[1px]  border-black  p-10" onClick={onSquareClick}>{value}</button>
    }
    return <>
        <div className='flex justify-center items-center  h-screen'>
            <div>
                <div>
                    <Board value={squares[0]} onSquareClick={()=>handleClick(0)}></Board>
                    <Board  value={squares[1]} onSquareClick={()=>handleClick(1)}></Board>
                    <Board  value={squares[2]} onSquareClick={()=>handleClick(2)} ></Board>
                </div>
                <div>
                    <Board  value={squares[3]}  onSquareClick={()=>handleClick(3)} ></Board>
                    <Board  value={squares[4]} onSquareClick={()=>handleClick(4)} ></Board>
                    <Board  value={squares[5]} onSquareClick={()=>handleClick(5)} ></Board>
                </div>
                <div>
                    <Board  value={squares[6]} onSquareClick={()=>handleClick(6)} ></Board>
                    <Board  value={squares[7]} onSquareClick={()=>handleClick(7)} ></Board>
                    <Board  value={squares[8]} onSquareClick={()=>handleClick(8)} ></Board>
                </div>
            </div>
        </div>

    </>
}