export function repeatWord(word,n)
{ let result="";
  for(let i=1; i<=n; i=i+1) {
    if(i<n)
      {
       result +=word+i+", "; 
      }
    else
      {
        result+=word+i;
      }
  }
return result;
}
