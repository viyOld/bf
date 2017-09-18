let menuArray = ["№", "Задание", "Дата", "Старт" , "Завершение" , "Статус" ,  " Чек"];


function createTable(rowTable) {
  // body...
  let id = "tableStat";
  var elem = document.getElementById(id);
  let table = '';
  let row = '';

  // Створюємо шапку таблиці
  row + row + '<tr>';
  for (i = 0 ; i < 7; i++) {
    row = row + '<th>';
    row = row + menuArray[i];
    row = row + '</th>';
  }
  row + row + '</tr>';
  table = '<thead class=\"thead-inverse\">' + row + '</thead>'; //class="thead-inverse"
  // Створюємо строки батлиці
  for (let j = 0; j < rowTable; j++) {
      row = '';
      row + row + '<tr>';
      for (i = 0; i < 7; i++) {
          row = row + '<td>';
          row = row + 'Item' + i + j;
          row = row + '</td>';
      }
      row = row + '</tr>';
      table = table + row;
  }
  table = '<table class="table  table-sm">'+ table +'</table>';  // table-striped table-hover

  // только одно присваивание innerHTML
  elem.innerHTML = table;
}

createTable(14);