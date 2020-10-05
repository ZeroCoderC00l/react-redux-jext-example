import React, { Fragment } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from '../actionCreators';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

const ShoppingCart = ({ cart, removeFromCart }) => {

  return (
    <Fragment>
      <h1>Shopping Cart</h1>
      <Table fill>
        <tbody>
          {cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right"><Button size="sm" variant="outline-danger" onClick={() => removeFromCart(product)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>

    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
};

const mapDispatchToStore = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToStore)(ShoppingCart);
