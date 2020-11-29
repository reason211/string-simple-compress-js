# string-simple-compress-js
lightly string compress and decompress use JavaScript

Supprt compress: English letters, Numbers, Chinese

### Example:
```
let str = 'xxx,fffffff,fffffff,fffffff,xxx,fffffff,fffffff,fffffff,bb,100,c,bb,100';
let cstr = StrCompress.compress(str); // ā,Ā,Ā,Ā,ā,Ā,Ā,Ā,ă,Ă,c,ă,Ăჿჯfffffff,xxx,100,bb

let dstr = StrCompress.decompress(str);

console.log( str == dstr ); // true
```
