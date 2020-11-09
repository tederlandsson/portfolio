/**
 * Utility functions
 */

export const pageWidth = document.body.getBoundingClientRect().width;
export const isMobile = pageWidth <= 500;
export const isTablet = pageWidth <= 900;
export const isDesktop = !isMobile && !isTablet; 

 class utils {

  /**
   * Take array and return a string with comma-separated values
   * @param {*} array 
   */
  renderArrayWithCommas(array: string[]) {
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

  isMobile() {
    return document.body.getBoundingClientRect().width <= 500;
  }
    

}

export default new utils();