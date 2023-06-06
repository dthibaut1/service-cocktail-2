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

  // set name(name) {
  //   this._name = name;
  // }

  // set price(price) {
  //   this._price = price;
  // }

  // set image(image) {
  //   this._image = image;
  // }
}

