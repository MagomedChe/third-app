import {useState} from "react";

function Counter() {
    const[counter, setCounter] = useState(0);

    function plus(){
        setCounter(counter+1);
    }
    function minus() {
        if(counter > 0) {
            setCounter(counter - 1);
        }
    }
    function reset() {
        setCounter(0);
    }

    return(
        <div>
            <div className="number">
                {counter}
            </div>
            <div className="buttons">
                <button onClick={plus} className="button blue">
                    Увеличить
                </button>
                <button onClick={minus} className="button orange">
                    Уменьшить
                </button>
                <button onClick={reset} className="button reset">
                    Сброс
                </button>
            </div>
        </div>
    )
}
export default Counter;