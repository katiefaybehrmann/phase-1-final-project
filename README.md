# Shop Conscious

## Description

Shop Conscious is a project that allows consumers to shop and compare clothing form different brands with environmental and labor practice transparency data available. Consumers can then use their knowledge of the brand along with their personal values to shop different items.

## Project features and requirements

Database:
1. Database on db.json created from publicly available data
2. Five clothing objects in each genre within the database
3. Seven attributes per clothing object:
    - id
    - company name
    - image
    - price
    - labor score
    - environment score
    - more information about the company's score
4. Single page app without redirects or reloads
5. Three distinct event listeners:
    - "Change" event listens to drop down menu to return clothing from within the selected genre
    - "Mouseover" event changes the clothing card's inner html so that users can read more information about the company
    - "Click" events on both the BOO! and SAVED! button either get rid of the clothing item from the page or place the item in a wish list
6. One instance of array method occurs when fetching data from the database. Each clothing item is iterated over and returned as a rendered clothing card

### User Journey

As a user, I can:

- Select the genre of clothing I wish to shop
- View each item of clothing, along with its price, brand, and labor/environment score
- Hover over each clothing card to read more information about the company
- Get rid of the item of clothing or save the item of clothing depending on my values and knowledge

## Credits and citations

Information on brands' environment and labor scores can be found here: https://goodonyou.eco/

Images come from company websites:
- https://us.shein.com/
- https://www.etsy.com/shop/runtbysarah/
- https://www.prada.com/
- https://www.goodwillfinds.com/
- https://www.patagonia.com/
- https://www.veja-store.com/en_us/
- https://www.drmartens.com/us/en/
