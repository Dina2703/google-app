import Head from "next/head";
import ImageResults from "../components/ImageResults";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import TestResult from "../TestResult";
import { useRouter } from "next/router";

export default function search({ results }) {
  console.log(results);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{results.queries.request[0].searchTerms} - Search page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search web and Images  Results */}
      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || 1;
  const mockData = false;
  const data = mockData
    ? TestResult
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}

// Since the Google APi that i use for the app aloows only 100 request a day(request makes after each page-refresh), i created TestResult object for 'hello' word, and save the result into TestResult file. So i can use one data to the end the project styling, afterward i can set the 'const mockData = false;' to get a real data via google api.
//TestResult data only to use while I'm  building the app.
