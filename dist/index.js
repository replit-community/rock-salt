"use strict";var t=require("crypto");class e{static generateSalt(e=16){return t.randomBytes(Math.ceil(e/2)).toString("hex").substring(0,e)}static hash(e,r){return`${r}.${t.createHmac("sha512",r).update(e).digest("hex")}`}static compare(t,r){const s=r.split(".")[0];return e.hash(t,s)===r}}module.exports=e;