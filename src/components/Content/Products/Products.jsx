import React from 'react';
import './Products.scss';
import Card from './Card/Card';
import SortForm from './SortForm/SortForm';
import Preloader from '../../common/Preloader';

export default function Products(props) {
    const [showCatalog, setShowCatalog] = React.useState(true)

    return (<div className="products container-fluid">
        <header className="content-title" >Products</header>
        <SortForm {...props} onSubmit={value => {
            if (value.sort) {
                setShowCatalog(false)
                props.sortProducts(value.sort)
                setTimeout(() => setShowCatalog(true), 0)
            }
        }} />
        {
            showCatalog
                ? <div className="products-cards ">
                    {
                        props.catalog.map(item => <Card key={item.id} item={item} />)
                    }
                </div>
                : <Preloader />
        }

    </div>)
}
