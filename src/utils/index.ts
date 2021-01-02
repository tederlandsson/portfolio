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
   * @param {Array} array
   * @return {String} items -- comma-separated string.
   */
  
  isMobile() {
    return document.body.getBoundingClientRect().width <= 500;
  }
    

}

export default new utils();