type ButtonProps = {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, 
    type?: string | null,
}

function BaseButton ({children, onClick, type}: ButtonProps){
    return (
    <button className={`btn ${type}`} onClick={(e) => onClick(e)}>
        {children}
    </button>
    )
}

export default BaseButton