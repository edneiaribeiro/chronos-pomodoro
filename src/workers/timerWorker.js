self.onmessage = function (event) {
  switch (event.data) {
    case 'start':
      self.postMessage('tick');
      break;
    case 'starta':
      self.postMessage('tick');
      break;
    case 'startb':
      self.postMessage('tick');
      self.close();
      break;
    default:
      self.postMessage('não entendi');
  }
};
