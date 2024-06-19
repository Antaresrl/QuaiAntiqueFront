export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> Tout le monde peut y accéder
 ["disconnected"] -> Réserver aux utilisateurs déconnectés
 ["client"] -> Réserver aux utilisateurs clients
 ["admin"] -> Réserver aux utilisateurs admins
 ["admin", "client"] -> Réserver aux utilisateurs admins ou clients
*/