(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10,14],{227:function(e,t,r){var content=r(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("da21d2f4",content,!0,{sourceMap:!1})},228:function(e,t,r){"use strict";r.r(t);var n={name:"SectionTitle",props:["title"]},o=(r(229),r(34)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"section-title"},[r("h2",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),r("div",{staticClass:"spacer x2"})])}),[],!1,null,"0b5befc6",null);t.default=component.exports},229:function(e,t,r){"use strict";r(227)},230:function(e,t,r){var n=r(45)(!1);n.push([e.i,'[data-v-0b5befc6]:root{--prm:#1d72b3;--red:#eb3b5a;--green:#26de81;--yellow:#f79f1f;--b1:#f6f6f6;--b2:#fff;--c1:#121212;--c2:#1e1e1e;--b2-hover:#f2f2f2;--radius:6px;--radius-2:14px;--rgb-b1:246,246,246;--rgb-b2:255,255,255;--rgb-c1:18,18,18;--rgb-c2:30,30,30;--active-text:#000;--shadow:0px 0px 6px 0px hsla(0,0%,39.2%,0.2)}.dark[data-v-0b5befc6],[data-v-0b5befc6]:root{--deactive-text:grey}.dark[data-v-0b5befc6]{--b1:#121212;--b2:#1f1f1f;--c1:#f6f6f6;--c2:#fff;--b2-hover:#2f2f2f;--rgb-b1:18,18,18;--rgb-b2:30,30,30;--rgb-c1:246,246,246;--rgb-c2:255,255,255;--prm-light:rgba(0,151,230,0.2);--btn-hover:rgba(0,151,230,0.3);--active-text:#fff}.flexCenter[data-v-0b5befc6]{display:flex;justify-content:center;align-items:center}.title[data-v-0b5befc6]{padding-left:20px;position:relative;letter-spacing:.1rem}.title[data-v-0b5befc6]:before{content:"";position:absolute;left:0;top:0;height:100%;width:4px;background:#3498db}',""]),e.exports=n},234:function(e,t,r){var content=r(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("5b2f6ea8",content,!0,{sourceMap:!1})},243:function(e,t,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("4e649f5d",content,!0,{sourceMap:!1})},244:function(e,t,r){"use strict";r(234)},245:function(e,t,r){var n=r(45)(!1);n.push([e.i,"[data-v-508c4e66]:root{--prm:#1d72b3;--red:#eb3b5a;--green:#26de81;--yellow:#f79f1f;--b1:#f6f6f6;--b2:#fff;--c1:#121212;--c2:#1e1e1e;--b2-hover:#f2f2f2;--radius:6px;--radius-2:14px;--rgb-b1:246,246,246;--rgb-b2:255,255,255;--rgb-c1:18,18,18;--rgb-c2:30,30,30;--active-text:#000;--shadow:0px 0px 6px 0px hsla(0,0%,39.2%,0.2)}.dark[data-v-508c4e66],[data-v-508c4e66]:root{--deactive-text:grey}.dark[data-v-508c4e66]{--b1:#121212;--b2:#1f1f1f;--c1:#f6f6f6;--c2:#fff;--b2-hover:#2f2f2f;--rgb-b1:18,18,18;--rgb-b2:30,30,30;--rgb-c1:246,246,246;--rgb-c2:255,255,255;--prm-light:rgba(0,151,230,0.2);--btn-hover:rgba(0,151,230,0.3);--active-text:#fff}.flexCenter[data-v-508c4e66]{display:flex;justify-content:center;align-items:center}.project-item[data-v-508c4e66]{padding:8px;background:#1f1f1f}.image[data-v-508c4e66],.project-item[data-v-508c4e66]{border-radius:8px;overflow:hidden}.image[data-v-508c4e66]{width:100%;height:200px;margin-bottom:14px}.image[data-v-508c4e66],.title[data-v-508c4e66]{cursor:pointer}.title[data-v-508c4e66]{margin-bottom:8px;font-size:1.4rem}.description[data-v-508c4e66]{margin-bottom:14px}.techs[data-v-508c4e66]{display:flex;flex-wrap:wrap}.techs .item[data-v-508c4e66]{padding:4px 12px;border-radius:20px;border:1px solid #3498db;background:rgba(52,152,219,.2);margin-right:8px;font-size:.8rem}",""]),e.exports=n},250:function(e,t,r){"use strict";r.r(t);var n={name:"ProjectItem",props:["image","url","title","description","techs"]},o=(r(244),r(34)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"project-item"},[r("div",{staticClass:"image"},[r("a",{attrs:{href:e.url}},[r("img",{attrs:{src:e.image||"https://www.howtogeek.com/wp-content/uploads/2019/12/github-logo.jpg?height=200p&trim=2,2,2,2",alt:""}})])]),e._v(" "),r("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),r("p",{staticClass:"description"},[e._v(e._s(e.description))]),e._v(" "),r("div",{staticClass:"techs"},e._l(e.techs,(function(t,i){var n=t.name;return r("div",{key:i,staticClass:"item"},[e._v("\n      "+e._s(n)+"\n    ")])})),0),e._v(" "),r("div",{staticClass:"spacer"})])}),[],!1,null,"508c4e66",null);t.default=component.exports},258:function(e,t,r){e.exports=r.p+"img/secim.c7d1a2c.jpg"},259:function(e,t,r){e.exports=r.p+"img/twitter.7f2991f.jpg"},260:function(e,t,r){e.exports=r.p+"img/translator.91a5d50.jpg"},261:function(e,t,r){e.exports=r.p+"img/ocr.6fe4701.jpg"},262:function(e,t,r){e.exports=r.p+"img/sa.a1fe6bc.png"},263:function(e,t,r){e.exports=r.p+"img/music.067bba2.jpg"},264:function(e,t,r){e.exports=r.p+"img/shahname.5d0c171.jpg"},265:function(e,t,r){e.exports=r.p+"img/car.1a8aeda.jpg"},266:function(e,t,r){e.exports=r.p+"img/graph.cf09d6b.jpg"},267:function(e,t,r){e.exports=r.p+"img/rec.124c35b.png"},268:function(e,t,r){"use strict";r(243)},269:function(e,t,r){var n=r(45)(!1);n.push([e.i,"[data-v-0515b44c]:root{--prm:#1d72b3;--red:#eb3b5a;--green:#26de81;--yellow:#f79f1f;--b1:#f6f6f6;--b2:#fff;--c1:#121212;--c2:#1e1e1e;--b2-hover:#f2f2f2;--radius:6px;--radius-2:14px;--rgb-b1:246,246,246;--rgb-b2:255,255,255;--rgb-c1:18,18,18;--rgb-c2:30,30,30;--active-text:#000;--shadow:0px 0px 6px 0px hsla(0,0%,39.2%,0.2)}.dark[data-v-0515b44c],[data-v-0515b44c]:root{--deactive-text:grey}.dark[data-v-0515b44c]{--b1:#121212;--b2:#1f1f1f;--c1:#f6f6f6;--c2:#fff;--b2-hover:#2f2f2f;--rgb-b1:18,18,18;--rgb-b2:30,30,30;--rgb-c1:246,246,246;--rgb-c2:255,255,255;--prm-light:rgba(0,151,230,0.2);--btn-hover:rgba(0,151,230,0.3);--active-text:#fff}.flexCenter[data-v-0515b44c]{display:flex;justify-content:center;align-items:center}.items[data-v-0515b44c]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;grid-gap:10px}@media only screen and (max-width:840px){.items[data-v-0515b44c]{grid-template-columns:1fr 1fr}}@media only screen and (max-width:540px){.items[data-v-0515b44c]{grid-template-columns:1fr}}",""]),e.exports=n},280:function(e,t,r){"use strict";r.r(t);var n={name:"Projects",data:function(){return{list:[{title:"Secim2023_Dataset",description:"We provide a comprehensive dataset for social media researchers to study the upcoming election, develop tools to prevent online manipulation, and gather novel information to inform the public. We are committed to continually improving the data collection and updating it regularly leading up to the election.",url:"https://github.com/ViralLab/Secim2023_Dataset",image:r(258),techs:[{name:"Python"},{name:"DATASET"}]},{title:"COMSTREAM",description:"In this project, we implemented a topic detection system on Twitter. This system reads tweets from a data stream, and assigns them to one of the existing clusters or a new one. Each cluster acts as an agent, which makes the proposed approach a multi-agent system. There is also a coordinator, who monitors the whole system and coordinates the agents.",url:"https://github.com/AliNajafi1998/ComStream",image:r(259),techs:[{name:"Python"},{name:"Elixir"},{name:"NLP"}]},{title:"ENGLISH TO ITALIAN TRANSLATOR",description:"Implementing Transformer-based Model from scratch using Tensorflow v2 to Build translator ",url:"https://github.com/AliNajafi1998/English-Italian-Translator",image:r(260),techs:[{name:"Python"},{name:"Tensorflow"},{name:"NLP"}]},{title:"OCR RECEIPT",description:"Extracting Texts from Receipt and deploying the model using Django",url:"https://github.com/AliNajafi1998/OCR_Receipt",image:r(261),techs:[{name:"Python"},{name:"Tesseract"},{name:"Django"}]},{title:"SENTIMENT ANALYSIS USING BERT TOKENIZER AND CNN",description:"Analyzing the sentiment of sentences using Bert Tokenizer and cnn models",url:"https://github.com/AliNajafi1998/SA_with_bert_tokenizer",image:r(262),techs:[{name:"Python"},{name:"Tensorflow"},{name:"NLP"}]},{title:"MUSIC GENRE CLASSIFICATION",description:"Classifying music genres based on their MFCC spectrogram",url:"https://github.com/AliNajafi1998/MusicGenreClassification",image:r(263),techs:[{name:"Python"},{name:"Tensorflow"},{name:"Librosa"}]},{title:"SHAHNAME (POEM) CHARACTER BASED TEXT GENERATION",description:"Using AI for fun and generating poem similar to Shahname’s poems",url:"https://github.com/AliNajafi1998/MusicGenreClassification",image:r(264),techs:[{name:"Python"},{name:"Tensorflow"},{name:"NLP"}]},{title:"SELF DRIVING CAR",description:"\n         Developed using DQN (Reinforcement Learning based model) and using KIVI for building user experience\n         ",url:" https://github.com/AliNajafi1998/self-driving-car-DQN",image:r(265),techs:[{name:"Python"},{name:"KIVI"}]},{title:"SILKROAD",description:"Silk Road Graph Analyzer is an application in which you can draw you desired graph with arbitrary IDs and numbers, specify source and destination node and do the following:\n           Find the shortest path available between the source and destination node using Dijkstra algorithm\n           Solve the TSP (Travelling Salesman Problem) problem using Dynamic Programming algorithm\n           Solve the TSP (Travelling Salesman Problem) problem using Ant Colony algorithm.\n             ",url:"https://github.com/threegoodprogrammers/SilkRoad",image:r(266),techs:[{name:"Java"}]},{title:"MOVIE RECOMMENDER SYSTEM",description:"Implemented a movie recommender system using the item-based and user-based collaborative filtering from scratch. The classifier predicts the score a user might give to a movie on a 1-5 scale. The model is trained on the Movielens dataset.",url:"https://github.com/ArazShilabin/movie-recommender-system",image:r(267),techs:[{name:"Python"}]}]}}},o=(r(268),r(34)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"projects inner"},[r("SectionTitle",{attrs:{title:"Projects"}}),e._v(" "),r("div",{staticClass:"items"},e._l(e.list,(function(t,i){return r("ProjectItem",e._b({key:i},"ProjectItem",t,!1))})),1)],1)}),[],!1,null,"0515b44c",null);t.default=component.exports;installComponents(component,{SectionTitle:r(228).default,ProjectItem:r(250).default})}}]);