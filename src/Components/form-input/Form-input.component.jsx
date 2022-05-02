import {ShrinkLabelstyles,FormInputLabel,Input,Group} from  './Form-input.style.jsx' ;
const Forminput =({lebel ,...otherprops})=>{

    return(
        <>
        <Group>
        <Input {...otherprops}/>
            {lebel && (
            <FormInputLabel 
                shrink ={otherprops.value.length } >
                {lebel}
            </FormInputLabel>)}
            
            
        </Group>
        </>
    );
}


export default Forminput;