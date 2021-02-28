/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Seed to be used for the PRNG.
 */
export type Seed = string;
/**
 * Return avatar as data uri instead of XML. *(Not supported by the HTTP API)*
 */
export type DataURI = boolean;
/**
 * Avatar Border Radius. Min: `0`, Max: `50`
 */
export type Radius = number;
/**
 * Fixed Width. Min: `0`
 */
export type Width = number;
/**
 * Fixed Height. Min: `0`
 */
export type Height = number;
/**
 * Margin in percent. Min: `0`, Max: `25`
 */
export type Margin = number;
/**
 * `transparent` and hex values are allowed. Use url encoded hash `%23` for HTTP-API.
 */
export type BackgroundColor = string | "transparent" | (string | "transparent")[];

export interface Options {
  seed?: Seed;
  dataUri?: DataURI;
  radius?: Radius;
  r?: Radius;
  width?: Width;
  w?: Width;
  height?: Height;
  h?: Height;
  margin?: Margin;
  m?: Margin;
  backgroundColor?: BackgroundColor;
  b?: BackgroundColor;
  [k: string]: unknown;
}