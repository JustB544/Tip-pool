describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table', function () {
    submitServerInfo();

    expect(document.querySelector("#server1")).toBeDefined();
  });

  afterEach(function () {
    allServers = {};
    serverId--;
    updateServerTable();
  });
});
