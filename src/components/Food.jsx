import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Loading from "./loading"
import { HiShoppingCart } from 'react-icons/hi';
import './Food.css'

export default function Food() {
    const { type } = useParams()
    const [foods, setFoods] = useState([])
    useEffect(() => {
        axios.get('https://react-mini-projects-api.classbon.com/FastFood/list')
            .then((response) => setFoods(response?.data))
    }, [])

    const itemsToRender = foods?.map(food => {
        if (food?.name.includes(type)) {
            return food
        }
    }).filter(item => !!item)

    const renderContent = () => {
            if (!foods.length) return <Loading />
            return (
                <div className='row'>
                    {itemsToRender?.map(Food =>

                        <div className='col-md-4 col-sm-6 mb-grid-gutter' key={Food.id}>
                            <div className="card product-card h-100 border-1 shadow pb-1">
                                <span className="m-2 position-absolute badge rounded-pill bg-success fs-6 fw-bolder">
                                    قیمت: {Food.price} تومان
                                </span>
                                <div className="card-plaseHolder">
                                    <img className="card-img-top" src={Food.imageUrl} alt="Image" />
                                </div>
                                <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
                                    <h5 className="mb-2">{Food.name}</h5>
                                    <div className="fs-ms fw-bold text-muted mb-3">
                                        {Food.ingredients}
                                    </div>
                                    <Link to={'/' + Food.name} className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
                                        افزودن به سبد خرید
                                        <HiShoppingCart className="fs-5 ms-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            )
        }

    // const searchItems = async () => {
    //     const response = await axios.get('https://react-mini-projects-api.classbon.com/FastFood/search')
    
    // setFoods(response.data)
    // }

    return (

        <div>
            {renderContent()}
        </div>

    );
}