import{E as i,i as C,b as E,r as N,B as _}from"./variables-beufmETK.js";class g{constructor(e){this.elementCreator=this.createView(e)}getHtmlElement(){return this.elementCreator.getElement()}createView(e){const t={tag:e.tag,classNames:e.classNames,textContent:e.textContent,callback:e.callback,attribute:e.attribute};return new i(t)}}class S extends g{constructor(e){const t={tag:"div",classNames:["button"]};super(t),this.configureView(e)}configureView(e){const t=this.elementCreator.getElement(),a=new i({tag:"label",classNames:["button__label"],attribute:[{id:"for",value:e.id}]}).getElement(),s=new i({tag:"div",classNames:["button__icon"]}).getElement(),d=new i({tag:"img",classNames:[],attribute:[{id:"src",value:e.image}]}).getElement();s.append(d);const n=new i({tag:"span",classNames:["button__title"],textContent:e.title}).getElement();t.append(a,s,n)}}const f=[{name:"Irish coffee",description:"Fragrant black coffee with Jameson Irish whiskey and whipped milk",price:"7.00",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Kahlua coffee",description:"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",price:"7.00",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Honey raf",description:"Espresso with frothed milk, cream and aromatic honey",price:"5.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Ice cappuccino",description:"Cappuccino with soft thick foam in summer version with ice",price:"5.00",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Espresso",description:"Classic black coffee",price:"4.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Latte",description:"Espresso coffee with the addition of steamed milk and dense milk foam",price:"5.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Latte macchiato",description:"Espresso with frothed milk and chocolate",price:"5.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Coffee with cognac",description:"Fragrant black coffee with cognac and whipped cream",price:"6.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Moroccan",description:"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",price:"4.50",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Ginger",description:"Original black tea with fresh ginger, lemon and honey",price:"5.00",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Cranberry",description:"Invigorating black tea with cranberry and honey",price:"5.00",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Sea buckthorn",description:"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",price:"5.50",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Marble cheesecake",description:"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",price:"3.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Red velvet",description:"Layer cake with cream cheese frosting",price:"4.00",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Cheesecakes",description:"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Creme brulee",description:"Delicate creamy dessert in a caramel basket with wild berries",price:"4.00",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Pancakes",description:"Tender pancakes with strawberry jam and fresh strawberries",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Honey cake",description:"Classic honey cake with delicate custard",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Chocolate cake",description:"Cake with hot chocolate filling and nuts with dried apricots",price:"5.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Black forest",description:"A combination of thin sponge cake with cherry jam and light chocolate mousse",price:"6.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]}];class b extends g{constructor(e){const t={tag:"div",classNames:["block-buttons__choice-block"]};super(t),this.cardItem=new o,this.configureView(e)}configureView(e){const t=this.elementCreator.getElement();for(const s in e){const d=e[s].name?e[s].name.split(" ")[0]:s,n=e[s].name?"additives":"size",c=new i({tag:"input",classNames:["block-buttons__input"],attribute:[{id:"id",value:d},{id:"type",value:`${n==="size"?"radio":"checkbox"}`},{id:"name",value:`${n}`}],callback:[{event:"click",callback:()=>this.handleChange()}]}).getElement();s==="s"&&c.setAttribute("checked",!0),t.append(c)}const a=new i({tag:"div",classNames:["block-buttons__buttons-view"]}).getElement();for(const s in e){const d=e[s].name?e[s].name.split(" ")[0]:s,n=new i({tag:"div",classNames:["button"]}).getElement(),c=new i({tag:"label",classNames:["button__label"],attribute:[{id:"for",value:d}]}).getElement(),r=new i({tag:"div",classNames:["button__icon"],textContent:`${e[s].name?+s+1:s}`}).getElement(),p=new i({tag:"span",classNames:["button__title"],textContent:`${e[s].name?e[s].name:e[s].size}`}).getElement();n.append(c,r,p),a.append(n)}t.append(a)}handleChange(){this.cardItem.handleChangeCost()}}const x="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_268_12877)'%3e%3cpath%20d='M8%207.66663V11'%20stroke='%23403F3D'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%205.00667L8.00667%204.99926'%20stroke='%23403F3D'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.99967%2014.6667C11.6816%2014.6667%2014.6663%2011.6819%2014.6663%208.00004C14.6663%204.31814%2011.6816%201.33337%207.99967%201.33337C4.31778%201.33337%201.33301%204.31814%201.33301%208.00004C1.33301%2011.6819%204.31778%2014.6667%207.99967%2014.6667Z'%20stroke='%23403F3D'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_268_12877'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";class B extends g{constructor(){const e={tag:"div",classNames:["modal__info"]};super(e),this.configureView()}configureView(){const e=this.elementCreator.getElement(),t=`<div class="info__icon">
            <img src=${x} alt="info-image">
        </div>
        <div class="info__text">
            The cost is not final. 
			Download our mobile app to see the final price and place your order. 
			Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
        </div>`;e.innerHTML=t}}class o extends g{constructor(){const e={tag:"div",classNames:["modal__window"]};if(super(e),o.exists)return o.instance;o.instance=this,o.exists=!0,this.modalView=document.querySelector(".modal"),this.cost=0,this.modal=new l}configureView(e){this.product=f.find(s=>s.name===e);const a=f.filter(s=>s.category===this.product.category).findIndex(s=>s.name===this.product.name);this.createContent(this.product,a)}createContent(e,t){const a=this.elementCreator.getElement();a.replaceChildren();const s=new i({tag:"div",classNames:["modal__poster"]}).getElement(),d=new i({tag:"img",classNames:[],attribute:[{id:"src",value:C[e.category][t]}]}).getElement();s.append(d);const n=new i({tag:"div",classNames:["modal__description"]}).getElement(),c=new i({tag:"div",classNames:["modal__title"]}).getElement();c.append(new i({tag:"div",classNames:[],textContent:`${e.name}`}).getElement(),new i({tag:"span",classNames:[],textContent:`${e.description}`}).getElement());const r=new i({tag:"div",classNames:["modal__block-buttons"]}).getElement(),p=new i({tag:"div",classNames:["modal__block-buttons"]}).getElement(),v=new i({tag:"div",classNames:["block-buttons__title"],textContent:"Size"}).getElement(),z=new i({tag:"div",classNames:["block-buttons__title"],textContent:"Additives"}).getElement();r.append(v,new b({...e.sizes}).getHtmlElement()),p.append(z,new b({...e.additives}).getHtmlElement());const u=new i({tag:"div",classNames:["modal__total"]}).getElement();this.price=new i({tag:"div",classNames:[],textContent:`$${e.price}`}).getElement(),u.append(new i({tag:"div",classNames:[],textContent:"Total:"}).getElement(),this.price);const k=new i({tag:"button",classNames:["modal__close-btn"],textContent:"Close",callback:[{event:"click",callback:()=>this.handleClose()}]}).getElement(),y=new B().getHtmlElement();n.append(c,r,p,u,y,k),a.append(s,n),this.modalView.append(a)}handleChangeCost(){this.cost=0;const e=document.querySelectorAll("input[name=size]:checked"),t=document.querySelectorAll("input[name=additives]:checked");e.forEach(n=>{for(const c in this.product.sizes[n.id])+this.product.sizes[n.id][c]&&(this.cost+=+this.product.sizes[n.id][c])}),t.forEach(n=>{const c=this.product.additives.find(r=>r.name===n.id);for(const r in c)+c[r]&&(this.cost+=+c[r])});const a=+this.product.price+this.cost,s=String(a).split(".")[0],d=String(a).split(".")[1];this.price.textContent=`$${`${s}.${d?`${d}0`:"00"}`}`}handleClose(){this.modal.closeModal()}}class l{constructor(){if(l.exists)return l.instance;l.instance=this,l.exists=!0,this.show=!1,this.modal=document.querySelector(".modal"),this.modal.addEventListener("click",e=>{e.target===e.currentTarget&&this.closeModal()}),this.cardItem=new o}configureView(e){this.cardItem.configureView(e)}render(e){this.getStatus()?(this.modal.classList.add("active"),this.configureView(e)):(this.modal.classList.add("close"),setTimeout(()=>{this.modal.classList.remove("active"),this.modal.classList.remove("close"),this.modal.replaceChildren()},300))}showModal(e){this.show=!0,this.render(e)}closeModal(){this.show=!1,this.render()}getStatus(){return this.show}}class w{constructor(){this.grid=document.querySelector("#grid"),this.modal=new l}configureView(e){this.grid.childNodes.length?(this.grid.childNodes.forEach(t=>{t.classList.remove("open"),t.classList.add("close")}),setTimeout(()=>{this.grid.replaceChildren(),e.forEach((t,a)=>{this.grid.append(this.createItem(t,a))}),this.grid.childNodes.forEach(t=>{t.classList.add("open"),setTimeout(()=>{t.classList.remove("open")},200)})},200)):(this.grid.replaceChildren(),e.forEach((t,a)=>{this.grid.append(this.createItem(t,a))}))}createItem(e,t){const a=new i({tag:"li",classNames:["grid__item"],attribute:[{id:"id",value:e.name}]}).getElement();a.addEventListener("click",k=>{this.modal.showModal(k.currentTarget.id)});const s=new i({tag:"div",classNames:["grid__poster"]}).getElement(),d=new i({tag:"div",classNames:["grid__description"]}).getElement(),n=new i({tag:"div",classNames:["grid__title"],textContent:e.name}).getElement(),c=new i({tag:"div",classNames:["spinner"]}).getElement(),r=new i({tag:"div",classNames:[]}).getElement(),p=new i({tag:"div",classNames:[]}).getElement();c.append(r,p);const v=new i({tag:"img",classNames:[],attribute:[{id:"src",value:C[e.category][t]},{id:"onload",value:"imgLoaded(this)"}]}).getElement();s.append(c,v);const z=new i({tag:"div",classNames:["grid__subtitle"],textContent:e.description}).getElement(),u=new i({tag:"div",classNames:["grid__price"],textContent:`$${e.price}`}).getElement();return d.append(n,z,u),a.append(s,d),a}}class L{constructor(){this.button=document.querySelector(".main__button"),this.button.addEventListener("click",()=>this.handleClick()),this.button.addEventListener("animationend",()=>this.toggleClass()),this.blockButton=new m}showBtn(){this.button.classList.add("show")}hideBtn(){this.button.classList.remove("show")}handleClick(){this.button.classList.add("active")}toggleClass(){this.button.classList.remove("active"),this.blockButton.handleRefresh()}}class m extends g{constructor(){const e={tag:"div",classNames:["main__block-button"]};if(super(e),m.exists)return m.instance;m.instance=this,m.exists=!0,this.checked=E.coffee,this.isPress=!1,this.control=document.querySelector("#control"),this.refreshBtn=new L,this.configureView(),this.grid=new w,window.addEventListener("resize",()=>{this.handleResize()})}configureView(){const e=this.elementCreator.getElement();N.forEach(t=>{const a=new i({tag:"input",classNames:["input-menu"],attribute:[{id:"id",value:t.id},{id:"type",value:"radio"},{id:"name",value:"menu"}],callback:[{event:"click",callback:()=>this.handleChange(t.id)}]}).getElement();t.id===this.checked&&(this.handleChange(t.id),a.setAttribute("checked",!0)),this.control.append(a),e.append(new S(t).getHtmlElement())}),this.control.append(e)}handleChange(e){e===this.checked&&this.isPress||(this.checked=e,this.isPress=!0,this.handleResize())}handleRefresh(){const e=new w,t=f.filter(a=>a.category===this.checked);e.configureView(t),this.refreshBtn.hideBtn()}handleResize(){const e=new w,t=this.checked,a=f.filter(s=>s.category===t);window.innerWidth<769&&a.length>4?this.refreshBtn.showBtn():this.refreshBtn.hideBtn(),window.innerWidth<769&&a.splice(4,a.length-1),e.configureView(a)}}new _;new m;new w;
//# sourceMappingURL=menu-tBWL7uch.js.map