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
