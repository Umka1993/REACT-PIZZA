import React from 'react';
import {Categories, PizzaBlock, SortPopup} from '../components';
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/action/filtersAC";


const categoryNames = [
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
]

const sortItems=[
    {name: 'популярности', type: 'popular'},
    {name: 'цена', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
]

const Home = () => {


    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categoryNames}/>
                <SortPopup
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map(obj =>
                        <PizzaBlock
                            key={obj.id}
                            // name={obj.name}
                            // imageUrl={obj.imageUrl}
                            {...obj}
                        />
                    )
                }

            </div>
        </div>
    );
};

export default Home;
