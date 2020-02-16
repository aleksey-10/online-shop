const store = {
    _state: {
        products: [
            {
                id: 0,
                title: 'Rechargeable battery ICR18650 2600mAh 3,7V PKCell',
                src: 'https://images.ua.prom.st/1863218458_w640_h640_akkumulyator-icr18650-2600mah.jpg',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, numquam dolore. Autem dignissimos voluptatem blanditiis excepturi aliquid, suscipit, repellendus aliquam praesentium facilis provident, deleniti placeat harum natus obcaecati. Amet quos labore temporibus ipsum minima nihil vel repellendus delectus non? Necessitatibus ducimus pariatur cupiditate, quasi mollitia aliquam optio corporis ullam nesciunt.",
                price: 2.35,
                qty: 1,
                get sum() {
                    return this.price*this.qty;
                }
            },
            {
                id: 1,
                title: 'Battery CR123A 1500mAh, 3.0V PKCell',
                src: 'https://images.ua.prom.st/1863552304_w640_h640_batarejka-cr123a-1500mah.jpg', description: 'Ex dolores reiciendis consectetur eius voluptas corporis quam unde facilis odio dignissimos porro nostrum architecto, deserunt veritatis? Saepe, incidunt! Neque sed fugiat doloremque provident velit facere labore quam fuga officia nobis inventore consequuntur blanditiis, facilis minus doloribus exercitationem ad assumenda quia error, culpa, aliquam maxime. Ad perspiciatis ut soluta quae blanditiis aperiam quia excepturi qui nobis quas tenetur consequuntur, itaque ex enim, sed delectus hic. Quod quia, ad dolore ea quo iste aperiam fuga veniam consequuntur perferendis blanditiis! Facere deleniti neque excepturi, fugit, eligendi alias soluta ullam magnam officia voluptatibus in nostrum dignissimos ratione id sunt a quisquam, culpa nemo?',
                description: "Fuga incidunt quod consequatur est quidem delectus, architecto placeat, laboriosam expedita deleniti necessitatibus blanditiis nisi assumenda nobis atque ipsum qui quasi nulla. A culpa aliquam beatae, magnam est debitis quas quidem velit expedita consequuntur minus dignissimos incidunt adipisci laudantium corporis iusto, ipsam voluptas. Assumenda, saepe dolorem debitis illum explicabo quas.",
                price: 0.85,
                qty: 1,
                get sum() {
                    return this.price*this.qty;
                }               
            },
            {
                id: 2,
                title: 'ATK-163 clip connector for ICR18650, CR123A for soldering to a board',
                src: 'https://images.ua.prom.st/1863571916_w640_h640_razem-klipsa-atk-163.jpg', description: 'Mollitia nemo totam aspernatur cupiditate sit. Veniam harum consequuntur reprehenderit doloribus corrupti rerum quasi? Neque cum, dolor quidem eum optio, ipsum deserunt molestias voluptas ullam autem nesciunt accusamus corporis commodi, dolorem omnis nisi. Maxime ipsum odit in necessitatibus optio alias perferendis voluptas suscipit, facilis libero explicabo similique facere quas deleniti rerum aliquid, ipsa quaerat. Sapiente nobis cum accusantium animi a. Quo, quidem. Sapiente unde corporis voluptas maxime saepe molestiae non repudiandae ab aspernatur? Est, vitae? Recusandae dicta mollitia illum illo quidem nobis ratione distinctio quae fuga harum rem voluptatem vitae tempore voluptates modi vero, id quos eligendi nemo fugiat unde!',
                description: "Aperiam expedita quos nihil, repellat nemo pariatur consequatur natus in accusantium sapiente dolorum neque reiciendis laboriosam quod omnis porro amet modi ipsam qui tempora dignissimos? Dolore maiores, enim accusantium consectetur nesciunt totam deleniti dignissimos itaque quis sit nulla nihil vero provident omnis, voluptate error eligendi ab vitae minus deserunt a.",
                price: 0.15,
                qty: 1,
                get sum() {
                    return this.price*this.qty;
                }
            },
            {
                id: 3,
                title: 'Rechargeable battery ICR18650 2600mAh 3,7V PKCell with PCB',
                src: 'https://images.ua.prom.st/1863526896_w640_h640_akkumulyator-icr18650-2600mah.jpg',
                description: "Nemo odit veniam corrupti iste officiis praesentium, exercitationem aliquid quasi officia dolor eum non, necessitatibus nulla, debitis aliquam quis quidem animi culpa omnis ex rem quae nam unde! Nihil officia quas possimus minus beatae. Explicabo maxime praesentium, modi ullam consectetur aliquid iusto repellat, delectus dolore aperiam fugit neque ut quia.",
                price: 2.5,
                qty: 1,
                get sum() {
                    return this.price*this.qty;
                }
            }
        ],

        basket: {
            items: [
                {

                }
            ],
            totalQty: 0,
            totalSum: 0
        }
    },

    get state() {
        return this._state;
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-TO-CART':
                // this._state.basket.items.map( item => {
                //     if ( item.id == action.id )
                // })

                // this._state.basket.items.push({
                //     item: action.item,
                //     qty: action.qty,
                //     sum: action.item.price*action.qty
                // });

                this._state.basket.totalQty += +action.qty;
                console.log(action.item, action.qty)
                break;
            case 'ON-CHANGE-TO-BUY':
                this._state.products.map( item => {
                    if (item.id == action.id) item.qty = action.qty;
                })
                break;
        }

        this._rerender(this);
    },

    rerenderDOM(rerenderEntireTree) {
        this._rerender = rerenderEntireTree;
    }
};

export const addToCartActionCreator = (id, qty) => ( { type: 'ADD-TO-CART', id, qty } );

export const onChangeToBuyActionCreator = (id, qty) => ( { type: 'ON-CHANGE-TO-BUY', id, qty });

export default store;
