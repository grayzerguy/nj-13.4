import "./Specials.css";



// Conditional Rendering 


export function Specials(): JSX.Element {
    return (
        <div className="Specials Box">

            <p>Our Specials :
                {/*Ternary Operator -- תנאי אם אמת מציג את הראשון אם שקר את השני     */}
                {isWeekend() ? <span>Pizza</span> : <span>Pasta</span>}
                {/* /* Sort Circuit * && בודק אם התנאי הראשון אמת ואז מיציג */}
                {isWeekend() && <span>Cholent</span>}
            </p>
        </div>
    );
}

function isWeekend(): boolean {

    const now = new Date();
    const day = now.getDay();
    if (day === 5 || day === 6) {
        return true
    }
    return false


}

export default Specials