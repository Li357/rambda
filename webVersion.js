(function webpackUniversalModuleDefinition(d,e){if(typeof exports==='object'&&typeof module==='object')module.exports=e();else if(typeof define==='function'&&define.amd)define([],e);else{var a=e();for(var i in a)(typeof exports==='object'?exports:d)[i]=a[i];}})(this,function(){return function(g){var h={};function __webpack_require__(j){if(h[j]){return h[j].exports;}var k=h[j]={i:j,l:!1,exports:{}};g[j].call(k.exports,k,k.exports,__webpack_require__);k.l=!0;return k.exports;}__webpack_require__.m=g;__webpack_require__.c=h;__webpack_require__.i=function(l){return l;};__webpack_require__.d=function(m,n,q){if(!__webpack_require__.o(m,n)){Object.defineProperty(m,n,{configurable:!1,enumerable:!0,get:q});}};__webpack_require__.n=function(r){var s=r&&r.__esModule?function getDefault(){return r['default'];}:function getModuleExports(){return r;};__webpack_require__.d(s,'a',s);return s;};__webpack_require__.o=function(t,u){return Object.prototype.hasOwnProperty.call(t,u);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=8);}([function(v,w){function type(a){if(a===null){return"Null";}else if(Array.isArray(a)){return"Array";}else if(typeof a==="boolean"){return"Boolean";}else if(typeof a==="number"){return"Number";}else if(typeof a==="string"){return"String";}else if(a===void 0){return"Undefined";}else if(a instanceof RegExp){return"RegExp";}const x=a.toString();if(x.startsWith("async")){return"Async";}else if(x==="[object Promise]"){return"Promise";}else if(x.includes("function")||x.includes("=>")){return"Function";}return"Object";}v.exports=type;},function(y,z){function baseSlice(A,B,C){let D=-1,E=A.length;C=C>E?E:C;if(C<0){C+=E;}E=B>C?0:C-B>>>0;B>>>=0;const F=Array(E);while(++D<E){F[D]=A[D+B];}return F;}y.exports=baseSlice;},function(G,H,I){const J=I(4);function contains(K,L){if(L===void 0){return M=>contains(K,M);}let N=-1,O=!1;while(++N<L.length&&!O){if(J(L[N],K)){O=!0;}}return O;}G.exports=contains;},function(P,Q){function drop(R,a){if(a===void 0){return S=>drop(R,S);}return a.slice(R);}P.exports=drop;},function(T,U,V){const W=V(0);function equals(a,b){if(b===void 0){return X=>equals(a,X);}else if(a===b){return a!==0||1/a===1/b;}const Y=W(a);if(Y!==W(b)){return!1;}if(Y==="Array"){const Z=Array.from(a),a1=Array.from(b);return Z.sort().toString()===a1.sort().toString();}if(Y==="Object"){const b1=Object.keys(a);if(b1.length===Object.keys(b).length){if(b1.length===0){return!0;}let c1=!0;b1.map(d1=>{if(c1){const e1=W(a[d1]),f1=W(b[d1]);if(e1===f1){if(e1==="Object"){if(Object.keys(a[d1]).length===Object.keys(b[d1]).length){if(Object.keys(a[d1]).length!==0){if(!equals(a[d1],b[d1])){c1=!1;}}}else{c1=!1;}}else if(!equals(a[d1],b[d1])){c1=!1;}}else{c1=!1;}}});return c1;}}return!1;}T.exports=equals;},function(g1,h1){function map(fn,j1){if(j1===void 0){return k1=>map(fn,k1);}let l1=-1;const m1=j1.length,n1=Array(m1);while(++l1<m1){n1[l1]=fn(j1[l1]);}return n1;}g1.exports=map;},function(o1,p1){function merge(q1,r1){if(r1===void 0){return s1=>merge(q1,s1);}return Object.assign({},q1,r1);}o1.exports=merge;},function(t1,u1,v1){u1.add=v1(9);u1.any=v1(11);u1.adjust=v1(10);u1.append=v1(12);u1.compose=v1(13);u1.contains=v1(2);u1.curry=v1(14);u1.defaultTo=v1(15);u1.drop=v1(3);u1.dropLast=v1(16);u1.equals=v1(4);u1.filter=v1(17);u1.find=v1(18);u1.findIndex=v1(19);u1.flatten=v1(20);u1.has=v1(21);u1.head=v1(22);u1.indexOf=v1(23);u1.init=v1(24);u1.join=v1(25);u1.last=v1(26);u1.length=v1(27);u1.map=v1(5);u1.match=v1(28);u1.merge=v1(6);u1.omit=v1(29);u1.path=v1(31);u1.partialCurry=v1(30);u1.pick=v1(32);u1.pluck=v1(33);u1.prepend=v1(34);u1.prop=v1(35);u1.propEq=v1(36);u1.range=v1(37);u1.repeat=v1(39);u1.replace=v1(40);u1.sort=v1(41);u1.sortBy=v1(42);u1.split=v1(43);u1.splitEvery=v1(44);u1.subtract=v1(45);u1.tail=v1(46);u1.take=v1(47);u1.takeLast=v1(48);u1.test=v1(49);u1.toLower=v1(50);u1.toUpper=v1(51);u1.trim=v1(52);u1.type=v1(0);u1.uniq=v1(53);u1.update=v1(54);u1.values=v1(55);u1.reduce=v1(38);},function(w1,x1,y1){const z1=y1(7);w1.exports.R=z1;},function(A1,B1){function add(a,b){if(b===void 0){return c=>add(a,c);}return a+b;}A1.exports=add;},function(C1,D1){function adjust(fn,F1,G1){if(F1===void 0){return(H1,I1)=>adjust(fn,H1,I1);}else if(G1===void 0){return J1=>adjust(fn,F1,J1);}const K1=G1.concat();return K1.map((L1,M1)=>{if(M1===F1){return fn(G1[F1]);}return L1;});}C1.exports=adjust;},function(N1,O1){function any(fn,Q1){if(Q1===void 0){return R1=>any(fn,R1);}let S1=0;while(S1<Q1.length){if(fn(Q1[S1])){return!0;}S1++;}return!1;}N1.exports=any;},function(T1,U1){function append(V1,W1){if(W1===void 0){return X1=>append(V1,X1);}const Y1=W1.concat();Y1.push(V1);return Y1;}T1.exports=append;},function(Z1,a2){const compose=(...fns)=>b2=>{let c2=fns.slice();while(c2.length>0){b2=c2.pop()(b2);}return b2;};Z1.exports=compose;},function(d2,e2){function curry(f,a=[]){return(...p)=>(o=>o.length===f.length?f(...o):curry(f,o))([...a,...p]);}d2.exports=curry;},function(f2,g2,h2){const i2=h2(0);function defaultTo(j2,k2){if(arguments.length===1){return l2=>defaultTo(j2,l2);}return k2===void 0||!(i2(k2)===i2(j2))?j2:k2;}f2.exports=defaultTo;},function(m2,n2){function dropLast(o2,a){if(a===void 0){return p2=>dropLast(o2,p2);}return a.slice(0,-o2);}m2.exports=dropLast;},function(q2,r2){function filter(fn,t2){if(t2===void 0){return u2=>filter(fn,u2);}let v2=-1,w2=0;const x2=t2.length,y2=[];while(++v2<x2){const z2=t2[v2];if(fn(z2)){y2[w2++]=z2;}}return y2;}q2.exports=filter;},function(A2,B2){function find(fn,D2){if(D2===void 0){return E2=>find(fn,E2);}return D2.find(fn);}A2.exports=find;},function(F2,G2){function findIndex(fn,I2){if(I2===void 0){return J2=>findIndex(fn,J2);}const K2=I2.length;let L2=-1;while(++L2<K2){if(fn(I2[L2])){return L2;}}return-1;}F2.exports=findIndex;},function(M2,N2){function flatten(O2,P2){P2=P2===void 0?[]:P2;for(let i=0;i<O2.length;i++){if(Array.isArray(O2[i])){flatten(O2[i],P2);}else{P2.push(O2[i]);}}return P2;}M2.exports=flatten;},function(Q2,R2){function has(S2,T2){if(T2===void 0){return U2=>has(S2,U2);}return T2[S2]!==void 0;}Q2.exports=has;},function(V2,W2){function head(a){if(typeof a==="string"){return a[0]||"";}return a[0];}V2.exports=head;},function(X2,Y2){function indexOf(Z2,a3){if(a3===void 0){return b3=>indexOf(Z2,b3);}let c3=-1;const d3=a3.length;while(++c3<d3){if(a3[c3]===Z2){return c3;}}return-1;}X2.exports=indexOf;},function(e3,f3,g3){const h3=g3(1);function init(a){if(typeof a==="string"){return a.slice(0,-1);}return a.length?h3(a,0,-1):[];}e3.exports=init;},function(i3,j3){function join(k3,l3){if(l3===void 0){return m3=>join(k3,m3);}return l3.join(k3);}i3.exports=join;},function(n3,o3){function last(a){if(typeof a==="string"){return a[a.length-1]||"";}return a[a.length-1];}n3.exports=last;},function(p3,q3){function length(r3){return r3.length;}p3.exports=length;},function(s3,t3){function match(u3,v3){if(v3===void 0){return w3=>match(u3,w3);}const x3=v3.match(u3);return x3===null?[]:x3;}s3.exports=match;},function(y3,z3){function omit(A3,B3){if(B3===void 0){return C3=>omit(A3,C3);}const D3={};for(key in B3){if(!A3.includes(key)){D3[key]=B3[key];}}return D3;}y3.exports=omit;},function(E3,F3,G3){const H3=G3(0),I3=G3(6);function curry(fn,K3={}){return L3=>{if(H3(fn)==="Async"){return new Promise((M3,N3)=>{fn(I3(L3,K3)).then(M3).catch(N3);});}return fn(I3(L3,K3));};}E3.exports=curry;},function(O3,P3){function path(Q3,R3){if(R3===void 0){return S3=>path(Q3,S3);}let T3=R3,U3=0;if(typeof Q3==="string"){Q3=Q3.split(".");}while(U3<Q3.length){if(T3===null){return void 0;}T3=T3[Q3[U3]];U3++;}return T3;}O3.exports=path;},function(V3,W3){function pick(X3,Y3){if(Y3===void 0){return Z3=>pick(X3,Z3);}const a4={};let b4=0;while(b4<X3.length){if(X3[b4]in Y3){a4[X3[b4]]=Y3[X3[b4]];}b4++;}return a4;}V3.exports=pick;},function(c4,d4,e4){const f4=e4(5);function pluck(g4,h4){if(h4===void 0){return i4=>pluck(g4,i4);}const j4=[];f4(k4=>{if(!(k4[g4]===void 0)){j4.push(k4[g4]);}},h4);return j4;}c4.exports=pluck;},function(l4,m4){function prepend(n4,o4){if(o4===void 0){return p4=>prepend(n4,p4);}const q4=o4.concat();q4.unshift(n4);return q4;}l4.exports=prepend;},function(r4,s4){function prop(t4,u4){if(u4===void 0){return v4=>prop(t4,v4);}return u4[t4];}r4.exports=prop;},function(w4,x4){function propEq(y4,z4,A4){if(z4===void 0){return(B4,C4)=>propEq(y4,B4,C4);}else if(A4===void 0){return D4=>propEq(y4,z4,D4);}return A4[y4]===z4;}w4.exports=propEq;},function(E4,F4){function range(G4,H4){const I4=[];for(let i=G4;i<H4;i++){I4.push(i);}return I4;}E4.exports=range;},function(J4,K4){function reduce(fn,M4,N4){if(M4===void 0){return(O4,P4)=>reduce(fn,O4,P4);}else if(N4===void 0){return Q4=>reduce(fn,M4,Q4);}return N4.reduce(fn,M4);}J4.exports=reduce;},function(R4,S4){function repeat(a,T4){if(T4===void 0){return U4=>repeat(a,U4);}const V4=Array(T4);return V4.fill(a);}R4.exports=repeat;},function(W4,X4){function replace(Y4,Z4,a5){if(Z4===void 0){return(b5,c5)=>replace(Y4,b5,c5);}else if(a5===void 0){return d5=>replace(Y4,Z4,d5);}return a5.replace(Y4,Z4);}W4.exports=replace;},function(e5,f5){function sort(fn,h5){if(h5===void 0){return i5=>sort(fn,i5);}const j5=h5.concat();return j5.sort(fn);}e5.exports=sort;},function(k5,l5){function sortBy(fn,n5){if(n5===void 0){return o5=>sortBy(fn,o5);}const p5=n5.concat();return p5.sort((a,b)=>{const q5=fn(a),r5=fn(b);return q5<r5?-1:q5>r5?1:0;});}k5.exports=sortBy;},function(s5,t5){function split(u5,v5){if(v5===void 0){return w5=>split(u5,w5);}return v5.split(u5);}s5.exports=split;},function(x5,y5){function splitEvery(z5,a){if(a===void 0){return A5=>splitEvery(z5,A5);}z5=z5>1?z5:1;const B5=[];let C5=0;while(C5<a.length){B5.push(a.slice(C5,C5+=z5));}return B5;}x5.exports=splitEvery;},function(D5,E5){function subtract(a,b){if(b===void 0){return F5=>subtract(a,F5);}return a-b;}D5.exports=subtract;},function(G5,H5,I5){const J5=I5(3);function tail(K5){return J5(1,K5);}G5.exports=tail;},function(L5,M5,N5){const O5=N5(1);function take(P5,a){if(a===void 0){return Q5=>take(P5,Q5);}else if(typeof a==="string"){return a.slice(0,P5);}return O5(a,0,P5);}L5.exports=take;},function(R5,S5,T5){const U5=T5(1);function takeLast(V5,a){if(a===void 0){return W5=>takeLast(V5,W5);}const X5=a.length;V5=V5>X5?X5:V5;if(typeof a==="string"){return a.slice(X5-V5);}V5=X5-V5;return U5(a,V5,X5);}R5.exports=takeLast;},function(Y5,Z5){function test(a6,b6){if(b6===void 0){return c6=>test(a6,c6);}return b6.search(a6)===-1?!1:!0;}Y5.exports=test;},function(d6,e6){function toLower(f6){return f6.toLowerCase();}d6.exports=toLower;},function(g6,h6){function toUpper(i6){return i6.toUpperCase();}g6.exports=toUpper;},function(j6,k6){function trim(l6){return l6.trim();}j6.exports=trim;},function(m6,n6,o6){const p6=o6(2);function uniq(q6){let r6=-1;const s6=[];while(++r6<q6.length){const t6=q6[r6];if(!p6(t6,s6)){s6.push(t6);}}return s6;}m6.exports=uniq;},function(u6,v6){function update(w6,x6,y6){if(x6===void 0){return(z6,A6)=>update(w6,z6,A6);}else if(y6===void 0){return B6=>update(w6,x6,B6);}const C6=y6.concat();return C6.fill(x6,w6,w6+1);}u6.exports=update;},function(D6,E6){function values(F6){const G6=[];for(key in F6){G6.push(F6[key]);}return G6;}D6.exports=values;}]);});