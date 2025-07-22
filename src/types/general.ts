/**
 * Supported languages for endpoint response data. Defaults to "en". Card images will always be in English.
 */
export type Languages = "en" | "fr" | "de" | "it" | "pt";

/**
 * Extra metadata about the response from the API, only used in the Random Card response.
 */
export type Meta = {
  generated: string; // "2023-10-01 12:00:00"
  current_rows: number; // 1
  total_rows: number; // 10000
  rows_remaining: number; // 9999
  total_pages: number; // 1000
  pages_remaining: number; // 999
  next_page: string; // "https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=1"
  next_page_offset: number; // 1
};
