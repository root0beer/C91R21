import "./style.scss"

const CartHeader = () => {
    return (<header className="cart-header">
    <div className="cart-header__title">Name</div>
    <div className="cart-header__count">Amount</div>
    <div className="cart-header__cost">Total</div>
</header>);
}
 
export default CartHeader;