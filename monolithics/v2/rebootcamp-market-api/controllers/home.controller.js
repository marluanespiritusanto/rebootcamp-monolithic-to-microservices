class HomeController {
  async index(req, res) {
    return res.send({ message: "Hello ReBootcamp" });
  }
}

module.exports = new HomeController();
