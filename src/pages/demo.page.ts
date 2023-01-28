import Page from "./page";

class Demo extends Page{

  private get header(){

    return $('.heading1')
   }

  private get fname(){
    return $('#AccountFrm_firstname')
   }

  private get lname(){
    return $('#AccountFrm_lastname')
   }

  private get selectCountry(){
    return $('//*[@id="AccountFrm_country_id"]')
   }

  private get selectState(){
    return $('//*[@id="AccountFrm_zone_id"]')
   }

  private get errorMessage(){
    return $('.alert.alert-error.alert-danger')
   }

  private get continuebutton(){

    return $('//button[@title="Continue"]')
   }

   async enterFirstName(firstname:string){
   
     await this.fname.setValue(firstname);
   }

   async enterLastName(lastname:string){
   
    await this.lname.setValue(lastname);
  }

  async selectcountry(country:string){
   
    await (await this.selectCountry).selectByVisibleText(country);
  }

  async selectstate(state:string){
   
    await (await this.selectState).selectByVisibleText(state);
  }

  async getHeaderText(){

    return await (await this.header).getText();
  }

  async clickcontinueButton(){

    await (await this.continuebutton).click();
  }

  async getErrorText(){

     return  await (await this.errorMessage).getText();
  }



}

export default new Demo()