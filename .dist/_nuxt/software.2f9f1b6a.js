import{_,a as g}from"./DocumentEnd.12266733.js";import{_ as b,a as q,b as f}from"./TableBox.489b94e7.js";import{f as T,o as s,a as u,b as n,e as t,w as i,q as e,p as Q}from"./entry.67a24d28.js";import"./components.263fa039.js";import"./composables.4dfe9424.js";const C={inject:["katexAPI","pageEnv"],props:["tex"],methods:{typeset(){this.tex&&this.katexAPI.render(this.tex,this.$refs.math,{throwOnError:!1,macros:this.pageEnv.mathMacros})}},mounted(){this.typeset()},watch:{tex:function(o){this.typeset()}}},v={ref:"math",class:"inline-math"};function S(o,c,d,h,r,a){return s(),u("span",v,null,512)}const K=T(C,[["render",S]]),A=t("thead",null,[t("td",null,"Name"),t("td",null,"Language"),t("td",null,"Hardware"),t("td",null,"Multi-platform"),t("td",null,"Built-in applications")],-1),w=t("td",null,"python",-1),k=t("td",null,"Yes",-1),P=t("td",null,"No",-1),M=t("td",null,"Chemistry, ML, Noise characterization, Optimization",-1),j=t("td",null,"python, C++, Rust",-1),L=t("td",null,"No",-1),N=t("td",null,"No",-1),O=t("td",null,"--",-1),x=t("td",null,"C++",-1),z=t("td",null,"No",-1),J=t("td",null,"No",-1),E=t("td",null,"QAOA",-1),I=t("td",null,"python, C++",-1),D=t("td",null,"Yes**",-1),F=t("td",null,"Yes",-1),B=t("td",null,"--",-1),G=t("td",null,"python",-1),R=t("td",null,"Yes**",-1),Y=t("td",null,"Yes",-1),V=t("td",null,"ML, Optimization",-1),$=t("td",null,"python",-1),X=t("td",null,"Yes**",-1),H=t("td",null,"Yes",-1),W=t("td",null,"Fermionic simulation, Optimization",-1),Z=t("td",null,"python, Lisp",-1),U=t("td",null,"Yes",-1),tt=t("td",null,"No",-1),nt=t("td",null,"VQE, QAOA, Noise characterization, Optimization",-1),et=t("td",null,"python, C#, Q#",-1),at=t("td",null,"Yes**",-1),it=t("td",null,"No",-1),ot=t("td",null,"Chemistry, Optimization",-1),rt=t("td",null,"python",-1),lt=t("td",null,"Yes*",-1),st=t("td",null,"Yes",-1),ut=t("td",null,"VQE, QAOA, Adiabatic evolution, Optimization",-1),ct=t("td",null,"python",-1),dt=t("td",null,"Yes",-1),ht=t("td",null,"No",-1),yt=t("td",null,"Chemistry, ML, Optimization, Finance, Noise characterization",-1),mt=t("td",null,"python, C++",-1),pt=t("td",null,"No",-1),_t=t("td",null,"No",-1),gt=t("td",null,"Tensor-Network simulator, quantum circuit simulator, QAOA",-1),bt=t("td",null,"C++, Mathematica",-1),qt=t("td",null,"No",-1),ft=t("td",null,"Yes",-1),Tt=t("td",null,"--",-1),Qt=t("td",null,"python",-1),Ct=t("td",null,"No",-1),vt=t("td",null,"No",-1),St=t("td",null,"Tensor-Network simulator, quantum circuit simulator",-1),Kt=t("td",null,"python, C++",-1),At=t("td",null,"No",-1),wt=t("td",null,"No",-1),kt=t("td",null,"Simulator, noise characterization",-1),Pt=t("td",null,"python",-1),Mt=t("td",null,"Yes*",-1),jt=t("td",null,"No",-1),Lt=t("td",null,"GBS",-1),Nt=t("td",null,"python",-1),Ot=t("td",null,"Yes**",-1),xt=t("td",null,"Yes",-1),zt=t("td",null,"Chemistry, ML, Noise characterization, Optimization",-1),Jt=t("td",null,"python, C++",-1),Et=t("td",null,"Yes**",-1),It=t("td",null,"Yes",-1),Dt=t("td",null,"Optimization, VQE, QAOA, RBM and other algorithms",-1),Ft=t("td",null,"Julia",-1),Bt=t("td",null,"No",-1),Gt=t("td",null,"No",-1),Rt=t("td",null,"--",-1),Yt=t("div",{class:"paragraph"},"List of open-source quantum software libraries. These packages are designed using common computing languages such as python, C++ or Julia. Some of them can be used in real quantum hardware, either because the developers are also building these devices or because the package include other quantum libraries. Some of them can translate their code to other quantum libraries or simulators.",-1),Vt=t("div",{class:"paragraph"},"*Hardware not publicly available yet. **Not on own hardware but can be run in a hardware backend.",-1),$t=t("thead",null,[t("td",null,"Name"),t("td",null,"Language"),t("td",null,"Application")],-1),Xt=t("td",null,"python",-1),Ht=t("td",null,"Chemistry",-1),Wt=t("td",null,"python",-1),Zt=t("td",null,"Chemistry",-1),Ut=t("td",null,"python",-1),tn=t("td",null,"Chemistry",-1),nn=t("td",null,"Fortran 77, C",-1),en=t("td",null,"Chemistry",-1),an=t("td",null,"python",-1),on=t("td",null,"QAOA",-1),rn=t("td",null,"python",-1),ln=t("td",null,"QML",-1),sn=t("td",null,"python",-1),un=t("td",null,"ML",-1),cn=t("td",null,"python",-1),dn=t("td",null,"Error Mitigation",-1),hn=t("td",null,"python",-1),yn=t("td",null,"Compiler",-1),mn=t("td",null,"quil",-1),pn=t("td",null,"Compiler",-1),_n=t("td",null,"JavaScript, python",-1),gn=t("td",null,"quantum language converter",-1),bn=t("td",null,"Julia,C++",-1),qn=t("td",null,"Tensor Networks",-1),fn=t("td",null,"python, C++",-1),Tn=t("td",null,"Compiler",-1),Qn=t("td",null,"C++",-1),Cn=t("td",null,"Simulator and Compiler",-1),vn=t("td",null,"Scaffold",-1),Sn=t("td",null,"Compiler",-1),Kn=t("td",null,"C++",-1),An=t("td",null,"Compiler",-1),wn=t("td",null,"D",-1),kn=t("td",null,"Compiler",-1),Pn=t("td",null,"python, C++",-1),Mn=t("td",null,"Simulator",-1),jn=t("td",null,"C++",-1),Ln=t("td",null,"Simulator",-1),Nn=t("td",null,"JavaScript",-1),On=t("td",null,"Simulator",-1),xn=t("td",null,"python",-1),zn=t("td",null,"Quantum Info. SDK",-1),Jn=t("td",null,"python",-1),En=t("td",null,"Quantum Control",-1),In={class:"paragraph"},Yn={__name:"software",setup(o){return Q("pageEnv",{basePath:"nisq-index",outputPathPrefix:"/page_assets",projectTitle:"Noisy intermediate-scale quantum (NISQ) algorithms",bibPath:"NISQ_Review.bib",linearize:["many-body","machine-learning","combinatorial-optimization","numerical-solvers-and-finance","more-applications","software"],gitRepoUrl:"https://github.com/aspuru-guzik-group/nisq-index",license:{title:"Creative Commons Attribution-ShareAlike 4.0 International License",link:"https://creativecommons.org/licenses/by-sa/4.0/"},idNames:{"tab:software":{tagName:"Table",index:[1]},"table-2":{tagName:"Table",index:[2]}},counter:{Table:[2]},citedKeys:["cirq","DQCSim","intel","Lib","pennylane","projectq","pyquil","qsharp","qibo","Qiskit","QTensor","quest","jones2020questlink","quimb","qulacs","strawberry","tequila","xacc","yao","OpenFermion","psi4","pyscf1","pyscf2","nwchem","EntropicaQAOA","TFQ","TF","larose2020mitiq","pyzx","quilc","qconvert","qconvert_js","itensor","OpenQL","JKQ","scaffcc","staq","silq","QXsim","qrack","qsimulator","Qutip","QCtrl"],footnotes:[],title:"Quantum softwares for NISQ era",creditInfo:[],slidesMode:!1,outerLinks:[],bibDict:{cirq:{citationKey:"cirq",entryType:"misc",entryTags:{author:"{Quantum AI team and collab.}",title:"Cirq",month:"oct",year:"2020",publisher:"Zenodo",doi:"10.5281/zenodo.4062499",url:"https://doi.org/10.5281/zenodo.4062499"}},DQCSim:{citationKey:"DQCSim",entryType:"misc",entryTags:{author:"{QCA lab}",title:"Delft Quantum \\& Classical simulator",year:"2020",howpublished:"\\url{https://github.com/QE-Lab/dqcsim}"}},intel:{citationKey:"intel",entryType:"article",entryTags:{title:"Intel Quantum Simulator: A cloud-ready high-performance simulator of quantum circuits",author:"Guerreschi, Gian Giacomo and Hogaboam, Justin and Baruffa, Fabio and Sawaya, Nicolas PD",journal:"Quantum Sci. Technol.",volume:"5",number:"3",pages:"034007",year:"2020",publisher:"IOP Publishing",url:"https://doi.org/10.1088/2058-9565/ab8505"}},Lib:{citationKey:"Lib",entryType:"article",entryTags:{title:"$|Lib\\rangle$: A Cross-Platform Programming Framework for Quantum-Accelerated Scientific Computing",author:'M{\\"o}ller, Matthias and Schalkers, Merel',journal:"International Conference on Computational Science",pages:"451--464",year:"2020",organization:"Springer",url:"https://doi.org/10.1007/978-3-030-50433-5_35"}},pennylane:{citationKey:"pennylane",entryType:"article",entryTags:{title:"Pennylane: Automatic differentiation of hybrid quantum-classical computations",author:"Bergholm, Ville and Izaac, Josh and Schuld, Maria and Gogolin, Christian and Alam, M Sohaib and Ahmed, Shahnawaz and Arrazola, Juan Miguel and Blank, Carsten and Delgado, Alain and Jahangiri, Soran and others",journal:"arXiv:1811.04968",year:"2018",url:"https://arxiv.org/abs/1811.04968"}},projectq:{citationKey:"projectq",entryType:"article",entryTags:{title:"ProjectQ: an open source software framework for quantum computing",author:'Steiger, Damian S and H{\\"a}ner, Thomas and Troyer, Matthias',journal:"Quantum",volume:"2",pages:"49",year:"2018",publisher:'Verein zur F{\\"o}rderung des Open Access Publizierens in den Quantenwissenschaften',url:"https://doi.org/10.22331/q-2018-01-31-49"}},pyquil:{citationKey:"pyquil",entryType:"article",entryTags:{title:"A Practical Quantum Instruction Set Architecture",author:"Robert S. Smith and Michael J. Curtis and William J. Zeng",year:"2016",journal:"arXiv:1608.03355",url:"https://arxiv.org/abs/1608.03355"}},qsharp:{citationKey:"qsharp",entryType:"misc",entryTags:{year:"2020",title:"Microsoft Quantum Documentation",author:"Microsoft Quantum",howpublished:"https://docs.microsoft.com/en-us/quantum/",note:"[Accessed: 22-December-2020]",url:"https://docs.microsoft.com/en-us/quantum/"}},qibo:{citationKey:"qibo",entryType:"article",entryTags:{title:"Qibo: a framework for quantum simulation with hardware acceleration",author:"Efthymiou, Stavros and Ramos-Calderer, Sergi and Bravo-Prieto, Carlos and P{\\'e}rez-Salinas, Adri{\\'a}n and Garc{\\'\\i}a-Mart{\\'\\i}n, Diego and Garcia-Saez, Artur and Latorre, Jos{\\'e} Ignacio and Carrazza, Stefano",journal:"arXiv:2009.01845",year:"2020",url:"https://arxiv.org/abs/2009.01845"}},Qiskit:{citationKey:"Qiskit",entryType:"misc",entryTags:{author:"IBMQ",title:"Qiskit: An Open-source Framework for Quantum Computing",year:"2019",journal:"Zenodo",howpublished:"10.5281/zenodo.2562110",url:"https://qiskit.org/"}},QTensor:{citationKey:"QTensor",entryType:"misc",entryTags:{title:"{Q-Tensor}",author:"Danil Lykov",howpublished:"\\url{https://github.com/danlkv/qtensor}",year:"2020"}},quest:{citationKey:"quest",entryType:"article",entryTags:{title:"Quest and high performance simulation of quantum computers",author:"Jones, Tyson and Brown, Anna and Bush, Ian and Benjamin, Simon C",journal:"Sci. Rep.",volume:"9",pages:"10736",year:"2019",publisher:"Nature Publishing Group",url:"https://doi.org/10.1038/s41598-019-47174-9"}},jones2020questlink:{citationKey:"jones2020questlink",entryType:"article",entryTags:{title:"QuESTlink--Mathematica embiggened by a hardware-optimised quantum emulator",author:"Jones, Tyson and Benjamin, Simon C",journal:"Quantum Sci. Technol.",volume:"5",pages:"034012",year:"2020",publisher:"IOP Publishing",url:"https://doi.org/10.1088/2058-9565/ab8506"}},quimb:{citationKey:"quimb",entryType:"article",entryTags:{title:"quimb: A python package for quantum information and many-body calculations",author:"Gray, Johnnie",journal:"J. Open Source Softw.",volume:"3",number:"29",pages:"819",year:"2018",url:"https://joss.theoj.org/papers/10.21105/joss.00819"}},qulacs:{citationKey:"qulacs",entryType:"article",entryTags:{title:"Qulacs: a fast and versatile quantum circuit simulator for research purpose",author:"Suzuki, Yasunari and Kawase, Yoshiaki and Masumura, Yuya and Hiraga, Yuria and Nakadai, Masahiro and Chen, Jiabao and Nakanishi, Ken M and Mitarai, Kosuke and Imai, Ryosuke and Tamiya, Shiro and others",journal:"arXiv:2011.13524",year:"2020",url:"https://arxiv.org/abs/2011.13524"}},strawberry:{citationKey:"strawberry",entryType:"article",entryTags:{title:"Strawberry fields: A software platform for photonic quantum computing",author:"Killoran, Nathan and Izaac, Josh and Quesada, Nicol{\\'a}s and Bergholm, Ville and Amy, Matthew and Weedbrook, Christian",journal:"Quantum",volume:"3",pages:"129",year:"2019",publisher:'Verein zur F{\\"o}rderung des Open Access Publizierens in den Quantenwissenschaften',url:"https://doi.org/10.22331/q-2019-03-11-129"}},tequila:{citationKey:"tequila",entryType:"article",entryTags:{doi:"10.1088/2058-9565/abe567",url:"https://doi.org/10.1088/2058-9565/abe567",year:"2021",month:"mar",publisher:"{IOP} Publishing",volume:"6",number:"2",pages:"024009",author:"Jakob S Kottmann and Sumner Alperin-Lea and Teresa Tamayo-Mendoza and Alba Cervera-Lierta and Cyrille Lavigne and Tzu-Ching Yen and Vladyslav Verteletskyi and Philipp Schleich and Abhinav Anand and Matthias Degroote and Skylar Chaney and Maha Kesibi and Naomi Grace Curnow and Brandon Solo and Georgios Tsilimigkounakis and Claudia Zendejas-Morales and Artur F Izmaylov and Al{\\'{a}}n Aspuru-Guzik",title:"{TEQUILA}: a platform for rapid development of quantum algorithms",journal:"Quantum Science and Technology"}},xacc:{citationKey:"xacc",entryType:"article",entryTags:{doi:"10.1088/2058-9565/ab6bf6",url:"https://doi.org/10.1088\\%2F2058-9565\\%2Fab6bf6",year:"2020",month:"feb",publisher:"{IOP} Publishing",volume:"5",number:"2",pages:"024002",author:"Alexander J McCaskey and Dmitry I Lyakh and Eugene F Dumitrescu and Sarah S Powers and Travis S Humble",title:"{XACC}: a system-level software infrastructure for heterogeneous quantum{\\textendash}classical computing",journal:"Quantum Sci. Technol."}},yao:{citationKey:"yao",entryType:"article",entryTags:{title:"Yao. jl: Extensible, Efficient Framework for Quantum Algorithm Design",author:"Luo, Xiu-Zhe and Liu, Jin-Guo and Zhang, Pan and Wang, Lei",journal:"Quantum",volume:"4",pages:"341",year:"2020",publisher:'Verein zur F{\\"o}rderung des Open Access Publizierens in den Quantenwissenschaften',url:"https://doi.org/10.22331/q-2020-10-11-341"}},OpenFermion:{citationKey:"OpenFermion",entryType:"article",entryTags:{title:"OpenFermion: the electronic structure package for quantum computers",author:"McClean, Jarrod and Rubin, Nicholas and Sung, Kevin and Kivlichan, Ian David and Bonet-Monroig, Xavier and Cao, Yudong and Dai, Chengyu and Fried, Eric Schuyler and Gidney, Craig and Gimby, Brendan and others",journal:"Quantum Sci. Technol.",year:"2020",publisher:"IOP Publishing",url:"https://doi.org/10.1088/2058-9565/ab8ebc"}},psi4:{citationKey:"psi4",entryType:"article",entryTags:{title:"PSI4 1.4: Open-source software for high-throughput quantum chemistry",author:"Smith, Daniel GA and Burns, Lori A and Simmonett, Andrew C and Parrish, Robert M and Schieber, Matthew C and Galvelis, Raimondas and Kraus, Peter and Kruse, Holger and Di Remigio, Roberto and Alenaizan, Asem and others",journal:"J. Chem. Phys.",volume:"152",number:"18",pages:"184108",year:"2020",publisher:"AIP Publishing LLC",url:"https://doi.org/10.1063/5.0006002"}},pyscf1:{citationKey:"pyscf1",entryType:"article",entryTags:{author:"Sun, Qiming and Berkelbach, Timothy C. and Blunt, Nick S. and Booth, George H. and Guo, Sheng and Li, Zhendong and Liu, Junzi and McClain, James D. and Sayfutyarova, Elvira R. and Sharma, Sandeep and Wouters, Sebastian and Chan, Garnet Kin-Lic",title:"PySCF: the Python-based simulations of chemistry framework",journal:"Wiley Interdiscip. Rev. Comput. Mol. Sci.",volume:"8",number:"1",pages:"e1340",url:"https://doi.org/10.1002/wcms.1340",year:"2018"}},pyscf2:{citationKey:"pyscf2",entryType:"article",entryTags:{author:"Sun,Qiming  and Zhang,Xing  and Banerjee,Samragni  and Bao,Peng  and Barbry,Marc  and Blunt,Nick S.  and Bogdanov,Nikolay A.  and Booth,George H.  and Chen,Jia  and Cui,Zhi-Hao  and Eriksen,Janus J. and \\textit{et. al.}",title:"Recent developments in the PySCF program package",journal:"J. Chem. Phys.",volume:"153",number:"2",pages:"024109",year:"2020",doi:"10.1063/5.0006074",URL:"https://doi.org/10.1063/5.0006074"}},nwchem:{citationKey:"nwchem",entryType:"article",entryTags:{title:"NWChem: A comprehensive and scalable open-source solution for large scale molecular simulations",author:"Valiev, Marat and Bylaska, Eric J and Govind, Niranjan and Kowalski, Karol and Straatsma, Tjerk P and Van Dam, Hubertus JJ and Wang, Dunyou and Nieplocha, Jarek and Apra, Edoardo and Windus, Theresa L and others",journal:"Comput. Phys. Commun.",volume:"181",number:"9",pages:"1477--1489",year:"2010",publisher:"Elsevier",url:"https://doi.org/10.1016/j.cpc.2010.04.018"}},EntropicaQAOA:{citationKey:"EntropicaQAOA",entryType:"misc",entryTags:{author:"{Entropica Labs}",title:"EntropicaQAOA",url:"https://docs.entropicalabs.io/qaoa/",year:"2019"}},TFQ:{citationKey:"TFQ",entryType:"article",entryTags:{title:"Tensorflow quantum: A software framework for quantum machine learning",author:"Broughton, Michael and Verdon, Guillaume and McCourt, Trevor and Martinez, Antonio J and Yoo, Jae Hyeon and Isakov, Sergei V and Massey, Philip and Niu, Murphy Yuezhen and Halavati, Ramin and Peters, Evan and others",journal:"arXiv:2003.02989",year:"2020",url:"https://arxiv.org/abs/2003.02989"}},TF:{citationKey:"TF",entryType:"article",entryTags:{title:"Tensorflow: A system for large-scale machine learning",author:"Abadi, Mart{\\'\\i}n and Barham, Paul and Chen, Jianmin and Chen, Zhifeng and Davis, Andy and Dean, Jeffrey and Devin, Matthieu and Ghemawat, Sanjay and Irving, Geoffrey and Isard, Michael and others",journal:"12th $\\{$USENIX$\\}$ symposium on operating systems design and implementation ($\\{$OSDI$\\}$ 16)",pages:"265--283",year:"2016",url:"https://www.usenix.org/conference/osdi16/technical-sessions/presentation/abadi"}},larose2020mitiq:{citationKey:"larose2020mitiq",entryType:"article",entryTags:{title:"Mitiq: {A} software package for error mitigation on noisy quantum computers",shorttitle:"Mitiq",url:"http://arxiv.org/abs/2009.04417",journal:"arXiv:2009.04417",author:"LaRose, Ryan and Mari, Andrea and Karalekas, Peter J. and Shammah, Nathan and Zeng, William J.",month:"sep",year:"2020"}},pyzx:{citationKey:"pyzx",entryType:"article",entryTags:{author:"Kissinger, Aleks and van de Wetering, John",title:"{PyZX: Large Scale Automated Diagrammatic Reasoning}",year:"2020",journal:"Proceedings QPL 2019",editor:"Coecke, Bob and Leifer, Matthew",volume:"318",pages:"229-241",publisher:"Open Publishing Association",doi:"10.4204/EPTCS.318.14",url:"https://arxiv.org/abs/1904.04735v2"}},quilc:{citationKey:"quilc",entryType:"article",entryTags:{title:"An open-source, industrial-strength optimizing compiler for quantum programs",author:"Smith, Robert S and Peterson, Eric C and Skilbeck, Mark G and Davis, Erik J",journal:"Quantum Sci. Technol.",volume:"5",number:"4",pages:"044001",year:"2020",publisher:"IOP Publishing",url:"https://doi.org/10.1088/2058-9565/ab9acb"}},qconvert:{citationKey:"qconvert",entryType:"misc",entryTags:{title:"Quantum programming language converter",author:"{Quantastica}",howpublished:"\\url{https://github.com/quantastica/qconvert}",year:"2020"}},qconvert_js:{citationKey:"qconvert_js",entryType:"misc",entryTags:{title:"{Q-Convert}",author:"{Quantastica}",howpublished:"\\url{https://github.com/quantastica/qconvert-js}",year:"2020"}},itensor:{citationKey:"itensor",entryType:"article",entryTags:{title:"The \\mbox{ITensor} Software Library for Tensor Network Calculations",author:"Matthew Fishman and Steven R. White and E. Miles Stoudenmire",year:"2020",journal:"arXiv:2007.14822",url:"https://arxiv.org/abs/2007.14822"}},OpenQL:{citationKey:"OpenQL",entryType:"misc",entryTags:{title:"{OpenQL}",author:"{QCA Lab}",howpublished:"\\url{https://github.com/QE-Lab/OpenQL}",year:"2020"}},JKQ:{citationKey:"JKQ",entryType:"article",entryTags:{title:"JKQ: JKU tools for quantum computing",author:"Wille, Robert and Hillmich, Stefan and Burgholzer, Lukas",journal:"2020 IEEE/ACM International Conference On Computer Aided Design (ICCAD)",pages:"1--5",year:"2020",organization:"IEEE",url:"https://doi.org/10.1145/3400302.3415746"}},scaffcc:{citationKey:"scaffcc",entryType:"article",entryTags:{title:"{ScaffCC}: a framework for compilation and analysis of quantum computing programs",author:"JavadiAbhari, Ali and Patil, Shruti and Kudrow, Daniel and Heckey, Jeff and Lvov, Alexey and Chong, Frederic T and Martonosi, Margaret",journal:"Proceedings of the 11th ACM Conference on Computing Frontiers",pages:"1--10",year:"2014",url:"https://www.cs.princeton.edu/research/techreps/TR-934-12"}},staq:{citationKey:"staq",entryType:"article",entryTags:{title:"staq-A full-stack quantum processing toolkit",author:"Amy, Matthew and Gheorghiu, Vlad",journal:"Quantum Sci. Technol.",year:"2020",publisher:"IOP Publishing",url:"https://doi.org/10.1088/2058-9565/ab9359"}},silq:{citationKey:"silq",entryType:"article",entryTags:{title:"Silq: a high-level quantum language with safe uncomputation and intuitive semantics",author:"Bichsel, Benjamin and Baader, Maximilian and Gehr, Timon and Vechev, Martin",journal:"Proceedings PLDI 2020",pages:"286--300",year:"2020",url:"https://dl.acm.org/doi/abs/10.1145/3385412.3386007"}},qrack:{citationKey:"qrack",entryType:"misc",entryTags:{author:"Daniel Strano and the Qrack contributors",title:"Qrack",howpublished:"\\url{https://github.com/vm6502q/qrack}",year:"2020"}},qsimulator:{citationKey:"qsimulator",entryType:"misc",entryTags:{title:"Quantum Circuit Simulator",author:"{Quantastica}",howpublished:"\\url{https://github.com/quantastica/quantum-circuit}",year:"2020"}},Qutip:{citationKey:"Qutip",entryType:"article",entryTags:{title:"{QuTiP}: An open-source Python framework for the dynamics of open quantum systems",journal:"Comput. Phys. Commun.",volume:"183",number:"8",pages:"1760 - 1772",year:"2012",url:"https://doi.org/10.1016/j.cpc.2012.02.021",author:"J.R. Johansson and P.D. Nation and Franco Nori"}},QCtrl:{citationKey:"QCtrl",entryType:"misc",entryTags:{author:"{Q-Ctrl}",title:"Q-CTRL Open Controls",url:"https://github.com/qctrl/python-open-controls",year:"2020"}}},bibKeys:["cirq","DQCSim","intel","Lib","pennylane","projectq","pyquil","qsharp","qibo","Qiskit","QTensor","quest","jones2020questlink","quimb","qulacs","strawberry","tequila","xacc","yao","OpenFermion","psi4","pyscf1","pyscf2","nwchem","EntropicaQAOA","TFQ","TF","larose2020mitiq","pyzx","quilc","qconvert","qconvert_js","itensor","OpenQL","JKQ","scaffcc","staq","silq","QXsim","qrack","qsimulator","Qutip","QCtrl"]}),(d,h)=>{const r=_,a=q,y=K,l=b,m=f,p=g;return s(),u("div",null,[n(r),t("article",null,[n(l,{id:"tab:software",index:"1",title:"Open-source quantum software libraries"},{caption:i(()=>[Yt,Vt]),default:i(()=>[t("table",null,[A,t("tbody",null,[t("tr",null,[t("td",null,[e("Cirq "),n(a,{citingKey:["cirq"]})]),w,k,P,M]),t("tr",null,[t("td",null,[e("DQCSim "),n(a,{citingKey:["DQCSim"]})]),j,L,N,O]),t("tr",null,[t("td",null,[e("IQS "),n(a,{citingKey:["intel"]})]),x,z,J,E]),t("tr",null,[t("td",null,[n(y,{tex:"|Lib\\rangle "}),n(a,{citingKey:["Lib"]})]),I,D,F,B]),t("tr",null,[t("td",null,[e("Pennylane "),n(a,{citingKey:["pennylane"]})]),G,R,Y,V]),t("tr",null,[t("td",null,[e("ProjectQ "),n(a,{citingKey:["projectq"]})]),$,X,H,W]),t("tr",null,[t("td",null,[e("pyquil/Forest "),n(a,{citingKey:["pyquil"]})]),Z,U,tt,nt]),t("tr",null,[t("td",null,[e("QDK "),n(a,{citingKey:["qsharp"]})]),et,at,it,ot]),t("tr",null,[t("td",null,[e("Qibo "),n(a,{citingKey:["qibo"]})]),rt,lt,st,ut]),t("tr",null,[t("td",null,[e("Qiskit "),n(a,{citingKey:["Qiskit"]})]),ct,dt,ht,yt]),t("tr",null,[t("td",null,[e("QTensor "),n(a,{citingKey:["QTensor"]})]),mt,pt,_t,gt]),t("tr",null,[t("td",null,[e("QuEST "),n(a,{citingKey:["quest","jones2020questlink"]})]),bt,qt,ft,Tt]),t("tr",null,[t("td",null,[e("Quimb "),n(a,{citingKey:["quimb"]})]),Qt,Ct,vt,St]),t("tr",null,[t("td",null,[e("Qulacs "),n(a,{citingKey:["qulacs"]})]),Kt,At,wt,kt]),t("tr",null,[t("td",null,[e("StrawberryFields "),n(a,{citingKey:["strawberry"]})]),Pt,Mt,jt,Lt]),t("tr",null,[t("td",null,[e("Tequila "),n(a,{citingKey:["tequila"]})]),Nt,Ot,xt,zt]),t("tr",null,[t("td",null,[e("XACC "),n(a,{citingKey:["xacc"]})]),Jt,Et,It,Dt]),t("tr",null,[t("td",null,[e("Yao "),n(a,{citingKey:["yao"]})]),Ft,Bt,Gt,Rt])])])]),_:1}),n(l,{id:"table-2",index:"2",title:"External open-source libraries"},{caption:i(()=>[t("div",In,[e("External open-source libraries useful for the NISQ era. These libraries have applications in chemistry, machine learning, circuit compilation and quantum control. Some of them are integrated in the quantum software libraries listed in "),n(m,{target:["tab:software"]},{default:i(()=>[e("Table\u20091")]),_:1}),e(".")])]),default:i(()=>[t("table",null,[$t,t("tbody",null,[t("tr",null,[t("td",null,[e("OpenFermion "),n(a,{citingKey:["OpenFermion"]})]),Xt,Ht]),t("tr",null,[t("td",null,[e("psi4 "),n(a,{citingKey:["psi4"]})]),Wt,Zt]),t("tr",null,[t("td",null,[e("PySCF "),n(a,{citingKey:["pyscf1","pyscf2"]})]),Ut,tn]),t("tr",null,[t("td",null,[e("NWChem "),n(a,{citingKey:["nwchem"]})]),nn,en]),t("tr",null,[t("td",null,[e("EntropicaQAOA "),n(a,{citingKey:["EntropicaQAOA"]})]),an,on]),t("tr",null,[t("td",null,[e("TensorFlowQ "),n(a,{citingKey:["TFQ"]})]),rn,ln]),t("tr",null,[t("td",null,[e("TensorFlow "),n(a,{citingKey:["TF"]})]),sn,un]),t("tr",null,[t("td",null,[e("Mitiq "),n(a,{citingKey:["larose2020mitiq"]})]),cn,dn]),t("tr",null,[t("td",null,[e("pyzx "),n(a,{citingKey:["pyzx"]})]),hn,yn]),t("tr",null,[t("td",null,[e("quilc "),n(a,{citingKey:["quilc"]})]),mn,pn]),t("tr",null,[t("td",null,[e("Q-Convert "),n(a,{citingKey:["qconvert","qconvert_js"]})]),_n,gn]),t("tr",null,[t("td",null,[e("iTensor "),n(a,{citingKey:["itensor"]})]),bn,qn]),t("tr",null,[t("td",null,[e("OpenQL "),n(a,{citingKey:["OpenQL"]})]),fn,Tn]),t("tr",null,[t("td",null,[e("JKQ "),n(a,{citingKey:["JKQ"]})]),Qn,Cn]),t("tr",null,[t("td",null,[e("ScaffCC "),n(a,{citingKey:["scaffcc"]})]),vn,Sn]),t("tr",null,[t("td",null,[e("staq "),n(a,{citingKey:["staq"]})]),Kn,An]),t("tr",null,[t("td",null,[e("Silq "),n(a,{citingKey:["silq"]})]),wn,kn]),t("tr",null,[t("td",null,[e("QX simulator "),n(a,{citingKey:["QXsim"]})]),Pn,Mn]),t("tr",null,[t("td",null,[e("QRACK "),n(a,{citingKey:["qrack"]})]),jn,Ln]),t("tr",null,[t("td",null,[e("quantum-circuit "),n(a,{citingKey:["qsimulator"]})]),Nn,On]),t("tr",null,[t("td",null,[e("QuTip "),n(a,{citingKey:["Qutip"]})]),xn,zn]),t("tr",null,[t("td",null,[e("Q-Ctrl "),n(a,{citingKey:["QCtrl"]})]),Jn,En])])])]),_:1}),n(p)])])}}};export{Yn as default};
