class StrCompress {
    static startCode = 0x100;
    static split = '\u10ff\uf0af\u10ef';
    static split2 = ',';

    static compress(str){
        var i = 0;

        // split word
        let result = str.match(/[a-zA-Z0-9\u4e00-\u9fa5]{2,}/g);

        // count
        let dict = {};
        result.forEach(element => {
            dict[element] = dict[element] || 0;
            dict[element]++;
        });

        let arr = [];
        // only word length > 1
        for (const key in dict) {
            if( dict[key] > 1 && key.length > 1){
                arr.push(key);
            }
        }

        // sort by string length
        arr.sort((a, b) => new String(a).length - new String(b).length).reverse();

        arr.forEach( (key) =>{
            str = str.replaceAll(key, String.fromCharCode(this.startCode + i));

            i++;
        } )

        return str + this.split + arr.join(this.split2);
    }

    static decompress(str){
        let index = str.indexOf(this.split);
        if( index >= 0 ){
            let matchArr = str.substr(index + this.split.length ).split(this.split2).reverse();
            var i = matchArr.length - 1;
            matchArr.forEach( (word)=>{
                str = str.replaceAll( String.fromCharCode(this.startCode + i) , word);

                i--;
            } )

            str = str.substring(0, str.indexOf(this.split)  );
        }

        return str;
    }
}
