const query = require('../mysql/mysql');
const list=[
    {
        pid:'2021119',
        modname:'南明悲歌全面战争完结版 (整合版)',
        cover:'214119669.png',
        imgsList:[{imgname:'211400359.png'},{imgname:'211715759.png'},{imgname:'211719509.png'},{imgname:'211719509.png'},{imgname:'211736659.png'},{imgname:'211756329.png'},{imgname:'211807659.png'}],
        infoList:[
            {pid:'2021119',title:'游戏介绍',img:'211715759.png',info:'南明悲歌全面战争游戏是在亚洲王朝全面战争基础上进行修改与制作，其次这个版本是完结版本，包含很多个版本剧情，开局时间为1658年。南明时期，其中包含众多势力。如果还有人对这个题材mod感兴趣，有兴趣继续更新下去的，欢迎玩家修改的补丁并分享。</p><h2>游戏背景</h2><p>南明1644年-1662年是明朝京师北京失陷后，由明朝宗室在南方相继建立政权的合称，历时18年。崇祯十七年1644年，李自成起义军攻占北京，崇祯帝朱由检在煤山自缢。随后清兵入关，明朝宗室及文武大臣大多逃亡南方，此时淮河以南名义上仍属明朝。同年福王朱由崧监国南京，之后称帝，改元弘光。随后清军快速南下，围攻扬州，扬州城池破。不久南京陷落，弘光帝被俘。弘光元年，唐王朱聿键在郑芝龙等人的拥立下，在福州称帝，改元隆武。隆武帝采取了联寇抗清政策，黄道周发动了短暂的北伐，但随着郑芝龙降清，局势恶化，隆武帝被俘后绝食而亡，清军迅速占领东南大部。隆武二年，桂王朱由榔在肇庆称帝，改元永历。后在局势危机的情况下与大西军余部联合起来。郑成功在东南沿海也乘势崛起，东西两面打击清军，抗清局面出现了高潮。但是随着三王内讧和清军加大进攻，明军滇黔防线被清军迅速击破。永历十五年，缅王莽白将永历帝执送清军。次年，永历帝在昆明被杀，南明政权最终灭亡。永历三十七年，延平王郑克塽降清，清军占领台湾。'},
            { pid:'2021119',title:'派系势力',img:'211807659.png',info:'大明朝廷,朝鲜王朝,大城王朝,东吁王朝,越南黎朝,平西军,延平军,菱东军,张煌言军,江户幕府,莫卧儿帝国,青海和硕特蒙古,卫拉特汗国,叶尔羌族汗国,葡萄牙,西班牙,荷兰东印度公司,'},
            { pid:'2021119',title:'安装说明',img:'',info:'南明悲歌全面战争完结版 (整合版)，请用360解压软件解压，因该游戏资源压缩包是用的360压缩包所以解压软件的时候务必用360解压软件解压，特别说明该游戏是属于整合版的自带中世纪2全面战争本体，只需要解压就能正常运行，游戏自带窗口启动器和全屏启动器，运行游戏前关闭杀毒软件和电脑防火墙能让MOD更加的稳定流畅。'}
        ],
        type:'8',
        author:'北来制作组',
        original:'中世纪2全面战争',
        uptime:'2020-12-05',
        download:'https://pan.baidu.com/share/init?surl=KNU8WKLCICBTBzXK7xutcA',
        password:'a6e5',
        star:'2'

    },
    {
        pid:'2021219',
        modname:'侠盗猎车5 福特蒙迪欧Estate旅行商务车MOD',
        cover:'1505328413.png',
        imgsList:[{imgname:'1505385113.png'},{imgname:'1505395213.png'},{imgname:'1505404213.png'}],
        infoList:[
            { title:'资源说明',img:'1505404213.png',info:'侠盗猎车5 福特蒙迪欧Estate旅行商务车MOD，由“ - MultiGamingUK”制作，大车厢大容量的旅行车，2013款的福特蒙迪欧Estate，替换版，高清的车身建模和漆面光效处理，还凑合的驾驶室细节建设,本站提供侠盗猎车5福特蒙迪欧Estate旅行商务车MOD,需要的玩家不要错过哦！'},
            { title:'使用说明',img:'',info:'必备工具：OpenIV，替换路径 \\update\\x64\\dlcpacks\\patchday9ng\\dlc.rpf\\x64\\levels\\gta5\\vehicles'},
           
        ],
        type:'2',
        author:'阿瓦隆的迷雾',
        original:'侠盗飞车5',
        uptime:'2020-05-23',
        download:'https://pan.baidu.com/share/init?surl=LDwxKDcc9ukJOR1VKbVN-Q',
        password:'9bjk',
        star:'3'

    },
    {
        pid:'2021220',
        modname:'风云南北朝v2.06全面战争 终极版（整合版）',
        cover:'102332499.png',
        imgsList:[{imgname:'102356789.png'},{imgname:'102402889.png'},{imgname:'102440459.png'},{imgname:'102454999.png'},{imgname:'102503669.png'},{imgname:'102450919.png'}],
        infoList:[
            { title:'游戏介绍',img:'102450919.png',info:'风云制作组荣誉出品 ，精心打造的一款以五胡十六国末期至南北朝过度时期的历史MOD。风云南北朝开局时间定格在公元404年，处于五胡十六国末期在南方，本来风雨飘摇的东晋王朝又遭世家门阀桓玄篡位，是时也，崛起于阡陌之间的北府军将领刘裕走向了历史的前台。而在北方拓跋鲜卑部的拓跋珪于乱世之中建立起北魏，在北中国的大地上挥舞着马鞭纵横驰骋。五胡十六国一百五十年的大黑暗已接近尾声，统一方是大势所趋，一场英雄角逐的史诗就此开始。是顺应民心，实现华夏一统？还是割据一方，自为王侯？这一切都掌握在你的手中。</p><p>风云南北朝全面战争是由风云制作组用心铸就，陆续发布有风云南北朝新春版，风云南北朝1.0版，风云南北朝1.03版。现在发布的风云南北朝2.06终极版本，也许是风云南北朝的最完善的一个版本。</p><h2>游戏背景:</h2><p>英雄辈出的三国时代已经成为遥远的过去，司马氏篡魏完成了董卓之乱以来中国再次的一统。孰料到不过三四十年光景，西晋王朝便由于自身的先天不足而陷入到八王之乱的泥潭，进而招致五胡乱华。中原板荡，生民涂炭，北中国瞬间陷入到连年的战乱之中，匈奴人、氐人、羌人、羯人、鲜卑人轮番上场，刚刚建国不过五十年的西晋陷入覆亡。西晋灭亡后，出于避乱，晋朝皇室和北方黄河流域广大居民进入安定的长江流域，史称衣冠南渡。中国自此呈现出南北对峙时期。</p><p>两晋南北朝时代，这是一段尘封的历史，这是一段凄婉的悲歌，这是一副多彩的画卷，这是中国历史上继春秋战国以后，中国的又一个乱世。辉煌的秦汉时代已经成为过去，英雄辈出的三国时代接近尾声。这个时代绝不亚于任何一个血腥的时代，到处都是嗜血的饿狼。</p><p>公元280年西晋灭吴，中国迎来了三国纷争后的再次统一，只是这种局面仅仅维持了可怜的20年时间。随着司马氏兄弟子侄间自杀式的嗜咬----八王之乱---中国顿时陷入了天下大乱的局面。同罗马帝国一样，在漫长的晋王朝的帝国北方边境线上，无数的蛮族开始涌动，大批疯狂地向庞大的帝国进攻。扫灭群雄实现华夏一统的西晋王朝这个看似强大的庞然大物，在蛮族之一的匈奴人疯狂地蚕食之下，转瞬间灰飞烟灭。 南渡的司马氏皇族琅琊王司马睿在建康建立东晋。中原完全沦丧于胡人之手。中原汉族在祖逖、桓温等名将的带领下绝地反击，终因寡不敌众而失败。迁居南方的爱国将士每每以北伐中原、收复失土为己任。东晋与五胡的战争，十六国之间的厮杀，使得这一时期战乱连连。河淮地区为南北交战的主战场。'},
            { title:'安装方法',img:'',info:'解压风云南北朝v2.06终极版（整合版）请用360解压软件解压，因该游戏资源压缩包是用的360压缩包所以解压软件的时候务必用360解压软件解压，特别说明该游戏是属于整合版的自带中世纪2全面战争本体，只需要解压就能正常运行了。运行游戏前关闭杀毒软件和电脑防火墙能让MOD更加的稳定流畅'},
        ],
        type:'8',
        author:'华胥刀笔吏',
        original:'中世纪2全面战争',
        uptime:'2020-08-28',
        download:'https://pan.baidu.com/share/init?surl=Hh5e2R9vzrYo67yY1rq2DA',
        password:'ztkg',
        star:'3'

    },
    {
        pid:'2021221',
        modname:'战地2MOD：维和行动2 v0.42',
        cover:'20181205053106814.png',
        imgsList:[{imgname:'20181205053106814.png'}],
        infoList:[
            { title:'游戏介绍',img:'20181205053106814.png',info:'维和行动是战地2现代战争流行的热门模组MOD游戏，以虚构的科索沃冲突展开剧情。MOD有三个不同的方面-德国联邦国防军、英国皇家陆军和塞尔维'},
        ],
        type:'1',
        author:'Schuldi',
        original:'战地2',
        uptime:'2020-03-28',
        download:'https://pan.baidu.com/s/1c25lJKO',
        password:'',
        star:'5'

    },
    {
        pid:'2021222',
        modname:'《生化危机3：重制版》吉尔魅力紫色蒂法服装MOD',
        cover:'584_2020050663222682.png',
        imgsList:[{imgname:'584_2020050663222682.png'}],
        infoList:[
            { title:'游戏介绍',img:'584_2020050663222682.png',info:'生化危机3重制版是一款经典RE3的重制游戏，而今天小编要带来的是一个生化危机3重制版吉尔魅力紫色蒂法服装mod下载，使用后可以让吉尔穿上一件魅力紫色最终幻想蒂法制服短裙，喜欢生化危机3重制版mod的就赶紧试试吧，带给你一款全新的生化危机体验'},
            { title:'安装说明',img:'',info:'下载《生化危机3：重制版》MOD管理工具v2.220：https://patch.ali213.net/showpatch/142067.html，将mod压缩包文件直接复制到modmanager→games→RE3R→Mods文件夹下即可，选择Downloads mods选项，选择mod即可使用'},
        ],
        type:'3',
        author:'未知',
        original:'生化危机3：重制版',
        uptime:'2021-01-21',
        download:'https://pan.baidu.com/share/init?surl=LRuXsCxuoccMggMu6-afog',
        password:'cqef',
        star:'2'

    },
    {
        pid:'2021223',
        modname:'《仙剑奇侠传7》光腿清凉MOD',
        cover:'2016091911152020.jpg',
        imgsList:[{imgname:'584_20210118111508613.jpg'}],
        infoList:[
            { title:'游戏介绍',img:'584_20210118111508613.jpg',info:'仙剑奇侠传7是国产单机角色扮演游戏仙剑系列的第九部作，小编带来的是一个仙剑奇侠传7光腿清凉mod下载，使用后就可以在游戏里的女主完全露出性感的大长腿，喜欢仙剑奇侠传7mod的就赶紧试试吧。'},
            { title:'安装说明',img:'',info:'1.解压缩，2.将文件覆盖到游戏根目录下，3.开始游戏'},
        ],
        type:'3',
        author:'未知',
        original:'仙剑奇侠传7',
        uptime:'2021-01-18',
        download:'https://pan.baidu.com/share/init?surl=tVCCHV9Vvmf8S9wZ0QagBA',
        password:'k8sy',
        star:'2'

    },
    {
        pid:'2021224',
        modname:'大唐天下：安史之乱v0.6全面战争 整合版',
        cover:'110515369.png',
        imgsList:[{imgname:'113641769.png'},{imgname:'113646499.png'},{imgname:'113710269.png'},{imgname:'113715179.png'},{imgname:'113837789.png'},{imgname:'113840979.png'},{imgname:'113843289.png'},{imgname:'113845409.png'}],
        infoList:[
            { title:'游戏介绍',img:'113840979.png',info:'大唐天下：安史之乱v0.6全面战争mod采用亚欧非大地图，共24个势力登场，包括大唐，大燕，日本，南诏，吐蕃，回乞，突骑施，印度，东南亚，阿拉伯帝国，东罗马帝国等共24个可选国家。'},
            { title:'安装说明',img:'',info:'解压大唐天下：安史之乱v0.6全面战争（整合版）请用360解压软件解压，因该游戏资源压缩包是用的360压缩包所以解压软件的时候务必用360解压软件解压，特别说明该游戏是属于整合版的自带中世纪2全面战争本体，只需要解压就能正常运行了。运行游戏前关闭杀毒软件和电脑防火墙能让MOD更加的稳定流畅。'},
        ],
        type:'8',
        author:'北洋制作组',
        original:'中世纪2全面战争',
        uptime:'2020-09-01',
        download:'https://pan.baidu.com/share/init?surl=J18cEI6MXWYiwP3x1QKa8A',
        password:'g0q6',
        star:'4'

    }
]

const  fn = async (item)=>{
    const {pid,modname,cover,imgsList,infoList,type,author,original,uptime,download,password,star} = item
    await query(`INSERT INTO modlist (pid,modname,cover,type,author,original,uptime,download,star,password) VALUES (?,?,?,?,?,?,?,?,?,?)`,[
        pid,modname,cover,type,author,original,uptime,download,star,password
    ])
    for(let i=0;i<imgsList.length;i++){
        imgsList[i].pid=item.pid;
        const {pid,imgname} = imgsList[i];
        await query(`INSERT INTO moddetailimgs (pid,imgname) VALUES (?,?)`,[pid,imgname])
    }
    for(let i=0;i<infoList.length;i++){
       
        infoList[i].pid=item.pid;
        const {pid,title,img,info} = infoList[i];
       await query(`INSERT INTO modinfo (pid,title,img,info) VALUES (?,?,?,?)`,[pid,title,img,info])
    }
   
}
list.forEach( fn)