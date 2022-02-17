import './Landscape.scss';
import LoveIcon from '../../assets/images/love_icon.png';

const Landscape = ({data}) => {
    return (
        <div className='landscape'>
            <div className='landscape__image-container'>
                <img className='landscape__image' src={data.img} alt="gallery"/>
                <h2 className='landscape__title'>{data.title}</h2>
            </div>
            <div className='landscape__details'>
                <p className='landscape__description'>{data.description}</p>
                <div className='landscape__extra'>
                    {
                        (data.featured === "1") ? <img className='landscape__icon' src={LoveIcon} alt="fav-icon"/> : <span></span>
                    }
                    <p className='landscape__date'>{data.date}</p>
                </div>
            </div>
        </div>
    );
}

export default Landscape;