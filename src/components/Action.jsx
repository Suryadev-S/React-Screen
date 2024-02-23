const Action = ({actionText}) => {
    return ( 
        <>
        <div className="action-banner">
            <h1 className="action-font">
                {actionText}
            </h1>
            <button className="action-button">Singup</button>
        </div>
        </>
     );
}
 
export default Action;