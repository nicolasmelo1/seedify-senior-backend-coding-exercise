export interface IStore<
  TDatabase extends Record<string, Record<string | number, any>>,
> {
  getItem<TKey extends keyof TDatabase>(key: TKey): TDatabase[TKey] | undefined;

  setItem<TKey extends keyof TDatabase>(
    key: TKey,
    value: TDatabase[TKey][string | number],
  ): TDatabase[TKey][string | number];
}
