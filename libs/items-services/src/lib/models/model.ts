export declare abstract class Model {
  constructor(props?: { [key: string]: any });

  parse(props?: { [key: string]: any }): void;

  json(): {
    [key: string]: any;
  };
}
