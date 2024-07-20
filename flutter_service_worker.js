'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3bc9bb0f438c8a85563cda079960bd9d",
"index.html": "4a1074acf28690cd91f8b70bd1794013",
"/": "4a1074acf28690cd91f8b70bd1794013",
"main.dart.js": "aca0f19219e0b2127154044e49f60719",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "144d80be95da4eaf530d71694e671a73",
"assets/AssetManifest.json": "5d185b6b9fb6b7bc9eba618d1a9fe6ef",
"assets/NOTICES": "4c1d62893d3456285fccd6583ab6150e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a0cbcd51b852108b584fd4d5e0fa387d",
"assets/fonts/MaterialIcons-Regular.otf": "36fcd116f9e991820d063da216a6cda1",
"assets/assets/flags/tg.png": "8d97b40722e26e9135f290927a0cbe42",
"assets/assets/flags/me.png": "848ba49a0b0479632dbd283ffb7f0b3c",
"assets/assets/flags/la.png": "88de79a52d651238fd91acc8bb4b462f",
"assets/assets/flags/mr.png": "bb6efb7bb8eefe94cddf5f836345176b",
"assets/assets/flags/ni.png": "7a09fbf692350528c9a2b052f0449dc3",
"assets/assets/flags/lv.png": "3176fd5d0e393c000e66834c6a49dd0c",
"assets/assets/flags/om.png": "7d60f61e8f1f2997eaf2212a12e706ca",
"assets/assets/flags/af.png": "4b54a7f8ee02eed33794f1208dfa991d",
"assets/assets/flags/cy.png": "73dbb3ad6c90cfc3e1c2cf99be8cec7c",
"assets/assets/flags/bj.png": "7e818ae10a246321b88849ed32971bdf",
"assets/assets/flags/aq.png": "cc28ce46e7e69954f643fd8b37900df4",
"assets/assets/flags/cn.png": "8d2e090059bce21e8b9d114c65274102",
"assets/assets/flags/gb-sct.png": "61ab100ce51def1c2757aaf3ae6d3e06",
"assets/assets/flags/co.png": "68a81f21e14f09335680ccdefdaeba2f",
"assets/assets/flags/cx.png": "0f95398884643c6c7d8ff6bed71b3aeb",
"assets/assets/flags/ag.png": "e3f2e2914e6573b89a898a91e6aea523",
"assets/assets/flags/ms.png": "f5b8e68f79862734e72431730dbbbe0f",
"assets/assets/flags/md.png": "d62fee01341b9df8a9367df32b28119c",
"assets/assets/flags/zm.png": "b26d4bf381908b2b144959150213c820",
"assets/assets/flags/vn.png": "2394324dcb0535b48c2f607da64e8836",
"assets/assets/flags/tf.png": "1566e89f9608f3f00c8c5f9c5fddefbc",
"assets/assets/flags/td.png": "cb33804025318113ddc4208956dcace5",
"assets/assets/flags/yt.png": "707e97ea72f58c17349cadbda82ae53a",
"assets/assets/flags/lb.png": "04873e35145f4c778ff21ed6ad27afce",
"assets/assets/flags/mf.png": "5dadc9749337181c2779da2e1ef7628a",
"assets/assets/flags/lu.png": "86f912d859adfac5683b727cc3c6fe37",
"assets/assets/flags/mq.png": "270a9f3095ceb0a8d84f32498de16aa2",
"assets/assets/flags/cz.png": "5ccb5c5353ec30607248d0ba70760095",
"assets/assets/flags/ae.png": "c4be5028fcf6f92d171b115e48ec7103",
"assets/assets/flags/cm.png": "a3d429bf55ce127961cfe3c1d44c2c12",
"assets/assets/flags/bi.png": "fd8c252b64fe496edb88b57c0bf9a384",
"assets/assets/flags/ar.png": "1c09dbde068c871b168a0d433206c423",
"assets/assets/flags/as.png": "85e7c83089e1016976d7a159ef86f49f",
"assets/assets/flags/bh.png": "ac319d99563c186a346d488bfcaea947",
"assets/assets/flags/cl.png": "99b7d80f806c04e6cb78bf92ccf06e63",
"assets/assets/flags/ad.png": "986d26a7acdc4eb2ce1f600e427d26a3",
"assets/assets/flags/mp.png": "7cc7ad57833d4f10c481699418cfaa60",
"assets/assets/flags/lt.png": "0f257647a7d5b36697d3abb2bc7d2629",
"assets/assets/flags/mg.png": "a2bbf3ee3a6e2b39f933feacdb3431db",
"assets/assets/flags/lc.png": "e6a2302c0aca4d376381b2ad08008298",
"assets/assets/flags/tr.png": "6004f4e528fe856b639bc7a582c7c5e1",
"assets/assets/flags/ua.png": "a3b3c3a98691af85bd7a213f1d6759e3",
"assets/assets/flags/tv.png": "ce5def932abf35c8c279e8052f7d2e65",
"assets/assets/flags/vi.png": "91723da3ceff379f23b0e3bdfa0bbe35",
"assets/assets/flags/mt.png": "7596a32e2914707ef76e05244665b9b4",
"assets/assets/flags/no.png": "70ef6743140768c62387d77d48e9eb31",
"assets/assets/flags/mc.png": "dc3b746393a4114ce522accc102eb071",
"assets/assets/flags/ch.png": "1d72628a36078a1ae7dc7540d0390f83",
"assets/assets/flags/bl.png": "472e1cfc6b3424d8339ce2db3d34a7a6",
"assets/assets/flags/aw.png": "5e005ead90e76015f76bc005fe4c80b8",
"assets/assets/flags/bz.png": "a45faa6f1e84cc8bc129756f3b281885",
"assets/assets/flags/bm.png": "3c39135a97c9321cb166ef6886e3d8d1",
"assets/assets/flags/ci.png": "44f8a74b6c0b6be6be333a0ad27e6737",
"assets/assets/flags/mu.png": "fcbd6db7ffe86a50393e3e8a55c83acd",
"assets/assets/flags/us.png": "1aec0fc461c3f62479ff81df7e65fa38",
"assets/assets/flags/tw.png": "c0264dab632c3271688a6f78cbdb92dc",
"assets/assets/flags/ye.png": "15c5efcdb5c0028d6249cf4eed7f554c",
"assets/assets/flags/mw.png": "cc0a5b99fbd4c3020b9c7d6d8810a992",
"assets/assets/flags/nl.png": "4adbfd25e8dab11668ca04370dc60d0b",
"assets/assets/flags/ls.png": "9d22fe1f4521bbc273976cd6025b75a8",
"assets/assets/flags/bo.png": "503b6bdabec6c43f05a2312793e1bab4",
"assets/assets/flags/at.png": "9ed4ad1a06111a432a6dbcf41cfd0f90",
"assets/assets/flags/ck.png": "16a539545434c93336e43e28170f184f",
"assets/assets/flags/by.png": "d5a83d17bea370850d0677935a7dd30c",
"assets/assets/flags/au.png": "e7fc9d54cdcf1cbaf3a6c3c454440083",
"assets/assets/flags/bn.png": "624038ecc64bc43a08df12b6586a3d48",
"assets/assets/flags/ma.png": "81e8b6da015d3254211859f6853a8018",
"assets/assets/flags/nz.png": "a3696c81fe68a95783a43d4061b12a13",
"assets/assets/flags/lr.png": "c8a75b3ddaa522253371e011ceba0a0e",
"assets/assets/flags/mv.png": "1620b27d84c8c6b01efdad77d286213c",
"assets/assets/flags/tc.png": "09d8bdb84363018c83777ca4da783882",
"assets/assets/flags/ug.png": "465a15d8cf9d26aa0f7c58b947b0ee84",
"assets/assets/flags/tt.png": "a9c707b5e5ff9ea3f25f01e3b30b6f2a",
"assets/assets/flags/pl.png": "fbe65301eb74396372f0a85051378fb8",
"assets/assets/flags/rs.png": "20a689370f27e896f46f31a97a393503",
"assets/assets/flags/in.png": "5c410d20b27f92926ad25fb344e98b11",
"assets/assets/flags/ge.png": "1bd7fc6c6d53a23f4016ba3dc4ffd4f5",
"assets/assets/flags/gr.png": "d0e665e58be7ff66e48d8f97e512430c",
"assets/assets/flags/gs.png": "15ba7ccc010a408183b1bcff36014aed",
"assets/assets/flags/gd.png": "4bb0b44145892f9f797bd29afe073b30",
"assets/assets/flags/io.png": "df7b009b81883cb34bd1ce318083f761",
"assets/assets/flags/hk.png": "bb7af4252a46dbc932b739c2c199aa28",
"assets/assets/flags/kp.png": "77018eba822ac2167585bbd4545cfd00",
"assets/assets/flags/gb-nir.png": "940655c129cd22394ab8eeb05ba05b87",
"assets/assets/flags/kg.png": "59956e7164b0970f8e2549c1e7292ab0",
"assets/assets/flags/pm.png": "057c73c6357b10de156950b43350e50e",
"assets/assets/flags/sv.png": "b2e6a4f0d6ab261793eefb87c2c380d4",
"assets/assets/flags/re.png": "ab157c9339bec76d7360cf6a0e73989e",
"assets/assets/flags/sa.png": "65fda7116f92462d682885ec9611bf68",
"assets/assets/flags/sc.png": "dc693dba11a9247ee11a3844283a5f91",
"assets/assets/flags/st.png": "b3c01b9efdb74435e053f392ffe5e4c4",
"assets/assets/flags/ke.png": "e081d64f0f7edefd911da68ad761264e",
"assets/assets/flags/im.png": "2bb385ab445d1945af680bc9eb0b3f9c",
"assets/assets/flags/kr.png": "6f56bed77bd5583140f3fd928b33a74a",
"assets/assets/flags/gf.png": "5049a07d1c6ece23b7914e086907c2e6",
"assets/assets/flags/dj.png": "789d5ab2d2237b6c1d58d7b910a51c65",
"assets/assets/flags/gq.png": "4aff1b8e257b4655ee4722933ae18213",
"assets/assets/flags/gp.png": "762fb4905f24345181bcb7f8c011f6e0",
"assets/assets/flags/dk.png": "92e4ce56886027152300a4f3608be867",
"assets/assets/flags/gg.png": "e3eff83de0837b024b35212b77fe5f48",
"assets/assets/flags/il.png": "bfbf41270148ad1e0dc883be59c9a083",
"assets/assets/flags/pn.png": "7fe0a7ec677a4af8a58652a316f7e1f0",
"assets/assets/flags/sb.png": "ba858d4c8ff7f25065c2860d75ad8c80",
"assets/assets/flags/py.png": "8bc07967e7867e6054e71a9c0458b3fb",
"assets/assets/flags/ru.png": "65796b18d4f006b65544e37afaabe65c",
"assets/assets/flags/kw.png": "196f3b8e171f00d37704afa3da6f8ff7",
"assets/assets/flags/do.png": "44f0b64751781087d7f5ad9dcd779a49",
"assets/assets/flags/gt.png": "21073576294f5a8c34b92d0494e0c362",
"assets/assets/flags/gb.png": "5b4f0cf865124609d7833026811d1709",
"assets/assets/flags/gu.png": "be0e4c3e13d7a5b20b6c7aee969b7c4c",
"assets/assets/flags/je.png": "1e4b2a973fb24f6f828c3aa4aba9f361",
"assets/assets/flags/hm.png": "1733d67c175d6714aeea64054435ba3c",
"assets/assets/flags/sg.png": "6f2bd641d6b3d238cf8ca85044bb9738",
"assets/assets/flags/pk.png": "8a8d442f05266ed81423f65c60800ca8",
"assets/assets/flags/sr.png": "d4f8398b454cebb020c8cb18827d3e75",
"assets/assets/flags/se.png": "0ba7c09ebed51849024b732adaeb62f3",
"assets/assets/flags/jp.png": "1ee111b43976236edc6db31ee96293a2",
"assets/assets/flags/gw.png": "5c3f50364244d458193d34b3ab66abf0",
"assets/assets/flags/eh.png": "c898fe2c591f1f3d07bdef9e8fde4790",
"assets/assets/flags/dz.png": "43d4404d52ac7b6174aa6a9905e232a7",
"assets/assets/flags/ga.png": "7dfd2aaf705232e3a17328bf3134ac97",
"assets/assets/flags/fr.png": "5dadc9749337181c2779da2e1ef7628a",
"assets/assets/flags/dm.png": "2a4b7d6f812cfa7b6ab36878bff36cfe",
"assets/assets/flags/hn.png": "1c05435867c8ab7596eee25a9f34321f",
"assets/assets/flags/sd.png": "a81b553dfd967cd6732829d26dff87ab",
"assets/assets/flags/rw.png": "b48687db2299c948d20c2d0a9ae7305a",
"assets/assets/flags/ph.png": "1b2898f955308289e6ab1bd4ff200bb2",
"assets/assets/flags/ss.png": "8bfa999bbc9342117ed0a29b2f8862b8",
"assets/assets/flags/qa.png": "252fa154132ee231ddc1b0ef189d91cd",
"assets/assets/flags/pe.png": "9d193a09a70ee6f25a8f0ea2fdba6a50",
"assets/assets/flags/pr.png": "753e29fcda9e5deb1d30ef5dedfa8872",
"assets/assets/flags/si.png": "a0ed0010c8aa63b110471fee18df082f",
"assets/assets/flags/ht.png": "83928aa7f042e594e8bf3f0f8a5d1ed4",
"assets/assets/flags/es.png": "b9cb0be55512fbd54f1babc433b2dd66",
"assets/assets/flags/gl.png": "d0776a4ccf2f1f83333ac91e6caf8509",
"assets/assets/flags/gm.png": "f4726e915ec8d4f8959068d6e32947be",
"assets/assets/flags/er.png": "1742d7c62829643bbfbf8ab681ef7769",
"assets/assets/flags/fi.png": "5504a76374ff8ca265fddf6eccc95511",
"assets/assets/flags/ee.png": "4087d4c6806794c7d58720737b55cbb4",
"assets/assets/flags/kn.png": "026661d8dc3d8ca2ffff3d552922d894",
"assets/assets/flags/hu.png": "dc9e5df16419d8f32054bce634126c43",
"assets/assets/flags/iq.png": "019531e8f44da3ed84a8147014e82c6d",
"assets/assets/flags/ky.png": "c74ca976a78461aa10f49322ecde2e3b",
"assets/assets/flags/sh.png": "e4395131c5e775ed17cf454cf048abe0",
"assets/assets/flags/ps.png": "779907734e12eb8b06d85b7d4a79446a",
"assets/assets/flags/pf.png": "5241d49a89c2de7def5bfc914693d996",
"assets/assets/flags/sj.png": "70ef6743140768c62387d77d48e9eb31",
"assets/assets/flags/id.png": "59d060c859f25460b4cb412e49bf3ef8",
"assets/assets/flags/is.png": "87b2d38a2822967230862aab1c965abf",
"assets/assets/flags/eg.png": "b4755cc9dc8185aec54ea9294587c6b1",
"assets/assets/flags/fk.png": "aa7995a50a8071abf41b3058590c4b11",
"assets/assets/flags/fj.png": "e229834b6a4ca085442c62ed19154258",
"assets/assets/flags/gn.png": "1377c666e2a7b604c9f50ed0b5a7631e",
"assets/assets/flags/gy.png": "c89e98cf341dd60d039afffb686b88a7",
"assets/assets/flags/ir.png": "385f12d865443bf0395facf1119b86e8",
"assets/assets/flags/km.png": "9ad2b05156329f228502190e1b203611",
"assets/assets/flags/ie.png": "656aaa5d905c702e107b04729824500d",
"assets/assets/flags/kz.png": "cc14a0466bcbf068b16b349035a04c26",
"assets/assets/flags/ro.png": "dd75c84ffa6038a1326f3afdd45a580b",
"assets/assets/flags/sk.png": "1b1267a7d1831a8e7743935e6395b1af",
"assets/assets/flags/pg.png": "d0f93bdba218cdb9f6f5e7e6914b0ff6",
"assets/assets/flags/pt.png": "2c8b00a62cc7fd4c80dc9e619d5ef24c",
"assets/assets/flags/so.png": "398ec2a0f94ddef89e726c04cd6657f9",
"assets/assets/flags/sx.png": "1af4a2abc03efe9da65f35d656826f9a",
"assets/assets/flags/hr.png": "838b0d77591a2ece45b4a03a0063a1d6",
"assets/assets/flags/ki.png": "1f2637e2afc3f17ad23543e756050109",
"assets/assets/flags/jm.png": "2783edddc73c2f298b9d3f05f9d5d2da",
"assets/assets/flags/ec.png": "e7f83455e173cb3cc7f283fd8b8befba",
"assets/assets/flags/et.png": "1311870415e4354ff644604f8e8130ac",
"assets/assets/flags/fo.png": "a4ba6c5ecf4df514cf7a48d8fd64dbf6",
"assets/assets/flags/kh.png": "575cfc96d5dc3cab4aba2492ea98b1f4",
"assets/assets/flags/sy.png": "9ea5379b4962738c23635997ab2154dc",
"assets/assets/flags/sn.png": "020444b6c85b3a63e2f0fb0523a507b6",
"assets/assets/flags/pw.png": "1d9a37dcd2a7451269ea0ccfb69fc140",
"assets/assets/flags/sl.png": "94c52a13b34268137598f9439838b0a9",
"assets/assets/flags/gb-eng.png": "49c9e0a750450f7a89a28d1fa1c0655f",
"assets/assets/flags/fm.png": "294cc0bb2b7fbc706342b3b62134ffeb",
"assets/assets/flags/gi.png": "38b871c68f0859799cda1c8ca2ff4c5d",
"assets/assets/flags/de.png": "2a00d11931d9e7d6d57e91061e7713cc",
"assets/assets/flags/gh.png": "9f34540a62a0293c2849591643516557",
"assets/assets/flags/jo.png": "0ef075047d879659b1607428fa4af5f3",
"assets/assets/flags/it.png": "d352051a152494eae2ba80b83f39ca19",
"assets/assets/flags/pa.png": "9af0794fcde5f924f6b4f9705cc6e9eb",
"assets/assets/flags/sz.png": "5012b03f44a4d057f1f343669d43566f",
"assets/assets/flags/sm.png": "b4a81c5bd5f436804836d72b9332ba9e",
"assets/assets/flags/tn.png": "7544a6514b347e0d091e9388ba50613c",
"assets/assets/flags/ml.png": "0b2f35370c74197d4992b7b74949e0a8",
"assets/assets/flags/cg.png": "d251b25c9c3f7046693354cfac8f4566",
"assets/assets/flags/ax.png": "d86ef6cfae430a1db97a89ff08c57911",
"assets/assets/flags/ao.png": "b3b7a7e7c9584ec7638b000c57649315",
"assets/assets/flags/bt.png": "d6008f18214d5d6698a2f9ee54eae4e0",
"assets/assets/flags/bb.png": "feb267fe6a04217380a1d5860c805b13",
"assets/assets/flags/cf.png": "4bd49ee7e82b85943359f394c6ea6a81",
"assets/assets/flags/mm.png": "91a46d565aedc443f2b65de3877d1cc2",
"assets/assets/flags/li.png": "c1acf6e985c2f6cfbe3d1f9bc9d7194b",
"assets/assets/flags/na.png": "5f037f79a792fd27d412ae99d12da81e",
"assets/assets/flags/mz.png": "530e414a672ad678523c742cdc0f9863",
"assets/assets/flags/uk.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/flags/to.png": "9c31202c588fc3769437bb893efdc1cc",
"assets/assets/flags/vg.png": "4e34a389d8d4f45e61e3650ec094d916",
"assets/assets/flags/ve.png": "61b559172542e32ad44402ffa89bb777",
"assets/assets/flags/tz.png": "cb812676f613e65c63544574a94e30d3",
"assets/assets/flags/tm.png": "a713ac1855a510c0dd71830a710d00b4",
"assets/assets/flags/mx.png": "c030c0e75ac19cabb7c2a713babc0011",
"assets/assets/flags/nc.png": "dacb0c1ca6044b429331901f6f38cfe1",
"assets/assets/flags/mo.png": "9e39615cf9f3855ee8f5cef9e7f13fdc",
"assets/assets/flags/lk.png": "e6d5bb65c7b406d938f631e77a76ce8a",
"assets/assets/flags/cd.png": "0e32063de8c2ec31607caab2c0c4b749",
"assets/assets/flags/al.png": "51494479d3ac537e9167b8f30c085dbc",
"assets/assets/flags/bw.png": "ad7637ce99b9200f1e7304705d9ce256",
"assets/assets/flags/cr.png": "c0e74cf8df6d0367e9899f1a25f9d847",
"assets/assets/flags/bv.png": "70ef6743140768c62387d77d48e9eb31",
"assets/assets/flags/am.png": "c6c9c62b9c9bbeda4a3e6266361c0d9d",
"assets/assets/flags/az.png": "db4510556c639af0a90ffee492824378",
"assets/assets/flags/ba.png": "c0373079f2f6901c51cb836d8b803cb3",
"assets/assets/flags/mn.png": "70e96d4aaf2623fea73ae586c773ce22",
"assets/assets/flags/nu.png": "76b602471c8635932e7af2d232277e6d",
"assets/assets/flags/my.png": "a3556d21227c2d3ed5673a95e790804d",
"assets/assets/flags/tl.png": "df72fb4f77865891eb897dffed3439a7",
"assets/assets/flags/ws.png": "6f1f4b4f622a3003ff6f1cfd2be21306",
"assets/assets/flags/th.png": "a7fd0eb6d4980913f9bc24e25911829e",
"assets/assets/flags/xk.png": "db7c08497455dc39f41d4fa70730b855",
"assets/assets/flags/nf.png": "ad1f7b42cc489ea9f576b29ff3dba0dd",
"assets/assets/flags/ly.png": "60a405cdeea9ef8b21d790b7ab063b84",
"assets/assets/flags/ai.png": "549aff5537cda7208e316fc68d7c79a1",
"assets/assets/flags/br.png": "dcdf195de5b3805ddc5c51fc3bcb42d4",
"assets/assets/flags/cv.png": "2ac28eaf3b19e9f42fc595424d4dc4f4",
"assets/assets/flags/be.png": "93470b65ae8c9052039ff662526fc0f1",
"assets/assets/flags/ca.png": "ed8c79fc8bba718d6f84d76d4df0640e",
"assets/assets/flags/bd.png": "da593be552126ecfbfdd31a1ccd63192",
"assets/assets/flags/cw.png": "3a93e11a2f538d34f850d4de72822fc7",
"assets/assets/flags/bs.png": "bdb418ee36c93a6966af12634c3ee669",
"assets/assets/flags/ng.png": "606e949823672adf2f49cd5f07fa0fce",
"assets/assets/flags/mk.png": "60013c9f5ef19b7a7416c18768cab957",
"assets/assets/flags/np.png": "661f6fb997ae92e227548562b58900af",
"assets/assets/flags/va.png": "02abf3bb9e11d28d936ad35b9646c417",
"assets/assets/flags/uz.png": "5f98162220167a5e7ea1fc4cf0c58ed6",
"assets/assets/flags/um.png": "1aec0fc461c3f62479ff81df7e65fa38",
"assets/assets/flags/tk.png": "88b072bd59cd76f5064247a9172f4cb3",
"assets/assets/flags/vc.png": "e456430a1aec11d4a296202b03814f6b",
"assets/assets/flags/zw.png": "0d0cd9e91136d283dff86ba0b4c36cba",
"assets/assets/flags/nr.png": "e65209307cfba669014d29ef6d199d16",
"assets/assets/flags/ne.png": "ce5c43ae7e23adeca5c8ea7517af88f6",
"assets/assets/flags/cu.png": "3d39ff2d4947d967a96a4d1a14b33c81",
"assets/assets/flags/bq.png": "8f5d942e0ef6605728e606387ea847f4",
"assets/assets/flags/bf.png": "9668e9cb62e3aa357b945015089f355a",
"assets/assets/flags/bg.png": "2e51109a3779991eaeb57beb47670a8c",
"assets/assets/flags/cc.png": "3820f63e2450003484b72f4cef82de81",
"assets/assets/flags/gb-wls.png": "c0740f74bcebea721de07f36e734c538",
"assets/assets/flags/mh.png": "6d5dd7579d124af7d4d3f57faa4d0871",
"assets/assets/flags/za.png": "d2e9999193cd50927f38d133deb96042",
"assets/assets/flags/uy.png": "aa786ecaa817917a3e704bad07aada17",
"assets/assets/flags/wf.png": "082153dbf3a58e68c99b29deac47c7c8",
"assets/assets/flags/vu.png": "d6a906483b10b0e32ecf57e53dca6e54",
"assets/assets/flags/tj.png": "5a56e1d4ea5beea2b2ef317ab1998aa7",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
