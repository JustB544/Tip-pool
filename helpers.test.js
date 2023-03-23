describe("Helpers Test (with tear-down)", function () {
    it("should sum all of the payments", function () {
        billAmtInput.value = 20;
        tipAmtInput.value = 2;
        submitPaymentInfo();
        billAmtInput.value = 40;
        tipAmtInput.value = 2;
        submitPaymentInfo();

        expect(sumPaymentTotal("billAmt")).toEqual(60);
        expect(sumPaymentTotal("tipAmt")).toEqual(4);
    });

    it("should calculate the tip percentage", function () {
        expect(calculateTipPercent(40, 2)).toEqual(5);
    });

    it("should append a new td", function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 10);
        expect(newTr.innerHTML).toEqual("<td>10</td>");
    });

    it("should add a new td ", function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);
        expect(newTr.innerHTML).toEqual("<td>X</td>");
    });

    afterEach(function () {
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        for (td of summaryTds) {
            td.innerHTML = '';
        }
    });
});