export interface IMarketMaker {
    "dealer name": string;
    "type": string;
}

export interface IRecentChange {
  effective_on: string;
  text: string;
  until: string;
  symbol_was: string;
  type: string;
  name_was: string;
  on: string;
}

export interface IAddsAndChange {
  listing_market: string;
  symbol: string;
  listing_date: string;
  trading_date: string;
  status: string;
  security_name: string;
  security_type: string;
  sector: string;
  sector_tags: string[];
  currency: string;
  outstanding_shares: number;
  reserved_shares: number;
  total_equity_shares_as_if_converted: string;
  market_maker: IMarketMaker;
  index: string;
  recent_change: IRecentChange;
  sedar_filings: string;
}

export interface IMarketMaker2 {
  "dealer name": string;
  type: string;
}

export interface IRecentChange2 {
  effective_on: string;
  text: string;
  type: string;
  until: string;
  symbol_was: string;
  name_was: string;
  on: string;
}

export interface IFullList {
  listing_market: string;
  symbol: string;
  listing_date: string;
  trading_date: string;
  status: string;
  security_name: string;
  security_type: string;
  sector: string;
  sector_tags: string[];
  currency: string;
  outstanding_shares: number;
  reserved_shares?: number;
  total_equity_shares_as_if_converted: string;
  market_maker: IMarketMaker2;
  index: string;
  recent_change: IRecentChange2;
  sedar_filings: string;
}

export interface IMarket {
  date: string;
  deletions: any[];
  adds_and_changes: IAddsAndChange[];
  full_list: IFullList[];
}
