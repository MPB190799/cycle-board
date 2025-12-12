// config/markets.js

module.exports = {
  core: [
    {
      id: "USO",
      name: "ÖL (WTI)",
      ticker: "USO",
      bottom: [70, 75],
      top: [95, 110],
      validity: "12–36 Monate",
      macro: "🟡 neutral"
    },
    {
      id: "UNG",
      name: "Natural Gas",
      ticker: "UNG",
      bottom: [1.6, 2.0],
      top: [4.5, 6.0],
      validity: "6–24 Monate",
      macro: "🟡 neutral"
    },
    {
      id: "BDRY",
      name: "Dry Bulk (Frachtraten)",
      ticker: "BDRY",
      bottom: [800, 1000],
      top: [2500, 3500],
      validity: "3–12 Monate",
      macro: "🟡 neutral"
    },
    {
      id: "BWET",
      name: "Tanker Rates",
      ticker: "BWET",
      bottom: ["Q4 2023"],
      top: ["bereits gesehen"],
      validity: "6–12 Monate",
      macro: "🔴 belastend"
    },
    {
      id: "CPER",
      name: "Kupfer",
      ticker: "CPER",
      bottom: [3.4, 3.6],
      top: [5.5, 6.5],
      validity: "12–36 Monate",
      macro: "🟢 unterstützend"
    },
    {
      id: "VNQ",
      name: "REITs",
      ticker: "VNQ",
      bottom: ["2023 Tief"],
      top: ["Zinswende voll eingepreist"],
      validity: "12–24 Monate",
      macro: "🟢 unterstützend"
    }
  ],

  watchlist: [
    { id: "JO", name: "Kaffee", ticker: "JO" },
    { id: "NIB", name: "Kakao", ticker: "NIB" },
    { id: "CORN", name: "Mais", ticker: "CORN" }
  ]
};
