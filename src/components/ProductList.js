import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToCart } from '../actionCreators';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

export const ProductList = ({ products, addToCart }) => {

  return (
    <Fragment>
      <div style={styles.products}>
        {products.map(product =>
          <div id={"product-" + product.id} className="thumbnail product" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button variant="primary" onClick={() => addToCart(product)}
                  role="button" disabled={product.inventory <= 0}>${product.price}
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Button>
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart(product) {
      dispatch(addToCart(product));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
