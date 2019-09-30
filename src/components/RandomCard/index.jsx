import React, { Component } from 'react';
import styles from './Card.module.css';
import { cardAt } from './cards';

import images from './lineRich.png';

class RandomCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      randomNum: 0,
      cardName: "",
    };
  }
  render() {

    return (
      <div className={styles["flip-card"]}>
        <div className={styles["flip-card-inner"]}>
          <div className={styles["flip-card-front"]}>
            <img src={images} alt="images" width={300} height={300} />
          </div>
          <div className={styles["flip-card-back"]}>
            <h1>ArmAeng</h1>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomCard;