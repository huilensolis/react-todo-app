import ReactDOM from "react-dom";
import './index.css'
export function Meta({ children }) {
    return ReactDOM.createPortal(
        <div className="alerts">
            {children}
        </div>,
        document.getElementById('modal')
    )
}