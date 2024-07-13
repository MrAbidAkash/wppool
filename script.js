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

 const data = [
   { year: 2010, count: 10 },
   { year: 2011, count: 20 },
   { year: 2012, count: 15 },
   { year: 2013, count: 25 },
   { year: 2014, count: 22 },
   { year: 2015, count: 30 },
   { year: 2016, count: 28 },
 ];

new Chart(ctx, {
  type: "line",
  data: {
    labels: data.map((row) => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count+30),
        radius: 0,
      },
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count+10),
        radius: 0,
      },
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count+20),
        radius: 0,
      },
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count+50),
        radius: 0,
      },
    ],
  },
  options: {
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
        
      },
    },
    plugins: {
      chartAreaBorder: {
        borderColor: 'red',
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
      zoom: {
        pan: {
          // pan options and/or events
          enabled: true,
        },
        limits: {
          // axis limits
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
        },
      },

    },
  },
});