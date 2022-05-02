import './directory-item.styles.jsx';
import { Directoryitemcontainer,Body , Backgroundimage } from './directory-item.styles.jsx';
const DirectoryItem =({category})=>{

    const { imageUrl , title } = category;
    return (
        <Directoryitemcontainer>
            <Backgroundimage  imageUrl = {imageUrl}    />
            <Body>
                <h2>{title}</h2>
                <p>shop now</p>     
            </Body>
        </Directoryitemcontainer>
    );
};
export default DirectoryItem;