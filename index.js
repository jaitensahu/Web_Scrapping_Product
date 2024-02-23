const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

const workbook = xlsx.utils.book_new();
// const { root } = require("cheerio/lib/static");
// const { data } = require("cheerio/lib/api/attributes");
let $;
var titleArray = [];
var priceArray = [];
var ratingArr = [];
var jobTypeArr = [];
var companyArray = [];
async function scrapping() {
  await axios
    .get("https://www.etsy.com/in-en/search?q=shirts&ref=search_bar")
    .then((res) => {
      // console.log(res.data);
      $ = cheerio.load(res.data);
      $(".v2-listing-card__title").each((idx, element) => {
        let title = $(element).text();
        console.log(title);
        titleArray.push(title);
      });

      //   //    Price
      $(".currency-value").each((idx, element) => {
        const price = $(element).text();
        priceArray.push(price);
      });

      // Rating
    //   $(".stars-smaller").each((idx, element) => {
    //     const rating = $(element).attr("aria-label");
    //     console.log(rating);
    //     //   ratingArr.push(rating);
    //   });
      //   // Company name
      console.log($(".streamline-seller-shop-name__line-height").children);
        $(".streamline-seller-shop-name__line-height").each((idx, element) => {
            console.log($(element).children(":eq(2)").text());
            // const company = $(element).text();
            // console.log(company);
            companyArray.push($(element).children(":eq(2)").text());
      });

      const dataArr = [];
      for (let i = 0; i < titleArray.length; i++) {
        const tempArr = [titleArray[i], priceArray[i], companyArray[i]];
        dataArr.push(tempArr);
      }

      const sheetData = [
        ["Product Title", "Price", "Company Name"],
        ...dataArr,
      ];
      const sheet = xlsx.utils.aoa_to_sheet(sheetData);
      xlsx.utils.book_append_sheet(workbook, sheet, "Sheet1");
      xlsx.writeFile(workbook, "output.xlsx");
      console.log("XLSX file created successfully!");
    })

    .catch((err) => {
      console.log(err);
    });
}
scrapping();

console.log("running");
