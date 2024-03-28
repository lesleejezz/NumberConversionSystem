function convert(){
    var iNum  = document.getElementById("ipNum").value;
    var iType = document.getElementById("ipType").value;
    var oType = document.getElementById("opType").value;
    var oNum;
    
    //dec to bin, oct, hex
    if(iType=="ipdec" && oType=="opbin") oNum = dec2bin(iNum);
    if(iType=="ipdec" && oType=="opoct") oNum = dec2oct(iNum);
    if(iType=="ipdec" && oType=="ophex") oNum = dec2hex(iNum);
    if(iType=="ipdec" && oType=="opdec") oNum = "INVALID";
    //bin to oct, dec, hex
    if(iType=="ipbin" && oType=="opdec") oNum = bin2dec(iNum);
    if(iType=="ipbin" && oType=="opoct") oNum = bin2oct(iNum);
    if(iType=="ipbin" && oType=="ophex") oNum = bin2hex(iNum);
    if(iType=="ipbin" && oType=="opbin") oNum = "INVALID";
    //oct to bin, dec, hex
    if(iType=="ipoct" && oType=="opbin") oNum = oct2bin(iNum);
    if(iType=="ipoct" && oType=="opdec") oNum = oct2dec(iNum);
    if(iType=="ipoct" && oType=="ophex") oNum = oct2hex(iNum);
    if(iType=="ipoct" && oType=="opoct") oNum = "INVALID";
    //hex to bin, dec, oct
    if(iType=="iphex" && oType=="opbin") oNum = hex2bin(iNum);
    if(iType=="iphex" && oType=="opoct") oNum = hex2oct(iNum);
    if(iType=="iphex" && oType=="opdec") oNum = hex2dec(iNum);
    if(iType=="iphex" && oType=="ophex") oNum = "INVALID";

    document.getElementById("opNum").value = oNum;
}
function clearsInO() {
    document.getElementById("ipNum").value = "";
    document.getElementById("opNum").value = "";
}

function bin2dec(iNum)
{
    return parseInt(iNum, 2);
}
function bin2oct(iNum)
{
    return parseInt(iNum, 2).toString(8);
}
function bin2hex(iNum)
{
    return parseInt(iNum, 2).toString(16).toUpperCase();
}
function dec2bin(iNum)
{
    return parseInt(iNum).toString(2);
}
function dec2oct(iNum)
{
    return parseInt(iNum).toString(8);
}
function dec2hex(iNum)
{
    return parseInt(iNum).toString(16).toUpperCase();
}
function oct2bin(iNum)
{
    return parseInt(iNum, 8).toString(2);
}
function oct2dec(iNum)
{
    return parseInt(iNum, 8).toString(10);
}
function oct2hex(iNum)
{
    return parseInt(iNum, 8).toString(16).toUpperCase();
}

function hex2bin(iNum)
{
    return parseInt(iNum, 16).toString(2);
}
function hex2oct(iNum)
{
    return parseInt(iNum, 16).toString(8);
}
function hex2dec(iNum)
{
    return parseInt(iNum, 16).toString(10);
}



