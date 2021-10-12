import { LightningElement, wire, track, api } from 'lwc';
import countFavColor from '@salesforce/apex/CountFavColor.countFavColor'
export default class CountFavColor extends LightningElement {
    @track favColor=[];
    @track count=[];
    
    

    @wire(countFavColor)
    wiredResult(result, error){
        if(result.data){
            // const favColor = [];
            // let count = [];
            // console.log(this)
            let color = result.data;
            // console.log(Object.values(result.data))
            for (let key in color){
                this.favColor.push({value:color[key],key:key})
            }
            // console.log(Object.values(result.data))

            let colors = [];
            // had more time create map of the colors, then try to count as they are added to the map then convert to array

           Object.values(result.data).forEach((color) => {
                
                const foundIndex = colors.findIndex((searchColor) => searchColor.key === color)
                console.log(foundIndex)
                if (foundIndex === -1 ){
                    colors.push({
                        key: color, value: 1
                    })
                }else{
                    colors[foundIndex].value = colors[foundIndex].value + 1
                }
                
                
            });

            this.count = colors
            console.log(colors)
            
            // console.log(this.count)
        }else{
            
            console.log(error)
        }
        
    

    }

}


