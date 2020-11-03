/**
 * Utility functions
 */

class utils {

  /**
   * Take array and return a string with comma-separated values
   * @param {*} array 
   */
  renderArrayWithCommas(array) {
    let items = '';
      array.forEach((x, index) => {
        index += 1;
        if (index === array.length) {
          items += x;
        } else {
          items += `${x}, `;
        }        
      });
    return items;
  }

}

export default new utils();