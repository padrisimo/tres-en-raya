import React, { Component } from 'react';
import { Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels, Wrapper } from '../styled/Profile';

export default class Profile extends Component {
  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      games: [
        {
          winner: true,
          createdAt: '02/16/2019',
          id: '0001'
        },
        {
          winner: true,
          createdAt: '02/17/2019',
          id: '0002'
        },
        {
          winner: true,
          createdAt: '02/18/2019',
          id: '0003'
        }
      ]
    }
  }
  get records() {
    return this.props.user.games.map((game, index) =>
      <GameRecord
        key={index}
        index={index}
      >
        <Column>
          {(game.winner) ? 'Won!' : "Didn't win"}
        </Column>
        <Column>
          "ROBOT"
          </Column>
        <Column>
          "No"
          </Column>
        <Column>
          {game.createdAt}
        </Column>
      </GameRecord>
    )
  }

  render() {
    const { email } = this.props.user;
    return (
      <Wrapper>
        <Container>
          <Name>
            {email}
          </Name>
          <GameList>
            <GameListHeader>
              MyGames
          </GameListHeader>
            <ColumnLabels>
              <Column>
                Outcome
            </Column>
              <Column>
                Guess
            </Column>
              <Column>
                Guessed Correctly
            </Column>
              <Column>
                Date
            </Column>
            </ColumnLabels>
            {this.records}
          </GameList>
        </Container>
      </Wrapper>
    )
  }
}
