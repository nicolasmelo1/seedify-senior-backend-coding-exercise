type OrderConstructorParameters = {
  id?: number;
  productId: number;
  quantity: number;
  userId: number;
};

export class Order {
  #id!: number;
  #productId: number;
  #quantity: number;
  #userId: number;

  constructor({ id, productId, quantity, userId }: OrderConstructorParameters) {
    if (typeof id === 'number') this.#id = id;
    this.#productId = productId;
    this.#quantity = quantity;
    this.#userId = userId;
  }

  get id() {
    return this.#id;
  }

  set id(value: number) {
    if (typeof this.#id !== 'string') this.#id = value;
  }

  get productId() {
    return this.#productId;
  }
  get quantity() {
    return this.#quantity;
  }
  get userId() {
    return this.#userId;
  }

  toJSON() {
    return {
      id: this.id,
      productId: this.productId,
      quantity: this.quantity,
      userId: this.userId,
    };
  }
}
