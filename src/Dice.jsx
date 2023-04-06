export default function Dice({number}) {
    
    return (
        <div className="w-16 h-16 bg-white rounded-md drop-shadow-lg text-center py-3">
            <h3 className="text-3xl font-bold">{number}</h3>
        </div>
    )
}