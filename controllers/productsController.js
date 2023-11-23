const controlador = {
  index: (req, res) => {
    res.render("products/index");
  },
  login: (req, res) => {
    res.render("users/login");
  },
  carrito: (req, res) => {
    res.render("products/productCart");
  },
  detail: (req, res) => {
    res.render("products/productDetail");
  },
  register: (req, res) => {
    res.render("users/register");
  },
  clubes: (req, res) => {
    let clubes = req.params.clubNombre;
    res.render("products/paginaClub", { clubes: clubes });
  },
};

module.exports = controlador;
