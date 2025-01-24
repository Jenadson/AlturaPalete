
function search() {
    

    const codePalete = document.getElementById("code").value;

    console.log(codePalete);

    switch (codePalete) {
        case "805":
        case "821":
        case "824":
        case "2044":
        case "2503":
        case "s008":
        case "s007":
        case "s006":
            document.getElementById("result").innerText = "Euro Palete 1 metro."
            break;

        case "319":
        case "391":
        case "402":
        case "407":
        case "413":
        case "420":
        case "431":
        case "437":
        case "439":
        case "441":
        case "450":
        case "453":
        case "468":
        case "480":
        case "492":
        case "808":
        case "811":
        case "820":
        case "832":
        case "839":
        case "841":
        case "842":
        case "891":
        case "426":
        case "443":
        case "619":
        case "622":
        case "827":
        case "837":
        case "851":
        case "855":    
        document.getElementById("result").innerText = "Euro Palete 1.5 metro."
            break;

        case "358":
        case "411":
        case "416":
        case "419":
        case "422":
        case "425":
        case "430":
        case "435":
        case "436":
        case "444":
        case "455":
        case "462":
        case "476":
        case "477":
        case "819":
        case "820":
        case "834":
        case "838":   
            document.getElementById("result").innerText = "Euro Palete 1.8 metro."
            break;
        
        case "371":
        case "390":
        case "401":
        case "438":
        case "442":
        case "451":
        case "822":
        case "825":
        case "2036":
        document.getElementById("result").innerText = "Meia Palete 1.5 metro."
            break;

            case "2030":
            case "5101":
            case "5102":
            case "5105":
            case "6001":
            case "911":
            case "912":
            case "482":
            case "482":
            case "984":
            case "4090":   
                document.getElementById("result").innerText = "Exec. Skate"
                    break;
    
        default:
            document.getElementById("result").innerText = "Euro Palete 2 metros."
            break;
    }
}
