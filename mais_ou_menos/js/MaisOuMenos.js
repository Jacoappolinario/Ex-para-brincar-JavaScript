class MaisOuMenos {
  constructor() {
    this._contador = 0;
    alert(this._contador);
  }

  get contador() {
    return this._contador;
  }

  get mais() {
    this._contador++;
    alert(this._contador);
  }

  get menos() {
    this._contador--;
    alert(this._contador);
  }
}
