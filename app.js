const portfolio = [

  { name: "Deutsche Bank", ticker: "DBK", value: 2629.51, cost: 1354.52, dividend: 89.00, category: "Bank", country: "Deutschland" },

  { name: "FTSE EM High Dividend Low Volatility", ticker: "ETF", value: 1359.31, cost: 1414.18, dividend: 68.51, category: "ETF", country: "Emerging Markets" },

  { name: "EURO STOXX High Dividend Low Volatility", ticker: "ETF", value: 1258.13, cost: 1252.62, dividend: 47.51, category: "ETF", country: "Europa" },

  { name: "CK Hutchison", ticker: "0001.HK", value: 1033.20, cost: 965.80, dividend: 35.13, category: "Konglomerat", country: "Hongkong" },

  { name: "Sino AG", ticker: "XTP", value: 1004.49, cost: 843.65, dividend: 14.60, category: "Finanzen", country: "Deutschland" },

  { name: "iShares Broad € High Yield Bond", ticker: "ETF", value: 930.26, cost: 927.66, dividend: 62.98, category: "Anleihen", country: "Europa" },

  { name: "SDAX ETF", ticker: "ETF", value: 733.11, cost: 680.47, dividend: 10.29, category: "ETF", country: "Deutschland" },

  { name: "Kraft Heinz", ticker: "KHC", value: 517.50, cost: 506.36, dividend: 35.06, category: "Konsum", country: "USA" }

];

const euro = (value) =>

  value.toLocaleString("de-DE", {

    style: "currency",

    currency: "EUR"

  });

const percent = (value) =>

  value.toLocaleString("de-DE", {

    style: "percent",

    minimumFractionDigits: 1,

    maximumFractionDigits: 1

  });

function renderDashboard() {

  const depotwert = portfolio.reduce((sum, p) => sum + p.value, 0);

  const einstand = portfolio.reduce((sum, p) => sum + p.cost, 0);

  const dividende = portfolio.reduce((sum, p) => sum + p.dividend, 0);

  const buchgewinn = depotwert - einstand;

  const performance = buchgewinn / einstand;

  const yoc = dividende / einstand;

  const monatlich = dividende / 12;

  document.getElementById("depotwert").textContent = euro(depotwert);

  document.getElementById("performance").textContent = "+" + percent(performance) + " seit Kauf";

  document.getElementById("dividende").textContent = euro(dividende);

  document.getElementById("yoc").textContent = percent(yoc);

  document.getElementById("monatlich").textContent = euro(monatlich);

  document.getElementById("networth").textContent = euro(15000);

  document.getElementById("nextDividend").textContent = euro(35.06 / 4);

  const positions = [...portfolio].sort((a, b) => b.value - a.value);

  document.getElementById("positions").innerHTML = positions.map(p => `

    <div class="position">

      <div class="position-left">

        <div class="logo">${p.ticker.slice(0, 3)}</div>

        <div>

          <div class="name">${p.name}</div>

          <div class="meta">${p.category} · ${p.country}</div>

        </div>

      </div>

      <div class="right">

        <strong>${euro(p.value)}</strong>

        <div class="meta">${euro(p.dividend)} Div.</div>

      </div>

    </div>

  `).join("");

}

renderDashboard();
