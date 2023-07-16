import ReactDOM from "react-dom";
import react from "react";
import './index.css'
export function Meta({ children }) {
    return ReactDOM.createPortal(
        <div className="alerts">
            {children}
        </div>,
        document.getElementById('modal')
    )
}