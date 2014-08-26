Ext.define("CustomSenchaCharts.store.Apple", {
    alias: 'store.Apple',
    requires: ['CustomSenchaCharts.model.Stock', 'Ext.data.reader.Array'],
    extend: "Ext.data.ArrayStore",
    config: {
        model: "CustomSenchaCharts.model.Stock",
        data: [
            [820566000000, 32.25, 32.25, 31.75, 32.13, 4983200, 8.03],
            [820652400000, 32, 32.88, 31.87, 32.13, 15368800, 8.03],
            [820738800000, 32.38, 32.38, 31.37, 31.56, 10721200, 7.89],
            [820825200000, 31.62, 34.25, 31.37, 34.25, 15929200, 8.56],
            [821084400000, 34.5, 35.5, 34, 34.63, 4341200, 8.66],
            [821170800000, 34.63, 34.63, 32.75, 32.75, 8978800, 8.19],
            [821257200000, 32.5, 34.75, 32.25, 34.25, 13057600, 8.56],
            [821343600000, 32.63, 35, 32.38, 35, 27041200, 8.75],
            [821430000000, 34.75, 34.75, 33.25, 33.88, 14370000, 8.47],
            [821689200000, 33.75, 34.5, 33.38, 34.13, 12971200, 8.53],
            [821775600000, 34.38, 34.75, 33.63, 34.56, 12606400, 8.64],
            [821862000000, 34.38, 34.38, 33.75, 34, 8445200, 8.5],
            [821948400000, 32.88, 33.38, 30.37, 31.94, 24955200, 7.99],
            [822034800000, 31, 31.75, 29.37, 29.87, 29623600, 7.47],
            [822294000000, 29.75, 31, 29.25, 30.5, 17852400, 7.62],
            [822380400000, 33.75, 34, 31, 31.62, 35305200, 7.91],
            [822466800000, 32.13, 32.25, 31.75, 32.25, 23438800, 8.06],
            [822553200000, 31.75, 32, 30.12, 30.25, 15911200, 7.56],
            [822639600000, 30.37, 31.25, 28.62, 30.62, 26297600, 7.66],
            [822898800000, 29, 29.75, 28.75, 29.12, 11900000, 7.28],
            [822985200000, 27, 28.12, 26.86, 27.31, 22246800, 6.83],
            [823071600000, 27.75, 28, 27.37, 27.62, 11736800, 6.91],
            [823158000000, 27.5, 28.37, 27.5, 28.37, 11902400, 7.09],
            [823244400000, 28.87, 29.62, 28.75, 29.25, 19865600, 7.31],
            [823503600000, 29.69, 29.75, 29, 29.25, 11396400, 7.31],
            [823590000000, 29.25, 30, 29.25, 29.62, 8101200, 7.41],
            [823676400000, 29.75, 29.75, 27.75, 28.25, 12885200, 7.06],
            [823762800000, 27.5, 28.12, 27.5, 27.87, 9420800, 6.97],
            [823849200000, 27.87, 28.5, 27.62, 27.75, 7360800, 6.94],
            [824108400000, 28.12, 28.5, 28, 28.37, 6948800, 7.09],
            [824194800000, 28, 28.87, 27.87, 28.12, 8161200, 7.03],
            [824281200000, 28.25, 28.25, 27.44, 27.62, 5843600, 6.91],
            [824367600000, 27.62, 28.12, 27.37, 28, 4360000, 7],
            [824454000000, 28.12, 28.37, 27.5, 27.5, 5602400, 6.88],
            [824799600000, 28, 29.5, 28, 29, 13473200, 7.25],
            [824886000000, 29.37, 29.75, 29.12, 29.62, 7924400, 7.41],
            [824972400000, 30, 30.12, 29.62, 29.87, 6588000, 7.47],
            [825058800000, 29.87, 30.25, 29.62, 29.87, 6205200, 7.47],
            [825318000000, 30, 30.12, 29.5, 29.5, 4238000, 7.38],
            [825404400000, 29.87, 29.87, 28.5, 28.62, 5331200, 7.16],
            [825490800000, 28.87, 28.87, 27.62, 27.75, 6728800, 6.94],
            [825577200000, 27.5, 27.75, 27.25, 27.5, 4049200, 6.88],
            [825663600000, 27.62, 27.62, 26.62, 26.87, 8263200, 6.72],
            [825922800000, 27.25, 27.37, 26.25, 26.25, 6708800, 6.56],
            [826009200000, 26.5, 26.75, 26.25, 26.62, 4246800, 6.66],
            [826095600000, 26.75, 26.87, 26.12, 26.19, 3547600, 6.55],
            [826182000000, 26.25, 26.37, 25.37, 25.81, 9292400, 6.45],
            [826268400000, 25.75, 26.25, 25, 26, 5322400, 6.5],
            [826527600000, 26.25, 26.37, 25.75, 25.87, 4544800, 6.47],
            [826614000000, 26, 26.37, 25.62, 25.81, 3453200, 6.45],
            [826700400000, 25.87, 26.12, 25.62, 25.75, 3560000, 6.44],
            [826786800000, 25.87, 25.87, 25.5, 25.62, 3342400, 6.41],
            [826873200000, 26, 26, 25.5, 25.87, 3632400, 6.47],
            [827132400000, 25.94, 26.12, 25.75, 26.12, 3907600, 6.53],
            [827218800000, 26.37, 26.5, 25.62, 25.75, 4442400, 6.44],
            [827305200000, 25.75, 25.75, 25.12, 25.25, 4154800, 6.31],
            [827391600000, 25.5, 25.5, 25, 25.12, 3932400, 6.28],
            [827478000000, 25.25, 25.37, 24.87, 25.37, 3842400, 6.34],
            [827737200000, 25.5, 25.75, 24, 24, 5887600, 6],
            [827823600000, 24, 24.5, 23.62, 23.87, 5755600, 5.97],
            [827910000000, 23.25, 25.25, 23, 25.25, 15338800, 6.31],
            [827996400000, 24.75, 25.62, 24.12, 24.19, 10572000, 6.05],
            [828082800000, 24.25, 24.75, 23.75, 24.56, 5962400, 6.14],
            [828342000000, 25.12, 25.87, 24.52, 25.5, 5680000, 6.38],
            [828428400000, 25.62, 25.62, 24.87, 25, 3635600, 6.25],
            [828514800000, 25.12, 25.12, 24.33, 24.56, 2591200, 6.14],
            [828601200000, 24.62, 24.62, 24, 24.12, 3092000, 6.03],
            [828946800000, 23.87, 24.5, 23.75, 24.37, 6046400, 6.09],
            [829033200000, 24.87, 26.5, 24.37, 26, 8415600, 6.5],
            [829119600000, 26.12, 26.5, 25.87, 26, 6242400, 6.5],
            [829206000000, 26.12, 26.25, 25.5, 25.75, 3526400, 6.44],
            [829292400000, 25.87, 25.87, 25.37, 25.5, 2924400, 6.38],
            [829551600000, 25.5, 25.75, 25, 25.75, 5515600, 6.44],
            [829638000000, 25.87, 26, 25.62, 25.87, 3634400, 6.47],
            [829724400000, 25.87, 26, 25.12, 25.25, 3056400, 6.31],
            [829810800000, 25.37, 25.39, 24.25, 24.75, 7780800, 6.19],
            [829897200000, 24.62, 25.12, 24.62, 25.06, 3655600, 6.26],
            [830156400000, 25.25, 25.5, 24.87, 25.12, 3973200, 6.28],
            [830242800000, 25.12, 25.25, 24.62, 24.75, 6086400, 6.19],
            [830329200000, 24.62, 24.75, 24.19, 24.25, 4596800, 6.06],
            [830415600000, 24.37, 24.87, 24.12, 24.87, 6245200, 6.22],
            [830502000000, 25, 25.12, 24.62, 24.75, 6759200, 6.19],
            [830761200000, 25, 25, 24.5, 24.75, 4324800, 6.19],
            [830847600000, 24.87, 24.87, 24.12, 24.37, 4881200, 6.09],
            [830934000000, 24.37, 24.75, 24.12, 24.37, 4039200, 6.09],
            [831020400000, 24.5, 24.5, 23.5, 23.75, 6728000, 5.94],
            [831106800000, 24.12, 24.12, 23.5, 23.87, 3892400, 5.97],
            [831366000000, 24.87, 25.87, 24.75, 25.62, 10349200, 6.41],
            [831452400000, 26.37, 27.37, 26.25, 26.87, 12641200, 6.72],
            [831538800000, 27.25, 27.25, 25.62, 26.75, 6688800, 6.69],
            [831625200000, 26.37, 26.5, 25.75, 26.12, 3515600, 6.53],
            [831711600000, 26.25, 27.37, 26, 27.25, 3966400, 6.81],
            [831970800000, 27.12, 27.62, 26.62, 27.06, 6701200, 6.76],
            [832057200000, 27.75, 28, 27.5, 27.5, 7068000, 6.88],
            [832143600000, 27.87, 28.87, 27.75, 28.5, 10442400, 7.12],
            [832230000000, 28.25, 28.62, 27.87, 28.37, 4648800, 7.09],
            [832316400000, 28.37, 28.37, 27.5, 27.62, 4405600, 6.91],
            [832575600000, 27.87, 28.12, 27.62, 27.94, 3028800, 6.99],
            [832662000000, 28, 28.12, 27.12, 27.12, 4088000, 6.78],
            [832748400000, 27.37, 27.37, 25.75, 26.06, 7215600, 6.51],
            [832834800000, 26.12, 26.62, 25.75, 26.25, 4447600, 6.56],
            [832921200000, 26.25, 26.87, 26.12, 26.75, 4046800, 6.69],
            [833266800000, 26.75, 27.25, 26.37, 26.37, 3658800, 6.59],
            [833353200000, 26.25, 26.25, 24.75, 24.87, 7840000, 6.22],
            [833439600000, 24.87, 25.75, 24.75, 25.5, 3703600, 6.38],
            [833526000000, 25.62, 26.62, 25.5, 26.12, 5813600, 6.53],
            [833785200000, 25.87, 26, 24.75, 24.75, 4481200, 6.19],
            [833871600000, 24, 24.37, 23.87, 24.19, 27235600, 6.05],
            [833958000000, 25.37, 25.5, 24.25, 25.12, 18228000, 6.28],
            [834044400000, 25, 25.25, 24.12, 24.25, 12938800, 6.06],
            [834130800000, 24, 24.37, 23.5, 24.37, 9565200, 6.09],
            [834390000000, 24.37, 24.5, 24, 24.12, 3820800, 6.03],
            [834476400000, 24.25, 24.25, 24, 24, 5481200, 6],
            [834562800000, 24.5, 24.5, 24, 24.25, 5440000, 6.06],
            [834649200000, 24.37, 24.92, 24, 24.62, 6856800, 6.16],
            [834735600000, 24.75, 24.75, 23.87, 23.94, 5186800, 5.99],
            [834994800000, 24.12, 24.12, 23.62, 23.62, 4052000, 5.91],
            [835081200000, 23.62, 23.75, 22.62, 22.75, 7979200, 5.69],
            [835167600000, 23.12, 23.37, 22.62, 23.12, 4803600, 5.78],
            [835254000000, 23.37, 23.37, 22.5, 22.75, 5260800, 5.69],
            [835340400000, 22.87, 22.87, 22.37, 22.62, 5792000, 5.66],
            [835599600000, 22.62, 22.62, 22.12, 22.25, 4398000, 5.56],
            [835686000000, 22.12, 22.25, 20.37, 20.62, 8831200, 5.16],
            [835772400000, 20.62, 20.75, 19.62, 19.87, 14440800, 4.97],
            [835858800000, 20, 21, 19.75, 20.62, 8202400, 5.16],
            [835945200000, 20.87, 21, 20.62, 21, 4138000, 5.25],
            [836204400000, 21.12, 21.5, 21, 21.5, 4732400, 5.38],
            [836290800000, 21.37, 21.5, 21, 21, 3189200, 5.25],
            [836377200000, 20.37, 20.37, 19.37, 19.37, 10323200, 4.84],
            [836550000000, 19.37, 19.75, 19.25, 19.5, 3808800, 4.88],
            [836809200000, 19.62, 19.87, 19, 19.12, 6762000, 4.78],
            [836895600000, 19.5, 19.62, 19, 19, 6723600, 4.75],
            [836982000000, 19.12, 19.5, 18.75, 18.75, 6055200, 4.69],
            [837068400000, 18.75, 18.87, 17.37, 17.87, 10420000, 4.47],
            [837154800000, 18.37, 18.37, 17.25, 18.06, 9610800, 4.51],
            [837414000000, 18.12, 18.12, 17.12, 17.19, 4779200, 4.3],
            [837500400000, 17.37, 17.37, 16, 16.87, 10334400, 4.22],
            [837586800000, 17.37, 17.5, 16.62, 16.87, 8355600, 4.22],
            [837673200000, 21.5, 21.75, 20.36, 20.87, 32058800, 5.22],
            [837759600000, 20.87, 21, 20.75, 20.75, 9510000, 5.19],
            [838018800000, 20.87, 20.87, 20, 20.25, 5456400, 5.06],
            [838105200000, 20.5, 20.62, 20.25, 20.5, 4651200, 5.12],
            [838191600000, 20, 21, 19.87, 20.81, 9448800, 5.2],
            [838278000000, 21.12, 21.37, 20.75, 21, 4090800, 5.25],
            [838364400000, 21.5, 22, 21.12, 22, 4426800, 5.5],
            [838623600000, 22, 22.5, 21.75, 22.25, 7005600, 5.56],
            [838710000000, 22.62, 22.75, 21.25, 21.37, 6766800, 5.34],
            [838796400000, 21.25, 22, 21.25, 22, 3332400, 5.5],
            [838882800000, 22, 22, 21.12, 21.25, 3942400, 5.31],
            [838969200000, 21.62, 22, 21.25, 21.62, 4574800, 5.41],
            [839228400000, 21.62, 21.87, 20.87, 21, 3612000, 5.25],
            [839314800000, 21, 21.5, 20.75, 21.5, 3354800, 5.38],
            [839401200000, 21.75, 22.62, 21.62, 22.37, 8892400, 5.59],
            [839487600000, 22.37, 22.37, 21.87, 22.12, 3640000, 5.53],
            [839574000000, 22.25, 23.37, 22.12, 23.12, 8243600, 5.78],
            [839833200000, 23.37, 23.62, 22.37, 23, 5408000, 5.75],
            [839919600000, 22.87, 23.12, 22.37, 22.5, 3706400, 5.62],
            [840006000000, 22.62, 23, 22.62, 22.75, 2570000, 5.69],
            [840092400000, 22.62, 22.75, 22.25, 22.25, 3845600, 5.56],
            [840178800000, 22.62, 22.62, 22.12, 22.5, 5075600, 5.62],
            [840438000000, 22.37, 23.62, 22.37, 23.62, 8084400, 5.91],
            [840524400000, 23.87, 23.87, 23.37, 23.5, 7564400, 5.88],
            [840610800000, 23.5, 23.62, 22.87, 23, 4052400, 5.75],
            [840697200000, 23, 23.25, 22.87, 23.25, 3138000, 5.81],
            [840783600000, 23, 24, 23, 23.87, 7281200, 5.97],
            [841042800000, 23.87, 24.12, 23.5, 24.12, 3204400, 6.03],
            [841129200000, 24.12, 25, 24, 24.86, 10339200, 6.22],
            [841215600000, 24.87, 25, 24.5, 24.87, 5844400, 6.22],
            [841302000000, 24.87, 24.87, 24.37, 24.5, 3829200, 6.12],
            [841388400000, 24.75, 24.75, 24.25, 24.25, 3784800, 6.06],
            [841734000000, 24.12, 24.37, 23.87, 24.12, 2461200, 6.03],
            [841820400000, 23.87, 24.62, 23.87, 24.12, 3636400, 6.03],
            [841906800000, 23.5, 23.75, 22.87, 22.87, 9999200, 5.72],
            [841993200000, 23.12, 23.25, 22.62, 23, 8602000, 5.75],
            [842252400000, 22.62, 22.75, 21.87, 22, 5302400, 5.5],
            [842338800000, 22.12, 22.12, 21.5, 21.5, 5562000, 5.38],
            [842425200000, 21.5, 21.75, 21, 21.12, 5266800, 5.28],
            [842511600000, 21, 21.12, 20.25, 20.37, 9340000, 5.09],
            [842598000000, 20.37, 21.25, 20.37, 21, 5967600, 5.25],
            [842857200000, 21.5, 23, 21.37, 22.37, 8747600, 5.59],
            [842943600000, 22.87, 23.12, 22.5, 23, 7487600, 5.75],
            [843030000000, 23, 24.12, 22.87, 23.5, 12631200, 5.88],
            [843116400000, 23.62, 23.62, 23.37, 23.37, 4282000, 5.84],
            [843202800000, 23.37, 23.5, 22.75, 22.87, 5330800, 5.72],
            [843462000000, 22.87, 22.87, 22.37, 22.37, 1653600, 5.59],
            [843548400000, 22.37, 22.87, 22.37, 22.5, 5143600, 5.62],
            [843634800000, 22.5, 22.62, 22, 22.37, 3902400, 5.59],
            [843721200000, 22.37, 22.5, 22.25, 22.37, 3693600, 5.59],
            [843807600000, 22.25, 22.37, 22.12, 22.31, 2932000, 5.58],
            [844066800000, 22.12, 22.37, 22.12, 22.19, 3058000, 5.55],
            [844153200000, 22, 24.75, 22, 24.62, 19269200, 6.16],
            [844239600000, 23.62, 24.62, 23.12, 23.62, 9890000, 5.91],
            [844326000000, 23.62, 23.75, 22.37, 22.37, 8140000, 5.59]
        ]
    }
});