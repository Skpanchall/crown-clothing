import { useNavigate } from 'react-router-dom';
import './directory-item.styles.jsx';
import { Directoryitemcontainer,Body , Backgroundimage } from './directory-item.styles.jsx';
const DirectoryItem =({category})=>{

    const { imageUrl , title , route} = category;
    const navigate = useNavigate();
    const onnavigationhandler = () => navigate(route);
    return (
        <Directoryitemcontainer onClick={onnavigationhandler}>
            <Backgroundimage  imageUrl = {imageUrl}    />
            <Body>
                <h2>{title}</h2>
                <p>shop now</p>     
            </Body>
        </Directoryitemcontainer>
    );
};
export default DirectoryItem;