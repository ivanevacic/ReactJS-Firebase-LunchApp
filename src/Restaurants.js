import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import { database } from './firebase'
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(key) {
    const currentUser = this.props.user
    //Find given restaurant in root by his key
    database.ref('/restaurants')
            .child(key)
            // into to tree 'votes'
            .child('votes')
            // pass unique user id so we know which user voted for what
            .child(currentUser.uid)
            // pass user display name 
            .set(currentUser.displayName)
  }

  handleDeselect(key) {
    const currentUser = this.props.user
        //Find given restaurant in root by his key
        database.ref('/restaurants')
                .child(key)
                // into to tree 'votes'
                .child('votes')
                // pass unique user id so we know which user voted for what
                .child(currentUser.uid)
                // remove vote
                .remove()
  }

  render () {
    const {restaurants } = this.props
    return (
      <section className="Restaurants">
      { map(restaurants, (restaurant, key) => {
        return <Restaurant 
                  key={key} 
                  {...restaurant} 
                  handleSelect={ ()=> this.handleSelect(key)}
                  handleDeselect={ ()=> this.handleDeselect(key)}
              />
        })
      }
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
