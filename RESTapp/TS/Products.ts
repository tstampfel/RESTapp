namespace northwind {
    export class Products {
        static RenderSupplierProducts(suppID: number) {
            var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Products?$expand=Supplier&$filter=SupplierID eq " + suppID.toString();

            $.getJSON(url,
                function (data) {
                    var productDiv = $("#Products");
                
                   
                    productDiv.html("");
                    console.log(data);

                    // loop through all orders
                    $.each(data.value, function (index, product) {
                       

                        productDiv.append("<div>" + product.ProductName + "</div>");

                    })
                },
                function (a, b) {
                    //fail
                    console.log(a);
                    console.log(b);
                }

            );

        }

    }

}
