var northwind;
(function (northwind) {
    var Supplier = (function () {
        function Supplier() {
        }
        Supplier.RenderSuppliers = function () {
            var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";
            $.getJSON(url, function (data) {
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
            }, function (a, b) {
                console.log(a);
                console.log(b);
            });
        };
        return Supplier;
    }());
    northwind.Supplier = Supplier;
})(northwind || (northwind = {}));
var northwind;
(function (northwind) {
    var Products = (function () {
        function Products() {
        }
        Products.RenderSupplierProducts = function (suppID) {
            var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Products?$expand=Supplier&$filter=SupplierID eq " + suppID.toString();
            $.getJSON(url, function (data) {
                var productDiv = $("#Products");
                productDiv.html("");
                console.log(data);
                // loop through all orders
                $.each(data.value, function (index, product) {
                    productDiv.append("<div>" + product.ProductName + "</div>");
                });
            }, function (a, b) {
                //fail
                console.log(a);
                console.log(b);
            });
        };
        return Products;
    }());
    northwind.Products = Products;
})(northwind || (northwind = {}));
//# sourceMappingURL=main.js.map