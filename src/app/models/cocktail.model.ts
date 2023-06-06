export class Cocktail {
  constructor(
    private _name: string,
    private _price: number,
    private _image: string
  ) {}

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get image() {
    return this._image;
  }
}

