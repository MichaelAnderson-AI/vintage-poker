import React, { useContext, useEffect, useState } from 'react';
import Container from '../components/layout/Container';
import Button from '../components/buttons/Button';
import gameContext from '../context/game/gameContext';
import socketContext from '../context/websocket/socketContext';
import PokerTable from '../components/game/PokerTable';
import { RotateDevicePrompt } from '../components/game/RotateDevicePrompt';
import { CenteredAnchor } from '../components/game/CenteredAnchor';
import { PositionedUISlot } from '../components/game/PositionedUISlot';
import { PokerTableWrapper } from '../components/game/PokerTableWrapper';
import { Seat } from '../components/game/Seat';
import Text from '../components/typography/Text';
import modalContext from '../context/modal/modalContext';
import { withRouter } from 'react-router-dom';
import { TableInfoWrapper } from '../components/game/TableInfoWrapper';
import { InfoPill } from '../components/game/InfoPill';
import { GameUI } from '../components/game/GameUI';
import { GameStateInfo } from '../components/game/GameStateInfo';
import PokerCard from '../components/game/PokerCard';

const Play = ({ history }) => {
  const { socket } = useContext(socketContext);
  const { openModal } = useContext(modalContext);
  const {
    messages,
    currentTable,
    isPlayerSeated,
    seatId,
    joinTable,
    leaveTable,
    sitDown,
    standUp,
    fold,
    check,
    call,
    raise,
  } = useContext(gameContext);

  const [bet, setBet] = useState(0);

  useEffect(() => {
    !socket &&
      openModal(
        () => (
          <Text>
            Could not connect / lost connection to game server! Please try again
            later!
          </Text>
        ),
        'No connection',
        'Close',
        () => history.push('/'),
      );
    socket && joinTable(1);
    return () => leaveTable();
    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    currentTable &&
      (currentTable.callAmount > currentTable.minBet
        ? setBet(currentTable.callAmount)
        : currentTable.pot > 0
        ? setBet(currentTable.minRaise)
        : setBet(currentTable.minBet));
  }, [currentTable]);

  return (
    <>
      <RotateDevicePrompt />
      <Container fullHeight>
        {currentTable && (
          <>
            <PositionedUISlot
              bottom="2vh"
              left="1.5rem"
              style={{ zIndex: '50' }}
            >
              <Button small secondary onClick={leaveTable}>
                Leave Table
              </Button>
            </PositionedUISlot>
            {!isPlayerSeated && (
              <PositionedUISlot
                bottom="1.5vh"
                right="1.5rem"
                style={{ pointerEvents: 'none', zIndex: '50' }}
                origin="bottom right"
              >
                <TableInfoWrapper>
                  <Text textAlign="right">
                    <strong>{currentTable.name}</strong> |{' '}
                    <strong>Limit: </strong>
                    {new Intl.NumberFormat(
                      document.documentElement.lang,
                    ).format(currentTable.limit)}{' '}
                    | <strong>Blinds: </strong>
                    {new Intl.NumberFormat(
                      document.documentElement.lang,
                    ).format(currentTable.minBet)}{' '}
                    /{' '}
                    {new Intl.NumberFormat(
                      document.documentElement.lang,
                    ).format(currentTable.minBet * 2)}
                  </Text>
                </TableInfoWrapper>
              </PositionedUISlot>
            )}
          </>
        )}
        <PokerTableWrapper>
          <PokerTable />
          <CenteredAnchor>
            {currentTable && (
              <>
                <PositionedUISlot top="-35vh" left="-35vw">
                  <Seat
                    seatNumber={0}
                    currentTable={currentTable}
                    isPlayerSeated={isPlayerSeated}
                    sitDown={sitDown}
                  />
                </PositionedUISlot>
                <PositionedUISlot top="-35vh" left="-5vw">
                  <Seat
                    seatNumber={1}
                    currentTable={currentTable}
                    isPlayerSeated={isPlayerSeated}
                    sitDown={sitDown}
                  />
                </PositionedUISlot>
                <PositionedUISlot top="-35vh" left="30vw">
                  <Seat
                    seatNumber={2}
                    currentTable={currentTable}
                    isPlayerSeated={isPlayerSeated}
                    sitDown={sitDown}
                  />
                </PositionedUISlot>
                <PositionedUISlot top="0" left="35vw">
                  <Seat
                    seatNumber={3}
                    currentTable={currentTable}
                    isPlayerSeated={isPlayerSeated}
                    sitDown={sitDown}
                  />
                </PositionedUISlot>
                <PositionedUISlot top="0" left="-40vw">
                  <Seat
                    seatNumber={4}
                    currentTable={currentTable}
                    isPlayerSeated={isPlayerSeated}
                    sitDown={sitDown}
                  />
                </PositionedUISlot>
              </>
            )}

            {currentTable && (
              <>
                <PositionedUISlot width="100%" top="-20vh" origin="top center">
                  {currentTable.board && currentTable.board.length > 0 && (
                    <>
                      {currentTable.board.map((card, index) => (
                        <PokerCard key={index} card={card} />
                      ))}
                    </>
                  )}
                </PositionedUISlot>
                <PositionedUISlot
                  width="100%"
                  left="35px"
                  origin="center center"
                >
                  {messages && messages.length > 0 && (
                    <InfoPill style={{ minWidth: '400px' }}>
                      {messages[messages.length - 1]}
                    </InfoPill>
                  )}
                </PositionedUISlot>
                <PositionedUISlot
                  top="17vh"
                  left="-35px"
                  origin="top center"
                  style={{ minWidth: '150px' }}
                >
                  <GameStateInfo currentTable={currentTable} />
                </PositionedUISlot>
              </>
            )}
          </CenteredAnchor>
        </PokerTableWrapper>

        {currentTable &&
          isPlayerSeated &&
          currentTable.seats[seatId] &&
          currentTable.seats[seatId].turn && (
            <GameUI
              currentTable={currentTable}
              seatId={seatId}
              bet={bet}
              setBet={setBet}
              raise={raise}
              standUp={standUp}
              fold={fold}
              check={check}
              call={call}
            />
          )}
      </Container>
    </>
  );
};

export default withRouter(Play);
