import { useEffect, useState } from "react";
import FavoritePhone from "../../components/FavoritePhone/FavoritePhone";


const Favorites = () => {

    const [favorites, setFavorites] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [noData, setNoData] = useState("")
    const [totalPrice, setTotalPrice] = useState(0)

    const handleRemove = () => {
        localStorage.clear()
        setFavorites([])
        setNoData('No Data Found')
    }

    useEffect(() => {
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'))
        if (favoritesItems) {
            setFavorites(favoritesItems)
            const total = favoritesItems.reduce((p, c) => p + c.price, 0)
            setTotalPrice(total.toFixed(2))
        }
        else {
            setNoData("No Data Found")
        }
    }, [])
    return (
        <div>
            <div>
                {favorites.length > 0 && <button onClick={handleRemove} className="text-2xl font-medium bg-green-400 py-1 px-2 rounded-sm my-5">Delete All Item</button>}
                <p>total Price: {totalPrice}</p>
            </div>
            {noData ? <p>{noData}</p> : <div>

                <div className="grid grid-cols-2 gap-5">
                    {
                        isShow ? favorites.map(phone => <FavoritePhone key={phone.id} phone={phone}></FavoritePhone>) :
                            favorites.slice(0, 2).map(phone => <FavoritePhone key={phone.id} phone={phone}></FavoritePhone>)
                    }
                </div>
            </div>}
            <button onClick={() => setIsShow(!isShow)} className="text-2xl font-medium bg-green-400 py-1 px-2 rounded-sm my-5">{isShow ? 'see less' : 'see more'}</button>

        </div>
    );
};

export default Favorites;