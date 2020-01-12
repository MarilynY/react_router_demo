import React, {Component} from 'react';

class ProductDetail extends Component {
    render() {
    const { data } = this.props;
    const { id } = this.props.match.params;
    //+id  string -> integer  这样就可以拿到一条信息了
        // 因为是array，所以要有【0】
    const product = data.filter((item) => item.id === +id)[0];

    //显示
        if(product) {
            return (
                <div className="card" style={{"width": "20rem", "margin": "10px auto"}}>
                    <div className="card-body">
                        <h5 className="card-title">{ product.name }</h5>
                        <p className="card-text">{ product.description }</p>
                        <p className="card-text">{product.status }</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    The product does not exist
                </div>
            )
        }
    }
}

export default ProductDetail;