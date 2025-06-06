import { Server } from 'socket.io';

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    res.end();
    return;
  }

  const io = new Server(res.socket.server, {
    path: '/api/socket',
    addTrailingSlash: false,
  });

  res.socket.server.io = io;

  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('showIntro', (data) => {
      socket.broadcast.emit('introShown', data);
    });

    socket.on('revealQuestion', (questionIndex) => {
      socket.broadcast.emit('questionRevealed', questionIndex);
    });

    socket.on('revealAnswers', (data) => {
      socket.broadcast.emit('answersRevealed', data);
    });

    socket.on('selectAnswer', (data) => {
      socket.broadcast.emit('answerSelected', data);
    });

    socket.on('revealCorrectAnswer', (data) => {
      socket.broadcast.emit('correctAnswerRevealed', data);
    });

    socket.on('useLifeline', (data) => {
      socket.broadcast.emit('lifelineUsed', data);
    });

    socket.on('nextQuestion', (data) => {
      socket.broadcast.emit('questionAdvanced', data);
    });

    socket.on('gameOver', (data) => {
      socket.broadcast.emit('gameEnded', data);
    });

    socket.on('showExplanation', (data) => {
      socket.broadcast.emit('explanationShown', data);
    });

    socket.on('phonePickedUp', (data) => {
      socket.broadcast.emit('phonePickedUp', data);
    });

    socket.on('endPhoneCall', (data) => {
      socket.broadcast.emit('phoneCallEnded', data);
    });

    socket.on('vote', (data) => {
      socket.broadcast.emit('voteReceived', data);
    });

    socket.on('endVoting', (data) => {
      socket.broadcast.emit('votingEnded', data);
    });

    socket.on('audioToggle', (data) => {
      socket.broadcast.emit('audioToggle', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  res.end();
};

export default SocketHandler;