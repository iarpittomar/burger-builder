import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 40,
    meat: 100,
    bacon: 30,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://react-my-burger-b5763.firebaseio.com/ingredients.json')
            .then((resp) => {
                this.setState({ ingredients: resp.data });
            })
            .catch((err) => {
                this.setState({ error: true })
            })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updateIngredients)
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((prev, curr) => {
                return prev + curr;
            }, 0)
        this.setState({ purchaseable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // alert('you continue');
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Arpit',
                address: {
                    street: 'Test',
                    zipCode: '889900',
                    country: 'India'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then((resp) => {
                this.setState({ loading: false, purchasing: false });
                console.log(resp);
            })
            .catch((err) => {
                this.setState({ loading: false, purchasing: false });
                console.log(err);
            })
    }


    render() {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }




        let orderSummary = null;
        let burger = this.state.error ? "Ingredients can't be loaded." : <Spinner />

        if (!!this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        currentPrice={this.state.totalPrice}
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        disableInfo={disableInfo}
                        purchaseable={this.state.purchaseable}
                        purchaseHandler={this.purchaseHandler}
                    >
                    </BuildControls>
                </Aux>
            );

            orderSummary = <OrderSummary totalPrice={this.state.totalPrice} purchaseContinued={this.purchaseContinueHandler} purchaseCancelled={this.purchaseCancelHandler} ingredients={this.state.ingredients}></OrderSummary>;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal closeModal={this.purchaseCancelHandler} show={this.state.purchasing}>
                    {orderSummary}
                </Modal>

                {burger}

            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);