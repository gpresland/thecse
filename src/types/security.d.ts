export interface IUpdatedAt {
  date: string;
  time: string;
}

export interface IMarketMaker {
  dealer_name: string;
  type: string;
}

export interface IRecentChange {
  //
}

export interface IMetatdata {
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

export interface IQuote {
  "Time": string;
  "Bid Size": number;
  "Bid Price": number;
  "Ask Price": number;
  "Ask Size": number;
}

export interface ILevel {
  "Bid Dealer": string;
  "Bid Size": number;
  "Bid Price": number;
  "Ask Price": number;
  "Ask Size": number;
  "Ask Dealer": string;
}

export interface IDepthByOrder {
  date: string;
  time: string;
  levels: ILevel[];
}

export interface ILevel2 {
  "Bid Count": number;
  "Bid Size": number;
  "Bid Price": number;
  "Ask Price": number;
  "Ask Size": number;
  "Ask Count": number;
}

export interface IDepthByPrice {
  date: string;
  time: string;
  levels: ILevel2[];
}

export interface ICompositeIndexContribution {
  "points": number;
  "change": number;
  "% of the index": number;
}

export interface ICSE25IndexContribution {
  //
}

export interface ITicker {
  "Time": string;
  "Previous Closing Price": number;
  "Trade Count": number;
  "Trading Volume": number;
  "Trading Value": number;
  "Trading Value (CAD)": number;
  "Opening Price": number;
  "Last Price": number;
  "Net Change": number;
  "Net Change Percentage": number;
  "Last Tick"?: any;
  "Days Low Price": number;
  "Days High Price": number;
  "Days VWAP": number;
  "52 Week High": number;
  "52 Week Low": number;
  "Composite Index Contribution": ICompositeIndexContribution;
  "CSE25 Index Contribution": ICSE25IndexContribution;
}

export interface ITrade {
  date: string;
  time: string;
  timestamp: number;
  price: number;
  tick?: number;
  change?: number;
  volume: number;
  buy_dealer: string;
  sell_dealer: string;
}

export interface ISecurity {
  updated_at: IUpdatedAt;
  metatdata: IMetatdata;
  quote: IQuote;
  depth_by_order: IDepthByOrder;
  depth_by_price: IDepthByPrice;
  ticker: ITicker;
  trades: ITrade[];
}
