/**
 * Generates a CSS selector for the "Remove" button based on the product name.
 * @param {string} productName - The name of the product.
 * @returns {string} - The CSS selector for the "Remove" button.
 */
 export function generateRemoveButtonSelector(productName) {
    return `#remove-${productName.replace(/\s+/g, '-').toLowerCase()}`;
    ex
  }
  
  export async function waitForUrl(page, expectedUrl, timeout = 5000) {
    await page.waitForURL(expectedUrl, { timeout });
  }
  