// Function to Check the login from MS Access database
function checkLogin() {
    var usname = document.getElementById("tbuname").value;
    var pwd = document.getElementById("tbpwd").value;
    // Code to connect the MS Access database using java Script
    // ” C:/my_db.mdb ” is the MS Access database
    var cn = new ActiveXObject("ADODB.Connection");
    var strConn =
        "Provider=Microsoft.Jet.OLEDB.4.0;Data Source = ../PCMDBase.accdb";
    var rs = new ActiveXObject("ADODB.Recordset");
    // Assume there is a table in MS Access database with the name ” user_master “, below is the query for authentication
    var SQL = 'select password from user_master where uname = "' + usname + '"';
    cn.Open(strConn);
    rs.Open(SQL, cn);
    if (!rs.eof) {
        if (rs.fields(0).value == pwd) location.href = "main.htm?uname=" + usname;
        else alert("wrong username or password!");
    } else alert("wrong username or password!");
    rs.Close();
    cn.Close();
}


function AddRecord() {
    //var adoConn = new ActiveXObject("ADODB.Connection");
    var adoConn = new ActiveX("ADODB.Connection");
    //var adoRS = new ActiveXObject("ADODB.Recordset");
    var adoRS = new ActiveX("ADODB.Recordset");

    adoConn.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='\\PCMDBase.accdb'");
    adoRS.Open("Select * From tblName", adoConn, 1, 3);

    adoRS.AddNew;
    adoRS.Fields("FieldName").value = "Quentin";
    adoRS.Update;

    adoRS.Close();
    adoConn.Close();
}

function DeleteRecord() {
    var adoConn = new ActiveX("ADODB.Connection");
    var adoRS = new ActiveX("ADODB.Recordset");

    adoConn.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='\\PCMDBase.accdb'");
    adoRS.Open("Select * From tblName Where FieldName = 'Quentin'", adoConn, 1,
        3);
    adoRS.Delete;
    adoRS.Delete;

    adoRS.Close();
    adoConn.Close();
}

function EditRecord() {
    var adoConn = new ActiveX("ADODB.Connection");
    var adoRS = new ActiveX("ADODB.Recordset");

    adoConn.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='\\PCMDBase.accdb'");
    adoRS.Open("Select * From tblName Where FieldName = 'Quentin'", adoConn, 1,
        3);

    adoRS.Edit;
    adoRS.Fields("FieldName").value = "New Name";
    adoRS.Update;

    adoRS.Close();
    adoConn.Close();
}


// https://www.froglogic.com/blog/tip-of-the-week/sqlite-driven-testing-using-javascript/
function fetchDataFromSQLiteDB() {
    //used http://sqlitebrowser.org/ for creating database
    //var conn = SQL.connect( { Driver: "SQLite", Database: "C:\\Users\\franke\\Desktop\\PCMDBase.db"} );
    var conn = SQL.connect({ Driver: "SQLite", Database: "\\PCMDBase.db" });

    var result = conn.query("SELECT id, forename, surname, email, phone FROM addressbook;");
    if (result.isValid == false) {
        test.log("Result is not valid, maybe no entries in database?")
    } else {
        while (result.isValid) {
            // do something with the result
            var id = result.value(0)
            var forename = result.value(1)
            var surname = result.value(2)
            var email = result.value(3)
            var phone = result.value(4)
            //test.log(id + forename + surname + email + phone)
            addEntry(forename, surname, email, phone)
            result.toNext();
        }
        test.log("added " + id + " entries in the addressbook application")
    }
}

function testSQLiteDB() {
    var conn = SQL.connect({ Driver: "SQLite", Database: "D:\\PCMDB\\PCMDBase.db" });

    if (conn.isValid == false) {
        alert("Result is not valid!")

    } else {
        alert("Result is valid!")
    }
}

const sqlite3 = require('sqlite3').verbose();

const dbName = '../DBCatalog.db';
const dbOptions = require('sqlite3').verbose().OPEN_READWRITE;

function dbConnect() {
    return new Promise((resolve, reject) => {
        const db = new require('sqlite3').verbose().Database('../DBCatalog.db', require('sqlite3').verbose().OPEN_READWRITE, (error) => {
            if (error) {
                reject(error);
                alert(error);
            } else {
                resolve(db);
                alert(error);
            }
        });
    });
}


function test() {
    alert("Result is valid!");
}

function init() {
    const dirName = require('path').dirname('../DBCatalog.db');
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName, { recursive: true });
    }
}