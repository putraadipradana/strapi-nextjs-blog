import qs from "qs";
import { unstable_noStore as noStore } from "next/cache";
import { flattenAttributes, getStrapiURL } from "../lib/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  noStore();
  const authToken = null; //we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: true,
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalPageData() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: [
      "header.logoText",
      "header.signIn",
      "header.signUp",
      "footer.socialLinks",
    ],
  });

  return await fetchData(url.href);
}

export async function getPostData() {
  const url = new URL("/api/posts", baseUrl);

  url.search = qs.stringify({
    populate: {
      category: true,
    },
  });

  return await fetchData(url.href);
}
