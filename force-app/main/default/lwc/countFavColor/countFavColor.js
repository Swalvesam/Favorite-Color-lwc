import { LightningElement,api, wire, track } from 'lwc';
import countFavColor from '@salesforce/apex/CountFavColor.countFavColor'
export default class CountFavColor extends LightningElement {
    @track favColor=[];
    @api recordId;
    

    @wire(countFavColor, {recordId:'$recordId'})
    wiredResult(result, error){
        if(result.data){
            // const favColor = [];
            
            //assign var for result data
            let color = result.data;
            // console.log(result.data)

            //loop over data and creates object of result {contact name, fav color} 
            for (let key in color){
                console.log(key)
                this.favColor.push({value:color[key],key:key})
            }
            
            
        }else{

            console.log(error)
        }
        
    

    }

}


