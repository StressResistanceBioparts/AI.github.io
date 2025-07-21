// script.js

let currentPage = 1;
let genesPerPage = 8;

// let allGenes = [
//     { GeneId: 1, geneName: "DUF6056", sequence: "ATCGATCGATCG", description: "Breast Cancer 1 Gene" },
//     { GeneId: 2, geneName: "HTX", sequence: "GCTAGCTAGCTA", description: "Tumor Protein P53" },
//     { GeneId: 3, geneName: "mBOAT", sequence: "ATGCGATCGTAC", description: "Epidermal Growth Factor Receptor" },
//     { GeneId: 4, geneName: "PcfJ", sequence: "AGTCGATCGTGA", description: "Kirsten Rat Sarcoma Viral Oncogene" },
//     { GeneId: 5, geneName: "HER2", sequence: "GCTAGCTAGTACc", description: "Human Epidermal Growth Factor Receptor 2" },
//     { GeneId: 6, geneName: "PBRM1", sequence: "TGCATCGATCGT", description: "Polybromo 1" },
//     { GeneId: 7, geneName: "MLH1", sequence: "CGTACGTAGCTA", description: "MutL Homolog 1" },
//     { GeneId: 8, geneName: "MUTYH", sequence: "TGCATCGGATCG", description: "MutY Homolog" },
//     { GeneId: 9, geneName: "VHL", sequence: "ATCGATCGATCG", description: "Von Hippel-Lindau Tumor Suppressor" },
//     { GeneId: 10, geneName: "PTEN", sequence: "CGTAGCTAGGTC", description: "Phosphatase and Tensin Homolog" },
//    
// ];

let allGenes = [
{ GeneId: "Acid_resistance_1", GeneName: "GhALS3", Function: "ABC转运蛋白", Description: "不同pH（0.1N HCL调节）、Al3+", References: "https://doi.org/10.1016/J.STRESS.2023.100188" },
{ GeneId: "Acid_resistance_2", GeneName: "hu", Function: "假定的组蛋白样蛋白功能", Description: "酸、氧化胁迫（pH1.5,11.5mM H2O2,11 cycles（盐酸调节）", References: "https://doi.org/10.1016/j.heliyon.2023.e14838" },
{ GeneId: "Acid_resistance_3", GeneName: "YthA", Function: "PspC家族转录调节因子", Description: "pH3.0（盐酸调节）", References: "https://doi.org/10.1128/aem.02483-17" },
{ GeneId: "Acid_resistance_4", GeneName: "YhiM", Function: "内膜蛋白", Description: "pH2.5", References: "https://doi.org/10.1007/s00203-012-0798-x" },
{ GeneId: "Acid_resistance_5", GeneName: "Dps", Function: "DNA结合蛋白", Description: "pH2.0（6N HCl调节）", References: "https://doi.org/10.1186/1471-2180-8-181" },
{ GeneId: "Acid_resistance_6", GeneName: "IHF", Function: "异源二聚体组蛋白样 DNA 结合蛋白；ihfA/ihfB", Description: "pH2.5 （HCl）", References: "https://doi.org/10.1007/s00284-014-0595-7" },
{ GeneId: "Acid_resistance_7", GeneName: "Add", Function: "腺苷脱氨酶", Description: "pH2.5 （HCl）", References: "https://doi.org/10.1111/j.1365-2672.2012.05246.x" },
{ GeneId: "Acid_resistance_8", GeneName: "RffG", Function: "/", Description: "△5.5 g·L−1 lactic acid stress （pH 4.0）", References: "https://doi.org/10.1007/s00253-022-12241-1" },
{ GeneId: "Acid_resistance_9", GeneName: "MarP", Function: "周质丝氨酸蛋白酶", Description: "pH4.5（2-吗啉乙磺酸）", References: "https://doi.org/10.15252/embj.201695028" },
{ GeneId: "Acid_resistance_10", GeneName: "DegP", Function: "周质蛋白酶", Description: "pH2.3（HCl）", References: "https://doi.org/10.1111/febs.14627" },
{ GeneId: "Acid_resistance_11", GeneName: "RCK1", Function: "参与氧化应激的蛋白酶", Description: "5 g/L acetic acid", References: "https://doi.org/10.1016/j.jbiotec.2018.12.013" },
{ GeneId: "Acid_resistance_12", GeneName: "IbpA", Function: "小热休克蛋白", Description: "/", References: "https://doi.org/10.1111/mmi.14606" },
{ GeneId: "Acid_resistance_13", GeneName: "OmpR", Function: "全局调节因子", Description: "pH5.5（HCl）", References: "https://doi.org/10.1111/mmi.14606" },
{ GeneId: "Acid_resistance_14", GeneName: "Cls", Function: "CL合酶", Description: "pH2.5 （HCl）", References: "https://doi.org/10.1099/mic.0.057273-0" },
{ GeneId: "Acid_resistance_15", GeneName: "recA", Function: "DNA修复蛋白", Description: "酸（1.8-7.4,HCL调节）、胆汁", References: "https://doi.org/10.1016/j.ijmm.2010.11.006" },
{ GeneId: "Acid_resistance_16", GeneName: "ADE17", Function: "双功能嘌呤生物合成蛋白", Description: "acetic acid（5g/L）", References: "https://doi.org/10.1186/s13068-019-1456-1" },
{ GeneId: "Acid_resistance_17", GeneName: "TsODC", Function: "鸟氨酸脱羧酶", Description: "PH2.5（HCL） 2h", References: "https://doi.org/10.1016/j.exppara.2023.108503" },
{ GeneId: "Acid_resistance_18", GeneName: "QDR3", Function: "多药耐药转运体", Description: "戊二酸、己二酸、戊二酸、黏液酸和谷胱甘酸", References: "https://doi.org/10.1016/j.ymben.2019.09.008" },
{ GeneId: "Acid_resistance_19", GeneName: "ras2", Function: "GTP结合蛋白", Description: "pH 3, 2 g/L of acetic acid, and 37 °C", References: "https://doi.org/10.1007/s00253-021-11730-z" },
{ GeneId: "Acid_resistance_20", GeneName: "sum1", Function: "复制起始的正调节因子", Description: "pH3,30℃/pH5,39℃（醋酸）", References: "https://doi.org/10.1007/s00253-021-11731-z" },
{ GeneId: "Acid_resistance_21", GeneName: "hsf1", Function: "热休克因子", Description: "/", References: "https://doi.org/10.1007/s00253-021-11732-z" },
{ GeneId: "Acid_resistance_22", GeneName: "COX20", Function: "细胞色素氧化酶伴侣基因", Description: "75 mM acetic acid；1 mM hydrogen peroxide", References: "https://doi.org/10.1371/journal.pone.0139129" },
{ GeneId: "Acid_resistance_23", GeneName: "Hfq", Function: "RNA结合蛋白", Description: "pH3", References: "https://doi.org/10.1016/j.resmic.2015.06.007" },
{ GeneId: "Acid_resistance_24", GeneName: "CpoA", Function: "糖基转移酶", Description: "/", References: "https://doi.org/10.1186/1471-2180-14-12" },
{ GeneId: "Acid_resistance_25", GeneName: "RpsU", Function: "核糖体蛋白", Description: "55 ◦C,pH 3.0", References: "https://doi.org/10.1016/j.ijfoodmicro.2021.109269" },
{ GeneId: "Acid_resistance_26", GeneName: "mleR", Function: "lysR型转录调控因子 （LTTR）", Description: "pH3.1 HCL调节", References: "https://doi.org/10.1186/1471-2180-10-58" },
{ GeneId: "Acid_resistance_27", GeneName: "HAA1", Function: "转录激活因子", Description: "醋酸", References: "https://doi.org/10.1128/aem.02356-12" },
{ GeneId: "Acid_resistance_28", GeneName: "grxB", Function: "在与谷胱甘肽还原酶的耦合系统中参与还原某些二硫键。不作为核糖核苷酸还原酶的氢供体", Description: "pH4/7", References: "https://doi.org/10.3389/fmicb.2018.00133" },
{ GeneId: "Acid_resistance_29", GeneName: "GadY", Function: "IS183", Description: "/", References: "https://doi.org/10.1128/jb.186.20.6698-6705.2004" },
{ GeneId: "Acid_resistance_30", GeneName: "NlpD", Function: "细胞外膜蛋白", Description: "pH3", References: "https://doi.org/10.1080/21505594.2020.1870336" },
{ GeneId: "Acid_resistance_31", GeneName: "mlea", Function: "苹果酸乳酸酶", Description: "pH3.0-3.8（盐酸调节）", References: "https://doi.org/10.1016/j.foodres.2022.111235" },
{ GeneId: "Acid_resistance_32", GeneName: "PprI", Function: "DR0167,也称为 IrrE", Description: "H2O2（5/10/20）、UV（254nm）、Nacl（0%/3%/5%）、乳酸（3%/5%）、pH5/8/10", References: "https://doi.org/10.1371/journal.pone.0142918" },
{ GeneId: "Acid_resistance_33", GeneName: "pknB", Function: "真核样丝氨酸/苏氨酸蛋白激酶", Description: "pH5.0", References: "https://doi.org/10.1128/jb.188.4.1628-1632.2006" },
{ GeneId: "Acid_resistance_34", GeneName: "iraM", Function: "抗适配器蛋白", Description: "pH2.5（hCl调节）", References: "https://doi.org/10.1128/jb.01124-10" },
{ GeneId: "Acid_resistance_35", GeneName: "safA", Function: "传感器相关因子", Description: "/", References: "https://doi.org/10.1128/jb.01124-10" },
{ GeneId: "Acid_resistance_36", GeneName: "mcbR", Function: "Tet-R型硫代谢转录抑制剂", Description: "pH4.0/5.6（缓冲液调节,必要HCL）", References: "https://doi.org/10.1007/s00253-018-09585-y" },
{ GeneId: "Acid_resistance_37", GeneName: "cg1328", Function: "编码铜伴侣", Description: "/", References: "https://doi.org/10.1007/s00253-018-09586-y" },
{ GeneId: "Acid_resistance_38", GeneName: "KatA", Function: "过氧化氢酶", Description: "/", References: "https://doi.org/10.1007/s00253-018-09587-y" },
{ GeneId: "Acid_resistance_39", GeneName: "Dps", Function: "胁迫诱导的DNA结合蛋白", Description: "/", References: "https://doi.org/10.1007/s00253-018-09588-y" },
{ GeneId: "Acid_resistance_40", GeneName: "LssR", Function: "pH 3.0, hydrochloric acid; pH 4.0, lactic acid", Description: "ID: LLNZ_RS08345", References: "https://doi.org/10.3168/jds.2022-21842" },
{ GeneId: "Acid_resistance_41", GeneName: "treB", Function: "假定的海藻糖PTS EIIBC", Description: "pH2.3（HCL）", References: "https://doi.org/10.1016/j.ijfoodmicro.2023.110165" },
{ GeneId: "Acid_resistance_42", GeneName: "murF", Function: "PG合成基因", Description: "pH3.0（1.5/2h）", References: "https://doi.org/10.1128/AEM.02981-19" },
{ GeneId: "Acid_resistance_43", GeneName: "Dbf2", Function: "丝氨酸-苏氨酸蛋白激酶", Description: "pH4.5（sorbic acid）", References: "https://doi.org/10.1099/mic.0.2007/010298-0" },
{ GeneId: "Acid_resistance_44", GeneName: "Pma1", Function: "编码跨膜多肽", Description: "pH4.5（醋酸）", References: "https://doi.org/10.1007/s00253-016-7898-5" },
{ GeneId: "Acid_resistance_45", GeneName: "lmo0501", Function: "编码一种类似于枯草芽孢杆菌和嗜热脂肪芽孢杆菌中甘露醇转录调节因子（MltR）", Description: "冷（4,10℃、盐4%、有机酸（乳酸pH6.0,醋酸pH5.5、碱）", References: "https://doi.org/10.1016/j.fm.2011.05.003" },
{ GeneId: "Acid_resistance_46", GeneName: "asnH", Function: "天冬酰胺合酶", Description: "pH3/5/6/7（乳酸）", References: "https://doi.org/10.1007/s00253-017-8365-7" },
{ GeneId: "Acid_resistance_47", GeneName: "mntH", Function: "NRAMP型转运体", Description: "pH4.8（盐酸调节）", References: "https://doi.org/10.1016/j.ijfoodmicro.2023.110238" },
{ GeneId: "Acid_resistance_48", GeneName: "CgAMD1", Function: "AMP脱氨酶", Description: "pH4（HCL调节）", References: "https://doi.org/10.1007/s10529-017-2452-9" },
{ GeneId: "Acid_resistance_49", GeneName: "CbpA", Function: "分子伴侣", Description: "pH5.0（醋酸调节）", References: "https://doi.org/10.1007/s11274-023-03613-4" },
{ GeneId: "Acid_resistance_50", GeneName: "pyk", Function: "丙酮酸激酶", Description: "pH4.0（乳酸）", References: "https://doi.org/10.1038/srep17024" },
{ GeneId: "Acid_resistance_51", GeneName: "Ccpa", Function: "DNA结合蛋白,属于细菌转录因子Lacl/GalR家族", Description: "/", References: "https://doi.org/10.1038/srep17024" },
{ GeneId: "Acid_resistance_52", GeneName: "fur", Function: "铁吸收调节蛋白", Description: "pH5.7（盐酸）", References: "https://doi.org/10.1111/j.1523-5378.2011.00824.x" },
{ GeneId: "Acid_resistance_53", GeneName: "DsrA", Function: "sRNA", Description: "pH2.0/3.0（盐酸调节）", References: "https://doi.org/10.1002/mbo3.143" },
{ GeneId: "Acid_resistance_54", GeneName: "RprA", Function: "/", Description: "/", References: "https://doi.org/10.1002/mbo3.143" },
{ GeneId: "Acid_resistance_55", GeneName: "sll1180", Function: "与大肠中HlyB同源", Description: "pH6.0（ MES-NaOH）", References: "https://doi.org/10.1007/s11120-018-0548-2" },
{ GeneId: "Acid_resistance_56", GeneName: "Sll1181", Function: "与集胞藻属中HlyD蛋白同源", Description: "/", References: "https://doi.org/10.1007/s11120-018-0548-2" },
{ GeneId: "Acid_resistance_57", GeneName: "Slr1270", Function: "与集胞藻属中TolC同源", Description: "/", References: "https://doi.org/10.1007/s11120-018-0548-2" },
{ GeneId: "Acid_resistance_58", GeneName: "Sll1951", Function: "类似于溶血素", Description: "/", References: "https://doi.org/10.1007/s11120-018-0548-2" },
{ GeneId: "Acid_resistance_59", GeneName: "rbsA", Function: "核糖ABC转运体ATP结合蛋白", Description: "pH4.0（乳酸）", References: "https://doi.org/10.1186/s12934-019-1188-8" },
{ GeneId: "Acid_resistance_60", GeneName: "rbsB", Function: "核糖ABC转运体底物结合蛋白", Description: "/", References: "https://doi.org/10.1186/s12934-019-1188-8" },
{ GeneId: "Acid_resistance_61", GeneName: "msmK", Function: "糖ABC转运体ATP结合蛋白", Description: "/", References: "https://doi.org/10.1186/s12934-019-1188-8" },
{ GeneId: "Acid_resistance_62", GeneName: "dppA", Function: "寡肽ABC转运体底物结合蛋白", Description: "/", References: "https://doi.org/10.1186/s12934-019-1188-8" },
{ GeneId: "Acid_resistance_63", GeneName: "ole1", Function: "∆-9脂肪酸去饱和酶", Description: "pH5（亲水性醋酸、甲酸、乙酰丙酸和亲脂性肉桂酸）", References: "https://doi.org/10.1186/s13068-018-1295-5" },
{ GeneId: "Acid_resistance_64", GeneName: "ERG1", Function: "角鲨烯环氧化酶", Description: "/", References: "https://doi.org/10.1186/s13068-018-1295-5" },
{ GeneId: "Acid_resistance_65", GeneName: "dfs", Function: "脂肪酸脱氢酶", Description: "pH6.5/4.5/3.5（醋酸调节）", References: "https://doi.org/10.1007/s10295-019-02225-y" },
{ GeneId: "Acid_resistance_66", GeneName: "cfa", Function: "环丙烷脂肪酸合酶", Description: "/", References: "https://doi.org/10.1007/s10295-019-02226-y" },
{ GeneId: "Acid_resistance_67", GeneName: "ftsz", Function: "细胞骨架分裂蛋白", Description: "pH5-7.5", References: "https://doi.org/10.1111/omi.12364" },
{ GeneId: "Acid_resistance_68", GeneName: "slt2", Function: "丝氨酸-苏氨酸蛋白激酶", Description: "硫酸pH2.5", References: "https://doi.org/10.1111/j.1365-2672.2012.05362.x" },
{ GeneId: "Acid_resistance_69", GeneName: "pdr18", Function: "ABC转运蛋白,MDR/MXR决定因子", Description: "醋酸（60mMpH4.0）", References: "https://doi.org/10.1038/s41598-018-26128-7" },
{ GeneId: "Acid_resistance_70", GeneName: "slr1045", Function: "编码ABC转运蛋白渗透酶亚基", Description: "pH 6.0（添加10 mM MES-NaOH）", References: "https://doi.org/10.1016/j.bbabio.2012.02.035" },
{ GeneId: "Acid_resistance_71", GeneName: "Sll0751", Function: "SltB1", Description: "pH6（ 10 mM MES–NaOH）", References: "https://doi.org/10.1007/s11120-015-0153-6" },
{ GeneId: "Acid_resistance_72", GeneName: "Sll1041", Function: "SltC1", Description: "/", References: "https://doi.org/10.1007/s11120-015-0153-6" },
{ GeneId: "Acid_resistance_73", GeneName: "Slr1045", Function: "SltA1", Description: "/", References: "https://doi.org/10.1007/s11120-015-0153-6" },
{ GeneId: "Acid_resistance_74", GeneName: "hwbr", Function: "/", Description: "pH2-8", References: "https://doi.org/10.1074/jbc.m115.685065" },
{ GeneId: "Acid_resistance_75", GeneName: "aphB", Function: "LysR型转录调节因子", Description: "pH4.4/pH5.8", References: "https://doi.org/10.1128/jb.00457-22" },
{ GeneId: "Acid_resistance_76", GeneName: "s015", Function: "/", Description: "pH2~7", References: "https://doi.org/10.1007/s00253-017-8399-x" },
{ GeneId: "Acid_resistance_77", GeneName: "Asg1", Function: "转录因子", Description: "pH2/3/5.2", References: "https://doi.org/10.3389/fmicb.2015.00843" },
{ GeneId: "Acid_resistance_78", GeneName: "Hal9", Function: "/", Description: "/", References: "https://doi.org/10.3389/fmicb.2015.00843" },
{ GeneId: "Acid_resistance_79", GeneName: "VuFDH", Function: "甲酸脱氢酶", Description: "pH4.5/5.5（盐酸调节）", References: "https://doi.org/10.1104/pp.16.01105" },
{ GeneId: "Acid_resistance_80", GeneName: "AtPAB2", Function: "多腺苷结合蛋白", Description: "硼酸（80mM）", References: "https://doi.org/10.1271/bbb.60065" },
{ GeneId: "Acid_resistance_81", GeneName: "AtRPS20B", Function: "核糖体小亚基蛋白", Description: "", References: "https://doi.org/10.1271/bbb.60065" },
{ GeneId: "Acid_resistance_82", GeneName: "AtMYB13", Function: "", Description: "", References: "https://doi.org/10.1271/bbb.60065" },
{ GeneId: "Acid_resistance_83", GeneName: "AtMYB68", Function: "Myb转录因子", Description: "", References: "https://doi.org/10.1271/bbb.60065" },
{ GeneId: "Acid_resistance_84", GeneName: "AtRBP47c'", Function: "RNA结合蛋白", Description: "", References: "https://doi.org/10.1271/bbb.60065" },
{ GeneId: "Acid_resistance_85", GeneName: "nrt1.1", Function: "硝酸盐转运体", Description: "pH4.5/5.0/6.5", References: "https://doi.org/10.1111/nph.13892" },
{ GeneId: "Acid_resistance_86", GeneName: "MsGME", Function: "GDP-D甘露糖差向异构酶", Description: "Nacl（150mM）/15% PEG 6000 /50 μM Al2(SO4)3（PH4.5）", References: "https://doi.org/10.1007/s10529-014-1598-y" },
{ GeneId: "Acid_resistance_87", GeneName: "STOP1", Function: "cys2his2型锌指转录因子", Description: "", References: "https://doi.org/10.3389/fpls.2023.1200139" },
{ GeneId: "Acid_resistance_88", GeneName: "Gdt1", Function: "二价阳离子/质子反转运体", Description: "pH6.8/7.5/8.0（HCL）", References: "https://doi.org/10.1016/j.jbc.2023.104628" },
{ GeneId: "Acid_resistance_89", GeneName: "PeMPK7", Function: "", Description: "4 mM pHBA, 50 mM H2O2, or 20% PEG 6000", References: "https://doi.org/10.1016/J.INDCROP.2022.114861" },
{ GeneId: "Acid_resistance_90", GeneName: "torR", Function: "", Description: "pH2.0（HCL）", References: "https://doi.org/10.1016/j.gene.2022.146295" },
{ GeneId: "Acid_resistance_91", GeneName: "torS", Function: "", Description: "", References: "https://doi.org/10.1016/j.gene.2022.146295" },
{ GeneId: "Acid_resistance_92", GeneName: "IoGAS1", Function: "编码糖基磷脂酰肌醇（GPI）", Description: "pH值低于2.4的硫酸、盐酸、甲酸、乙酸和乳酸", References: "https://doi.org/10.1007/s12010-019-03187-8" },
{ GeneId: "Acid_resistance_93", GeneName: "arcA", Function: "精氨酸脱亚胺酶", Description: "pH 6.9／6.5／6.0／5.5,pH5 （MRS培养基）", References: "https://doi.org/10.1016/j.fm.2023.104281" },
{ GeneId: "Acid_resistance_94", GeneName: "arcC", Function: "氨基甲酸酯激酶", Description: "", References: "https://doi.org/10.1016/j.fm.2023.104281" },
{ GeneId: "Acid_resistance_95", GeneName: "zitP", Function: "金属ABC转运蛋白渗透酶", Description: "pH4（乳酸调节）", References: "https://doi.org/10.1016/j.jbiotec.2022.08.006" },
{ GeneId: "Acid_resistance_96", GeneName: "zitQ", Function: "金属ABC转运蛋白ATP结合蛋白", Description: "", References: "https://doi.org/10.1016/j.jbiotec.2022.08.006" },
{ GeneId: "Acid_resistance_97", GeneName: "ecfA2", Function: "能量偶联因子转运体 ATP 结合蛋白", Description: "", References: "https://doi.org/10.1016/j.jbiotec.2022.08.006" },
{ GeneId: "Acid_resistance_98", GeneName: "ComX", Function: "全局调控因子", Description: "pH4/5（HCL调节）", References: "https://doi.org/10.3168/jds.2021-20184" },
{ GeneId: "Acid_resistance_99", GeneName: "M2", Function: "the influenza A matrix-2", Description: "醋酸（C2）、柠檬酸（C6）、庚酸（C7）、蓖麻油酸（C18）（3,5,10mM）", References: "https://doi.org/10.1016/j.ymben.2021.07.007" },
{ GeneId: "Acid_resistance_100", GeneName: "whiB", Function: "转录调节因子", Description: "平板（醋酸pH5）、C8（5mM）、Nacl（2mol/L）", References: "https://doi.org/10.1016/j.bej.2023.109026" },
{ GeneId: "Acid_resistance_101", GeneName: "cti", Function: "顺反式异构酶", Description: "", References: "https://doi.org/10.1016/j.bej.2023.109026" },
{ GeneId: "Acid_resistance_102", GeneName: "SEN1564A", Function: "酸休克蛋白", Description: "橙汁（pH3.77）苹果汁（pH3.57）", References: "https://doi.org/10.1016/j.fm.2017.12.005" },
{ GeneId: "Acid_resistance_103", GeneName: "BnPgb1", Function: "植物红蛋白", Description: "", References: "https://doi.org/10.1016/j.plantsci.2023.111775" },
{ GeneId: "Acid_resistance_104", GeneName: "DltD", Function: "膜蛋白,参与LTA的d-丙烯酰化", Description: "10% NaCl, pH3.0", References: "https://doi.org/10.3168/jds.2022-21898" },
{ GeneId: "Acid_resistance_105", GeneName: "actj", Function: "", Description: "pH5.6（MES buffer）", References: "https://doi.org/10.1016/j.jbiotec.2021.01.006" },
{ GeneId: "Acid_resistance_106", GeneName: "actk", Function: "", Description: "", References: "https://doi.org/10.1016/j.jbiotec.2021.01.006" },
{ GeneId: "Acid_resistance_107", GeneName: "SdaB", Function: "", Description: "pH7~2（HCL）", References: "https://doi.org/10.1128/mbio.02963-22" },
{ GeneId: "Acid_resistance_108", GeneName: "SdaA", Function: "", Description: "", References: "https://doi.org/10.1128/mbio.02963-22" },
{ GeneId: "Acid_resistance_109", GeneName: "AspA", Function: "天冬氨酸酶", Description: "pH4.5", References: "https://doi.org/10.1016/j.febslet.2010.03.045" },
{ GeneId: "Acid_resistance_110", GeneName: "ilvE", Function: "支链氨基酸转氨酶", Description: "pH5.4/5（HCL调节）", References: "https://doi.org/10.1128/jb.06737-11" },
{ GeneId: "Acid_resistance_111", GeneName: "S042", Function: "small RNA", Description: "pH2/3/4/5", References: "https://doi.org/10.1016/j.bbrc.2018.04.069" },
{ GeneId: "Acid_resistance_112", GeneName: "cfa", Function: "环丙烷脂肪酸合酶", Description: "", References: "https://doi.org/10.1016/j.ijfoodmicro.2016.01.017" },
{ GeneId: "Acid_resistance_113", GeneName: "STM1485", Function: "与在核苷酸水平上具有77%的相似性,在氨基酸序列上具有较低的一致性（~68%）", Description: "pH5（HCL）", References: "https://doi.org/10.1016/j.biochi.2019.02.005" },
{ GeneId: "Acid_resistance_114", GeneName: "ASR", Function: "acid shock RNA", Description: "pH7~4.5", References: "https://doi.org/10.1016/j.resmic.2008.06.003" },
{ GeneId: "Acid_resistance_115", GeneName: "RcsB", Function: "一种在许多肠道细菌中发挥广泛作用的调节因子", Description: "pH5.7/2.4（MES）", References: "https://doi.org/10.1128/jb.05040-11" },
{ GeneId: "Acid_resistance_116", GeneName: "SMU1142", Function: "SpxA", Description: "pH5.5; H2O2（0.5mM）, diamide（0.25mM）", References: "https://doi.org/10.1128/jb.00028-10" },
{ GeneId: "Acid_resistance_117", GeneName: "SMU2084", Function: "SpxB", Description: "", References: "https://doi.org/10.1128/jb.00028-10" },
{ GeneId: "Acid_resistance_118", GeneName: "GidA", Function: "葡萄糖抑制分裂蛋白a", Description: "pH5.5（醋酸缓冲液调节）；Nacl（0.585mM）;44℃", References: "https://doi.org/10.1128/aem.02549-13" },
{ GeneId: "Acid_resistance_119", GeneName: "mnmE", Function: "假定的噻吩和呋喃降解蛋白", Description: "/", References: "https://doi.org/10.1128/aem.02549-13" },
{ GeneId: "Acid_resistance_120", GeneName: "Dgk", Function: "二酰基甘油激酶", Description: "pH5.5（醋酸缓冲液调节）", References: "https://doi.org/10.1099/jmm.0.026070-0" },
{ GeneId: "Acid_resistance_121", GeneName: "trxB", Function: "硫氧还蛋白二硫还原酶", Description: "pH5.2（Hcl）pH5.7（醋酸）", References: "https://doi.org/10.1186/1471-2180-12-174" },
{ GeneId: "Acid_resistance_122", GeneName: "P19", Function: "19 kDa质周蛋白", Description: "/", References: "https://doi.org/10.1186/1471-2180-12-174" },
{ GeneId: "Acid_resistance_123", GeneName: "speA", Function: "精氨酸脱羧酶", Description: "pH5.5（HCL调节）", References: "https://doi.org/10.1111/hel.12115" },
{ GeneId: "Acid_resistance_124", GeneName: "hdeA", Function: "/", Description: "pH4.2/4.4/4.4/4.8/5.0（HCL）", References: "https://doi.org/10.1038/srep27973" },
{ GeneId: "Acid_resistance_125", GeneName: "hdeB", Function: "/", Description: "/", References: "https://doi.org/10.1038/srep27973" },
{ GeneId: "Acid_resistance_126", GeneName: "murG", Function: "在细胞壁生物合成过程中负责将n -乙酰氨基葡萄糖转移到载体脂质上", Description: "/", References: "https://doi.org/10.1038/srep27973" },
{ GeneId: "Acid_resistance_127", GeneName: "Ldh", Function: "乳酸脱氢酶", Description: "/", References: "https://doi.org/10.1038/srep27973" },
{ GeneId: "Acid_resistance_128", GeneName: "GcvB", Function: "ncRNA", Description: "pH2.0", References: "https://doi.org/10.1186/1471-2164-10-165" },
{ GeneId: "Acid_resistance_129", GeneName: "Alr", Function: "丙氨酸消旋酶", Description: "pH5.0（磷酸盐-柠檬酸盐缓冲溶液）", References: "https://doi.org/10.1038/s41598-018-24295-1" },
{ GeneId: "Acid_resistance_130", GeneName: "uvrA", Function: "核苷酸切除修复蛋白", Description: "1% acetic acid,  8% ethanol", References: "https://doi.org/10.1007/s00253-018-9066-6" },
{ GeneId: "Acid_resistance_131", GeneName: "yhiF", Function: "编码假定的LuxR家族调节因子", Description: "pH2.5,pH5.5（2-吗啉乙磺酸）", References: "https://doi.org/10.1128/jb.01490-06" },
{ GeneId: "Acid_resistance_132", GeneName: "slp", Function: "脂蛋白", Description: "/", References: "https://doi.org/10.1128/jb.01490-06" },
{ GeneId: "Acid_resistance_133", GeneName: "HdeA", Function: "/", Description: "/", References: "https://doi.org/10.1128/jb.01490-06" },
{ GeneId: "Acid_resistance_134", GeneName: "Spy1236", Function: "CiaHpy", Description: "pH6.0;H2O2（61 mM）15min", References: "https://doi.org/10.1186/1756-0500-7-189" },
{ GeneId: "Acid_resistance_135", GeneName: "htrA", Function: "丝氨酸蛋白酶", Description: "pH5.5,Nacl（1M）,H2O2（1.5mM）", References: "https://doi.org/10.1128/iai.73.10.6923-6934.2005" },
{ GeneId: "Acid_resistance_136", GeneName: "hyA", Function: "/", Description: "pH2.5（硫酸柠檬酸缓冲液）,1 % NaCl （w/v）", References: "https://doi.org/10.1099/mic.0.058248-0" },
{ GeneId: "Acid_resistance_137", GeneName: "hscA", Function: "/", Description: "乙醇（0,1,2,3%）", References: "https://doi.org/10.1007/s11274-019-2769-8" },
{ GeneId: "Acid_resistance_138", GeneName: "GND1", Function: "6-磷酸葡萄糖酸脱氢酶", Description: "0.6 % acetic acid （pH 4.5）", References: "https://doi.org/10.1007/s00253-015-6706-y" },
{ GeneId: "Acid_resistance_139", GeneName: "ASC1", Function: "鸟嘌呤核苷酸解离抑制剂Gpa2p", Description: "/", References: "https://doi.org/10.1007/s00253-015-6707-y" },
{ GeneId: "Acid_resistance_140", GeneName: "DBP2", Function: "ATP依赖的RNA解旋酶", Description: "/", References: "https://doi.org/10.1007/s00253-015-6708-y" },
{ GeneId: "Acid_resistance_141", GeneName: "thiT", Function: "lmo1429", Description: "pH5适应1h,pH3.0条件下测量存活率", References: "https://doi.org/10.1111/j.1574-6968.2011.02442.x" },
{ GeneId: "Acid_resistance_142", GeneName: "tolC", Function: "外膜蛋白", Description: "pH2.0", References: "https://doi.org/10.1371/journal.pone.0018960" },
{ GeneId: "Acid_resistance_143", GeneName: "EmrB", Function: "多药外排MFS转运体渗透酶亚基", Description: "/", References: "https://doi.org/10.1371/journal.pone.0018960" },
{ GeneId: "Acid_resistance_144", GeneName: "MdtB", Function: "多药外排泵RND渗透酶亚基", Description: "/", References: "https://doi.org/10.1371/journal.pone.0018960" },
{ GeneId: "Acid_resistance_145", GeneName: "slr1909", Function: "双组分响应调节因子", Description: "pH6.2-6.5（MES,乙基磺酸）", References: "https://doi.org/10.1016/j.jprot.2014.06.021" },
{ GeneId: "Acid_resistance_146", GeneName: "ureI", Function: "内膜蛋白", Description: "不同pH", References: "https://doi.org/10.1046/j.1365-2958.2000.01835.x" },
{ GeneId: "Antioxidant_stress_1", GeneName: "ScCPR1", Function: "细胞色素P450氧化还原酶编码", Description: "一种假定的细胞色素P450氧化还原酶编码基因", References: "https://doi.org/10.1111/1462-2920.15565" },
{ GeneId: "Antioxidant_stress_2", GeneName: "OsiR", Function: "氧化应激诱导的ncRNA", Description: "60 mM H2O2 for 30 min", References: "https://doi.org/10.3390/ijms21093200" },
{ GeneId: "Antioxidant_stress_3", GeneName: "Ino-1", Function: "肌醇-1-磷酸合成酶", Description: "暴露于诱导ROS生成的H2O2、CHP、CdCl2、NiSO4、MG、CDNB、环丙沙星和新霉素", References: "https://doi.org/10.1002/mbo3.721" },
{ GeneId: "Antioxidant_stress_4", GeneName: "Ohr", Function: "有机过氧化氢抗性基因编码蛋白", Description: "H2O2、CHP", References: "https://doi.org/10.1371/journal.pone.0131634" },
{ GeneId: "Antioxidant_stress_5", GeneName: "Sus1", Function: "核定位蛋白", Description: "mRNA输出所必需", References: "https://doi.org/10.1016/j.bbrc.2018.01.044" },
{ GeneId: "Antioxidant_stress_6", GeneName: "AOX", Function: "替代氧化酶", Description: "替代呼吸途径的末端氧化酶，其作用是将电子从泛醇转移到O2并产生H2O", References: "https://doi.org/10.1007/s10482-021-01705-5" },
{ GeneId: "Antioxidant_stress_7", GeneName: "AtOXR2", Function: "线粒体抗氧化蛋白", Description: "H2O2（100/150μM),强光", References: "https://doi.org/10.1093/jxb/erz147" },
{ GeneId: "Antioxidant_stress_8", GeneName: "So-aqpA", Function: "/", Description: "H2O2", References: "https://doi.org/10.1074/jbc.ra118.006877" },
{ GeneId: "Antioxidant_stress_9", GeneName: "FgHGG4", Function: "酿酒酵母ELP4同源物", Description: "将Δfghgg4缺失突变体培养在添加了硫醇特异性氧化剂二胺的培养基上", References: "https://doi.org/10.1128/spectrum.01485-23" },
{ GeneId: "Antioxidant_stress_10", GeneName: "FgHGG10", Function: "酿酒酵母RAD54同源基因", Description: "添加了各种DNA损伤剂（喜树碱）的培养基上培养了缺失突变体", References: "https://doi.org/10.1128/spectrum.01485-23" },
{ GeneId: "Antioxidant_stress_11", GeneName: "FgHGG13", Function: "酿酒酵母RAD52同源基因", Description: "参与DNA双链断裂的修复", References: "https://doi.org/10.1128/spectrum.01485-23" },
{ GeneId: "Antioxidant_stress_12", GeneName: "FgHGL7", Function: "粪卟啉原Ⅲ氧化酶CPOX", Description: "在血红素的生物合成途径中发挥作用，通过氧化脱羧将卟啉原III转化为原卟啉原IX", References: "https://doi.org/10.1128/spectrum.01485-23" },
{ GeneId: "Antioxidant_stress_13", GeneName: "ELP3", Function: "GNAT家族成员", Description: "延伸因子复合物的催化亚基", References: "https://doi.org/10.1094/mpmi-05-14-0145-r" },
{ GeneId: "Antioxidant_stress_14", GeneName: "fca7", Function: "过氧化氢酶", Description: "/", References: "https://doi.org/10.1094/mpmi-05-14-0145-r" },
{ GeneId: "Antioxidant_stress_15", GeneName: "ZmMYB3R", Function: "/", Description: "干旱（300 mM mannitol treatment for 7 days），盐（250 mM NaCl）", References: "https://doi.org/10.1016/j.plaphy.2019.02.010" },
{ GeneId: "Antioxidant_stress_16", GeneName: "AtOXS3", Function: "假定的N-乙酰转移酶催化结构域", Description: "该蛋白与组蛋白H4以斑点亚核模式共定位", References: "https://doi.org/10.1093/genetics/iyab149" },
{ GeneId: "Antioxidant_stress_17", GeneName: "EGY3", Function: "叶绿体定位蛋白", Description: "可以被盐和氧化胁迫诱导", References: "https://doi.org/10.1016/j.celrep.2021.109384" },
{ GeneId: "Antioxidant_stress_18", GeneName: "CSD2", Function: "叶绿体Cu/Zn-SOD", Description: "/", References: "https://doi.org/10.1016/j.celrep.2021.109384" },
{ GeneId: "Antioxidant_stress_19", GeneName: "YNL080c", Function: "EOS1", Description: "/", References: "https://doi.org/10.1016/j.bbrc.2006.12.012" },
{ GeneId: "Antioxidant_stress_20", GeneName: "ppr2", Function: "线粒体翻译因子", Description: "在所有线粒体DNA编码的氧化磷酸化亚基的合成中起关键作用", References: "https://doi.org/10.1016/j.mito.2024.101875" },
{ GeneId: "Antioxidant_stress_21", GeneName: "ISU", Function: "/", Description: "/", References: "https://doi.org/10.1016/j.mito.2024.101875" },
{ GeneId: "Antioxidant_stress_22", GeneName: "AmpI", Function: "/", Description: "β-lactam（β-内酰胺类抗生素）", References: "https://doi.org/10.1128/aac.02467-18" },
{ GeneId: "Antioxidant_stress_23", GeneName: "Mst1", Function: "/", Description: "H2O2", References: "https://doi.org/10.1038/s41467-019-08680-6" },
{ GeneId: "Antioxidant_stress_24", GeneName: "Mst2", Function: "/", Description: "/", References: "https://doi.org/10.1038/s41467-019-08680-6" },
{ GeneId: "Antioxidant_stress_25", GeneName: "spxA1", Function: "氧化应激反应基因的转录调节因子", Description: "/", References: "https://doi.org/10.1099/mic.0.000773" },
{ GeneId: "Antioxidant_stress_26", GeneName: "SENP", Function: "Sentrin/SUMO-specific proteases", Description: "H2O2", References: "https://doi.org/10.1002/biof.2055" },
{ GeneId: "Antioxidant_stress_27", GeneName: "SENP5", Function: "/", Description: "/", References: "https://doi.org/10.3892/mmr.2015.3662" },
{ GeneId: "Antioxidant_stress_28", GeneName: "TrxA1", Function: "/", Description: "/", References: "https://doi.org/10.1128/jb.00082-22" },
{ GeneId: "Antioxidant_stress_29", GeneName: "FeMT3", Function: "Metallothionein type 3", Description: "/", References: "https://doi.org/10.1016/j.jplph.2010.05.016" },
{ GeneId: "Antioxidant_stress_30", GeneName: "CFL1", Function: "高铁还原酶基因", Description: "介导胞外铁离子的还原", References: "https://doi.org/10.13344/j.microbiol.china.180396" },
{ GeneId: "Antioxidant_stress_31", GeneName: "Dhpr", Function: "/", Description: "/", References: "https://doi.org/10.1126/sciadv.aax0365" },
{ GeneId: "Antioxidant_stress_32", GeneName: "circSLC8A1", Function: "编码Ca2+/Na+转运体", Description: "有助于平衡胞质Ca2+水平和监视Ca2+依赖的神经传递", References: "https://doi.org/10.15252/emmm.201911942" },
{ GeneId: "Antioxidant_stress_33", GeneName: "SIRT3", Function: "线粒体 NAD+依赖性蛋白去乙酰化酶", Description: "由核基因组编码", References: "https://doi.org/10.1016/j.biopha.2020.110928" },
{ GeneId: "Antioxidant_stress_34", GeneName: "circLRP6", Function: "/", Description: "HG（30mM glucose）；mannitol（MN,5.5 mM glucose + 24.5 mM mannitol）；50μM glycyrrhizin（甘草酸，HMGB1抑制剂）", References: "https://doi.org/10.1002/jcp.28730" },
{ GeneId: "Antioxidant_stress_35", GeneName: "HMGB1", Function: "/", Description: "/", References: "https://doi.org/10.1002/jcp.28730" },
{ GeneId: "Antioxidant_stress_36", GeneName: "circRSU1", Function: "(hsa_circ_0006577)", Description: "500μM H2O2", References: "https://doi.org/10.7150/thno.53307" },
{ GeneId: "osmotic_stress_1", GeneName: "bZIP17", Function: "", Description: "甘露醇（300mM)", References: "https://doi.org/10.1002/jcb.26882" },
{ GeneId: "osmotic_stress_2", GeneName: "JrGSTTau1", Function: "", Description: "甘露醇（0.1M）", References: "https://doi.org/10.1111/ppl.12833" },
{ GeneId: "osmotic_stress_3", GeneName: "VrUBC1", Function: "", Description: "甘露醇、NaCl", References: "https://doi.org/10.1371/journal.pone.0066056" },
{ GeneId: "osmotic_stress_4", GeneName: "GPDH1", Function: "", Description: "非生物胁迫 渗透压", References: "https://doi.org/10.1371/journal.pone.0200357" },
{ GeneId: "osmotic_stress_5", GeneName: "AQP7", Function: "", Description: "EG,DMSO,蔗糖", References: "https://doi.org/10.1038/srep17741" },
{ GeneId: "osmotic_stress_6", GeneName: "BpHOX2", Function: "编码HD‐Zip I家族蛋白) 转录因子", Description: "PEG", References: "https://doi.org/10.1111/jipb.12994" },
{ GeneId: "osmotic_stress_7", GeneName: "BpRAV1", Function: "定位于细胞核并作为转录激活因子", Description: "BpRAV1 （定位于细胞核并作为转录激活因子）", References: "https://doi.org/10.1016/j.plantsci.2021.111131" },
{ GeneId: "osmotic_stress_8", GeneName: "SpMPK3", Function: "丝氨酸/苏氨酸蛋白激酶,含有Thr-Glu-Tyr （TEY)活化结构域", Description: "PEG,Nacl,4℃,ABA", References: "https://doi.org/10.1016/j.bbrc.2013.11.061" },
{ GeneId: "osmotic_stress_9", GeneName: "VvASMT1", Function: "", Description: "甘露醇、NaCl", References: "https://doi.org/10.1371/journal.pone.0269028" },
{ GeneId: "osmotic_stress_10", GeneName: "FerR", Function: "铁氧化还原蛋白样蛋白", Description: "蔗糖（50mM/100mM)", References: "https://doi.org/10.1128/aem.02605-18" },
{ GeneId: "osmotic_stress_11", GeneName: "SDH", Function: "山梨糖醇脱氢酶", Description: "Nacl(150mM) 甘露醇(300mM)", References: "https://doi.org/10.1111/plb.12664" },
{ GeneId: "osmotic_stress_12", GeneName: "SlWRKY23", Function: "", Description: "Nacl、甘露醇", References: "https://doi.org/10.1016/j.plaphy.2023.01.002" },
{ GeneId: "Acid_resistance_deletion_1", GeneName: "ADY2", Function: "醋酸转运基因", Description: "acetic acid.", References: "https://doi.org/10.1016/j.biortech.2017.05.191" },
{ GeneId: "Acid_resistance_deletion_2", GeneName: "PAR1", Function: "转录调节因子 (Pichia acid tolerance regulator)", Description: "LA（0,2.4.6%)", References: "https://doi.org/10.1002/bit.26745" },
{ GeneId: "Acid_resistance_deletion_3", GeneName: "At5g39520", Function: "SCP", Description: "Nacl", References: "https://doi.org/10.1007/s12374-019-0356-z" },
{ GeneId: "Acid_resistance_deletion_4", GeneName: "whcA", Function: "编码whib -家族蛋白的同源物", Description: "diamide，menadione", References: "https://doi.org/10.1111/j.1574-6968.2008.01398.x" },
{ GeneId: "Acid_resistance_deletion_5", GeneName: "wblA", Function: "whiB样基因", Description: "diamide", References: "https://doi.org/10.4014/jmb.1112.12032" },
{ GeneId: "Acid_resistance_deletion_6", GeneName: "whc", Function: "/", Description: "/", References: "https://doi.org/10.1016/j.jbiotec.2013.03.017" },
{ GeneId: "Acid_resistance_deletion_7", GeneName: "circFoxO3", Function: "/", Description: "Glu", References: "https://doi.org/10.1007/s10571-020-00817-2" },
{ GeneId: "Acid_resistance_deletion_8", GeneName: "Rtt109", Function: "真菌特异性组蛋白乙酰转移酶", Description: "5.5 g L−1 acetic acid", References: "https://doi.org/10.1093/femsyr/fow010" },
{ GeneId: "Acid_resistance_deletion_9", GeneName: "tnaA", Function: "色氨酸酶", Description: "pH5.5（MES buffer）", References: "https://doi.org/10.1038/s41598-020-63981-x" },
{ GeneId: "Acid_resistance_deletion_10", GeneName: "GadR4", Function: "Rgg家族的转录因子", Description: "不同pH条件，不同种类酸", References: "https://doi.org/10.1016/j.fm.2023.104248" },
{ GeneId: "Acid_resistance_deletion_11", GeneName: "LMOf2365_0442", Function: "/", Description: "nisin(125 μg/mL),pH5.0,5%Nacl", References: "https://doi.org/10.1111/1750-3841.12181" },
{ GeneId: "Acid_resistance_deletion_12", GeneName: "LMOf2365_0445", Function: "/", Description: "/", References: "https://doi.org/10.1111/1750-3841.12181" },
{ GeneId: "Acid_resistance_deletion_13", GeneName: "DBP2", Function: "ATP依赖的RNA解旋酶", Description: "/", References: "https://doi.org/10.1007/s00253-015-6706-y" },
{ GeneId: "Acid_resistance_deletion_14", GeneName: "TIS11", Function: "一种转录因子，编码mRNA结合蛋白", Description: "VHG葡萄糖发酵(30%)", References: "https://doi.org/10.1093/femsle/fny149" },
{ GeneId: "Acid_resistance_deletion_15", GeneName: "SDS23", Function: "编码一种与出芽期间细胞分离相关的蛋白，该蛋白与APC/环小体调控有关", Description: "/", References: "https://doi.org/10.1093/femsle/fny149" },
{ GeneId: "other_1", GeneName: "EsHsp16.9", Function: "cytosolic class I small heat shock protein", Description: "/", References: "https://doi.org/10.1007/s10529-014-1749-1" },
{ GeneId: "other_2", GeneName: "LeuO", Function: "LysR型调节子", Description: "/", References: "https://doi.org/10.1099/mic.0.000194" },
{ GeneId: "other_3", GeneName: "Fps1", Function: "水-甘油的跨膜输送的蛋白通道", Description: "/", References: "https://doi.org/10.1128/mcb.02205-06" },
{ GeneId: "other_4", GeneName: "HsrA", Function: "HP1043) （稳态压力调节子)", Description: "/", References: "https://doi.org/10.1128/jb.01047-13" },





];


// function displayGenes() {
//     let start = (currentPage - 1) * genesPerPage;
//     let end = start + genesPerPage;
//     let genesToDisplay = allGenes.slice(start, end);

//     let tableBody = document.getElementById("geneTableBody");
//     tableBody.innerHTML = ''; // 清空现有数据

//     genesToDisplay.forEach(gene => {
//         let row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${gene.GeneId}</td>
//             <td>${gene.GeneName}</td>
//             <td>${gene.Function}</td>
//             <td>${gene.Description}</td>
//             <td>${gene.References}</td>


//         `;
//         tableBody.appendChild(row);
//     });

//     document.getElementById("pageNumber").textContent = `Page ${currentPage}`;
// }

// function nextPage() {
//     if (currentPage * genesPerPage < allGenes.length) {
//         currentPage++;
//         displayGenes();
//     }
// }

// function previousPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         displayGenes();
//     }
// }

// function searchGene() {
//     let query = document.getElementById("searchQuery").value.toLowerCase();
//     let filteredGenes = allGenes.filter(gene => 
//         gene.GeneName.toLowerCase().includes(query) || 
//         gene.GeneId.toString().includes(query)
//     );
//     allGenes = filteredGenes;
//     currentPage = 1; // 重置为第一页
//     displayGenes();
// }
// Example global variables to control pagination
////
// 2025/7/22日修改
// // 初始化页面
// displayGenes();

// function displayGenes() {
//     let start = (currentPage - 1) * genesPerPage;
//     let end = start + genesPerPage;
//     let genesToDisplay = allGenes.slice(start, end);

//     let tableBody = document.getElementById("geneTableBody");
//     tableBody.innerHTML = ''; // 清空现有数据

//     genesToDisplay.forEach(gene => {
//         let row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${gene.GeneId}</td>
//             <td>${gene.GeneName}</td>
//             <td>${gene.Function}</td>
//             <td>${gene.Description}</td>
//             <td>${gene.References}</td>
//             <td><button onclick="downloadFasta('${gene.GeneId}')">下载序列</button></td> <!-- 添加下载按钮 -->
//         `;
//         tableBody.appendChild(row);
//     });

//     document.getElementById("pageNumber").textContent = `Page ${currentPage}`;
// }

// function downloadFasta(GeneId) {
//     // 生成对应基因的 FASTA 文件下载链接
//     let fastaUrl = `data/${GeneId}.fasta`;  // 假设每个基因有一个独特的 FASTA 文件
//     let link = document.createElement("a");
//     link.href = fastaUrl;
//     link.download = `${GeneId}.fasta`; // 下载文件的名称
//     link.click();
// }

// function nextPage() {
//     if (currentPage * genesPerPage < allGenes.length) {
//         currentPage++;
//         displayGenes();
//     }
// }

// function previousPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         displayGenes();
//     }
// }

// function searchGene() {
//     let query = document.getElementById("searchQuery").value.toLowerCase();
//     let filteredGenes = allGenes.filter(gene => 
//         gene.GeneName.toLowerCase().includes(query) || 
//         gene.GeneId.toString().includes(query)
//     );
//     allGenes = filteredGenes;
//     currentPage = 1; // 重置为第一页
//     displayGenes();
// }

// // 初始化页面
// displayGenes();


///新增内容
// 初始化页面
displayGenes();

function displayGenes() {
    let start = (currentPage - 1) * genesPerPage;
    let end = start + genesPerPage;
    let genesToDisplay = allGenes.slice(start, end);

    let tableBody = document.getElementById("geneTableBody");
    tableBody.innerHTML = ''; // 清空现有数据

    genesToDisplay.forEach(gene => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${gene.GeneId}</td>
            <td>${gene.GeneName}</td>
            <td>${gene.Function}</td>
            <td>${gene.Description}</td>
            <td>${gene.References}</td>
            <!-- 保持无参数的下载函数 -->
            <td><button onclick="downloadFasta()">下载序列</button></td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById("pageNumber").textContent = `Page ${currentPage}`;
}

// 全局文件下载函数
function downloadFasta() {
    // 所有下载按钮指向同一个全局文件
    let fastaUrl = `data/all_seq.fasta`;
    let link = document.createElement("a");
    link.href = fastaUrl;
    link.download = "all_sequences.fasta"; // 统一的下载文件名
    
    // 安全地创建和移除链接
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 分页和搜索函数保持不变
function nextPage() {
    if (currentPage * genesPerPage < allGenes.length) {
        currentPage++;
        displayGenes();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayGenes();
    }
}

function searchGene() {
    let query = document.getElementById("searchQuery").value.toLowerCase();
    let filteredGenes = allGenes.filter(gene => 
        gene.GeneName.toLowerCase().includes(query) || 
        gene.GeneId.toString().includes(query)
    );
    allGenes = filteredGenes;
    currentPage = 1; // 重置为第一页
    displayGenes();
}

