/**
 *
 * javascript file that contains some configurations
 *
 */


'use strict';

const tabFileName = 'data/translationTable.csv';

//                        true/on false/off
const variationSwitch = [ "mit", "ohne"];

const title = "fonetiktranslatør";
const copyrightAdditionalAuthors = ', <a href="https://steffenhoeder.de/" title="Homepage of Steffen Höder">Steffen Höder</a>';

const licenseName = "";

// some default values
let defaultInput = [
  "kʌmpjuːdʌʌ",
  "ˈgæːð",
  "asiˈæˀdʌ",
  "beˈtyðˀneŋ",
  "telˈgʁɑmˀ",
  "ˈglεːð"
];

let defaultSrcSystem = 8;
let defaultDstSystem = 11;
let debugMode = false;

// filter of translations
let removeLongSrcParts = true;
let removeDuplicateDstParts = true;
let removeSmallerDstParts = true;

let expertMode = false;
let outputOnly = false;

let input_limit = 18;

