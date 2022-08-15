

const ButtonDelete = ({deleteProduct, id}) => {
    return (<button type="button" onClick={() => {deleteProduct(id);}}>
    <img src="./img/icons/iconx.svg" alt="delete"/>
</button>);
}
 
export default ButtonDelete;