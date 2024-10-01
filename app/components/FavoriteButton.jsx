import Image from "next/image";
import favoriteIcon from '../assets/icons/favoriteIcon.svg'

const FavoriteButton = () => {
    return (<div>
        <button>
            <Image src={favoriteIcon} />
        </button>
    </div>)
}

export default FavoriteButton;