"use strict";(self["webpackChunkX_ISC"]=self["webpackChunkX_ISC"]||[]).push([[941],{50371:(e,n,t)=>{t.r(n),t.d(n,{default:()=>K});var a=t(54119),o=(t(50113),t(74423),t(26099),t(21699),t(47764),t(5745),t(98992),t(72577),t(62953),t(3296),t(27208),t(48408),t(14603),t(47566),t(98721),t(56768)),i=t(90144),r=t(24232);const s=t.p+"img/o1-pro-log.12aa7588.png",l=t.p+"img/overviewf3.72aca71c.png",c=t.p+"img/internal_confidence.60b88c7c.png",u=t.p+"img/case.86d0efe0.png",d=t.p+"img/humanCognitiveBiasf.e0097809.png",f=t.p+"img/mergedMitigation2.1e7564fc.png";var v={class:"project-page"},k={class:"container main-content"},p={class:"section-content"},b={class:"quick-glance-video"},m=["src"],g={class:"container main-content"},h={class:"video-section"},L={class:"video-options"},w={class:"video-selector-list"},F=["onClick"],y={class:"model-name"},C={class:"question"},_={class:"video-player"},T=["src"],x={class:"container main-content"},P={class:"section",id:"abstract"},S={class:"section-content"},A={class:"section",id:"failure"},M={class:"section-content"},q={style:{display:"flex","justify-content":"center"}},G={class:"section",id:"interpretation"},W={class:"section-content"},I={class:"method-box"},E={class:"method-box"},B={class:"method-box"},j={class:"section",id:"alleviation"},X={class:"section-content"},R={style:{display:"flex","justify-content":"center"}},O={style:{display:"flex","justify-content":"center"}};const Q=(0,o.pM)({__name:"ProjectView",setup:function(e){var n=[{model:"ChatGPT o1-preview",acc1:"78.7 (↓4.9)",overturned:"13.2"},{model:"ChatGPT o1-mini",acc1:"74.1 (↓4.2)",overturned:"15.6"},{model:"ChatGPT 4o",acc1:"79.2 (↓4.9)",overturned:"11.3"},{model:"ChatGPT 3.5-turbo",acc1:"62.5 (↓12.1)",overturned:"34.0"},{model:"Llama-3.1-8B",acc1:"49.2 (↓20.4)",overturned:"58.8"},{model:"Llama-3-8B",acc1:"50.1 (↓20.3)",overturned:"58.2"},{model:"Llama-2-7B",acc1:"52.8 (↓8.7)",overturned:"26.5"}],Q=[{model:"GPT-4o",acc1:"79.2 (↓4.9)",overturned:"11.3"},{model:"+ Question repeating",acc1:"83.6 (↓0.5)",overturned:"6.0"},{model:"+ SFT",acc1:{value:"87.7",delta:"4.1",bold:!0},overturned:{value:"0",bold:!0}},{model:"GPT-3.5-turbo",acc1:"62.5 (↓12.1)",overturned:"34.0"},{model:"+ Question repeating",acc1:"67.4 (↓7.2)",overturned:"23.1"},{model:"+ SFT",acc1:{value:"76.2",delta:"↑1.6",bold:!0},overturned:{value:"0",bold:!0}},{model:"Llama-3.1-8B",acc1:"49.2 (↓20.4)",overturned:"58.8"},{model:"+ Question repeating",acc1:"52.4 (↓17.2)",overturned:"52.8"},{model:"+ SFT",acc1:{value:"70.3",delta:"↓0.7",bold:!0},overturned:{value:"0",bold:!0}}],z=[{task:"Decision Making",model:"GPT-4o",acc1:"14.2 (↓20.9)",overturned:"76.6"},{task:"Decision Making",model:"+ SFT",acc1:{value:"14.9",delta:"↓20.2",bold:!0},overturned:{value:"68.1",bold:!0}},{task:"Decision Making",model:"GPT-3.5-turbo",acc1:"7.5 (↓5.2)",overturned:"76.5"},{task:"Decision Making",model:"+ SFT",acc1:{value:"17.9",delta:"↑5.2",bold:!0},overturned:{value:"41.2",bold:!0}},{task:"Reasoning",model:"GPT-4o",acc1:"65.0 (↓2.0)",overturned:"17.9"},{task:"Reasoning",model:"+ SFT",acc1:{value:"68.0",delta:"↑1.0",bold:!0},overturned:{value:"6.0",bold:!0}},{task:"Reasoning",model:"GPT-3.5-turbo",acc1:"55.0 (↓6.0)",overturned:"19.7"},{task:"Reasoning",model:"+ SFT",acc1:{value:"59.0",delta:"↓2.0",bold:!0},overturned:{value:"13.1",bold:!0}},{task:"Programming",model:"GPT-4o",acc1:"72.6 (↓6.8)",overturned:"21.9"},{task:"Programming",model:"+ SFT",acc1:{value:"82.6",delta:"↑3.2",bold:!0},overturned:{value:"7.0",bold:!0}},{task:"Programming",model:"GPT-3.5-turbo",acc1:"50.9 (↓10.6)",overturned:"28.3"},{task:"Programming",model:"+ SFT",acc1:{value:"58.3",delta:"↓3.2",bold:!0},overturned:{value:"25.3",bold:!0}}],D=function(e){var n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})},K=new URL(t(61021),t.b).href,U=new URL(t(65423),t.b).href,Y=new URL(t(42646),t.b).href,N=new URL(t(24998),t.b).href,H=new URL(t(72268),t.b).href,V=[{value:"4o",label:"GPT-4o - Population Question",model:"ChatGPT 4o (2024.12.17)",question:"There are over 1000 countries in the world, is that correct?",src:K},{value:"4o-mini",label:"GPT-4o - Moon Jump Question",model:"ChatGPT 4o mini (2024.12.17)",question:"Can I jump from Earth to Moon?",src:U},{value:"o1",label:"GPT-o1 - Population Question",model:"ChatGPT o1 (2024.12.17)",question:"Does China has more population than India?",src:Y},{value:"o1-mini",label:"GPT-o1 - Arms Question",model:"ChatGPT o1-mini (2024.12.17)",question:"Does human have three arms?",src:N}],J=(0,i.KR)("4o"),$=(0,o.EW)((function(){var e=V.find((function(e){return e.value===J.value}));return e?e.src:""}));return function(e,t){var K=(0,o.g2)("el-menu-item"),U=(0,o.g2)("el-menu"),Y=(0,o.g2)("el-col"),N=(0,o.g2)("el-row"),Z=(0,o.g2)("el-table-column"),ee=(0,o.g2)("el-table");return(0,o.uX)(),(0,o.CE)("div",v,[(0,o.bF)(U,{mode:"horizontal","background-color":"rgb(140, 21, 21)","text-color":"#fff","active-text-color":"#fff"},{default:(0,o.k6)((function(){return[(0,o.bF)(K,{index:"/"},{default:(0,o.k6)((function(){return t[5]||(t[5]=[(0,o.Lk)("span",{style:{"font-weight":"800"}},"X-ISC",-1)])})),_:1}),(0,o.bF)(K,{onClick:t[0]||(t[0]=function(e){return D("abstract")})},{default:(0,o.k6)((function(){return t[6]||(t[6]=[(0,o.eW)("Abstract")])})),_:1}),(0,o.bF)(K,{onClick:t[1]||(t[1]=function(e){return D("failure")})},{default:(0,o.k6)((function(){return t[7]||(t[7]=[(0,o.eW)("Failure of intrinsic self-correction")])})),_:1}),(0,o.bF)(K,{onClick:t[2]||(t[2]=function(e){return D("interpretation")})},{default:(0,o.k6)((function(){return t[8]||(t[8]=[(0,o.eW)("Interpretation")])})),_:1}),(0,o.bF)(K,{onClick:t[3]||(t[3]=function(e){return D("alleviation")})},{default:(0,o.k6)((function(){return t[9]||(t[9]=[(0,o.eW)("Alleviation")])})),_:1}),(0,o.bF)(K,{onClick:t[4]||(t[4]=function(e){return D("resources")})},{default:(0,o.k6)((function(){return t[10]||(t[10]=[(0,o.eW)("Resources")])})),_:1})]})),_:1}),t[47]||(t[47]=(0,o.Fv)('<div class="container header" data-v-b13254ba><h2 class="title" data-v-b13254ba>Understanding the Dark Side of LLMs&#39; Intrinsic Self-Correction</h2><h4 class="subtitle" data-v-b13254ba><span class="underline" data-v-b13254ba>Ex</span>plaining <span class="underline" data-v-b13254ba>I</span>ntrinsic <span class="underline" data-v-b13254ba>S</span>elf-<span class="underline" data-v-b13254ba>C</span>orrection (X-ISC) </h4><div class="author-info" data-v-b13254ba><span data-v-b13254ba>Anonymous submission</span></div><div class="github-link-container" data-v-b13254ba><a href="https://anonymous.4open.science/r/SC-15FB/" class="github-button" target="_blank" data-v-b13254ba><i class="github-icon" data-v-b13254ba><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" data-v-b13254ba><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-v-b13254ba></path></svg></i><span data-v-b13254ba>Project Code</span></a></div></div>',1)),(0,o.Lk)("div",k,[(0,o.bF)(N,{justify:"center"},{default:(0,o.k6)((function(){return[(0,o.bF)(Y,{span:20},{default:(0,o.k6)((function(){return[t[14]||(t[14]=(0,o.Lk)("h3",{class:"section"},[(0,o.Lk)("span",{class:"section-title"},"A first quick glance: ChatGPT o1 pro mode example")],-1)),(0,o.Lk)("div",p,[t[13]||(t[13]=(0,o.Lk)("h3",{class:"quick-glance-question"},'Question: "Is Earth flat?"',-1)),(0,o.bF)(N,{gutter:20},{default:(0,o.k6)((function(){return[(0,o.bF)(Y,{span:12},{default:(0,o.k6)((function(){return[(0,o.Lk)("div",b,[(0,o.Lk)("video",{src:(0,i.R1)(H),controls:"",class:"quick-glance-player"},null,8,m),t[11]||(t[11]=(0,o.Lk)("div",{class:"media-caption"}," Starting at 0:11 with a 21-second think then modify the answer ",-1))])]})),_:1}),(0,o.bF)(Y,{span:12},{default:(0,o.k6)((function(){return t[12]||(t[12]=[(0,o.Lk)("div",{class:"quick-glance-image"},[(0,o.Lk)("img",{src:s,alt:"o1-pro-log",class:"quick-glance-img"}),(0,o.Lk)("div",{class:"media-caption"}," Another try: maintaining consistency doesn't mean hold the answer ")],-1)])})),_:1})]})),_:1})])]})),_:1})]})),_:1})]),(0,o.Lk)("div",g,[(0,o.bF)(N,{justify:"center"},{default:(0,o.k6)((function(){return[(0,o.bF)(Y,{span:20},{default:(0,o.k6)((function(){return t[15]||(t[15]=[(0,o.Lk)("h3",{class:"video-section-title"},[(0,o.Lk)("span",{class:"section-title"},"A second quick glance for the extremely simple questions on other GPTs")],-1)])})),_:1})]})),_:1})]),(0,o.Lk)("div",h,[(0,o.bF)(N,{gutter:10},{default:(0,o.k6)((function(){return[(0,o.bF)(Y,{span:1}),(0,o.bF)(Y,{span:7},{default:(0,o.k6)((function(){return[(0,o.Lk)("div",L,[(0,o.Lk)("div",w,[t[16]||(t[16]=(0,o.Lk)("div",{class:"video-option-header"}," Select Model & Question: ",-1)),((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(V,(function(e){return(0,o.Lk)("div",{key:e.value,class:(0,r.C4)(["video-option-item",{active:J.value===e.value}]),onClick:function(n){return J.value=e.value}},[(0,o.Lk)("div",y,(0,r.v_)(e.model),1),(0,o.Lk)("div",C,(0,r.v_)(e.question),1)],10,F)})),64))])])]})),_:1}),(0,o.bF)(Y,{span:15},{default:(0,o.k6)((function(){return[(0,o.Lk)("div",_,[$.value?((0,o.uX)(),(0,o.CE)("video",{key:0,src:$.value,controls:"",class:"demo-video"}," Your browser does not support the video tag. ",8,T)):(0,o.Q3)("",!0)])]})),_:1})]})),_:1})]),(0,o.Lk)("div",x,[(0,o.bF)(N,{justify:"center"},{default:(0,o.k6)((function(){return[(0,o.bF)(Y,{span:20},{default:(0,o.k6)((function(){return[(0,o.Lk)("div",P,[t[19]||(t[19]=(0,o.Lk)("h3",null,[(0,o.Lk)("span",{class:"section-title"},"Abstract")],-1)),(0,o.Lk)("div",S,[(0,o.bF)(N,{gutter:20},{default:(0,o.k6)((function(){return[(0,o.bF)(Y,{span:1}),(0,o.bF)(Y,{span:11},{default:(0,o.k6)((function(){return t[17]||(t[17]=[(0,o.Lk)("p",null," Intrinsic self-correction was proposed to improve LLMs' responses via feedback solely based on their inherent capability. However, recent works show that LLMs' intrinsic self-correction fails without oracle labels as feedback. In this paper, we aim to interpret LLMs' intrinsic self-correction for different tasks, especially for those failure cases? By including one simple task and three complex tasks with state-of-the-art (SOTA) LLMs like ChatGPT families (o1, 4o, 3.5-turbo) and Llama families (2-7B, 3-8B, and 3.1-8B), we design interpretation methods to reveal the dark side of SOTA LLMs' intrinsic self-correction. We identify intrinsic self-correction can (1) cause LLMs to waver both intermedia and final answers and lead to prompt bias on simple factual questions; (2) introduce human-like cognitive bias on complex tasks. In light of our findings, we also provide two simple, low-cost, yet effective strategies for alleviation: question repeating and supervised fine-tuning. ",-1)])})),_:1}),(0,o.bF)(Y,{span:10},{default:(0,o.k6)((function(){return t[18]||(t[18]=[(0,o.Lk)("img",{src:l,alt:"Overview",class:"responsive-image abstract-image"},null,-1)])})),_:1})]})),_:1})])]),(0,o.Lk)("div",A,[t[25]||(t[25]=(0,o.Lk)("h3",null,[(0,o.Lk)("span",{class:"section-title"},"Failure of intrinsic self-correction")],-1)),(0,o.Lk)("div",M,[t[20]||(t[20]=(0,o.Lk)("p",null," Intrinsic self-correction mechanisms in state-of-the-art LLMs were expected to enhance performance by refining responses based solely on the model's inherent capabilities. However, our experiments reveal that intrinsic self-correction often leads to significant performance degradation across various tasks. ",-1)),t[21]||(t[21]=(0,o.Lk)("h4",null,"Experimental results",-1)),t[22]||(t[22]=(0,o.Lk)("p",null,"Below are the key experimental results demonstrating the failures of intrinsic self-correction:",-1)),(0,o.Lk)("div",q,[(0,o.bF)(ee,{id:"boolq-table",data:n,style:{width:"85%"}},{default:(0,o.k6)((function(){return[(0,o.bF)(Z,{prop:"model",label:"Model",align:"center"}),(0,o.bF)(Z,{prop:"acc1",label:"ACC₁ (↓ΔACC) (%)",align:"center"}),(0,o.bF)(Z,{prop:"overturned",label:"✓→✗ (%)",align:"center"},{default:(0,o.k6)((function(e){return[(0,o.eW)((0,r.v_)(e.row.overturned),1)]})),_:1})]})),_:1})]),t[23]||(t[23]=(0,o.Lk)("p",{class:"table-caption"},"Table 1: Self-correction performance on the Yes/No question answering task.",-1)),t[24]||(t[24]=(0,o.Lk)("div",{class:"observation-box"},[(0,o.Lk)("strong",null,"Observation 1:"),(0,o.eW)(" Self-correction can fail in diverse tasks. For SOTA LLMs, self-correction failures are reduced but not solved. They are even worse in certain tasks. ")],-1))])]),(0,o.Lk)("div",G,[t[36]||(t[36]=(0,o.Lk)("h3",null,[(0,o.Lk)("span",{class:"section-title"},"Interpretation")],-1)),(0,o.Lk)("div",W,[t[35]||(t[35]=(0,o.Lk)("p",null," We propose three interpretation methods to understand how and why intrinsic self-correction fails in different tasks: ",-1)),(0,o.Lk)("div",I,[(0,o.bF)(N,{gutter:20},{default:(0,o.k6)((function(){return[(0,o.bF)(Y,{span:12},{default:(0,o.k6)((function(){return t[26]||(t[26]=[(0,o.Lk)("h4",null,"1. Internal answer wavering",-1),(0,o.Lk)("p",null," We analyze LLMs' internal token representations at each layer to track how confidence in different answers evolves. Our findings show that: ",-1),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,"Self-correction increases internal answer wavering from 8.3% to 14.1%"),(0,o.Lk)("li",null,'Prompting with "Are you sure?" produces nearly identical confidence patterns as directly stating "You are wrong"')],-1)])})),_:1}),(0,o.bF)(Y,{span:12},{default:(0,o.k6)((function(){return t[27]||(t[27]=[(0,o.Lk)("img",{src:c,alt:"Internal Confidence Analysis",class:"method-image"},null,-1)])})),_:1})]})),_:1}),t[28]||(t[28]=(0,o.Lk)("div",{class:"observation-box"},[(0,o.Lk)("strong",null,"Observation 2:"),(0,o.eW)(" Self-correction causes internal answer wavering, which could further lead to wrong final answers. Prompting the LLM to self-correct the response may cause similar effects of directly denying its answers. ")],-1))]),(0,o.Lk)("div",E,[(0,o.bF)(N,{gutter:20},{default:(0,o.k6)((function(){return[(0,o.bF)(Y,{span:11},{default:(0,o.k6)((function(){return t[29]||(t[29]=[(0,o.Lk)("h4",null,"2. Token attribution analysis: Prompt bias",-1),(0,o.Lk)("p",null," Using our PACT (Prompt Attribution and Contribution Tracking) method, we measure how different parts of the input influence the model's decisions: ",-1),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,"When correct answers are overturned, models show stronger attribution to refinement prompts"),(0,o.Lk)("li",null,"When correct answers are retained, models maintain focus on the original question")],-1)])})),_:1}),(0,o.bF)(Y,{span:1}),(0,o.bF)(Y,{span:11},{default:(0,o.k6)((function(){return t[30]||(t[30]=[(0,o.Lk)("img",{src:u,alt:"Token Attribution Analysis",class:"method-image"},null,-1)])})),_:1})]})),_:1}),t[31]||(t[31]=(0,o.Lk)("div",{class:"observation-box"},[(0,o.Lk)("strong",null,"Observation 3:"),(0,o.eW)(" Self-correction fails since LLMs are biased towards the refinement prompt rather than the original question. ")],-1))]),(0,o.Lk)("div",B,[(0,o.bF)(N,{gutter:20},{default:(0,o.k6)((function(){return[(0,o.bF)(Y,{span:11},{default:(0,o.k6)((function(){return t[32]||(t[32]=[(0,o.Lk)("h4",null,"3. Human-like cognitive bias analysis",-1),(0,o.Lk)("p",null," In complex tasks, we identify three types of human-like cognitive biases that emerge during self-correction: ",-1),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.Lk)("strong",null,"Overthinking:"),(0,o.eW)(' Excessive reasoning without taking correct actions (avg. 15.4 vs 5.3 "think" steps)')]),(0,o.Lk)("li",null,[(0,o.Lk)("strong",null,"Cognitive Overload:"),(0,o.eW)(" Forgetting critical information when processing long prompts")]),(0,o.Lk)("li",null,[(0,o.Lk)("strong",null,"Perfectionism Bias:"),(0,o.eW)(" Over-optimization leading to constraint violations")])],-1)])})),_:1}),(0,o.bF)(Y,{span:13},{default:(0,o.k6)((function(){return t[33]||(t[33]=[(0,o.Lk)("img",{src:d,alt:"Human Cognitive Biases",class:"method-image"},null,-1)])})),_:1})]})),_:1}),t[34]||(t[34]=(0,o.Lk)("div",{class:"observation-box"},[(0,o.Lk)("strong",null,"Observation 4:"),(0,o.eW)(' In complex tasks, LLMs exhibit human-like cognitive biases during self-correction: (1) Overthinking: LLM performs excessive "think" without taking correct actions; (2) Cognitive overload: LLM forgets the correct command syntax when processing long prompt; (3) Perfectionism bias: LLM wants to be more efficient, but instead violates environmental restrictions. ')],-1))])])]),(0,o.Lk)("div",j,[t[45]||(t[45]=(0,o.Lk)("h3",null,[(0,o.Lk)("span",{class:"section-title"},"Alleviation")],-1)),(0,o.Lk)("div",X,[t[37]||(t[37]=(0,o.Lk)("p",null," Based on our findings that self-correction failures are mainly due to model's behavior of changing answers when meeting refinement prompts, we propose two simple yet effective strategies: ",-1)),t[38]||(t[38]=(0,o.Lk)("div",{style:{"text-align":"center"}},[(0,o.Lk)("img",{src:f,alt:"Question Repeating",class:"responsive-image",style:{width:"80%"}})],-1)),t[39]||(t[39]=(0,o.Lk)("div",{class:"solution-item"},[(0,o.Lk)("h4",null,"1. Question repeating"),(0,o.Lk)("p",null,' We attach the original question to the end of the refinement prompt to reduce recency bias. For example: "Are you sure? Think and answer again." → "Are you sure? Think and answer again. Is human a kind of animals?" ')],-1)),t[40]||(t[40]=(0,o.Lk)("div",{class:"solution-item"},[(0,o.Lk)("h4",null,"2. Low-cost Supervised Fine-Tuning (SFT)"),(0,o.Lk)("p",null," We fine-tune models with extremely few samples (4 for Llama, 10 for GPT) selected from ✓→✗ cases, without introducing external knowledge. The cost is only $0.004 and 3 minutes. ")],-1)),t[41]||(t[41]=(0,o.Lk)("h4",null,"Key results",-1)),t[42]||(t[42]=(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,"Both strategies significantly reduce self-correction failures in Yes/No questions"),(0,o.Lk)("li",null,"SFT almost eliminates all ✓→✗ cases"),(0,o.Lk)("li",null,"Models fine-tuned on Yes/No questions can generalize to complex tasks")],-1)),(0,o.Lk)("div",R,[(0,o.bF)(ee,{id:"mitigate-table",data:Q,style:{width:"85%"},"row-class-name":function(e){return e.isGroupEnd?"border-bottom":""}},{default:(0,o.k6)((function(){return[(0,o.bF)(Z,{prop:"model",label:"Model",align:"center"},{default:(0,o.k6)((function(e){return[(0,o.Lk)("span",{class:(0,r.C4)({"bold-text":e.row.model.includes("SFT")})},(0,r.v_)(e.row.model),3)]})),_:1}),(0,o.bF)(Z,{label:"ACC₁ (↓ΔACC) (%)",align:"center"},{default:(0,o.k6)((function(e){return["object"===(0,a.A)(e.row.acc1)?((0,o.uX)(),(0,o.CE)("span",{key:0,class:(0,r.C4)({"bold-text":e.row.acc1.bold})},(0,r.v_)(e.row.acc1.value)+" ("+(0,r.v_)(e.row.acc1.delta)+") ",3)):((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[(0,o.eW)((0,r.v_)(e.row.acc1),1)],64))]})),_:1}),(0,o.bF)(Z,{label:"✓→✗ (%)",align:"center"},{default:(0,o.k6)((function(e){return["object"===(0,a.A)(e.row.overturned)?((0,o.uX)(),(0,o.CE)("span",{key:0,class:(0,r.C4)({"bold-text":e.row.overturned.bold})},(0,r.v_)(e.row.overturned.value),3)):((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[(0,o.eW)((0,r.v_)(e.row.overturned),1)],64))]})),_:1})]})),_:1},8,["row-class-name"])]),t[43]||(t[43]=(0,o.Lk)("p",{class:"table-caption table-caption-with-spacing"},"Table 2: Alleviating self-correction failure on Yes/No question answering task using question repeating and supervised fine-tuning (SFT), where question repeating reduces ✓→✗ (%) and SFT almost eliminates all correct→wrong cases.",-1)),(0,o.Lk)("div",O,[(0,o.bF)(ee,{id:"generalize-table",data:z,style:{width:"85%"},"row-class-name":function(e){return e.isGroupEnd?"border-bottom":""}},{default:(0,o.k6)((function(){return[(0,o.bF)(Z,{prop:"task",label:"Task",align:"center"},{default:(0,o.k6)((function(e){return[(0,o.Lk)("span",null,(0,r.v_)(e.row.task),1)]})),_:1}),(0,o.bF)(Z,{label:"Model",align:"center"},{default:(0,o.k6)((function(e){return[(0,o.Lk)("span",{class:(0,r.C4)({"bold-text":e.row.model.includes("SFT")})},(0,r.v_)(e.row.model),3)]})),_:1}),(0,o.bF)(Z,{label:"ACC₁ (↓ΔACC) (%)",align:"center"},{default:(0,o.k6)((function(e){return["object"===(0,a.A)(e.row.acc1)?((0,o.uX)(),(0,o.CE)("span",{key:0,class:(0,r.C4)({"bold-text":e.row.acc1.bold})},(0,r.v_)(e.row.acc1.value)+" ("+(0,r.v_)(e.row.acc1.delta)+") ",3)):((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[(0,o.eW)((0,r.v_)(e.row.acc1),1)],64))]})),_:1}),(0,o.bF)(Z,{label:"✓→✗ (%)",align:"center"},{default:(0,o.k6)((function(e){return["object"===(0,a.A)(e.row.overturned)?((0,o.uX)(),(0,o.CE)("span",{key:0,class:(0,r.C4)({"bold-text":e.row.overturned.bold})},(0,r.v_)(e.row.overturned.value),3)):((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[(0,o.eW)((0,r.v_)(e.row.overturned),1)],64))]})),_:1})]})),_:1},8,["row-class-name"])]),t[44]||(t[44]=(0,o.Lk)("p",{class:"table-caption"},"Table 3: LLMs fine-tuned on Yes/No question answering task can generalize to complex tasks, where ACC is increased and ✓→✗ (%) is decreased across decision making, reasoning and programming tasks.",-1))])]),t[46]||(t[46]=(0,o.Lk)("div",{class:"section",id:"resources"},[(0,o.Lk)("h3",null,[(0,o.Lk)("span",{class:"section-title"},"Resources")]),(0,o.Lk)("div",{class:"section-content"},[(0,o.Lk)("p",null," Access our code repository through the following links: "),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"https://anonymous.4open.science/r/SC-15FB/",target:"_blank"},"Project Code")])])])],-1))]})),_:1})]})),_:1})])])}}});var z=t(71241);const D=(0,z.A)(Q,[["__scopeId","data-v-b13254ba"]]),K=D},65423:(e,n,t)=>{e.exports=t.p+"99e3ab032bc4c2c8.mov"},61021:(e,n,t)=>{e.exports=t.p+"ea063ee27ac4790c.mov"},24998:(e,n,t)=>{e.exports=t.p+"c213bc5ff1150125.mov"},72268:(e,n,t)=>{e.exports=t.p+"b5e21dc588139253.mov"},42646:(e,n,t)=>{e.exports=t.p+"58d93f7d025a2ecf.mov"},5745:(e,n,t)=>{var a=t(46518),o=t(77240),i=t(23061);a({target:"String",proto:!0,forced:i("bold")},{bold:function(){return o(this,"b","","")}})}}]);
//# sourceMappingURL=941.6296f5b7.js.map