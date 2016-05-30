namespace northwind {
    
    export class Supplier {
        static RenderSuppliers() {

            var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"

            $.getJSON(url,
                function (data) {
                    console.log(data);
                    var suppliers = data.value;
                    var divSuppliers = $("#Suppliers");


                    $.each(suppliers, function (idx, supplier) {

                        var textToAdd = "<div>" + supplier.CompanyName + "</div>";    
                        var jqueryElement = $(textToAdd);

                        divSuppliers.append(jqueryElement);


                        jqueryElement.click(function () {
                            northwind.Products.RenderSupplierProducts(supplier.SupplierID);

                        });

                    });

                },
                function (a,b) {
                    console.log(a);
                    console.log(b);
                }

            );
        }

    }

}