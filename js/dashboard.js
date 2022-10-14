// Dropdawn
$(document).ready(function () {
    $(".notification-drop .notification-item").on('click', function () {
        $(this).find('ul').toggle();
    });
});

$(document).ready(function () {
    $(".usermenu-drop .usermenu-item").on('click', function () {
        $(this).find('ul').toggle();
    });
});


// Chart
var xValues = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT'];
var yValues = [80, 90, 85, 100, 100, 105, 110, 105, 115, 120];

new Chart("myChart", {
    type: "line",
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    },
    data: {
        labels: xValues,
        datasets: [{
            label: 'Total views (thousand)',
            fill: true,
            lineTension: 0,
            backgroundColor: "#00000010",
            borderColor: "#1C1C1C",
            data: yValues,
            radius: 8,
        }]
    },

});
