import React, { useState } from 'react';
import styles from './Card.module.css';
import { cardAt } from './cards';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import club from './clubs.png';
import diamond from './diamonds.png';
import heart from './hearts.png';
import spade from './spades.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: `30px 30px 30px ${theme.spacing(5)}px`,
  },
  text: {
    textAlign: 'center',
    verticalAlign: 'baseline',
  },
}));

export default function RandomCard() {
  const classes = useStyles();
  const [number, random] = useState(0);

  function randomNumber() {
    const min = 0;
    const max = 51;
    return parseInt(min + Math.random() * (max - min));
  }

  function separateCardName(number) {
    let cardName = cardAt(number);
    return [cardName.charAt(0), cardName.charAt(1)];
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <div className={styles["flip-card"]}>
          <div className={styles["flip-card-inner"]}>
            <div className={styles["flip-card-front"]}>
              <h1 style={{verticalAlign: 'baseline'}}>ArmAeng</h1>
            </div>
            <div className={styles["flip-card-back"]}>
              <h1 className={styles["text-padding-left"]}>
                {separateCardName(number)[0]}
              </h1>
              {(() => {
                switch (separateCardName(number)[1]) {
                  case 'C':
                    return <img src={club} alt="club" width={100} height={100} />;
                  case 'D':
                    return <img src={diamond} alt="diamond" width={100} height={100} />;
                  case 'H':
                    return <img src={heart} alt="heart" width={100} height={100} />;
                  case 'S':
                    return <img src={spade} alt="spade" width={100} height={100} />;
                  default:
                    return null;
                }
              })()}
              <h1 className={styles["text-padding-right"]}>
                {separateCardName(number)[0]}
              </h1>
            </div>
          </div>
        </div>
      </Grid>

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="default"
            onClick={() => random(randomNumber())}
          >
            Random
        </Button>
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>Card Number : {number} || Card Name : {separateCardName(number)}</Paper>
        </Grid>
      </Grid>
    </div >

  )
}
