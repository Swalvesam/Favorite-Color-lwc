import { LightningElement, wire, track } from 'lwc';
import favoriteColorWithNameMap from '@salesforce/apex/FavoriteColor.favoriteColorWithNameMap'
export default class FavoriteColor extends LightningElement {
    @track favColor=[];
    @track count=[];

    @wire(favoriteColorWithNameMap)
    wiredResult(result, error){

        if(result.data){
            //assign var for result data
            let color = result.data;
            console.log(result.data)
            //loop over data and creates object of result {contact name, fav color} 
            for (let key in color){
                this.favColor.push({value:color[key],key:key})
            }
        

            let colors = [];
            //loops over all values (fav colors) from the result
            Object.values(color).forEach((color) => {
                    // searches colors array and returns index of  element of color array, if not found assigns the value as key and returns -1
                    const foundIndex = colors.findIndex((searchColor) => searchColor.key === color)
                    console.log(foundIndex)
                    // if index is -1 add element to colors array and assign value to 1
                    if (foundIndex === -1 ){
                        colors.push({
                            key: color, value: 1
                        })
                        //if element is present in array add 1 to value
                    }else{
                        colors[foundIndex].value = colors[foundIndex].value + 1
                    }
                    
                    
                });
                //assigns the color object to the count object
                this.count = colors
                console.log(colors)
        }else{
            console.log(error)
        }
    }
}