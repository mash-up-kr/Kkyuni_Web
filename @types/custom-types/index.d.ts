declare module 'custom-types' {
  // eslint-disable-next-line import/prefer-default-export
  export namespace customTypes {
    type State<T> = Dispatch<SetStateAction<T>>;
  }
}
