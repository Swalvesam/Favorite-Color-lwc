import { LightningElement, track, wire } from 'lwc';
import {TrialFavColor} from '@salesforce/apex/trialFavColor.trialFavColor'

export default class trialFavColor extends LightningElement {
    @track favColor=[];

    
    

    @wire(TrialFavColor)
    wiredResult(result, error){
        if(result.data){
            // const favColor = [];
            //assign var for result data
            let color = result.data;

            //loop over data and creates object of result {contact name, fav color} 
            for (let key in color){
                this.favColor.push({value:color[key],key:key})
            }
        }
    }

}