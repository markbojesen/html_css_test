function CreateTableFromJSON() {
    var myBooks = [
        {
            "Number": "1",
            "Device": "Android",
            "IMEI": "xxx-222-xxx",
            "Held by": "Preeti",
            "Serial Num": "xxxx-1111-xxxx",
            "OS": "Android",
            "Version": "7.0.11",
            "Date given": "01-01-18",
            "Given to": "Bob",
            "Date transferred": "02-01-18"
        },
        {
            "Number": "2",
            "Device": "",
            "IMEI": "",
            "Held by": "",
            "Serial Num": "",
            "OS": "",
            "Version": "",
            "Date given": "",
            "Given to": "",
            "Date transferred": ""
        },
        {
            "Number": "3",
            "Device": "",
            "IMEI": "",
            "Held by": "",
            "Serial Num": "",
            "OS": "",
            "Version": "",
            "Date given": "",
            "Given to": "",
            "Date transferred": ""
        },
        {
            "Number": "4",
            "Device": "",
            "IMEI": "",
            "Held by": "",
            "Serial Num": "",
            "OS": "",
            "Version": "",
            "Date given": "",
            "Given to": "",
            "Date transferred": ""
        },
        {
            "Number": "5",
            "Device": "",
            "IMEI": "",
            "Held by": "",
            "Serial Num": "",
            "OS": "",
            "Version": "",
            "Date given": "",
            "Given to": "",
            "Date transferred": ""
        },
        {
            "Number": "6",
            "Device": "",
            "IMEI": "",
            "Held by": "",
            "Serial Num": "",
            "OS": "",
            "Version": "",
            "Date given": "",
            "Given to": "",
            "Date transferred": ""
        },
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Number', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}