
  // Test 7: Ensure the constructor requires a position
// Main test suite for the Rover class
describe('Rover class', () => {

  // Test 7: Ensure the constructor requires a position
  // NOTE: Must place new object inside a function to test without parameter. This causes the error.
  test('constructor sets position and default values for mode and generatorWatts', () => {
    expect(
      () => {
        new Rover();
      }).toThrow(new Error('Rover position required.'));
    });



  // Test 8: Check if receiveMessage returns the correct message name
  test('response returned by receiveMessage contains name of message', () => {
    
    // Create commands, a message, and a rover
    let commands = [
      new Command('MODE_CHANGE', 'LOW_POWER'),
      new Command('STATUS_CHECK'),
    ];

    let message = new Message('New message!', commands);
    let rover = new Rover(100);

    // Send the message to the rover and check the response
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual('New message!');
  });
  