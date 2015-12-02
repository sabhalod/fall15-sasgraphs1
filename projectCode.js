 // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

       var options = {
       title:'Colors',
      width: 500,
      height: 400,
      animation:{
        duration: 1000,
        easing: 'out',

        startup: true
      },
	  legend: 'none'
    };
    
     var options2 = {
       title:'Colors',
      width: 500,
      height: 400,
      animation:{
        duration: 1000,
        easing: 'out',

        startup: true
      },
      hAxis: { minValue: new Date('2015-11-03'), maxValue:  new Date('2015-11-11')}
      
    };
    
   var options3 = {
       title:'Colors',
      width: 500,
      height: 400,
      animation:{
        duration: 1000,
        easing: 'out',

        startup: true
      },
	  legend: 'none',
     hAxis: {viewWindow: {min:0, max:4}}
    };
    
   var options4 = {
       title:'Colors',
      width: 500,
      height: 400,
      animation:{
        duration: 1000,
        easing: 'out',

        startup: true
      },
	  legend: 'none',
     hAxis: {viewWindow: {min:0, max:4}}
    };
     

 // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      var data;
      var data2;
      var visibleColumns = [];
      var visibleRows = [];
      var date1;
      var date2;
      var value;
      var value2;
      var chart2;
      var chart;
      
      var rightButton = document.getElementById('right');
      var leftButton = document.getElementById('left');
  
      
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
      //var queryString = encodeURIComponent('SELECT A, LIMIT 5 OFFSET 8');
     // var queryString = encodeURIComponent('SELECT Red, B, Date where Date > date "Nov5,2015"');

    //      var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1Jz8d-u_Eo7Skxm7qaDIk5qSaVl6_nxG7Qz-uCl1RVgg/edit#gid=0');

      var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1yhoF-bk4Ipm3Ki36ntlXej-Y4rh6afW6ZEdcGaOjRmk/edit#gid=0');
      //var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1Jz8d-u_Eo7Skxm7qaDIk5qSaVl6_nxG7Qz-uCl1RVgg/edit#gid=0' + queryString);
      
      
    //  query.setQuery('select * where date "' + date1 + '" < A');
      //query.setQuery('select * where date "2015-11-03" < A');
      query.send(handleQueryResponse);
      
      var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1Jz8d-u_Eo7Skxm7qaDIk5qSaVl6_nxG7Qz-uCl1RVgg/edit#gid=0&vpid=A1');
      query2.send(handleQueryResponse2);
      }
      
    function handleQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      data = response.getDataTable();
      
      chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
      chart2 = new google.visualization.ScatterChart(document.getElementById('chart_div2'));
      chart2.draw(data, options2);
    }
    
    function handleQueryResponse2(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      data2 = response.getDataTable();
      
      chart3 = new google.visualization.LineChart(document.getElementById('chart_div3'));
      chart3.draw(data2, options3);
      chart4 = new google.visualization.ScatterChart(document.getElementById('chart_div4'));
      chart4.draw(data2, options4);
    }
      
  function handleClick(cb){
    //data = response.getDataTable();
  //  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    var view = new google.visualization.DataView(data, options);
    visibleColumns.length = 0;

    visibleColumns.push(0);
    
    if (document.getElementById('Red').checked) {
        visibleColumns.push(1);
    }

    if (document.getElementById('Blue').checked) {
        visibleColumns.push(2);
    }

    if (document.getElementById('Green').checked) {
        visibleColumns.push(3);
    }

    if (document.getElementById('Purple').checked) {
        visibleColumns.push(4);
    }
    
//     if (document.getElementById('datepicker') != NULL) {
//        visibleRows.push(3);
//   }

    view.setColumns(visibleColumns);
//    view.setRows(visibleRows);
    chart.draw(view, options);
}

  function handleDate1(da){
    date1 = document.getElementById('datepicker');
    date2 = document.getElementById('datepicker2');
    value=$("#datepicker").val();
    value2=$("#datepicker2").val();
//    window.alert(value);
   // chart2 = new google.visualization.ScatterChart(document.getElementById('chart_div2'));
    var view2 = new google.visualization.DataView(data, options2);
    
    visibleRows.length = 0;

  //  window.alert(value);
    if(value <= '11/03/2015' && value2 >= '11/03/2015') {
      visibleRows.push(0);
    } 
    if(value <= '11/07/2015' && value2 >= '11/07/2015') {
      visibleRows.push(1);
    }
    if(value <= '11/11/2015' && value2 >= '11/11/2015') {
      visibleRows.push(2);
      
    }
    
        
    view2.setRows(visibleRows);
    chart2.draw(view2, options2);
    }
    
    function handleRight(a){
      options3.hAxis.viewWindow.min += 1;
      options3.hAxis.viewWindow.max += 1;
      chart3.draw(data2, options3);
      
      options4.hAxis.viewWindow.min += 1;
      options4.hAxis.viewWindow.max += 1;
      chart4.draw(data2, options4);
    }
    
    function handleLeft(a){
      options3.hAxis.viewWindow.min -= 1;
      options3.hAxis.viewWindow.max -= 1;
      chart3.draw(data2, options3);
      
      options4.hAxis.viewWindow.min -= 1;
      options4.hAxis.viewWindow.max -= 1;
      chart4.draw(data2, options4);
    }


   $(function() {
    $( "#datepicker" ).datepicker();
      value=$("#datepicker").val();
      //alert(value);
  });
   $(function() {
    $( "#datepicker2" ).datepicker();
     value2=$("#datepicker2").val();
  });
