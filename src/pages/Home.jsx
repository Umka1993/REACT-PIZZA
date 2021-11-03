import React from 'react';
import {Categories, SortPopup, PizzaBlock} from '../components';


const Home = ({items}) => {



    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={(name) => console.log(name)} items={[
                    'Мясные',
                    'Вегетарианские',
                    'Гриль',
                    'Острые',
                    'Закрытые',
                ]}/>
                <SortPopup
                    items={['популярности', 'цена', 'алфавиту']}
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
