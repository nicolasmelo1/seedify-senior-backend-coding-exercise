import { IStore } from './store';

export class InMemoryStore<
  TDatabase extends Record<string, Record<string | number, any>> = any,
> implements IStore<TDatabase>
{
  #store: TDatabase = {} as TDatabase;

  getItem<TKey extends keyof TDatabase>(
    key: TKey,
  ): TDatabase[TKey] | undefined {
    const value = this.#store[key];
    if (!value) this.#store[key] = {} as TDatabase[TKey];
    return this.#store[key];
  }

  setItem<TKey extends keyof TDatabase>(
    key: TKey,
    value: TDatabase[TKey][string | number],
  ): TDatabase[TKey][string | number] {
    let existingKeyData = this.#store?.[key];

    if (!existingKeyData) {
      const newKey = {} as TDatabase[TKey];
      this.#store[key] = newKey;
      existingKeyData = newKey;
    }

    const numberOfItems = Object.keys(existingKeyData).length;
    let id = numberOfItems + 1;

    // Try to find a free id that does not clash with existing ids
    while (existingKeyData[id.toString()]) {
      id++;
    }

    if (value.id === undefined) value.id = id;

    this.#store[key][(value.id || id).toString()] = value;

    return value;
  }
}
