import { data } from './data.js';

new gridjs.Grid({
    columns: ["Name", "Email", "Phone Number"],
    data: data,
    style: {
      td: {
        border: '1px solid #ccc'
      },
      table: {
        'font-size': '15px'
      }
    },
    className: {
      td: 'my-td-class',
      table: 'custom-table-class' 
    },
    search: true,
    sort: true,
    pagination: {
        limit: 2,
        summary: false
    },
    language: {
        'search': {
          'placeholder': '🔍 Search...'
        },
        'pagination': {
          'previous': '⬅️',
          'next': '➡️',
          'showing': '😃 Displaying',
          'results': () => 'Records'
        }
      }
  }).render(document.getElementById("wrapper"));