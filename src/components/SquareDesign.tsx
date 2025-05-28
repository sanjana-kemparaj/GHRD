import React from 'react'

interface SquareDesignProps {
    className?: string
}

const SquareDesign = () => {
    return (
        <div className="text-orange-200 rotate-45 font-bold w-50 animate-spin-slow">
            <p>+ + + + + +</p>
            <p>+ + + + + +</p>
            <p>+ + + + + +</p>
            <p>+ + + + + +</p>
            <p>+ + + + + +</p>
            <p>+ + + + + +</p>
        </div>
    )
}
export default SquareDesign
