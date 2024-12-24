import {Locator} from "@playwright/test";
import {AddressSection} from "./addressSection";

export class PaymentSection {
    // Defining the locators
    readonly root: Locator;
    readonly billingAddressTitle: Locator;
    readonly billingAddressCheckBox: Locator;
    readonly billingAddressForm: AddressSection;
    readonly paymentTitle: Locator;
    readonly paymentWithCardOption: Locator;
    readonly cashAppPayOption: Locator;
    readonly afterPayOption: Locator;
    readonly klarnaOption: Locator;
    readonly cardNumberInput: Locator;
    readonly cardExpDateInput: Locator;
    readonly cardCVCInput:Locator;
    readonly paymentTerms: Locator
    readonly acceptTermsAndPolicy: Locator;
    readonly payNowButton: Locator;

    // constructor
    constructor(root: Locator) {
        this.root= root;
        this.billingAddressTitle = this.root.locator('h5').filter({hasText:"Billing Address"});
        this.billingAddressCheckBox = this.root.locator('.checkbox-input');
        this.billingAddressForm = new AddressSection(this.root.locator('[data-checkout-billing-target="address Fields"]'));
        this.paymentTitle = this.root.locator('h5').filter({hasText:"Payment"});
        this.paymentWithCardOption = this.root.getByTestId('card');
        this.cashAppPayOption = this.root.getByTestId('cashapp');
        this.afterPayOption = this.root.getByTestId('afterpay_clearpay');
        this.klarnaOption = this.root.getByTestId('klarna');
        this.cardNumberInput = this.root.locator('#Field-numberInput');
        this.cardExpDateInput = this.root.locator('#Field-expiryInput');
        this.cardCVCInput = this.root.locator('#Field-cvcInput');
        this.paymentTerms = this.root.locator('.p-TermsText');
        this.acceptTermsAndPolicy = this.root.locator('p').locator('.text-xs');
        this.payNowButton = this.root.getByRole('button',{name:'Pay Now'});
    }

    // functions


}