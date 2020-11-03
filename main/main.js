module.exports = function main(arr) {
    function toPascal(name) {
        let output;
        let flag = name.search("-");
        if (flag == -1) {
            let nameLow = name.toLowerCase();
            let firstLetterUpper = nameLow.slice(0, 1).toUpperCase();
            output = firstLetterUpper + nameLow.slice(1, nameLow.length + 1);
            return output;
        } else {
            let output = "";
            let strArray = name.split("-");
            strArray.forEach(item => {
                console.log(toPascal(item));
                output += toPascal(item) + "-";
            });
            return output.substring(0, output.length - 1);
        }
    }

    function printReceipt(arr) {
        var newArr = [];
        arr.forEach(item => {
            item.Number = 1;
            let out = parseFloat(item.Price);
            var dataItem = item
            if (newArr.length > 0) {
                var filterValue = newArr.filter(v => {
                    return v.Name == dataItem.Name
                })
                if (filterValue.length > 0) {
                    newArr.forEach(n => {
                        if (n.Name == filterValue[0].Name) {
                            n.Number = filterValue[0].Number + dataItem.Number
                        }
                    })
                } else {
                    newArr.push(dataItem)
                }
            } else {
                newArr.push(dataItem)
            }
        })
        let output = "***<store earning no money>Receipt ***\n";
        let total = 0;
        for (let k = 0; k < newArr.length; k++) {
            let record = newArr[k];
            if (record.Number > 1) {
                record.Unit = " " + record.Unit + "s";
            }
            if (record.Unit == "a") {
                record.Unit = "";
            }
            let price = record.Price * record.Number;
            total += price;
            output += "Name: " + toPascal(record.Name) + ", Quantity: " + record.Number + record.Unit + ", Unit price: " + record.Price.toFixed(2) + " (yuan), Subtotal: " + price.toFixed(2) + " (yuan)\n";
        }
        output += "----------------------\n";
        output += "Total: " + total.toFixed(2) + " (yuan)\n";
        output += "**********************\n";
        console.log(output);
        return output;
    }
    return printReceipt(arr);
}