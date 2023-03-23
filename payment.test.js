describe("Payment Test (with setup and tear-down)", function () {
    beforeEach(function () {
        billAmtInput.value = 20;
        tipAmtInput.value = 2;
    });

    it("should create a payment object", function () {
        expect(createCurPayment()).toEqual({ billAmt: "20", tipAmt: "2", tipPercent: 10 });
    });

    it("should add a new payment to the payment table", function () {
        submitPaymentInfo();
        expect(document.querySelector("#payment1")).toBeDefined();
    });

    it("should update the summary", function () {
        submitPaymentInfo();
        expect(summaryTds[0].innerHTML).toEqual("$20");
        expect(summaryTds[1].innerHTML).toEqual("$2");
        expect(summaryTds[2].innerHTML).toEqual("10%");
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId]).toEqual({ billAmt: "20", tipAmt: "2", tipPercent: 10 });
    });

    afterEach(function () {
        allPayments = {};
        paymentId--;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        for (td of summaryTds) {
            td.innerHTML = '';
        }
    });
});