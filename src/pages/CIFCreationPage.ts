import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
let frame;
let popupframe;
let overrideframe;
let successframe;
export default class cifCreationPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
         
              newTab:"//li[@class='BTNIconNew']//a",
              btnP: "//div[@class='hrfDivTxt']//button",
              fullName: "//input[@id='BLK_CUSTOMER__FULLNAME']",
              shortName: "//label[normalize-space()='Short Name']",
              customerCategory: "//label[normalize-space()='Customer Category']",
              gender: "Male",
              dob: "//input[@title='Date of Birth']",
             nationality: "//input[@id='BLK_CUSTOMER__NLTY']",
            address: "//input[@id='BLK_CUSTOMER__ADDRLN1']",
        country: "//input[@id='BLK_CUSTOMER__COUNTRY']",
        language: "//input[@id='BLK_CUSTPERSONAL__LANG']",
        additionalTab: "//a[@id='TAB_ADDITIONAL']",
        location: "//input[@id='BLK_CUSTOMER__LOC']",
        media: "//input[@id='BLK_CUSTOMER__MEDIA']",
      saveButton: "//li[@id='Save']//a[@class='TBitem']",
      okbtn:"//input[@id='BTN_OK'][@title='Ok']",
    successMessage: "//span[@title='Record Successfully Saved']",
    acceptbtn:"#BTN_ACCEPT"



    }

    
  async handleClFFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Customer Maintenance")]', { timeout: 3000 });
             frame = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
 
    async clickNewTab(){
        await frame.click(this.Elements.newTab) 
    }
    

    async clickButtonP() {
        
            
               await frame.click(this.Elements.btnP);     
       
       
    }

     async enterFullName(name: string) {
        await frame.locator(this.Elements.fullName).fill(name);
    }


    async enterShortName(name: string) {
        await frame.locator(this.Elements.shortName).fill(name);
    }

    async enterCustomerCategory(category: string) {
        
        await frame.locator(this.Elements.customerCategory).fill(category);
        
    }

    async selectgender(){
        await frame.getByText(this.Elements.gender,{exact:true}).click();
    }

    async enterDOB(date: string) {
        await frame.locator(this.Elements.dob).fill(date);
    }

    async enterNationality(code: string) {
        await frame.locator(this.Elements.nationality).fill(code);
    }

    async enterAddress(address: string) {
        await frame.locator(this.Elements.address).fill(address);
    }

    async enterCountry(country: string) {
        await frame.locator(this.Elements.country).fill(country);
    }

    async enterLanguage(language: string) {
        await frame.locator(this.Elements.language).fill(language);
    }

        async clickAdditionalTab() {
        await frame.locator(this.Elements.additionalTab).click();
    }

    async enterLocation(location: string) {
        await frame.locator(this.Elements.location).fill(location);
    }

    async enterMedia(media: string) {
        await frame.locator(this.Elements.media).fill(media);

    }

    async clickSaveButton() {
        await frame.locator(this.Elements.saveButton).click();
        await frame.waitForTimeout(2000)
        
}

 

   async remarksFrame(){
   
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
             popupframe= await frameElementHandle1.contentFrame();
             
            await popupframe.click(this.Elements.okbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }

    async overrideFrame(){
   
      
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 3000 });
             overrideframe= await frameElementHandle2.contentFrame();
             
            await overrideframe.click(this.Elements.acceptbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
       
           
        }
    }
        
   async verifySuccessMessage() {
    const frameElementHandle2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 3000 });
             successframe= await frameElementHandle2.contentFrame();
      const message= successframe.locator(this.Elements.successMessage)
    await expect(message).toHaveText('Record Successfully Saved');
    await successframe.click(this.Elements.okbtn)

       
    }

    

    
   

    }



