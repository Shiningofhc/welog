/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d41d8cd98f00b204e9800998ecf8427e"],["/Demo/index.html","954225aea1ca96e2a6ee4b49fe7010c9"],["/Gallery/index.html","4198a613ac363660b4e9cc92dd35e1c5"],["/HTML/Birthday/Lee/css/jquery.fullPage.css","42d4d8833a09527e2092171e4967ae61"],["/HTML/Birthday/Lee/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["/HTML/Birthday/Lee/css/normalizel.css","afa121e2f2e3c68d877a0288ecb5951b"],["/HTML/Birthday/Lee/css/style.css","ed99ebeed991dd985f134c12e05ed01f"],["/HTML/Birthday/Lee/css/stylel.css","f83f28d15a0c509d3f6ecd6ffaf9190b"],["/HTML/Birthday/Lee/css/styles.css","40a2ddfd959f99fb6ee412c0fc690973"],["/HTML/Birthday/Lee/css/styless.css","3c17a40b397eaa58aadeffdcc2f81dbe"],["/HTML/Birthday/Lee/html/BirthdayCake.html","67786f6640550c5b9f5da99eb153f58a"],["/HTML/Birthday/Lee/html/EasterEgg.html","6decbe63f7e5603d9627bea359cb3a5a"],["/HTML/Birthday/Lee/html/Memories.html","02db9d79bf05ace6ea58719b61b72d40"],["/HTML/Birthday/Lee/html/index1.html","52e8ccfa2e246dd9db719f61e8132dad"],["/HTML/Birthday/Lee/html/login.html","7ffdb5d47491a4a074c81375e8b7054e"],["/HTML/Birthday/Lee/img/1.jpg","03c03d79748a47cd67a5984fb356c602"],["/HTML/Birthday/Lee/img/HappyBirthday.png","03fc2be87e79e0dedccb8a9fc5bb93c5"],["/HTML/Birthday/Lee/img/di2.png","358cb8a8bc88bc07c20f75122eb8106b"],["/HTML/Birthday/Lee/img/di21.jpg","9b86af8ebca79243733ec3b1e1b91784"],["/HTML/Birthday/Lee/img/di22.jpg","ae6ad163f54fa51150828db8cc1bf2fb"],["/HTML/Birthday/Lee/img/di222.jpg","d56db177d029bd153aea6ca19e0f214d"],["/HTML/Birthday/Lee/img/di23.jpg","c67f0fdcac5e4447bc775284f7ec18b8"],["/HTML/Birthday/Lee/img/di24.jpg","9c9da484e3a8f6c4a8730fa2cc426a66"],["/HTML/Birthday/Lee/img/di54.png","9e97a7c0c14e934cda31cfa2366e847e"],["/HTML/Birthday/Lee/img/haha.jpg","bcd82836bf033a5241bbe2bc3c0f8788"],["/HTML/Birthday/Lee/img/timg.gif","2632c9877664a9022751623310cf86cd"],["/HTML/Birthday/Lee/img/timg.jpg","a3584f24ff3c782f8002d0472c0abe4c"],["/HTML/Birthday/Lee/img/zt.png","724e62b042c86855c3340f3f6cfe542a"],["/HTML/Birthday/Lee/index.html","01ee2b4a2dbaed77384c1c32d1bf6173"],["/HTML/Birthday/Lee/js/diy.js","7b6773e987f091e03a64f5a67d80971c"],["/HTML/Birthday/Lee/js/index.js","d915aef68dbcc3832eff6f6206f65f0d"],["/HTML/Birthday/Lee/js/indexl.js","37712d4b28a0341164fa7e6d8d5e5924"],["/HTML/Birthday/Lee/js/jquery-1.8.3.min.js","c6ce4fbea92319dc168417ed8697c252"],["/HTML/Birthday/Lee/js/jquery-1.8.4.min.js","96f8da9644e1e1969b4429949ab776c7"],["/HTML/Birthday/Lee/js/jquery-2.1.1.min.js","d021c983bd6e7291b43a5cc1fb2ebe99"],["/HTML/Birthday/Lee/js/jquery.fullPage.js","ec3be1e402288d03093f78bbc32d8209"],["/HTML/Birthday/Lee/js/jquery.fullPage.min.js","af8f017869bc1f44a632a955f6316f32"],["/HTML/Birthday/Lee/js/jquery.js","218fe419241debafdfaefbd20dceeba9"],["/HTML/Demo/3D烟花.html","580176176bd6a899e1fb6330049e1144"],["/HTML/Demo/Early/Stats.js","a7d1796b044a042c21d7c07fc0dac3a7"],["/HTML/Demo/Early/TweenMax.min.js","ec8c7295d992b5209038d794a636a0ed"],["/HTML/Demo/Early/css_globe_PerspectiveTransform.js","c03bc1c6dc9254e934b9af6f07fb172c"],["/HTML/Demo/Early/dat.gui.min.js","e7d740aa4e056e7e7d012e54c5e66593"],["/HTML/Demo/Early/images/css_globe_bg.jpg","823d077e3b719afc159ea4602b0e40d0"],["/HTML/Demo/Early/images/css_globe_diffuse.jpg","0176e13d04ccae9a7dbd1adfefc82881"],["/HTML/Demo/Early/images/css_globe_halo.png","efd942e2b03a6e3f7b6d6cce6de40d9d"],["/HTML/Demo/Early/index.html","da028f2af1e5a84d21a5de4d33768258"],["/HTML/Demo/Early/script.js","b4a5025545d7f0d9c7a91649b21ad7f5"],["/HTML/Demo/Early/style.css","75972711583a72c622e59a6e7689bde7"],["/HTML/Demo/圈小猫.html","3a8bc1eba77af735afa1126b11b9112e"],["/HTML/Demo/坦克大战/css/default.css","63110ed0887e0c1ca62ca5cd84ec4353"],["/HTML/Demo/坦克大战/images/menu.gif","811c3bee393b6edc6bf0e7711de857c6"],["/HTML/Demo/坦克大战/images/tankAll.gif","5a3797cbba31f9d6058b3203b7370a19"],["/HTML/Demo/坦克大战/index.html","40d44876476fcd0c324f284fee36b361"],["/HTML/Demo/坦克大战/js/Collision.js","f1439696af96f90e0250176251d8f55a"],["/HTML/Demo/坦克大战/js/Helper.js","5c0796bb6f515845c7b85bc52aa9ae3b"],["/HTML/Demo/坦克大战/js/bullet.js","0ba64423cbd09227b7db48de15d24c77"],["/HTML/Demo/坦克大战/js/const.js","9b5dd926bfefdee739e321fa4c1d9176"],["/HTML/Demo/坦克大战/js/crackAnimation.js","7eb60292b013920f795553cca491c97c"],["/HTML/Demo/坦克大战/js/jquery.min.js","a1a8cb16a060f6280a767187fd22e037"],["/HTML/Demo/坦克大战/js/keyboard.js","f9eab8b0c5e9d111dfb944061f5d5a21"],["/HTML/Demo/坦克大战/js/level.js","0ba18382e2adc7c284dff659efc78437"],["/HTML/Demo/坦克大战/js/main.js","aeb0da663e5421f945be87d16c3d064c"],["/HTML/Demo/坦克大战/js/map.js","c1f1f9cba96a749d2bda07b753ed5b45"],["/HTML/Demo/坦克大战/js/menu.js","4726feb6c8b98553aa2cbaf66de975d7"],["/HTML/Demo/坦克大战/js/num.js","f400903361306736dd6455c9a8461ac3"],["/HTML/Demo/坦克大战/js/prop.js","56f9ded57f865cafd0e400b35c8d66d5"],["/HTML/Demo/坦克大战/js/stage.js","9b27a3de1f9a4d71c44b5c24b9058154"],["/HTML/Demo/坦克大战/js/tank.js","b4c26f2d81cf6e4a00ce42ecf6b4f5a5"],["/HTML/Demo/彩虹雨.html","d8e94a1bbf890a7c6bb6f4935d5b9ff6"],["/HTML/Demo/抽象线条.html","4f3a2352e43007844ed111a855bdd542"],["/HTML/Demo/撕渔网.html","dd904acaf3267918f14aca67140e25c7"],["/HTML/Demo/方块穿梭.html","d2a3bcdcfaee64265aa4859066a9cfac"],["/HTML/Demo/旋转粒子.html","b4820831e1ecc27700af4f8b50f9f0e2"],["/HTML/Demo/树镜.html","bfb5ecb57b5141d7d0ccbf8cd179f7ae"],["/HTML/Demo/游走鲨鱼.html","1be89ec01e0d508fd68012eec36af1c5"],["/HTML/Demo/烟花效果.html","9d442829bb8bff79c63b4b1ba133f87f"],["/HTML/Demo/碰撞小球.html","4b5fa05f0ab8bceec1edba934b0fb165"],["/HTML/Demo/纸飞机.html","7e15a0a568478e20538da0a9802baada"],["/HTML/Demo/走迷宫/css/bootstrap-select.min.css","68738245281e5fbee772982b59798279"],["/HTML/Demo/走迷宫/css/bootstrap.min.css","a0aedb0c89150dc3cdeb1ac46b1153dd"],["/HTML/Demo/走迷宫/css/navbar-fixed-top.css","60968bc4d8f4b675031b846b097b4d73"],["/HTML/Demo/走迷宫/css/style.css","8ebc738e9affdeb408baf92b0e8aba79"],["/HTML/Demo/走迷宫/css/style_1.css","ff37404c2052dfd08d0497db293438b8"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.eot","aa16cd35628e6dddf56e766c9aa4ae63"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.svg","0a5c48c69a25a93e37ed62db813387fa"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.ttf","47da44498fc073d9fff9ab0cdb0bef8e"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.woff","5eae1f7217b606d3580dd70ac840fea1"],["/HTML/Demo/走迷宫/images/flag_red.gif","71c4ce010d146694ed786aca003c7710"],["/HTML/Demo/走迷宫/images/sinform_arrow.gif","40c03c72175dfffd973dbf4cade4242d"],["/HTML/Demo/走迷宫/index.html","40a39a5ef543b0884784c5b5fd13e058"],["/HTML/Demo/走迷宫/js/bootstrap-select.js","45eddddd24f1ea4cf73b6db53889d115"],["/HTML/Demo/走迷宫/js/bootstrap-select.min.js","6ad7c68ee115b6441b92da6e2dd38d78"],["/HTML/Demo/走迷宫/js/bootstrap.min.js","447a910072bdf528317059c98a506cd5"],["/HTML/Demo/走迷宫/js/function.js","1225102ceecfb95f34f02ed51cbce7d9"],["/HTML/Demo/走迷宫/js/jquery.hotkey.js","d00385d073b9182a63f78b7eea21f3f4"],["/HTML/Demo/走迷宫/js/jquery.js","03af20945941842dff048a4570d7f175"],["/HTML/Demo/走迷宫/js/script.js","16f0210efecac15b35764f1fb524b07f"],["/HTML/Demo/飞机大战/css/main.css","5460c59795a80a56c39ecd0357bccc89"],["/HTML/Demo/飞机大战/image/background_1.png","c6f893c217716100c740ee1a54e8919c"],["/HTML/Demo/飞机大战/image/bullet1.png","a21bc3cd4a77f9943e0ed98f94e51ca4"],["/HTML/Demo/飞机大战/image/enemy1_fly_1.png","697f4cb8d5f04969c12e158692c3d052"],["/HTML/Demo/飞机大战/image/enemy2_fly_2.png","c730097b02594c4079f2388aa32074f4"],["/HTML/Demo/飞机大战/image/enemy3_fly_1.png","2b140e404b975333e86cc0427430aa1f"],["/HTML/Demo/飞机大战/image/中飞机爆炸.gif","d7b0d24b65b816f3b43e782da7ef5337"],["/HTML/Demo/飞机大战/image/大飞机爆炸.gif","d7b0d24b65b816f3b43e782da7ef5337"],["/HTML/Demo/飞机大战/image/小飞机爆炸.gif","d7b0d24b65b816f3b43e782da7ef5337"],["/HTML/Demo/飞机大战/image/开始背景.png","7cb8fd0abf5351cda5a7b2a2e98f1db0"],["/HTML/Demo/飞机大战/image/我的飞机.gif","1f40889bc3c01c574fea56e47e7196d5"],["/HTML/Demo/飞机大战/image/本方飞机爆炸.gif","341485ebb93628b03a7f910d511922bc"],["/HTML/Demo/飞机大战/image/飞机爆炸.gif","d8eb4d174d6f02652d00938380ed7f73"],["/HTML/Demo/飞机大战/index.html","271479839c6272199292e4a3e4174687"],["/HTML/Demo/飞机大战/js/main.js","7f3e4d3cc405be0db51ef960ce27e250"],["/HTML/Demo/骇客帝国.html","563d06be192bdde93bf640d806d53b56"],["/HTML/KMS/kms.html","7d9c9c97765867a82b760f07d9df39d2"],["/HTML/KMS/layui/css/layui.css","cee0679a08e7be58082cc7593f275109"],["/HTML/KMS/layui/css/layui.mobile.css","fe93b3b63fb545efc5bd476ccd81edc5"],["/HTML/KMS/layui/css/modules/code.css","c1209e950573712edda8abb2e9998c70"],["/HTML/KMS/layui/css/modules/laydate/default/laydate.css","2d752e6969f2cb270bff641baebd8496"],["/HTML/KMS/layui/css/modules/layer/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/HTML/KMS/layui/css/modules/layer/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/HTML/KMS/layui/css/modules/layer/default/layer.css","cdf467c11d77287b09cec22297aa06b2"],["/HTML/KMS/layui/css/modules/layer/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/HTML/KMS/layui/css/modules/layer/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/HTML/KMS/layui/css/modules/layer/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/HTML/KMS/layui/font/iconfont.eot","69acb5ab2122ea60df831f647089c6aa"],["/HTML/KMS/layui/font/iconfont.svg","9d51df0b77733e27f9ef8f117199234f"],["/HTML/KMS/layui/font/iconfont.ttf","1fef2d0a45d285ddce1382c398b3280f"],["/HTML/KMS/layui/font/iconfont.woff","e3ad430ddde8adfa8a6a4a17bf505005"],["/HTML/KMS/layui/font/iconfont.woff2","d8c214c89e33a7bea93d656bd865e869"],["/HTML/KMS/layui/images/face/0.gif","a06a2e3ed6da3796fbb731367d039a0a"],["/HTML/KMS/layui/images/face/1.gif","913e2f3dd1962d2a80b4ae66ddddceb3"],["/HTML/KMS/layui/images/face/10.gif","611117291370fea2ceac62c29e3895bd"],["/HTML/KMS/layui/images/face/11.gif","199be3fbe9ed7e5191c8635e05bcc0e9"],["/HTML/KMS/layui/images/face/12.gif","7621ac2727678687a5318762f580142e"],["/HTML/KMS/layui/images/face/13.gif","8621f66098b5c352706832525ca98430"],["/HTML/KMS/layui/images/face/14.gif","c30514bf7d87214840be9409e0543aa9"],["/HTML/KMS/layui/images/face/15.gif","485a20018f6fd278510c2953697ba65c"],["/HTML/KMS/layui/images/face/16.gif","3d4ee858ebba0e46a7850e13185b7c9b"],["/HTML/KMS/layui/images/face/17.gif","1e345b472299bbc72d854fea14377b19"],["/HTML/KMS/layui/images/face/18.gif","f81ed31a2829c0609354f25e1da62006"],["/HTML/KMS/layui/images/face/19.gif","fa7da45a4cf11818476a64b11972beba"],["/HTML/KMS/layui/images/face/2.gif","aec972de4da971327e4452c5b4b5fda1"],["/HTML/KMS/layui/images/face/20.gif","435dbb7f69e76dbe51c64d0208478bd5"],["/HTML/KMS/layui/images/face/21.gif","21ed3c01c99c75162cc7d5c09e557468"],["/HTML/KMS/layui/images/face/22.gif","7873504cf41c6bf81dc385e7a63e06c2"],["/HTML/KMS/layui/images/face/23.gif","84b3bd065735379c7ebf902bd356eb24"],["/HTML/KMS/layui/images/face/24.gif","9044159f1635cce276f79f2750e44bab"],["/HTML/KMS/layui/images/face/25.gif","55ff58341b23eb412186f8e89963f3ed"],["/HTML/KMS/layui/images/face/26.gif","7e64a36433e1f756dafc74093e71c678"],["/HTML/KMS/layui/images/face/27.gif","4e10558193648444470bb9a1dd7007da"],["/HTML/KMS/layui/images/face/28.gif","ed40b41d05a3020271be545a607d6d78"],["/HTML/KMS/layui/images/face/29.gif","4fb6439d891b34c4936ae34a79725b59"],["/HTML/KMS/layui/images/face/3.gif","bf97be0b15ace15dedf22f266a5c429c"],["/HTML/KMS/layui/images/face/30.gif","0b7ff8f1bbb91be880ef190767774c78"],["/HTML/KMS/layui/images/face/31.gif","dcc636d88b53e73852db566a4d9d2f20"],["/HTML/KMS/layui/images/face/32.gif","8d9e9cc9b52ca46e854480fa4900158e"],["/HTML/KMS/layui/images/face/33.gif","2f9e45312f49e02f32ce853db930295f"],["/HTML/KMS/layui/images/face/34.gif","f81a7f4f93f254d58c0e943a07d2cc0b"],["/HTML/KMS/layui/images/face/35.gif","cc8ff0383ce624c0721682aaa500b672"],["/HTML/KMS/layui/images/face/36.gif","645be9a08ae4d8aac61e6b5fb47215e5"],["/HTML/KMS/layui/images/face/37.gif","4c9e106e702751cb61861778269e2b26"],["/HTML/KMS/layui/images/face/38.gif","15bd343617ec5ea02eedfdfe575c656c"],["/HTML/KMS/layui/images/face/39.gif","edfe69e1b1f20cfa8110d9e9d2536c68"],["/HTML/KMS/layui/images/face/4.gif","4d2933c0445dc04bdaaad41f2b557137"],["/HTML/KMS/layui/images/face/40.gif","c94db1a006caf85ccb8a194335ce5621"],["/HTML/KMS/layui/images/face/41.gif","55565f0156566feef1e329177f6d83f1"],["/HTML/KMS/layui/images/face/42.gif","f24d53dee3bd1050b26d6d7cd5bca68d"],["/HTML/KMS/layui/images/face/43.gif","599c45d8a2832cc01617fb42091993df"],["/HTML/KMS/layui/images/face/44.gif","b0f285b595f10a1277774bf6844da76b"],["/HTML/KMS/layui/images/face/45.gif","d17783318c1587204b6155c2fa9986fe"],["/HTML/KMS/layui/images/face/46.gif","b72ecabbadc13888d4775ec53c9150f8"],["/HTML/KMS/layui/images/face/47.gif","8ede6bd1d173ddeb6f3f4b241c8f3513"],["/HTML/KMS/layui/images/face/48.gif","2a4c6936a09b0219d1c74f0167577b30"],["/HTML/KMS/layui/images/face/49.gif","21069e4a6b8a4f6a0af40c87a168f321"],["/HTML/KMS/layui/images/face/5.gif","8ae6b6ec8d2941a6adaee9555839e81c"],["/HTML/KMS/layui/images/face/50.gif","96664d71d30c946747bcc651d085ed7a"],["/HTML/KMS/layui/images/face/51.gif","c6c1e6c64c16d3747e251200e014f219"],["/HTML/KMS/layui/images/face/52.gif","ff4d93b3615d5d975f0b6786670b702f"],["/HTML/KMS/layui/images/face/53.gif","bc06dab3c63c4e2300c5cd4524819370"],["/HTML/KMS/layui/images/face/54.gif","aff05197849e8c8f55b2d5fe56bb56f7"],["/HTML/KMS/layui/images/face/55.gif","d7bdca562fd0b53f816eedb23148e158"],["/HTML/KMS/layui/images/face/56.gif","8c6f0b4cdd0fa9d68205bab3d8df29e4"],["/HTML/KMS/layui/images/face/57.gif","e37c81739515617cf5bc51232ad873b7"],["/HTML/KMS/layui/images/face/58.gif","89d291439d6eae4b2db6746e589f6134"],["/HTML/KMS/layui/images/face/59.gif","1cb4f698dd69602dd6f6eff121663a17"],["/HTML/KMS/layui/images/face/6.gif","9946d6232e406ba2c10b60221c5b698b"],["/HTML/KMS/layui/images/face/60.gif","71712fa565d89315b6ef2a45b3d581b5"],["/HTML/KMS/layui/images/face/61.gif","4bde9630ca80c61063813274729af4ba"],["/HTML/KMS/layui/images/face/62.gif","c0ed0920ba0d752ad77aca762050b12d"],["/HTML/KMS/layui/images/face/63.gif","907b3e81d16afb9df5ef023ede0eddf1"],["/HTML/KMS/layui/images/face/64.gif","959bacfef9ac0d3bb275504623c62375"],["/HTML/KMS/layui/images/face/65.gif","a27ed9871926a8e37c522f6c1542df9a"],["/HTML/KMS/layui/images/face/66.gif","02709c83458b72b0c73585297cc291f3"],["/HTML/KMS/layui/images/face/67.gif","ab1c7c7a43aa6f43963c7b0afc9ec787"],["/HTML/KMS/layui/images/face/68.gif","a1c8f21f98fc6eff21cb3e4d08baee2b"],["/HTML/KMS/layui/images/face/69.gif","877ff95213ae5c45721761c540810053"],["/HTML/KMS/layui/images/face/7.gif","3880bad4694b3ef38e2e58be68b875ef"],["/HTML/KMS/layui/images/face/70.gif","b7f69e6df691b1c885f541ec604c59df"],["/HTML/KMS/layui/images/face/71.gif","55a42691f8560bf2fbfed7c19389e4cf"],["/HTML/KMS/layui/images/face/8.gif","8bfcb8fe88a3b666b5460743fb2cdc49"],["/HTML/KMS/layui/images/face/9.gif","92bf7127158347196c4f9aef0d0ab301"],["/HTML/KMS/layui/lay/modules/carousel.js","f4b94959b4b5ad34cdc1dd2c12a6bd1c"],["/HTML/KMS/layui/lay/modules/code.js","aa26767f53c4c1039902d64e8b3b7eac"],["/HTML/KMS/layui/lay/modules/colorpicker.js","dd1babeb1312479e49529ca09f793355"],["/HTML/KMS/layui/lay/modules/element.js","784379625afe1516f69075a78007e7bf"],["/HTML/KMS/layui/lay/modules/flow.js","dfa03cc00f7acef38096691e602783c6"],["/HTML/KMS/layui/lay/modules/form.js","e0eb963ec775a440d510ba98b3c8942f"],["/HTML/KMS/layui/lay/modules/jquery.js","0cbcbd46e1f7f28cc35437d5aa9cc112"],["/HTML/KMS/layui/lay/modules/laydate.js","3ab28802696164d5022e87666599311c"],["/HTML/KMS/layui/lay/modules/layedit.js","db5f0d1110b9a30f5611067386511cd5"],["/HTML/KMS/layui/lay/modules/layer.js","3ffd5603784dbfeef189498c1a705c15"],["/HTML/KMS/layui/lay/modules/laypage.js","d952221eb5e1a40eb6a8c906c598278c"],["/HTML/KMS/layui/lay/modules/laytpl.js","e915490c103236fa12f4cb01ec48a876"],["/HTML/KMS/layui/lay/modules/mobile.js","b43a556d47b190882f6c41ac93267a75"],["/HTML/KMS/layui/lay/modules/rate.js","c5551e7130cfd94c43e6568bac4eea24"],["/HTML/KMS/layui/lay/modules/slider.js","41608d02d4a0fcdaa66b2bd8f44b2cbb"],["/HTML/KMS/layui/lay/modules/table.js","c77a478828ad257f29df0ec44a86b1f2"],["/HTML/KMS/layui/lay/modules/transfer.js","2099e2e0757dac2d6e44dbac1409a52a"],["/HTML/KMS/layui/lay/modules/tree.js","dee6428e7bc6bbf6e9fdaea4140b4772"],["/HTML/KMS/layui/lay/modules/upload.js","4764cd260a2b1966a7b20a6c23b8ff3a"],["/HTML/KMS/layui/lay/modules/util.js","78bbcfb3c7b5311e80116dd709d82d62"],["/HTML/KMS/layui/layui.all.js","b0832d3906d2d7a9688ed9c095dcc23d"],["/HTML/KMS/layui/layui.js","055cb5361d0dadf75de67f6875def943"],["/HTML/love.html","6a5168e05893f245e55a2751ebc6326d"],["/HTML/my_love.html","61d80353add4967e08d25a5cef52f708"],["/about/index.html","6a5a51371d5b24d3551e606e7abd252d"],["/archives/2021/01/index.html","dc3c6d24259d9e37e57672cce5020aa3"],["/archives/2021/01/page/2/index.html","7eeda81772ff1de9daba29f8180320a8"],["/archives/2021/02/index.html","7dc7376eb42b34a4a1c50c949138893e"],["/archives/2021/02/page/2/index.html","792ec7b1632a72322e59103de3907cd2"],["/archives/2021/03/index.html","14d4a3b7fc15324972ebfaa933d3c496"],["/archives/2021/index.html","5b79699c94085d7ef180ab273a5ce8fa"],["/archives/2021/page/2/index.html","6a1434d1f5147db7734954bb0a1a5c27"],["/archives/2021/page/3/index.html","08f56b4f55426189198dcb1ef116ad4f"],["/archives/2021/page/4/index.html","5511c052e891d0dc8dcef3104779a23d"],["/archives/index.html","3cbbdb8f190cc50998a4d496ea52a894"],["/archives/page/2/index.html","a3d02dc7000e46c575ac50dc564ef012"],["/archives/page/3/index.html","64fcdf975d40d07fed3755bc2fe530a0"],["/archives/page/4/index.html","9a68b5b973e18648314a541eace5282f"],["/categories/Arduino/index.html","bc0d3250fbeab39b3ab2e34158d9ca5b"],["/categories/Hexo博客/index.html","ecbee95e7818cf054306b87d05b125e3"],["/categories/Hexo博客/page/2/index.html","677e62c9bb6eda92a887ecc7fab687c0"],["/categories/Hexo博客/技巧/index.html","1cd69281231e805a7501aaeb6490f729"],["/categories/Hexo博客/技巧/page/2/index.html","dab58ee34e347e2dafac7a8fad9951f1"],["/categories/Hexo博客/搭建/index.html","caca083598d8a28687417d4c753615c2"],["/categories/IoT物联网/index.html","25098f5ebe81224ec2d8bf8448669a7d"],["/categories/PC/index.html","c1965cac9c9e529242bb62ae747b9bcb"],["/categories/PC/媒体处理/index.html","89059b58babcfd96c156ebce42752a4e"],["/categories/PC/系统增强/index.html","77edef2b953ea25be79cf2052b02970e"],["/categories/PC/系统镜像/index.html","61a53c033b90319c0a251c045e985941"],["/categories/PC/软件激活/index.html","42045fff244804f8ec991c8ad1639696"],["/categories/Python/index.html","e333ecd405a1e7e82889a7aea25a2112"],["/categories/Python/学习笔记/index.html","974924c67f758258de3a23ab5f4b8147"],["/categories/Python/成品/index.html","41e565b4b77c788ca19fb085fe52a938"],["/categories/index.html","1d9409463584426d924b94726a0f0cd5"],["/categories/技术教程/index.html","8744e954e2a5afb65c3b8572c31654fa"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","24a2098165da3b73c25861b6ba4d8edd"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","1614edbfc5e16fad2c512af4e92020b1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5689bba1259a6c80e75a7071de8c7781"],["/js/amnesia.js","0f4bed07d61dcce69cc0ddc166a59286"],["/js/background.js","7b370436ecd2d0f43b614d374894ab0d"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/swiper_init.js","dcf69c07e6595a5fce5121731baf2525"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","43ca1cff2e496414bf0261ab2a8689a0"],["/message/index.html","3a56963b5d976add6a800093555c60b5"],["/movies/index.html","b78a688bc2e1aeb8b7e43fecf4de8441"],["/music/index.html","1d9f80022650f469b4a54a3833d68831"],["/page/2/index.html","c5390d37b6aca23c6ce103639b0fe85c"],["/page/3/index.html","342a47a88f720cb451778cfda5eed569"],["/page/4/index.html","0fa1cce06559c733954109e93f9c4ce4"],["/posts/11e4.html","0eab778bce9cdbaca91b4bd75ed36369"],["/posts/126239f4.html","854049b7a9842e6d1a5b4e7aa90889ac"],["/posts/20b3.html","e4db34923fb7fae524380ef44700fc1c"],["/posts/21396629.html","a4df2f306a48dd1ad6ad595e7237d3e0"],["/posts/241519a2.html","aa4a2ee891a99af9913984e7bb1eaf5a"],["/posts/40cad56a.html","33d5049556111592af432bf8df9fd739"],["/posts/4161854e.html","bd07f0990424f6cc0d269e13a7635463"],["/posts/4254dc4c.html","29d88658fae6aabf89ba9e5cff7c290b"],["/posts/461b0433.html","a5a276b6683019c78031d25cb3ad3e34"],["/posts/56ce.html","422d980f8e76bcb7085db758c535b891"],["/posts/6746a1c3.html","640bc7506ae63bcbfdb111fe1082b559"],["/posts/749a3a09.html","fd7bf2b8fc68dca4a8267664f70085a9"],["/posts/7594.html","a692b17d74d9c330a165ed36cd478196"],["/posts/7c82.html","e6d966363f56fc4cbc39f5b3c47f31f0"],["/posts/844fc5df.html","f2a1baa7d68de3f3c18db4d16b408b88"],["/posts/8acab12.html","e283d850b26681da22420f4990678200"],["/posts/947ec48e.html","19940dbf0eb6712b3941ff63dc3d4d43"],["/posts/ab43a875.html","0e29c3c729fff18f29e423d0a9c30cf5"],["/posts/ac2c.html","af3ca21d48a9632794be2ddeef367799"],["/posts/ad79.html","07c1b042662348cd13d5d09193fac002"],["/posts/adf6e4b.html","8acad8ebb54cdd2b01760d25266c3802"],["/posts/aea2.html","22d8679ee7d6f6b2a9726c20adab5f78"],["/posts/b7ed.html","82b55e96240e398ea1e7bc2bbd4f8e41"],["/posts/bc3531cf.html","05b98dd8d25cf36a4ed65eb73d6199f0"],["/posts/bfed.html","9aaa4ed2b5d9b4e84f435c0e01ff267b"],["/posts/c232.html","9f0037da932c0a9bf727633fc73224b4"],["/posts/c2c.html","f50dbf0506004d150f7873f0860470ab"],["/posts/c336038a.html","b2289cfd44f55dbe0162f3d0080863c4"],["/posts/d6c8.html","b0703d62ecf915a14b7ad53b73c96ebc"],["/posts/db12e7f4.html","18f4d97f7df62d3f4e7cfdfc0309ccaa"],["/posts/dbba.html","7d0e45c082c253a5457488f568148933"],["/posts/dfe935b2.html","ce3c9f5e7b8e7dea01dbaf6571a94002"],["/posts/e98f2569.html","7485b8aa39046db6d8756be4ba4a89dd"],["/posts/ecc2.html","9f047402b10263a2fd92c7397bc86f5f"],["/posts/f663.html","60de457dd70212b67fe92207d052fcb6"],["/posts/f7a.html","366538f5a3ebba4db572b9b4abeb21c1"],["/shuoshuo/index.html","c41e312bcd4c328852d191466e3872f9"],["/sw-register.js","166870ceb8ed7c36a646b2077d05dda4"],["/tags/Adobe/index.html","248f53a8f238eea8634b7069ba3096e0"],["/tags/Aplayer/index.html","a03650ab73ebc7bfaf8da953e839205e"],["/tags/Arduino/index.html","30a2078e47ead62ca9c5dc00d2d050cf"],["/tags/Hexo/index.html","fcf74742576e20fec0630cf015157ff6"],["/tags/Hexo/page/2/index.html","b4008c3573686c889e46b17ffd30069e"],["/tags/JsDeliver/index.html","db01e65d804e487b7139549ae9cf5a61"],["/tags/KMS/index.html","4210a9b0b44579684e89e57740090474"],["/tags/PC/index.html","f7800f8992a7cc09f4fdc0dfe48abd81"],["/tags/Pycharm/index.html","13890ad4d4bba9d50515d1e8478f8ae6"],["/tags/Python/index.html","c7469699bc732b650b6222b107f19dc8"],["/tags/SIoT/index.html","d52fadd5e18ce15dfdb20698beacbb94"],["/tags/Windows/index.html","0c934cb4f459f9f0cccf0db83ceaddb2"],["/tags/html/index.html","4ec2c8c71afb53590fb9698c7a1a6361"],["/tags/index.html","91013aeeaa9fe40b4d18f2cbce24bd6a"],["/tags/turtle模块/index.html","034aba4cc13023f908e078916b126d49"],["/tags/优化/index.html","08207a491f6692c80fef6d79f904f24a"],["/tags/侧边栏/index.html","a5e02528a50b76f6b14be1454835c0e7"],["/tags/元组/index.html","e3756f048e4509d7ec21f6adf9707caf"],["/tags/函数/index.html","97f5d4b653222b89b29379ee21803d61"],["/tags/列表/index.html","e16ee3ca3eabcaf01e3925ddedbdbf25"],["/tags/博客/index.html","a35f0f6fe9b7fa09dbb52147b887ba1b"],["/tags/博客/page/2/index.html","b3f5b9dbe71905226b26710085919289"],["/tags/右键菜单/index.html","ae1ca47711c56528a9d3bcf5cb8cda0c"],["/tags/图标/index.html","065464e84440120449095bc077dd7cfd"],["/tags/字典/index.html","6ca10201d6a88cdaae06520b12cdb0cb"],["/tags/学习笔记/index.html","5a28d90b709396ae310ca99eb8ad82d8"],["/tags/安装驱动/index.html","7fbd1bf40e3e89f3854f3944b0c90043"],["/tags/成品/index.html","5d12ef32e11e964caf08a18ea010bc94"],["/tags/技巧/index.html","7f1ecd0bd7458dbf4cf315b56507342d"],["/tags/技术教程/index.html","0d7c73350f68fa8b86a7d5c901679146"],["/tags/搭建博客三部曲/index.html","2807bc5aa4d313e212c0f59f791d157a"],["/tags/教程/index.html","e8a6c17f0027f79f2cbc4762d6549777"],["/tags/物联网/index.html","ac5aabe5c2c5ef2af49e20f09399b737"],["/tags/百度网盘/index.html","a6fddb8f14db377be0d5b2b4a7ecfa9c"],["/tags/系统增强/index.html","2d624fa51e965bb4418418da83bc9f8f"],["/tags/说说/index.html","a3bbf235878166aec8bf24fad17997a5"],["/tags/踩坑/index.html","2ed5d84a718ff33b2204be704159a6c8"],["/tags/软件激活/index.html","02217f02746a81275e51d4cde302f673"],["/tags/链接/index.html","4a571755c2da84cd8c2a458365b26928"],["/tags/阿里云/index.html","67522dcae0ce21edd3dd36e78ecde3ff"],["/tags/音乐/index.html","8c745ba89654816e42fdb451e2ddd6f9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@latest/butterfly/css/pool.min.css"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://butterfly.lete114.top/css/Lete.css"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@latest/butterfly/js/pool.min.js"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://butterfly.lete114.top/js/Lete.js"});





/* eslint-enable */
