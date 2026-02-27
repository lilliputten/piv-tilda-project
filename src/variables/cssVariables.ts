/** @desc Re-export parsed and typed scss variables (required in the code) */

import cssVariables from './variables-export.scss';

// Extract all variables from SCSS module
const {
  primaryColor,
  blueTintedDarkenColor,
  extraWideTreshold,
  wideTreshold,
  mobileTreshold,
  smallTreshold,
  tinyTreshold,
  microTreshold
} = cssVariables;

// Convert threshold strings to numbers
const extraWideTresholdPx = parseInt(extraWideTreshold);
const wideTresholdPx = parseInt(wideTreshold);
const mobileTresholdPx = parseInt(mobileTreshold);
const smallTresholdPx = parseInt(smallTreshold);
const tinyTresholdPx = parseInt(tinyTreshold);
const microTresholdPx = parseInt(microTreshold);

// See pre-exports in `variables-export.scss`
export interface TCssVariables {
  primaryColor: string;
  blueTintedDarkenColor: string;

  // Thresholds
  extraWideTreshold: string;
  extraWideTresholdPx: number;
  wideTreshold: string;
  wideTresholdPx: number;
  mobileTreshold: string;
  mobileTresholdPx: number;
  smallTreshold: string;
  smallTresholdPx: number;
  tinyTreshold: string;
  tinyTresholdPx: number;
  microTreshold: string;
  microTresholdPx: number;
}

// Create typed variables object
export const vars: TCssVariables = {
  primaryColor,
  blueTintedDarkenColor,

  extraWideTreshold,
  extraWideTresholdPx,
  wideTreshold,
  wideTresholdPx,
  mobileTreshold,
  mobileTresholdPx,
  smallTreshold,
  smallTresholdPx,
  tinyTreshold,
  tinyTresholdPx,
  microTreshold,
  microTresholdPx
};

export {
  // Colors
  primaryColor,
  blueTintedDarkenColor,

  // Thresholds as strings
  extraWideTreshold,
  wideTreshold,
  mobileTreshold,
  smallTreshold,
  tinyTreshold,
  microTreshold,

  // Thresholds as numbers
  extraWideTresholdPx,
  wideTresholdPx,
  mobileTresholdPx,
  smallTresholdPx,
  tinyTresholdPx,
  microTresholdPx
};
