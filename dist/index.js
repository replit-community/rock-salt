import t from"crypto";class a{static generateSalt(a=16){return t.randomBytes(Math.ceil(a/2)).toString("hex").substring(0,a)}static hash(a,e){return`${e}.${t.createHmac("sha512",e).update(a).digest("hex")}`}static compare(t,e){const r=e.split(".")[0];return a.hash(t,r)===e}}export{a as default};
