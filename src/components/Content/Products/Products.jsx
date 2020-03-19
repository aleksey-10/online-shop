import React from 'react';
import './Products.scss';
import Card from './Card/Card';
import SortForm from './SortForm/SortForm';
import Preloader from '../../common/Preloader';

export default function Products(props) {
    const [showCatalog, setShowCatalog] = React.useState(true)

    const submitSort = sortName => {
        setShowCatalog(false)
        props.sortProducts(sortName)
        setTimeout(() => setShowCatalog(true), 0)
    }

    return (<div className="products container-fluid">
        <header className="content-title" >Products</header>
        <div className="row">
            <div className="col mt-2">
                <SortForm {...props} onSubmit={value => value.sort && submitSort(value.sort)} />
            </div>
            {
                showCatalog
                    ? <div className="products-cards col-lg-10">
                        {
                            props.catalog.map(item => <Card key={item.id} item={item} />)
                        }
                    </div>
                    : <Preloader />
            }
        </div>


    </div>)
}
