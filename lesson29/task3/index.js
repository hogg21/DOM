"use strict";

/**
 * @return {undefined}
 */
export const printing = () => {
  setTimeout(function () {
    console.log(3);
    console.log(4);
  }, 1000);

  setTimeout(function () {
    console.log(1);
    console.log(2);
  }, 0);

  setTimeout(function () {
    console.log(5);
    console.log(6);
  }, 2000);
};
printing();
