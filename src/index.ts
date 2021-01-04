import axios from "axios";

import { IMarket } from "./types/market";
import { ISecurity } from "./types/security";

/**
 * Base URL.
 * @type {string}
 */
const BASE_URL = "https://webapi.thecse.com/";

/**
 * URL for chart data.
 * @type {string}
 */
const URL_SECURITY = `${BASE_URL}trading/listed/securities/`;

/**
 * URL for market data.
 * @type {string}
 */
const URL_MARKET = `${BASE_URL}trading/listed/market/security_maintenance.json`;

/**
 * Standard request headers.
 * @type {object}
 */
const BASE_HEADERS = {
  "accept-encoding": "gzip, deflate, br",
  "cache-control": "max-age=0",
  "content-type": "application/json",
}

/**
 * Get market data.
 * @return {Promise<IMarket>}
 */
export async function getMarket() : Promise<IMarket> {
  const response = await axios({
    method: "GET",
    url: URL_MARKET,
    headers: BASE_HEADERS
  });
  return response.data;
}

/**
 * Get security data.
 * @param {string} ticker The CSE stock ticker.
 * @return {Promise<ISecurity>}
 */
export async function getSecurity(ticker: string): Promise<ISecurity> {
  const response = await axios({
    method: "GET",
    url: `${URL_SECURITY}${ticker}.json`,
    headers: BASE_HEADERS
  });
  return response.data;
}

// (async () => {
//   // const data = await getSecurityMaintenance();
//   const data = await getSecurity("HBOR");
//   console.log(data);
// })();
