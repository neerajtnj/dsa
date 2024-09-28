function isGivenStrPallindrom(s)
{
    let chars=new Set()
    for(let i=0;i<s.length;i++)
        {
            if(chars.has(s[i])==false)
                {
                    chars.add(s[i])
                }
            else{
                chars.delete(s[i])
            }    
        }
        if(chars.size<=1)
            {
                return true
            }
    return false        
}

console.log(isGivenStrPallindrom('amadm'))