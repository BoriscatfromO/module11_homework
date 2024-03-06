import {repeatWord} from './funcrepeatWord.js';
describe ("test repeatWord", () => {
    it ('repeat word apple', ()=> { 
   const result =  repeatWord("apple",2)
    expect(result).toBe("apple1, apple2");
    });
    it ('repeat word sun', ()=> { 
        const result =  repeatWord("sun",4)
         expect(result).toBe("sun1, sun2, sun3, sun4");
         }); 
    it ('repeat word sun', ()=> { 
    const result =  repeatWord("sun",2)
    expect(result).toBe("sun1, sun2, sun3, sun4");
    }); 
    it ('repeat word sun corner', ()=> { 
        const result =  repeatWord("sun",0)
        expect(result).toBe("");
        }); 
    it ('repeat word sun corner', ()=> { 
    const result =  repeatWord("",2)
    expect(result).toBe("1, 2");
    }); 
    it ('repeat word incorrect data', ()=> { 
        const result =  repeatWord("apple",-2)
        expect(result).toBe("");
        }); 
});
