var s=document.getElementsByName("txtData");
console.log(s);
var myfun=function(){
    var amount=+document.getElementsByName("txtData")[0].value
    var roi=+document.getElementsByName("txtData")[1].value
    var duration=+document.getElementsByName("txtData")[2].value

    var P=Number(amount);
    var R=Number(roi);
    var N=Number(duration);
    // FORMULA FOR RATE EMI calculation
    //P*R*(1+R)^N/[(1+R)^N-1]
    R=R/12/100;
    N=N*12;

    var EMI=P*R*((1+R)**N)/((1+R)**N-1);
    EMI=Math.round(EMI)
    console.log(EMI);
    var total_payable_amount=EMI*N;
    
    console.log(total_payable_amount);

  var interest=total_payable_amount-P;
  console.log(interest);
 
   document.getElementById("EMI1").innerHTML=EMI;
   document.getElementById("loan_amount").innerHTML=P;
   document.getElementById("inter").innerHTML=interest;
   document.getElementById("finalamount").innerHTML=total_payable_amount;

// chart
// Data retrieved from https://netmarketshare.com
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'EMI Calculation',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Loan Amount',
            y: P,
            sliced: true,
            selected: true
        }, {
            name: 'Total Interest',
            y:interest
        
        }]
    }]
});


}