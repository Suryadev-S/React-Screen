const Categories = ({categories}) => {
    return ( 
        <>
        <div className="cat-list view-width">
            {categories.map((item)=>{
                return(
                    <div>{item}</div>
                )
            })}
        </div>
        </>
     );
}
 
export default Categories;