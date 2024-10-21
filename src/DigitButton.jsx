
export default function DigitButton({ symbol, handleClick}) {
    return(
        <button onClick={handleClick(symbol)} className="">{symbol}</button>
    )
}