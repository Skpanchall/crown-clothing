import './Form-input.style.scss' ;
const Forminput =({lebel ,...otherprops})=>{

    return(
        <>
        <div className="group">
        <input  className="form-input" {...otherprops}/>
            {lebel && (
            <label className={`${
                otherprops.value.length ? 'shrink' : '' 
                } form-input-label`} >{lebel}</label>)}
            
            
        </div>
        </>
    );
}


export default Forminput;