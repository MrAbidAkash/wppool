const toggleNavbar = document.getElementById("toggleNavbar");
const hamburgerButton = document.getElementById("hamburgerButton");
const hamburgerCloseButton = document.getElementById("hamburgerCloseButton");

hamburgerButton.addEventListener("click", () => {
  toggleNavbar.classList.remove("hidden", "-mr-[999px]");
  toggleNavbar.classList.add("flex", "w-full");
});
hamburgerCloseButton.addEventListener("click", () => {
  toggleNavbar.classList.remove("flex", "w-full", "-mr-[999px]");
  toggleNavbar.classList.add("hidden");
});

// sticky navbar

const stickyNav = document.getElementById("stickyNav");

const height = stickyNav.getBoundingClientRect().top;
const indexSection = document.getElementById("indexSection");
const indexSectionHeight = indexSection.offsetTop;

window.addEventListener("scroll", myFunction);

function myFunction() {
  if (window.scrollY > indexSectionHeight) {
    stickyNav.classList.add("navbar-sticky");
    /*     document.body.classList.add("mt-20");
     */ indexSection.classList.add("pt-20");
  } else {
    stickyNav.classList.remove("navbar-sticky");
    indexSection.classList.remove("pt-20");
  }
}

//index chart ************************************************
const ctx = document.getElementById("myChart");

const data4 = [
  // January
  { x: new Date(2022, 0, 1), y: Math.floor(Math.random() * 10) + 1 },
  { x: new Date(2022, 0, 5), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 0, 10), y: Math.floor(Math.random() * 10) + 1 },
  { x: new Date(2022, 0, 15), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 0, 20), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 0, 25), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 0, 30), y: Math.floor(Math.random() * 20) + 1 },
  // February
  { x: new Date(2022, 1, 2), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 1, 6), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 1, 10), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 1, 14), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 1, 18), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 1, 22), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 1, 26), y: Math.floor(Math.random() * 30) + 1 },
  // March
  { x: new Date(2022, 2, 1), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 2, 5), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 2, 10), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 2, 15), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 2, 20), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 2, 25), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 2, 30), y: Math.floor(Math.random() * 30) + 1 },
  // April
  { x: new Date(2022, 3, 3), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 3, 7), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 3, 11), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 3, 15), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 3, 19), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 3, 23), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 3, 27), y: Math.floor(Math.random() * 30) + 1 },
  // May
  { x: new Date(2022, 4, 2), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 4, 6), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 4, 10), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 4, 14), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 4, 18), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 4, 22), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 4, 26), y: Math.floor(Math.random() * 30) + 1 },
  // June
  { x: new Date(2022, 5, 1), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 5, 5), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 5, 9), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 5, 13), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 5, 17), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 5, 21), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 5, 25), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 6, 4), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 6, 7), y: Math.floor(Math.random() * 40) + 1 },
];

const data2 = [
  // January
  { x: new Date(2022, 0, 1), y: Math.floor(Math.random() * 10) + 1 },
  { x: new Date(2022, 0, 5), y: Math.floor(Math.random() * 14) + 1 },
  { x: new Date(2022, 0, 10), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 0, 15), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 0, 20), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 0, 25), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 0, 30), y: Math.floor(Math.random() * 40) + 10 },
  // February
  { x: new Date(2022, 1, 2), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 1, 6), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 1, 10), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 1, 14), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 1, 18), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 1, 22), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 1, 26), y: Math.floor(Math.random() * 40) + 10 },
  // March
  { x: new Date(2022, 2, 1), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 2, 5), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 2, 10), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 2, 15), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 2, 20), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 2, 25), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 2, 30), y: Math.floor(Math.random() * 40) + 10 },
  // April
  { x: new Date(2022, 3, 3), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 3, 7), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 3, 11), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 3, 15), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 3, 19), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 3, 23), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 3, 27), y: Math.floor(Math.random() * 40) + 1 },
  // May
  { x: new Date(2022, 4, 2), y: Math.floor(Math.random() * 50) + 1 },
  { x: new Date(2022, 4, 6), y: Math.floor(Math.random() * 50) + 1 },
  { x: new Date(2022, 4, 10), y: Math.floor(Math.random() * 50) + 1 },
  { x: new Date(2022, 4, 14), y: Math.floor(Math.random() * 50) + 1 },
  { x: new Date(2022, 4, 18), y: Math.floor(Math.random() * 50) + 1 },
  { x: new Date(2022, 4, 22), y: Math.floor(Math.random() * 60) + 1 },
  { x: new Date(2022, 4, 26), y: Math.floor(Math.random() * 60) + 1 },
  // June
  { x: new Date(2022, 5, 1), y: Math.floor(Math.random() * 85) + 1 },
  { x: new Date(2022, 5, 5), y: Math.floor(Math.random() * 85) + 1 },
  { x: new Date(2022, 5, 9), y: Math.floor(Math.random() * 85) + 1 },
  { x: new Date(2022, 5, 13), y: Math.floor(Math.random() * 85) + 1 },
  { x: new Date(2022, 5, 17), y: Math.floor(Math.random() * 85) + 1 },
  { x: new Date(2022, 5, 21), y: Math.floor(Math.random() * 85) + 1 },
  { x: new Date(2022, 5, 25), y: Math.floor(Math.random() * 85) + 1 },

  { x: new Date(2022, 6, 4), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 6, 7), y: Math.floor(Math.random() * 40) + 1 },
];

const data3 = [
  // January
  { x: new Date(2022, 0, 1), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 0, 5), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 0, 10), y: Math.floor(Math.random() * 30) + 10 },
  { x: new Date(2022, 0, 15), y: Math.floor(Math.random() * 30) + 10 },
  { x: new Date(2022, 0, 20), y: Math.floor(Math.random() * 70) + 10 },
  { x: new Date(2022, 0, 25), y: Math.floor(Math.random() * 40) + 10 },
  { x: new Date(2022, 0, 30), y: Math.floor(Math.random() * 50) + 10 },
  // February
  { x: new Date(2022, 1, 2), y: Math.floor(Math.random() * 60) + 10 },
  { x: new Date(2022, 1, 6), y: Math.floor(Math.random() * 60) + 10 },
  { x: new Date(2022, 1, 10), y: Math.floor(Math.random() * 60) + 10 },
  { x: new Date(2022, 1, 14), y: Math.floor(Math.random() * 60) + 10 },
  { x: new Date(2022, 1, 18), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 1, 22), y: Math.floor(Math.random() * 60) + 10 },
  { x: new Date(2022, 1, 26), y: Math.floor(Math.random() * 50) + 10 },
  // March
  { x: new Date(2022, 2, 1), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 2, 5), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 2, 10), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 2, 15), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 2, 20), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 2, 25), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 2, 30), y: Math.floor(Math.random() * 50) + 10 },
  // April
  { x: new Date(2022, 3, 3), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 3, 7), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 3, 11), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 3, 15), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 3, 19), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 3, 23), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 3, 27), y: Math.floor(Math.random() * 50) + 10 },
  // May
  { x: new Date(2022, 4, 2), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 4, 6), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 4, 10), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 4, 14), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 4, 18), y: Math.floor(Math.random() * 50) + 10 },
  { x: new Date(2022, 4, 22), y: Math.floor(Math.random() * 50) + 1 },
  { x: new Date(2022, 4, 26), y: Math.floor(Math.random() * 50) + 1 },
  // June
  { x: new Date(2022, 5, 1), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 5), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 9), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 13), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 17), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 21), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 25), y: Math.floor(Math.random() * 80) + 1 },

  { x: new Date(2022, 6, 4), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 6, 7), y: Math.floor(Math.random() * 40) + 1 },
];

const data = [
  // January
  { x: new Date(2022, 0, 1), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 0, 5), y: Math.floor(Math.random() * 20) + 1 },
  { x: new Date(2022, 0, 10), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 0, 15), y: Math.floor(Math.random() * 30) + 1 },
  { x: new Date(2022, 0, 20), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 0, 25), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 0, 30), y: Math.floor(Math.random() * 50) + 1 },
  // February
  { x: new Date(2022, 1, 2), y: Math.floor(Math.random() * 60) + 1 },
  { x: new Date(2022, 1, 6), y: Math.floor(Math.random() * 60) + 1 },
  { x: new Date(2022, 1, 10), y: Math.floor(Math.random() * 60) + 1 },
  { x: new Date(2022, 1, 14), y: Math.floor(Math.random() * 60) + 1 },
  { x: new Date(2022, 1, 18), y: Math.floor(Math.random() * 50) + 1 },
  { x: new Date(2022, 1, 22), y: Math.floor(Math.random() * 60) + 1 },
  { x: new Date(2022, 1, 26), y: Math.floor(Math.random() * 70) + 1 },
  // March
  { x: new Date(2022, 2, 1), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 2, 5), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 2, 10), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 2, 15), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 2, 20), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 2, 25), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 2, 30), y: Math.floor(Math.random() * 70) + 1 },
  // April
  { x: new Date(2022, 3, 3), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 3, 7), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 3, 11), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 3, 15), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 3, 19), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 3, 23), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 3, 27), y: Math.floor(Math.random() * 70) + 1 },
  // May
  { x: new Date(2022, 4, 2), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 4, 6), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 4, 10), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 4, 14), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 4, 18), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 4, 22), y: Math.floor(Math.random() * 70) + 1 },
  { x: new Date(2022, 4, 26), y: Math.floor(Math.random() * 70) + 1 },
  // June
  { x: new Date(2022, 5, 1), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 5), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 9), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 13), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 17), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 21), y: Math.floor(Math.random() * 80) + 1 },
  { x: new Date(2022, 5, 25), y: Math.floor(Math.random() * 80) + 1 },

  { x: new Date(2022, 6, 4), y: Math.floor(Math.random() * 40) + 1 },
  { x: new Date(2022, 6, 7), y: Math.floor(Math.random() * 40) + 1 },
];

const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.style.background = "white";
    tooltipEl.style.borderRadius = "3px";
    tooltipEl.style.color = "black";
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .1s ease";

    const table = document.createElement("table");
    table.style.margin = "0px";

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map((b) => b.lines);

    const tableHead = document.createElement("thead");

    titleLines.forEach((title) => {
      const tr = document.createElement("tr");
      tr.style.borderWidth = 0;

      const th = document.createElement("th");
      th.style.borderWidth = 0;
      const text = document.createTextNode(title);

      th.appendChild(text);
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement("tbody");
    bodyLines.forEach((body, i) => {
      const colors = tooltip.labelColors[i];

      const span = document.createElement("span");
      span.style.background = colors.backgroundColor;
      span.style.borderColor = colors.borderColor;
      span.style.borderWidth = "2px";
      span.style.marginRight = "10px";
      span.style.height = "10px";
      span.style.width = "10px";
      span.style.display = "inline-block";

      const tr = document.createElement("tr");
      tr.style.backgroundColor = "inherit";
      tr.style.borderWidth = 0;

      const td = document.createElement("td");
      td.style.borderWidth = 0;

      const text = document.createTextNode(body);

      td.appendChild(span);
      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector("table");

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding =
    tooltip.options.padding + "px " + tooltip.options.padding + "px";
};

window.onload = function () { 
  new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "WPPOOL",
          data: data,
          borderWidth: 2,
          radius: 0,
          borderColor: "#FC714D",
        },
        {
          label: "Google",
          data: data2,
          borderWidth: 2,
          radius: 0,
          borderColor: "#615DE3",
        },
        {
          label: "Microsoft",
          data: data3,
          borderWidth: 2,
          radius: 0,
          borderColor: "#AFCD80",
        },
        {
          label: "Twitter",
          data: data4,
          borderWidth: 2,
          radius: 0,
          borderColor: "#6F34A1",
          color: "#6F34A1",
        },
      ],
    },
    options: {
      interaction: {
        mode: "index",
      },
      pointHitRadius: 10,
      responsive: true,
      scales: {
        y: {
          min: -10,
          max: 100,
          ticks: {
            stepSize: 10,
          },
        },
        x: {
          type: "time",
          time: {
            unit: "month",
            /*           tooltipFormat: "MMM YYYY",
             */
          },
        },
      },

      plugins: {
        tooltip: {
          enabled: false,
          position: "nearest",
          external: externalTooltipHandler,
        },
        chartAreaBorder: {
          borderColor: "red",
          borderWidth: 2,
          borderDash: [5, 5],
          borderDashOffset: 2,
        },

        legend: {
          position: "bottom",
          labels: {
            usePointStyle: false,
          },
          pointStyle: "crossRot",
        },
      },
    },
  });

}