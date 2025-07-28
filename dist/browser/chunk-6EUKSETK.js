import{Ca as K,Da as f,Ia as L,La as D,Ma as z,Pa as J,Qa as Ce,Sa as ve,Xa as _e,b as q,bb as $e,d as ke,e as ye,f as P,fb as we,gb as Te,h as O,jb as Ie,na as Y,oa as j,pa as xe}from"./chunk-OMNRPH7K.js";import{$b as he,Aa as ce,Ab as G,Bb as C,Bc as s,Cb as R,Cc as V,Db as ue,Eb as de,Fb as be,Gb as h,Hb as k,Ib as I,Jb as te,Kb as oe,Lb as U,Mb as Q,Ob as F,Pb as g,Tb as M,Ub as Z,Vb as y,Wb as x,X as E,Y as B,Ya as c,Z as N,_b as pe,ca as v,fc as S,gc as ge,hc as H,ic as X,ja as ae,jb as w,ka as _,kb as A,la as $,lc as fe,ma as re,nb as T,oa as b,pb as p,qa as le,sc as me,va as m,wb as u,xb as l,zb as se}from"./chunk-BEX564FU.js";var Me=(()=>{class e extends we{static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["MinusIcon"]],features:[T],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(re(),h(0,"svg",0),I(1,"path",1),k()),n&2&&(C(o.getClassNames()),u("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var ze=["checkboxicon"],Ne=["input"],Ae=()=>({"p-checkbox-input":!0}),je=e=>({checked:e,class:"p-checkbox-icon"});function Re(e,r){if(e&1&&I(0,"span",8),e&2){let t=g(3);l("ngClass",t.checkboxIcon),u("data-pc-section","icon")}}function Qe(e,r){e&1&&I(0,"CheckIcon",9),e&2&&(l("styleClass","p-checkbox-icon"),u("data-pc-section","icon"))}function qe(e,r){if(e&1&&(te(0),p(1,Re,1,2,"span",7)(2,Qe,1,2,"CheckIcon",6),oe()),e&2){let t=g(2);c(),l("ngIf",t.checkboxIcon),c(),l("ngIf",!t.checkboxIcon)}}function Pe(e,r){e&1&&I(0,"MinusIcon",9),e&2&&(l("styleClass","p-checkbox-icon"),u("data-pc-section","icon"))}function Ke(e,r){if(e&1&&(te(0),p(1,qe,3,2,"ng-container",4)(2,Pe,1,2,"MinusIcon",6),oe()),e&2){let t=g();c(),l("ngIf",t.checked),c(),l("ngIf",t._indeterminate())}}function Ge(e,r){}function Ue(e,r){e&1&&p(0,Ge,0,0,"ng-template")}var He=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,Ze={root:({instance:e,props:r})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Be=(()=>{class e extends L{name="checkbox";theme=He;classes=Ze;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var Xe={provide:z,useExisting:E(()=>Ee),multi:!0},Ee=(()=>{class e extends D{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new m;onFocus=new m;onBlur=new m;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:xe(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=ce(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=v(Be);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let n,o=this.injector.get(J,null,{optional:!0,self:!0}),i=o&&!this.formControl?o.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=i.filter(a=>!j(a,this.value)):n=i?[...i,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,i){if(n&1&&(M(i,ze,4),M(i,K,4)),n&2){let a;y(a=x())&&(o.checkboxIconTemplate=a.first),y(a=x())&&(o.templates=a)}},viewQuery:function(n,o){if(n&1&&Z(Ne,5),n&2){let i;y(i=x())&&(o.inputViewChild=i.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",s],binary:[2,"binary","binary",s],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",V],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",s],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",s],required:[2,"required","required",s],autofocus:[2,"autofocus","autofocus",s],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[S([Xe,Be]),T,ae],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,o){if(n&1){let i=Q();h(0,"div",1)(1,"input",2,0),F("focus",function(d){return _(i),$(o.onInputFocus(d))})("blur",function(d){return _(i),$(o.onInputBlur(d))})("change",function(d){return _(i),$(o.handleChange(d))}),k(),h(3,"div",3),p(4,Ke,3,2,"ng-container",4)(5,Ue,1,0,null,5),k()()}n&2&&(G(o.style),C(o.styleClass),l("ngClass",o.containerClass),u("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),c(),G(o.inputStyle),C(o.inputClass),l("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",ge(26,Ae)),u("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required?!0:null)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),c(3),l("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),c(),l("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",H(27,je,o.checked)))},dependencies:[O,q,ke,P,Te,Me,f],encapsulation:2,changeDetection:0})}return e})(),Pt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=A({type:e});static \u0275inj=N({imports:[Ee,f,f]})}return e})();var Ye=["icon"],Je=["content"],Se=e=>({$implicit:e}),We=(e,r)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":r});function et(e,r){e&1&&U(0)}function tt(e,r){if(e&1&&I(0,"span",1),e&2){let t=g(3);C(t.checked?t.onIcon:t.offIcon),l("ngClass",X(4,We,t.iconPos==="left",t.iconPos==="right")),u("data-pc-section","icon")}}function ot(e,r){if(e&1&&p(0,tt,1,7,"span",3),e&2){let t=g(2);R(t.onIcon||t.offIcon?0:-1)}}function nt(e,r){e&1&&U(0)}function it(e,r){if(e&1&&p(0,nt,1,0,"ng-container",2),e&2){let t=g(2);l("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",H(2,Se,t.checked))}}function at(e,r){if(e&1&&(p(0,ot,1,1)(1,it,1,4,"ng-container"),h(2,"span",1),pe(3),k()),e&2){let t=g();R(t.iconTemplate?1:0),c(2),l("ngClass",t.cx("label")),u("data-pc-section","label"),c(),he(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var rt=({dt:e})=>`
p-togglebutton {
    display: inline-flex;
}

.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,lt={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Fe=(()=>{class e extends L{name="togglebutton";theme=rt;classes=lt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var ct={provide:z,useExisting:E(()=>ie),multi:!0},ie=(()=>{class e extends D{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new m;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=v(Fe);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,i){if(n&1&&(M(i,Ye,4),M(i,Je,4),M(i,K,4)),n&2){let a;y(a=x())&&(o.iconTemplate=a.first),y(a=x())&&(o.contentTemplate=a.first),y(a=x())&&(o.templates=a)}},hostVars:2,hostBindings:function(n,o){n&2&&C(o.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",s],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",V],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",s],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[S([ct,Fe]),T],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,o){n&1&&(h(0,"button",0),F("click",function(a){return o.toggle(a)}),h(1,"span",1),p(2,et,1,0,"ng-container",2)(3,at,4,4),k()()),n&2&&(C(o.styleClass),l("ngClass",o.cx("root"))("tabindex",o.tabindex)("disabled",o.disabled),u("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled),c(),l("ngClass",o.cx("content")),c(),l("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",H(13,Se,o.checked)),c(),R(o.contentTemplate?-1:3))},dependencies:[Ie,O,q,P,f],encapsulation:2,changeDetection:0})}return e})();var st=["item"],ut=(e,r)=>({$implicit:e,index:r});function dt(e,r){e&1&&U(0)}function bt(e,r){if(e&1&&p(0,dt,1,0,"ng-container",3),e&2){let t=g(2),n=t.$implicit,o=t.$index,i=g();l("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",X(2,ut,n,o))}}function pt(e,r){e&1&&p(0,bt,1,5,"ng-template",null,0,me)}function ht(e,r){if(e&1){let t=Q();h(0,"p-toggleButton",2),F("onChange",function(o){let i=_(t),a=i.$implicit,d=i.$index,ee=g();return $(ee.onOptionSelect(o,a,d))}),p(1,pt,2,0),k()}if(e&2){let t=r.$implicit,n=g();l("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(t))("onLabel",n.getOptionLabel(t))("offLabel",n.getOptionLabel(t))("disabled",n.disabled||n.isOptionDisabled(t))("allowEmpty",n.allowEmpty)("size",n.size),c(),R(n.itemTemplate||n._itemTemplate?1:-1)}}var gt=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,ft={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},Ve=(()=>{class e extends L{name="selectbutton";theme=gt;classes=ft;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var mt={provide:z,useExisting:E(()=>Oe),multi:!0},Oe=(()=>{class e extends D{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new m;onChange=new m;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=v(Ve);getOptionLabel(t){return this.optionLabel?Y(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?Y(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?Y(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,n,o){if(this.disabled||this.isOptionDisabled(n))return;let i=this.isSelected(n);if(i&&this.unselectable)return;let a=this.getOptionValue(n),d;if(this.multiple)i?d=this.value.filter(ee=>!j(ee,a,this.equalityKey)):d=this.value?[...this.value,a]:[a];else{if(i&&!this.allowEmpty)return;d=i?null:a}this.focusedIndex=o,this.value=d,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:n,index:o})}changeTabIndexes(t,n){let o,i;for(let a=0;a<=this.el.nativeElement.children.length-1;a++)this.el.nativeElement.children[a].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[a],index:a});n==="prev"?o.index===0?i=this.el.nativeElement.children.length-1:i=o.index-1:o.index===this.el.nativeElement.children.length-1?i=0:i=o.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(t,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(n=>!j(n,this.getOptionValue(t),this.dataKey))}isSelected(t){let n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(j(i,o,this.dataKey)){n=!0;break}}}else n=j(this.getOptionValue(t),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,i){if(n&1&&(M(i,st,4),M(i,K,4)),n&2){let a;y(a=x())&&(o.itemTemplate=a.first),y(a=x())&&(o.templates=a)}},hostVars:10,hostBindings:function(n,o){n&2&&(u("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),G(o.style),se("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",s],tabindex:[2,"tabindex","tabindex",V],multiple:[2,"multiple","multiple",s],allowEmpty:[2,"allowEmpty","allowEmpty",s],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",s],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",s]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[S([mt,Ve]),T],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&de(0,ht,2,9,"p-toggleButton",1,ue),n&2&&be(o.options)},dependencies:[ie,_e,Ce,ve,O,P,f],encapsulation:2,changeDetection:0})}return e})(),Mo=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=A({type:e});static \u0275inj=N({imports:[Oe,f,f]})}return e})();var kt=["input"],yt=(e,r,t,n,o)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":e,"p-disabled":r,"p-variant-filled":t,"p-radiobutton-sm p-inputfield-sm":n,"p-radiobutton-lg p-inputfield-lg":o}),xt=({dt:e})=>`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("radiobutton.width")};
    height: ${e("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${e("radiobutton.border.color")};
    background: ${e("radiobutton.background")};
    width: ${e("radiobutton.width")};
    height: ${e("radiobutton.height")};
    transition: background ${e("radiobutton.transition.duration")}, color ${e("radiobutton.transition.duration")}, border-color ${e("radiobutton.transition.duration")}, box-shadow ${e("radiobutton.transition.duration")}, outline-color ${e("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${e("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${e("radiobutton.icon.size")};
    width: ${e("radiobutton.icon.size")};
    height: ${e("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${e("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.border.color")};
    background: ${e("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.hover.border.color")};
    background: ${e("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${e("radiobutton.focus.border.color")};
    box-shadow: ${e("radiobutton.focus.ring.shadow")};
    outline: ${e("radiobutton.focus.ring.width")} ${e("radiobutton.focus.ring.style")} ${e("radiobutton.focus.ring.color")};
    outline-offset: ${e("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.focus.border.color")};
}

p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
    border-color: ${e("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${e("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${e("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${e("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${e("radiobutton.disabled.background")};
    border-color: ${e("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${e("radiobutton.sm.width")};
    height: ${e("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${e("radiobutton.icon.sm.size")};
    width: ${e("radiobutton.icon.sm.size")};
    height: ${e("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${e("radiobutton.lg.width")};
    height: ${e("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${e("radiobutton.icon.lg.size")};
    width: ${e("radiobutton.icon.lg.size")};
    height: ${e("radiobutton.icon.lg.size")};
}
`,Ct={root:({instance:e,props:r})=>["p-radiobutton p-component",{"p-radiobutton-checked":e.checked,"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},Le=(()=>{class e extends L{name="radiobutton";theme=xt;classes=Ct;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var vt={provide:z,useExisting:E(()=>De),multi:!0},_t=(()=>{class e{accessors=[];add(t,n){this.accessors.push([t,n])}remove(t){this.accessors=this.accessors.filter(n=>n[1]!==t)}select(t){this.accessors.forEach(n=>{this.isSameGroup(n,t)&&n[1]!==t&&n[1].writeValue(t.value)})}isSameGroup(t,n){return t[0].control?t[0].control.root===n.control.control.root&&t[1].name===n.name:!1}static \u0275fac=function(n){return new(n||e)};static \u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),De=(()=>{class e extends D{value;formControlName;name;disabled;variant;size;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;autofocus;binary;onClick=new m;onFocus=new m;onBlur=new m;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;_componentStyle=v(Le);injector=v(le);registry=v(_t);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(J),this.checkName(),this.registry.add(this.control,this)}onChange(t){this.disabled||this.select(t)}select(t){this.disabled||(this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:t,value:this.value}))}writeValue(t){this.binary?this.checked=!!t:this.checked=t==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onModelTouched(),this.onBlur.emit(t)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(n,o){if(n&1&&Z(kt,5),n&2){let i;y(i=x())&&(o.inputViewChild=i.first)}},inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",s],variant:"variant",size:"size",tabindex:[2,"tabindex","tabindex",V],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",s],binary:[2,"binary","binary",s]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[S([vt,Le]),T],decls:5,vars:24,consts:[["input",""],[3,"ngStyle","ngClass"],["type","radio",1,"p-radiobutton-input",3,"focus","blur","change","checked","disabled","value","pAutoFocus"],[1,"p-radiobutton-box"],[1,"p-radiobutton-icon"]],template:function(n,o){if(n&1){let i=Q();h(0,"div",1)(1,"input",2,0),F("focus",function(d){return _(i),$(o.onInputFocus(d))})("blur",function(d){return _(i),$(o.onInputBlur(d))})("change",function(d){return _(i),$(o.onChange(d))}),k(),h(3,"div",3),I(4,"div",4),k()()}n&2&&(C(o.styleClass),l("ngStyle",o.style)("ngClass",fe(18,yt,o.checked,o.disabled,o.variant==="filled"||o.config.inputStyle()==="filled"||o.config.inputVariant()==="filled",o.size==="small",o.size==="large")),u("data-pc-name","radiobutton")("data-pc-section","root"),c(),l("checked",o.checked)("disabled",o.disabled)("value",o.value)("pAutoFocus",o.autofocus),u("id",o.inputId)("name",o.name)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("tabindex",o.tabindex)("aria-checked",o.checked),c(2),u("data-pc-section","input"),c(),u("data-pc-section","icon"))},dependencies:[O,q,ye,$e,f],encapsulation:2,changeDetection:0})}return e})(),Po=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=A({type:e});static \u0275inj=N({imports:[De,f,f]})}return e})();export{Ee as a,Pt as b,Oe as c,Mo as d,De as e,Po as f};
