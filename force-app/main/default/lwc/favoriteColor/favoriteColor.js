import { LightningElement, wire, track } from 'lwc';
import favoriteColorWithNameMap from '@salesforce/apex/FavoriteColor.favoriteColorWithNameMap'
export default class FavoriteColor extends LightningElement {
    @track favColor=[];
    @track count=[];

    @wire(favoriteColorWithNameMap)
    wiredResult(result, error){
        if(result.data){
            //mapData = [];
            let color = result.data;
            console.log(result.data)
            for (let key in color){
                this.favColor.push({value:color[key],key:key})
            }
        

            let colors = [];
        
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
        }else{
            console.log(error)
        }
    }
}