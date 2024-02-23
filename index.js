const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

const workbook = xlsx.utils.book_new();
// const { root } = require("cheerio/lib/static");
// const { data } = require("cheerio/lib/api/attributes");
let $;
var titleArray = [];
var cityArray = [];
var postDate = [];
var jobTypeArr = [];
var companyArray = [];
async function scrapping() {
  await axios
    .get("https://www.amazon.in/s?k=smart+watches&ref=nb_sb_noss_1")
    .then((res) => {
      console.log(res.data);
      $ = cheerio.load(res.data);
      $(".title-recipe").each((idx, ele) => {
        // console.log($(ele).text());
      });

      //   console.log(data);
      //   // Job Title
      //   $(".s-item__title").each((idx, element) => {
      //     const title = $(element).text();
      //     console.log(title);
      //     // titleArray.push(title);
      //   });
      //   // Job Type
      //   $(".m-salary .attributeSection .attributeVal").each((idx, element) => {
      //     const jobType = $(element).text();
      //     jobTypeArr.push(jobType);
      //   });

      //   //    City
      //   $(".city").each((idx, element) => {
      //     const city = $(element).text();
      //     cityArray.push(city);
      //   });

      //   //  Date of Post
      //   $(".jsPostedOn").each((idx, element) => {
      //     const date = $(element).text();

      //     postDate.push(date);
      //   });
      //   // Company name
      //   $(".salary .attributeSection .attributeVal").each((idx, element) => {
      //     const company = $(element).text();
      //     if (idx % 2 != 0) {
      //       companyArray.push(company);
      //     }
      //   });

      //   const dataArr = [];
      //   for (let i = 0; i < titleArray.length; i++) {
      //     const tempArr = [
      //       titleArray[i],
      //       companyArray[i],
      //       cityArray[i],
      //       jobTypeArr[i],
      //       postDate[i],
      //     ];
      //     dataArr.push(tempArr);
      //   }

      //   const sheetData = [
      //     [
      //       "Job Title",
      //       "Company Name",
      //       "Location",
      //       "Job Type (Full-time, Part-time, Contract, etc.)",
      //       "Posted Date",
      //     ],
      //     ...dataArr,
      //   ];
      //   const sheet = xlsx.utils.aoa_to_sheet(sheetData);
      //   xlsx.utils.book_append_sheet(workbook, sheet, "Sheet1");
      //   xlsx.writeFile(workbook, "output.xlsx");
      //   console.log("XLSX file created successfully!");
    })

    .catch((err) => {
      console.log(err);
    });
}
scrapping();

console.log("running");
