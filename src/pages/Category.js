import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';

class Category extends Component {
    state = {
        categories: [
            'shoes', 'clothes', 'watches', 'home'
        ]
    }
    render() {
        //解构出来的match不能随便取名字
        //下面赋值的方法可以自己定义名字
        const { match } = this.props;
        //const path = this.props.match;
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column">
                            {
                                this.state.categories.map(
                                    (item, index) => <div
                                        key={index}
                                        className="list-group-item"
                                    >
                                        {/*<Link to={`/category/${item}`}>{item}</Link>*/}
                                        <Link to={`${match.url}/${item}`}>{item}</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="tab-content">
                            <Route path={`${match.url}/:name`} render={ ({match}) => {
                                return <h2>{match.params.name}</h2>
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;