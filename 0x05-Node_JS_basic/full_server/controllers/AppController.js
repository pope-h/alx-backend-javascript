class AppController {
  static getHomepage(_request, response) {
    response.send(200, 'Hello Holberton School!');
  }
}

module.exports = AppController;
