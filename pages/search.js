import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import TestResult from "../TestResult";

function search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
    </div>
  );
}

export default search;

export async function getServerSideProps(context) {
  const mockData = true;
  const data = mockData
    ? TestResult
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}

// Since the Google APi that i use for the app aloows only 100 request a day(request makes after each page-refresh), i created TestResult object for 'hello' word, and save the result into TestResult file. So i can use one data to the end the project styling, afterward i can set the 'const mockData = false;' to get a real data via google api.
//TestResult data only to use while I'm  building the app.
